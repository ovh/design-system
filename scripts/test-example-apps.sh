#!/usr/bin/env bash
#
# Non-régression d'intégration : build chaque app d'exemple (packages/examples/*)
# en série (une build à la fois → RAM maîtrisée) et rapporte un tableau pass/fail.
#
# Ces apps forment la matrice bundler × version de React :
#   Vite@18 (react-router-app) · Vite@19 (vite-app, accessibility-test)
#   Webpack@18 (webpack-app) · Webpack@19 (webpack-app-react19)
#   Next.js SSR@18 (nextjs-app) · Next.js SSR@19 (nextjs-app-react19)
#
# Usage : pnpm test:examples   (ou : bash scripts/test-example-apps.sh)
# Prérequis : @ovhcloud/ods-react buildé (dist/). Le script le build si absent.
#
set -uo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
EXAMPLES_DIR="$ROOT/packages/examples"

# S'assurer que le dist d'ODS existe (les apps le consomment via workspace:*)
if [ ! -f "$ROOT/packages/ods-react/dist/index.js" ]; then
  echo "▶ dist ODS absent — build de @ovhcloud/ods-react…"
  pnpm --filter @ovhcloud/ods-react run build:prod || { echo "✗ build ODS échoué"; exit 1; }
fi

declare -a NAMES
declare -a RESULTS
FAILED=0

for dir in "$EXAMPLES_DIR"/*/; do
  app="$(basename "$dir")"
  # N'inclure que les apps ayant un script "build"
  if ! node -e "process.exit(((require('$dir/package.json').scripts)||{}).build?0:1)" 2>/dev/null; then
    continue
  fi

  echo "======== build: $app ========"
  log="$(mktemp)"
  if pnpm -C "$dir" build >"$log" 2>&1; then
    echo "  ✅ OK"
    NAMES+=("$app"); RESULTS+=("✅ OK")
  else
    echo "  ❌ ÉCHEC — dernières lignes :"
    grep -iE "error|erreur|failed|TS[0-9]" "$log" | tail -15 | sed 's/^/    /'
    NAMES+=("$app"); RESULTS+=("❌ ÉCHEC")
    FAILED=1
  fi
  rm -f "$log"
done

echo ""
echo "==================== RÉSUMÉ ===================="
for i in "${!NAMES[@]}"; do
  printf "  %-28s %s\n" "${NAMES[$i]}" "${RESULTS[$i]}"
done
echo "==============================================="

if [ "$FAILED" -ne 0 ]; then
  echo "✗ Au moins une app d'exemple ne build pas — régression d'intégration."
  exit 1
fi
echo "✓ Toutes les apps d'exemple buildent."
