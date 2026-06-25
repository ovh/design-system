#!/usr/bin/env bash
#
# Verify the generated LLM documentation: content invariants, front-matter,
# relative links, index coverage, and local distribution inside ods-react.
#
#   bash packages/storybook/scripts/verify-llms.sh          # fast checks
#   bash packages/storybook/scripts/verify-llms.sh --full   # + from-scratch regen & offline package check
#
# Exits non-zero if any check fails (CI-friendly). The extractor is patched to
# be deterministic (frozen clock, seeded randomness, settled DOM, normalized
# auto-ids), so --full additionally asserts that a from-scratch regeneration
# leaves assets/llms byte-identical to what is committed.

set -uo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && git rev-parse --show-toplevel)"
ASSETS="$ROOT/packages/storybook/assets/llms"
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
  section "Régénération from-scratch (Storybook)"
  rm -rf "$ROOT/packages/storybook/dist"
  if pnpm -C "$ROOT/packages/storybook" build:storybook >/tmp/verify-sb.log 2>&1 \
     && pnpm -C "$ROOT/packages/storybook" extract:llms >/tmp/verify-extract.log 2>&1; then
    ok "build:storybook + extract:llms réussis"
    if git -C "$ROOT" diff --quiet -- packages/storybook/assets/llms; then
      ok "régénération déterministe & reproductible (assets/llms inchangé vs commité)"
    else
      ko "assets/llms diffère après régénération (déterminisme rompu ou commit obsolète)"
    fi
  else
    ko "build:storybook/extract:llms a échoué (voir /tmp/verify-*.log)"
  fi
fi

# --- 1. Content invariants -------------------------------------------------
section "Contenu (assets/llms)"

[ "$(grep -c '^# OVHcloud Design System - Complete Documentation' "$ASSETS/llms-full.txt")" = "1" ] \
  && ok "llms-full.txt: titre complet présent 1×" \
  || ko "llms-full.txt: titre complet absent ou dupliqué (ré-ingestion ?)"

grep -q 'Complete Documentation' "$ASSETS/ods-documentation-generic.txt" \
  && ko "ods-documentation-generic.txt contient 'Complete Documentation' (ré-ingestion)" \
  || ok "ods-documentation-generic.txt: aucune ré-ingestion"

full_lines="$(wc -l < "$ASSETS/llms-full.txt" | tr -d ' ')"
[ "$full_lines" -lt 200000 ] \
  && ok "llms-full.txt taille saine ($full_lines lignes)" \
  || ko "llms-full.txt anormalement gros ($full_lines lignes) — probable bloat"

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
  && ok "front-matter complet sur tous les fichiers individuels" \
  || ko "$fm_bad fichier(s) avec front-matter manquant/incomplet"

# Version consistent everywhere
if grep -h '^version: ' "$ASSETS"/*.txt | sort -u | grep -qv "^version: $VERSION$"; then
  ko "versions hétérogènes (attendu $VERSION)"
else
  ok "version $VERSION cohérente partout"
fi

# Navigation files use relative links, never absolute web URLs
nav_bad=0
for b in $NAV_FILES; do
  grep -qE '\]\(https?://' "$ASSETS/$b" && nav_bad=$((nav_bad + 1))
done
[ "$nav_bad" = "0" ] \
  && ok "liens de navigation relatifs (aucun http(s) dans llms.txt / index)" \
  || ko "$nav_bad fichier(s) de navigation avec lien web absolu"

# Front-matter source stays absolute & versioned (canonical citation)
sample="$(individual_files | head -1)"
grep -qE "^source: https://.*/v$VERSION/llms/" "$ASSETS/$sample" \
  && ok "front-matter source absolu et versionné (ex. $sample)" \
  || ko "front-matter source non absolu/versionné dans $sample"

# --- 2. index.json validity & coverage ------------------------------------
section "Index machine-lisible (llms-index.json)"
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
  for (const r of refs) if (!fs.existsSync(path.join(dir, r))) { console.error(`url -> fichier manquant: ${r}`); err++; }
  const generated = new Set("llms.txt llms-full.txt ods-documentation-components.txt ods-documentation-generic.txt ods-components-index.txt ods-generic-index.txt".split(" "));
  const served = fs.readdirSync(dir).filter((f) => f.endsWith(".txt") && !generated.has(f));
  for (const s of served) if (!refs.has(s)) { console.error(`fichier servi non référencé: ${s}`); err++; }
  console.log(`${j.components.length} composants, ${j.generic.length} generic, ${refs.size} URLs`);
  process.exit(err ? 1 : 0);
' "$ASSETS" "$VERSION"; then
  ok "index.json valide, version correcte, couverture totale (aucun orphelin/lien mort)"
else
  ko "index.json invalide ou couverture incomplète"
fi

# --- 3. Local distribution in ods-react -----------------------------------
section "Distribution locale (ods-react)"
if pnpm -C "$ROOT/packages/ods-react" copy:llms >/tmp/verify-copy.log 2>&1; then
  ok "copy:llms exécuté"
else
  ko "copy:llms a échoué (voir /tmp/verify-copy.log)"
fi

if [ -d "$DIST_REACT" ]; then
  a_count="$(ls "$ASSETS" | wc -l | tr -d ' ')"
  d_count="$(ls "$DIST_REACT" | wc -l | tr -d ' ')"
  [ "$a_count" = "$d_count" ] \
    && ok "ods-react/dist/llms complet ($d_count fichiers, = assets)" \
    || ko "ods-react/dist/llms incomplet ($d_count vs $a_count)"
  # a relative link from the local copy resolves to a sibling file
  ( cd "$DIST_REACT" && [ -f ./llms-full.txt ] && [ -f ./react-components-button.txt ] ) \
    && ok "liens relatifs résolvent en local (fichiers voisins présents)" \
    || ko "fichiers voisins manquants dans ods-react/dist/llms"
else
  ko "ods-react/dist/llms absent après copy:llms"
fi

# --- 4. Optional: published package actually ships the docs ----------------
if [ "$FULL" = "--full" ]; then
  section "Empaquetage publié (offline)"
  if pnpm -C "$ROOT/packages/ods-react" build:prod >/tmp/verify-build.log 2>&1; then
    ok "ods-react build:prod réussi"
    TGZ="$(cd "$ROOT/packages/ods-react" && npm pack 2>/dev/null | tail -1)"
    TGZ_PATH="$ROOT/packages/ods-react/$TGZ"
    shipped="$(tar -tzf "$TGZ_PATH" | grep -c 'package/dist/llms/.*\.txt' || true)"
    [ "$shipped" -gt 0 ] \
      && ok "le tarball publié embarque $shipped fichiers dist/llms" \
      || ko "le tarball publié ne contient aucun fichier dist/llms"
    # read a file straight from the tarball — fully offline
    tar -xzOf "$TGZ_PATH" package/dist/llms/llms.txt 2>/dev/null | grep -q 'Documentation Sets' \
      && ok "llms.txt lisible depuis le tarball (sans réseau)" \
      || ko "llms.txt illisible depuis le tarball"
    rm -f "$TGZ_PATH"
  else
    ko "ods-react build:prod a échoué (voir /tmp/verify-build.log)"
  fi
fi

# --- Summary ---------------------------------------------------------------
printf '\n\033[1mRésultat : %d OK, %d échec(s).\033[0m\n' "$pass" "$fail"
[ "$fail" = "0" ]
