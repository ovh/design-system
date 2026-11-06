#!/usr/bin/env bash
# Corpus acceptance of ods-migrate: runs the CLI twice on a copy of a real corpus and measures the
# result on the files (TESTING.md § 4).
#
# Usage: scripts/acceptance/acceptance.sh (--corpus <dir> | --repo <git dir> [--ref <ref>] [--path <dir in the repo>])
#          [--pkg <ods-migrate package dir>] [--built-on-ods <module>]... [--config <file> | --all-v19]
#          [--work <dir>] [--label <name>] [--keep]
#
# 1. copies the corpus twice into a fresh dir under <work> (the original is never written):
#    base/ stays pristine, migrated/ is migrated. With --repo, the corpus is `git archive <ref> <path>`
#    (default ref HEAD, default path `packages`): never the working tree of a repo you migrate in;
# 2. runs `<pkg>/src/cli.mjs . --write --json run1.json [--built-on-ods …] [--config …]` in migrated/
#    (the modules of the corpus that stand for ODS are found by the CLI itself; --built-on-ods is only
#    for a package whose sources are not in the corpus)
#    (--all-v19: a config generated from configurator/choices.json with every choice on `v19`; the
#    config is copied into the work dir, so its opt-out CSS is written there);
# 3. measures on the files (acceptance.mjs): files changed, markers added, new parse errors, ESLint
#    --fix on base/ vs the codemod output without markers, lint reports on the output vs markers,
#    the same for stylelint;
# 4. runs the CLI a second time and counts the files it changes (must be 0; the generated
#    ods-migrate.modules.json is not counted).
# Prints a summary, writes summary.json in the work dir and copies it to
# <work>/acceptance-<label>.last.json. The run dir is deleted unless --keep.
#
# Exit 0 when every gate holds, 1 when one fails (listed under "gates"), 2 on a usage error.
# Gates: CLI exit 0 on both runs, 0 internal/parse errors in the CLI report, 0 new parse errors,
# 0 files changed by the second run, 0 ESLint/stylelint --fix divergences (an ESLint divergence made
# only of the attributes a v19-look config adds to elements without the prop is counted apart:
# ESLint never adds them), 0 new fatal ESLint
# errors, 0 fixable reports left after the codemod, 0 reports without a marker, 0 markers without a
# report.
set -uo pipefail

HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PKG="$(cd "$HERE/../.." && pwd)"
REPO=""
REF="HEAD"
SUBPATH="packages"
CORPUS=""
KEEP=0
LABEL="run"
WORK_ROOT="${TMPDIR:-/tmp}"
WORK_ROOT="${WORK_ROOT%/}/ods-migrate-acceptance"
CONFIG=()
CONFIG_SOURCE=""
ALL_V19=0
TREAT=()

usage() {
  echo "usage: acceptance.sh (--corpus <dir> | --repo <git dir> [--ref <ref>] [--path <dir>]) [--pkg <dir>] [--built-on-ods <module>]... [--config <file> | --all-v19] [--work <dir>] [--label <name>] [--keep]" >&2
  exit 2
}

while [[ $# -gt 0 ]]; do
  case "$1" in
    --corpus) CORPUS="$(cd "$2" && pwd)" || exit 2; shift 2 ;;
    --repo) REPO="$(cd "$2" && pwd)" || exit 2; shift 2 ;;
    --ref) REF="$2"; shift 2 ;;
    --path) SUBPATH="$2"; shift 2 ;;
    --pkg) PKG="$(cd "$2" && pwd)" || exit 2; shift 2 ;;
    --built-on-ods) TREAT+=("$2"); shift 2 ;;
    --treat-as-ods|--also) echo "$1 is now --built-on-ods" >&2; TREAT+=("$2"); shift 2 ;;
    --all-v19) ALL_V19=1; shift ;;
    --config) CONFIG=(--config "$(cd "$(dirname "$2")" && pwd)/$(basename "$2")") || exit 2; shift 2 ;;
    --work) WORK_ROOT="$2"; shift 2 ;;
    --label) LABEL="$2"; shift 2 ;;
    --keep) KEEP=1; shift ;;
    -h|--help) usage ;;
    *) echo "unknown option: $1" >&2; usage ;;
  esac
done
[[ -n "$CORPUS" || -n "$REPO" ]] || { echo "give --corpus <dir> or --repo <git dir>" >&2; usage; }
[[ -f "$PKG/src/cli.mjs" ]] || { echo "not an ods-migrate package: $PKG" >&2; exit 2; }

