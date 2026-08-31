#!/usr/bin/env bash
#
# Verify the generated LLM documentation: content invariants, front-matter,
# relative links, index coverage, and local distribution inside ods-react.
#
#   bash packages/docs/scripts/verify-llms.sh          # fast checks
#   bash packages/docs/scripts/verify-llms.sh --full   # + from-scratch regen & offline package check
#
# Exits non-zero if any check fails (CI-friendly). The extractor is patched to
# be deterministic (frozen clock, seeded randomness, settled DOM, normalized
# auto-ids), so --full additionally asserts that a from-scratch regeneration
# leaves assets/llms byte-identical to what is committed.

set -uo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && git rev-parse --show-toplevel)"
ASSETS="$ROOT/packages/docs/assets/llms"
DIST_REACT="$ROOT/packages/ods-react/dist/llms"
VERSION="$(node -e "console.log(require('$ROOT/lerna.json').version)")"
FULL="${1:-}"

GENERATED="llms.txt llms-full.txt ods-documentation-components.txt ods-documentation-generic.txt ods-components-index.txt ods-generic-index.txt llms-index.json"
NAV_FILES="llms.txt ods-components-index.txt ods-generic-index.txt"

pass=0; fail=0
ok()      { printf '  \033[32m✓\033[0m %s\n' "$1"; pass=$((pass + 1)); }
ko()      { printf '  \033[31m✗\033[0m %s\n' "$1"; fail=$((fail + 1)); }
section() { printf '\n\033[1m%s\033[0m\n' "$1"; }
is_generated() { case " $GENERATED " in *" $1 "*) return 0 ;; *) return 1 ;; esac; }

