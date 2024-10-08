/**
 * Custom element manifest plugin to manage enums
 * - extract enum as a separate object with all keys and values
 * - update @Prop default value with the enum value, as it would be empty otherwise
 *   (ex: @Prop({ reflect: true }) public size: OdsBadgeSize = ODS_BADGE_SIZE.md;)
 *
 * @param rename
 * keys/values list of enum name to replace, useful when exporting direct enum
 * (ex: export { ODS_OVERLAY_POSITION as ODS_TOOLTIP_POSITION })
 */
function cemEnumPlugin({ rename } = {}) {
  const defaultValueMap = new Map();
  const enumMap = new Map();

  return {
    name: 'enum-plugin',
    analyzePhase: ({ ts, node }) => {
      if (node.kind === ts.SyntaxKind.PropertyDeclaration) {
        // Only enum default value seems to end up here, though it may cause issue one day with other strange use case
        const initialValue = node.initializer?.name?.escapedText;

        if (initialValue) {
          defaultValueMap.set(node.name.escapedText, initialValue);
        }
      }

      if (node.kind === ts.SyntaxKind.EnumDeclaration) {
        enumMap.set(node.name.escapedText, new Map());
      }

      // If the node is a member of an enum previously saved, we save it as a child
      if (node.kind === ts.SyntaxKind.EnumMember) {
        const parentName = node.parent.name.escapedText;

        if (enumMap.has(parentName)) {
          const keyMap = enumMap.get(parentName);
          keyMap.set(node.name.escapedText, {});
        }
      }

      // If the node is a child node of an enum member and not the identifier (left side), we save the value
      if (node.parent && node.parent.kind === ts.SyntaxKind.EnumMember && node.kind !== ts.SyntaxKind.Identifier) {
        const parentName = node.parent.name.escapedText;

        enumMap.forEach((value, key) => {
          if (value.has(parentName)) {
            value.set(parentName, {
              type: node.kind === ts.SyntaxKind.NumericLiteral ? 'number' : 'string',
              value: node.text,
            });
          }
        });
      }
    },
    packageLinkPhase: ({ customElementsManifest }) => {
      // We add a custom block containing all the enums definition
      const finalList = {};
      enumMap.forEach((value, key) => {
        if (rename && !!rename[key]) {
          finalList[rename[key]] = Object.fromEntries(value);
        } else {
          finalList[key] = Object.fromEntries(value);
        }
      });
      customElementsManifest.enumPlugin = finalList;

      // We go through all the field declarations to add the default enum values we saved in the previous step
      customElementsManifest.modules = customElementsManifest.modules.map((module) => {
        if (module.kind === 'javascript-module' && module.declarations.length > 0) {
          module.declarations = module.declarations.map((declaration) => {
            if (declaration.kind === 'class') {
              declaration.members = declaration.members.map((member) => {
                if (member.kind === 'field' && !member.default && defaultValueMap.has(member.name)) {
                  member.default = defaultValueMap.get(member.name);
                }
                return member;
              });
            }
            return declaration;
          });
        }
        return module;
      });
    },
  };
}

export default cemEnumPlugin;
