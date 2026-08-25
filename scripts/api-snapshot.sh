#!/usr/bin/env bash
#
# Snapshot de non-régression de l'API publique de @ovhcloud/ods-react.
#
# Concatène (de façon déterministe) tous les .d.ts émis dans dist/src en un seul
# fichier de référence versionné. À chaque run, régénère et compare : si le
# contrat de types publics change (prop, signature, type exporté…), le diff
# ressort — c'est le signal « ce bump touche l'API publique (semver) ».
#
# Robuste face au bug polymorphe (« dangling T ») qui fait planter api-extractor.
#
# Usage :
#   bash scripts/api-snapshot.sh            # vérifie (échoue si l'API a changé)
#   bash scripts/api-snapshot.sh --update   # régénère la référence après un changement voulu
#
set -uo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
PKG="$ROOT/packages/ods-react"
DIST_TYPES="$PKG/dist/src"
REF="$PKG/etc/public-api.api.txt"
MODE="${1:-check}"

# S'assurer que les .d.ts existent
if [ ! -d "$DIST_TYPES" ]; then
  echo "▶ dist ODS absent — build de @ovhcloud/ods-react…"
  pnpm --filter @ovhcloud/ods-react run build:prod || { echo "✗ build ODS échoué"; exit 1; }
fi

# Générer le snapshot courant (ordre stable, chemins relatifs)
CURRENT="$(mktemp)"
{
  echo "// Snapshot API publique @ovhcloud/ods-react — généré par scripts/api-snapshot.sh"
  echo "// Ne pas éditer à la main. Régénérer via : bash scripts/api-snapshot.sh --update"
  echo ""
  while IFS= read -r f; do
    rel="${f#"$DIST_TYPES"/}"
    echo "// ==================== $rel ===================="
    cat "$f"
    echo ""
  done < <(cd "$DIST_TYPES" && find . -name '*.d.ts' | LC_ALL=C sort | sed "s#^\./#$DIST_TYPES/#")
} > "$CURRENT"

mkdir -p "$PKG/etc"

if [ "$MODE" = "--update" ] || [ "$MODE" = "update" ]; then
  mv "$CURRENT" "$REF"
  echo "✓ Référence d'API mise à jour : ${REF#"$ROOT"/}"
  exit 0
fi

if [ ! -f "$REF" ]; then
  mv "$CURRENT" "$REF"
  echo "✓ Référence d'API créée (baseline) : ${REF#"$ROOT"/}"
  echo "  Commit ce fichier ; les prochains runs compareront contre lui."
  exit 0
fi

if diff -u "$REF" "$CURRENT" > /tmp/api-snapshot.diff 2>&1; then
  rm -f "$CURRENT"
  echo "✓ API publique inchangée."
  exit 0
else
  echo "✗ L'API publique a CHANGÉ — revue requise (impact semver possible) :"
  echo "-----------------------------------------------------------------"
  head -80 /tmp/api-snapshot.diff
  echo "-----------------------------------------------------------------"
  echo "Diff complet : /tmp/api-snapshot.diff"
  echo "Si le changement est voulu : bash scripts/api-snapshot.sh --update"
  rm -f "$CURRENT"
  exit 1
fi