individual_files() {
  for f in "$ASSETS"/*.txt; do
    b="$(basename "$f")"
    is_generated "$b" || printf '%s\n' "$b"
  done
}

# --- Optional: regenerate everything from scratch -------------------------
if [ "$FULL" = "--full" ]; then
  section "From-scratch regeneration (Storybook)"
  rm -rf "$ROOT/packages/docs/dist"
  if pnpm -C "$ROOT/packages/docs" build >/tmp/verify-docs.log 2>&1; then
    ok "docs build (native llms emission) succeeded"
    # status --porcelain catches modified AND untracked files, which
    # `git diff --quiet` alone would miss (e.g. a stray extra artifact).
    if [ -z "$(git -C "$ROOT" status --porcelain -- packages/docs/assets/llms)" ]; then
      ok "deterministic & reproducible regeneration (assets/llms unchanged vs committed)"
    else
      ko "assets/llms differs after regeneration (broken determinism, stale commit or untracked files)"
    fi
  else
    ko "docs build failed (see /tmp/verify-docs.log)"
  fi
fi

# --- 1. Content invariants -------------------------------------------------
section "Content (assets/llms)"

[ "$(grep -c '^# OVHcloud Design System - Complete Documentation' "$ASSETS/llms-full.txt")" = "1" ] \
  && ok "llms-full.txt: complete-doc title present exactly once" \
  || ko "llms-full.txt: complete-doc title missing or duplicated (re-ingestion?)"

grep -q 'Complete Documentation' "$ASSETS/ods-documentation-generic.txt" \
  && ko "ods-documentation-generic.txt contains 'Complete Documentation' (re-ingestion)" \
  || ok "ods-documentation-generic.txt: no re-ingestion"

full_lines="$(wc -l < "$ASSETS/llms-full.txt" | tr -d ' ')"
[ "$full_lines" -lt 200000 ] \
  && ok "llms-full.txt size is sane ($full_lines lines)" \
  || ko "llms-full.txt abnormally large ($full_lines lines) — likely bloat"

# Front-matter complete on every individual file
fm_bad=0
while IFS= read -r b; do
  f="$ASSETS/$b"
  [ "$(sed -n '1p' "$f")" = "---" ] || { fm_bad=$((fm_bad + 1)); continue; }
  head="$(sed -n '1,12p' "$f")"
  for k in title slug category type version tokens source; do
    printf '%s\n' "$head" | grep -q "^$k:" || { fm_bad=$((fm_bad + 1)); break; }
  done
done < <(individual_files)
[ "$fm_bad" = "0" ] \
  && ok "complete front-matter on every individual file" \
  || ko "$fm_bad file(s) with missing/incomplete front-matter"

# Version consistent everywhere
if grep -h '^version: ' "$ASSETS"/*.txt | sort -u | grep -qv "^version: $VERSION$"; then
  ko "inconsistent versions (expected $VERSION)"
else
  ok "version $VERSION consistent everywhere"
fi

# Navigation files use relative links, never absolute web URLs
nav_bad=0
for b in $NAV_FILES; do
  grep -qE '\]\(https?://' "$ASSETS/$b" && nav_bad=$((nav_bad + 1))
done
[ "$nav_bad" = "0" ] \
  && ok "relative navigation links (no http(s) in llms.txt / indexes)" \
  || ko "$nav_bad navigation file(s) with absolute web links"

# Front-matter source stays absolute & versioned (canonical citation), on every file
src_bad=0
while IFS= read -r b; do
  grep -qE "^source: https://.*/v$VERSION/llms/" "$ASSETS/$b" || src_bad=$((src_bad + 1))
done < <(individual_files)
[ "$src_bad" = "0" ] \
  && ok "front-matter source absolute and versioned on every individual file" \
  || ko "$src_bad file(s) with a non-absolute/unversioned front-matter source"

# Every relative link in the navigation files resolves to a sibling file
link_bad=0
for b in $NAV_FILES; do
  while IFS= read -r target; do
    [ -f "$ASSETS/$target" ] || link_bad=$((link_bad + 1))
  done < <(grep -oE '\]\(\./[^)]+\)' "$ASSETS/$b" | sed 's/](\.\///; s/)$//')
done
[ "$link_bad" = "0" ] \
  && ok "navigation links all resolve to existing sibling files" \
  || ko "$link_bad dead relative link(s) in navigation files"

# --- 2. Guide coverage -------------------------------------------------------
# Every non-excluded guide MDX must have its generated artifact, and no
# stale guide metadata may survive its MDX file. The inventory (exclusions
# + slug map) is guides.json, the same single source the generator and the
# app import, so all consumers stay in sync by construction.
section "Guide coverage (src/content/guides)"

GUIDES_DIR="$ROOT/packages/docs/src/content/guides"
GUIDES_JSON="$GUIDES_DIR/guides.json"
EXCLUDED_GUIDES="$(node -p "require('$GUIDES_JSON').exclusions.join(' ')" 2>/dev/null)"
GUIDE_SLUGS="$(node -p "require('$GUIDES_JSON').guides.map((g) => g.mdx + ' ' + g.slug).join('\n')" 2>/dev/null)"

[ -n "$EXCLUDED_GUIDES" ] && [ -n "$GUIDE_SLUGS" ] \
  && ok "guide inventory readable from guides.json" \
  || ko "could not read exclusions/guides from $GUIDES_JSON"

guide_missing=0
for f in "$GUIDES_DIR"/*.mdx; do
  name="$(basename "$f" .mdx)"
  case " $EXCLUDED_GUIDES " in *" $name "*) continue ;; esac
  slug="$(printf '%s\n' "$GUIDE_SLUGS" | awk -v n="$name" '$1 == n { print $2 }')"
  { [ -n "$slug" ] && [ -f "$ASSETS/$slug.txt" ]; } || guide_missing=$((guide_missing + 1))
done
[ "$guide_missing" = "0" ] \
  && ok "every non-excluded guide MDX has its generated artifact" \
  || ko "$guide_missing guide MDX file(s) without a generated artifact"

guide_stale=0
while read -r name slug; do
  [ -n "$name" ] || continue
  [ -f "$GUIDES_DIR/$name.mdx" ] || guide_stale=$((guide_stale + 1))
done <<EOF
$GUIDE_SLUGS
EOF
[ "$guide_stale" = "0" ] \
  && ok "no stale guide metadata (every entry still has its MDX file)" \
  || ko "$guide_stale guide metadata entrie(s) whose MDX file is gone"

# --- 3. index.json validity & coverage ------------------------------------
section "Machine-readable index (llms-index.json)"
if node -e '
  const fs = require("fs"), path = require("path");
  const dir = process.argv[1], version = process.argv[2];
  const j = JSON.parse(fs.readFileSync(path.join(dir, "llms-index.json"), "utf8"));
  let err = 0;
  if (j.version !== version) { console.error(`version ${j.version} != ${version}`); err++; }
  const refs = new Set([
    ...j.components.flatMap((c) => Object.values(c.pages).map((p) => p.url)),
    ...j.generic.map((g) => g.url),
  ].map((u) => u.replace(/^\.\//, "")));
  for (const r of refs) if (!fs.existsSync(path.join(dir, r))) { console.error(`url -> missing file: ${r}`); err++; }
  const generated = new Set("llms.txt llms-full.txt ods-documentation-components.txt ods-documentation-generic.txt ods-components-index.txt ods-generic-index.txt".split(" "));
  const served = fs.readdirSync(dir).filter((f) => f.endsWith(".txt") && !generated.has(f));
  for (const s of served) if (!refs.has(s)) { console.error(`served file not referenced: ${s}`); err++; }
  console.log(`${j.components.length} components, ${j.generic.length} generic, ${refs.size} URLs`);
  process.exit(err ? 1 : 0);
' "$ASSETS" "$VERSION"; then
  ok "index.json valid, correct version, full coverage (no orphans/dead links)"
else
  ko "index.json invalid or incomplete coverage"
fi

# --- 4. Local distribution in ods-react -----------------------------------
section "Local distribution (ods-react)"
if pnpm -C "$ROOT/packages/ods-react" copy:llms >/tmp/verify-copy.log 2>&1; then
  ok "copy:llms ran"
else
  ko "copy:llms failed (see /tmp/verify-copy.log)"
fi

if [ -d "$DIST_REACT" ]; then
  a_count="$(ls "$ASSETS" | wc -l | tr -d ' ')"
  d_count="$(ls "$DIST_REACT" | wc -l | tr -d ' ')"
  [ "$a_count" = "$d_count" ] \
    && ok "ods-react/dist/llms complete ($d_count files, = assets)" \
    || ko "ods-react/dist/llms incomplete ($d_count vs $a_count)"
  # a relative link from the local copy resolves to a sibling file
  ( cd "$DIST_REACT" && [ -f ./llms-full.txt ] && [ -f ./react-components-button.txt ] ) \
    && ok "relative links resolve locally (sibling files present)" \
    || ko "missing sibling files in ods-react/dist/llms"
else
  ko "ods-react/dist/llms missing after copy:llms"
fi

# --- 5. Optional: published package actually ships the docs ----------------
if [ "$FULL" = "--full" ]; then
  section "Published package check (offline)"
  if pnpm -C "$ROOT/packages/ods-react" build:prod >/tmp/verify-build.log 2>&1; then
    ok "ods-react build:prod succeeded"
    TGZ="$(cd "$ROOT/packages/ods-react" && npm pack 2>/dev/null | tail -1)"
    TGZ_PATH="$ROOT/packages/ods-react/$TGZ"
    shipped="$(tar -tzf "$TGZ_PATH" | grep -c 'package/dist/llms/.*\.txt' || true)"
    [ "$shipped" -gt 0 ] \
      && ok "published tarball ships $shipped dist/llms files" \
      || ko "published tarball contains no dist/llms files"
    # read a file straight from the tarball — fully offline
    tar -xzOf "$TGZ_PATH" package/dist/llms/llms.txt 2>/dev/null | grep -q 'Documentation Sets' \
      && ok "llms.txt readable straight from the tarball (offline)" \
      || ko "llms.txt unreadable from the tarball"
    rm -f "$TGZ_PATH"
  else
    ko "ods-react build:prod failed (see /tmp/verify-build.log)"
  fi
fi

# --- Summary ---------------------------------------------------------------
printf '\n\033[1mResult: %d OK, %d failure(s).\033[0m\n' "$pass" "$fail"
[ "$fail" = "0" ]