mkdir -p "$WORK_ROOT" || exit 2
WORK_ROOT="$(cd "$WORK_ROOT" && pwd)"
WORK="$(mktemp -d "$WORK_ROOT/acceptance-$LABEL.XXXXXX")"
cleanup() { [[ $KEEP -eq 1 ]] || rm -rf "$WORK"; }
trap cleanup EXIT

# The config is copied into the work dir: the opt-out CSS it may ask for (`optOutCss`, resolved
# against the config's folder) is written there, never next to the original file.
if [[ $ALL_V19 -eq 1 ]]; then
  [[ ${#CONFIG[@]} -eq 0 ]] || { echo "--all-v19 and --config exclude each other" >&2; exit 2; }
  mkdir -p "$WORK/config"
  node -e 'const { choices } = require(process.argv[1]); console.log(JSON.stringify({ version: 1, look: Object.fromEntries(choices.map((choice) => [choice.id, "v19"])), optOutCss: "ods-v19-look.css" }, null, 2))' \
    "$PKG/configurator/choices.json" >"$WORK/config/all-v19.json" || exit 2
  CONFIG=(--config "$WORK/config/all-v19.json")
fi
if [[ ${#CONFIG[@]} -gt 0 ]]; then
  mkdir -p "$WORK/config"
  cp "${CONFIG[1]}" "$WORK/config/ods-migrate.config.json" || exit 2
  CONFIG_SOURCE="${CONFIG[1]}"
  CONFIG=(--config "$WORK/config/ods-migrate.config.json")
fi

if [[ -n "$CORPUS" ]]; then
  cp -R "$CORPUS" "$WORK/base"
  cp -R "$CORPUS" "$WORK/migrated"
else
  mkdir -p "$WORK/base" "$WORK/migrated"
  git -C "$REPO" archive "$REF" "$SUBPATH" | tar -x -C "$WORK/base" || exit 2
  git -C "$REPO" archive "$REF" "$SUBPATH" | tar -x -C "$WORK/migrated" || exit 2
  CORPUS="$REPO@$(git -C "$REPO" rev-parse --short "$REF"):$SUBPATH"
fi

TREAT_ARGS=()
for module in ${TREAT[@]+"${TREAT[@]}"}; do TREAT_ARGS+=(--built-on-ods "$module"); done
TREAT_LIST="$(IFS=,; echo "${TREAT[*]+"${TREAT[*]}"}")"

run_cli() { # $1 = run name. Runs from migrated/: a config is only read when --config names it.
  local start end code
  start=$(date +%s)
  (cd "$WORK/migrated" && node "$PKG/src/cli.mjs" . --write --json "$WORK/$1.json" ${TREAT_ARGS[@]+"${TREAT_ARGS[@]}"} ${CONFIG[@]+"${CONFIG[@]}"} >"$WORK/$1.txt" 2>"$WORK/$1.err")
  code=$?
  end=$(date +%s)
  echo "{\"exit\": $code, \"seconds\": $((end - start))}" >"$WORK/$1.meta.json"
}

run_cli run1
node "$HERE/acceptance.mjs" measure "$PKG" "$WORK/base" "$WORK/migrated" "$WORK/run1.json" "$WORK/measure.json" "$TREAT_LIST" "${CONFIG[1]-}" || echo "measure failed" >&2
node "$HERE/acceptance.mjs" hash "$WORK/migrated" "$WORK/hash1.json"
run_cli run2
node "$HERE/acceptance.mjs" rerun "$WORK/hash1.json" "$WORK/migrated" "$WORK/run2.json" "$WORK/rerun.json"

KEEP=$KEEP node - "$WORK" "$PKG" "$CORPUS" "$TREAT_LIST" "${CONFIG_SOURCE-}" <<'EOF'
const { readFileSync, writeFileSync, existsSync } = require('node:fs');
const [work, pkg, corpus, treat, config] = process.argv.slice(2);
const read = (name) => (existsSync(`${work}/${name}`) ? JSON.parse(readFileSync(`${work}/${name}`, 'utf8')) : null);
const m = read('measure.json') ?? {};
const r = read('rerun.json') ?? {};
const run1 = read('run1.meta.json');
const run2 = read('run2.meta.json');
const tail = (name) => readFileSync(`${work}/${name}`, 'utf8').trim().split('\n').slice(-4).join('\n');
const summary = {
  package: pkg,
  corpus,
  treatAsOds: treat ? treat.split(',') : [],
  odsModules: (read('run1.json')?.odsModules ?? []).filter((module) => module.importers && (module.reexports || module.wrappers.length)).length,
  config: config || null,
  date: new Date().toISOString(),
  run1: { ...run1, ...m.cli, filesChanged: m.filesChanged, changedByKind: m.changedByKind, markersAdded: m.markersAdded, newParseErrors: m.newParseErrors },
  run2: { ...run2, ...r.cli, filesChanged: r.filesChanged, files: r.files },
  eslint: m.eslint && { ...m.eslint, fixDivergences: m.eslint.fixDivergences.length, fixDivergenceFiles: m.eslint.fixDivergences.slice(0, 40), fixDivergencesWhenAbsent: m.eslint.fixDivergencesWhenAbsent.length, fixDivergencesWhenAbsentFiles: m.eslint.fixDivergencesWhenAbsent.slice(0, 40) },
  stylelint: m.stylelint && { ...m.stylelint, fixDivergences: m.stylelint.fixDivergences.length, fixDivergenceFiles: m.stylelint.fixDivergences.slice(0, 40) },
};
const e = summary.eslint ?? {};
const s = summary.stylelint ?? {};
const gates = [
  ['run 1 exit 0', run1?.exit === 0],
  ['run 2 exit 0', run2?.exit === 0],
  ['0 internal/parse errors in the CLI report', m.cli?.errors?.length === 0],
  ['0 new parse errors in the output', m.newParseErrors?.length === 0],
  ['0 files changed by the second run', r.filesChanged === 0],
  ['0 ESLint --fix divergences (other than the v19-look attributes added under a config)', e.fixDivergences === 0],
  ['0 new fatal ESLint errors', e.fatalIntroduced?.length === 0],
  ['0 fixable ESLint reports after the codemod', e.fixableAfterCodemod === 0],
  ['0 ESLint reports without a marker', e.reportsWithoutMarker === 0],
  ['0 markers without an ESLint report', e.markersWithoutReport === 0],
  ['0 stylelint --fix divergences', s.fixDivergences === 0],
  ['0 stylelint files still fixable after the codemod', s.fixableAfterCodemod === 0],
  ['0 stylelint reports without a marker', s.reportsWithoutMarker === 0],
  ['0 markers without a stylelint report', s.markersWithoutReport === 0],
].map(([gate, ok]) => ({ gate, ok: Boolean(ok) }));
summary.gates = gates;
summary.pass = gates.every((gate) => gate.ok);
writeFileSync(`${work}/summary.json`, JSON.stringify(summary, null, 2));
console.log(`ods-migrate acceptance — ${pkg}
corpus ${corpus}${summary.treatAsOds.length ? `, --built-on-ods ${summary.treatAsOds.join(' ')}` : ''}${config ? `, --config ${config}` : ''}; ${summary.odsModules} modules of the corpus stand for ODS

run 1   exit ${run1?.exit}, ${run1?.seconds}s: ${m.filesChanged} files changed (${JSON.stringify(m.changedByKind)}), ${m.markersAdded} markers added
        CLI report: ${m.cli?.changes} changes, ${m.cli?.todos} marker items, ${m.cli?.notes} points to check, ${m.cli?.typed} values for the type check, ${m.cli?.errors?.length ?? '?'} internal/parse errors
        new parse errors in the output: ${m.newParseErrors?.length}
run 2   exit ${run2?.exit}, ${run2?.seconds}s: ${r.filesChanged} files changed (must be 0), CLI report ${r.cli?.changes} changes, ${r.cli?.todos} marker items
eslint  ${e.files} files linted: --fix ≠ codemod on ${e.fixDivergences} (+ ${e.fixDivergencesWhenAbsent} only by the v19-look attributes of the config); after the codemod ${e.reports} reports, ${e.fixableAfterCodemod} still fixable,
        ${e.markers} markers / ${e.markersWithoutReport} without a report / ${e.reportsWithoutMarker} reports without a marker; ${e.fatalIntroduced?.length} new fatal parse errors
stylelint ${s.files} files linted: --fix ≠ codemod on ${s.fixDivergences}; after the codemod ${s.reports} reports, ${s.fixableAfterCodemod} files still fixable,
        ${s.markers} markers / ${s.markersWithoutReport} without a report / ${s.reportsWithoutMarker} reports without a marker

gates   ${summary.pass ? 'PASS' : 'FAIL: ' + gates.filter((gate) => !gate.ok).map((gate) => gate.gate).join('; ')}

CLI run 1 stdout (tail):
${tail('run1.txt')}
details: ${work}/summary.json${process.env.KEEP === '1' ? '' : ' (deleted at exit: --keep keeps it)'}`);
process.exitCode = summary.pass ? 0 : 1;
EOF
STATUS=$?
cp "$WORK/summary.json" "$WORK_ROOT/acceptance-$LABEL.last.json" 2>/dev/null && echo "summary copied to $WORK_ROOT/acceptance-$LABEL.last.json"
exit $STATUS
