#!/usr/bin/env bash
#
# Integration non-regression: builds every example app (packages/examples/*)
# serially (one build at a time → bounded RAM) and reports a pass/fail summary.
#
# The apps form a bundler × toolchain-generation matrix, all on React 19:
#   Vite (vite-app, accessibility-test, react-router-app)
#   Webpack: 5.108/babel 8/TS 6 (webpack-app) · 5.90/babel 7/TS 5.3 (webpack-app-legacy)
#   Next.js SSR: 16 (nextjs-app) · 15 (nextjs-app-legacy)
# The -legacy apps are deliberately frozen on an older integrator toolchain; do
# not bump their dependencies with the tree.
# React 18 is NOT exercised: v20 targets React 19. The peerDependencies range
# stays >=18.2.0 (nothing in the public API requires React 19), but React 18 is
# supported on a best-effort basis only — integrators who do not want React 19
# can stay on ODS v19.
#
# Usage: pnpm test:examples   (or: bash scripts/test-example-apps.sh)
# Prerequisite: @ovhcloud/ods-react and @ovhcloud/ods-themes built (dist/).
# The script builds them if absent.
#
set -uo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
EXAMPLES_DIR="$ROOT/packages/examples"

# Make sure the workspace dists the apps consume (via workspace:*) exist
if [ ! -f "$ROOT/packages/ods-react/dist/index.js" ]; then
  echo "▶ ods-react dist missing — building @ovhcloud/ods-react…"
  pnpm --filter @ovhcloud/ods-react run build:prod || { echo "✗ ods-react build failed"; exit 1; }
fi
if [ ! -f "$ROOT/packages/themes/dist/default/index.css" ]; then
  echo "▶ themes dist missing — building @ovhcloud/ods-themes…"
  pnpm --filter @ovhcloud/ods-themes run build:prod || { echo "✗ themes build failed"; exit 1; }
fi

NAMES=()
RESULTS=()
FAILED=0

for dir in "$EXAMPLES_DIR"/*/; do
  app="$(basename "$dir")"
  # Only include apps that define a "build" script
  if ! node -e "process.exit(((require(process.argv[1] + '/package.json').scripts)||{}).build?0:1)" "$dir" 2>/dev/null; then
    continue
  fi

  echo "======== build: $app ========"
  log="$(mktemp -t "example-$app")"
  if pnpm -C "$dir" build >"$log" 2>&1; then
    echo "  ✅ OK"
    NAMES+=("$app"); RESULTS+=("✅ OK")
    rm -f "$log"
  else
    echo "  ❌ FAILED — last lines:"
    tail -15 "$log" | sed 's/^/    /'
    echo "  full log kept at: $log"
    NAMES+=("$app"); RESULTS+=("❌ FAILED")
    FAILED=1
  fi
done

echo ""
echo "==================== SUMMARY ===================="
if [ "${#NAMES[@]}" -gt 0 ]; then for i in "${!NAMES[@]}"; do
  printf "  %-28s %s\n" "${NAMES[$i]}" "${RESULTS[$i]}"
done; fi
echo "================================================="

if [ "$FAILED" -ne 0 ]; then
  echo "✗ At least one example app does not build — integration regression."
  exit 1
fi
echo "✓ Every example app builds."
