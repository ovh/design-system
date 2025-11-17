import { MONO_COLORS, PALETTES, TOKEN_CATEGORY, TOKEN_TYPE, TOKEN_TYPES, type Token } from '../constants/designTokens';

function guessTokenType(name: string): TOKEN_TYPE {
  return TOKEN_TYPES.find((type) => name.includes(`-${type}`)) || TOKEN_TYPE.unknown;
}

function isPalette(name: string): boolean {
  const paletteNameSplits = name.split(/^--ods-color-([a-z]+)(-.)*/);

  if (paletteNameSplits.length > 0) {
    return MONO_COLORS.indexOf(paletteNameSplits[1]) > -1 || PALETTES.indexOf(paletteNameSplits[1]) > -1;
  }

  return false;
}

/**
 * Resolves CSS variable references (var()) and calc() expressions to their actual values
 */
function resolveTokenValues(tokens: Record<string, string>): Record<string, string> {
  const resolved = { ...tokens };
  const maxIterations = 10; // Prevent infinite loops

  for (let iteration = 0; iteration < maxIterations; iteration++) {
    let hasUnresolved = false;

    for (const [key, value] of Object.entries(resolved)) {
      if (typeof value !== 'string') {
        continue;
      }

      const varMatches = value.match(/var\(([^)]+)\)/g);
      if (varMatches) {
        let resolvedValue = value;

        for (const varMatch of varMatches) {
          const matches = varMatch.match(/var\(([^)]+)\)/);
          const varName = matches && matches.length > 0 ? matches[1].trim() : '';
          const referencedValue = resolved[varName];

          if (referencedValue && !referencedValue.includes('var(')) {
            resolvedValue = resolvedValue.replace(varMatch, referencedValue);
          } else {
            hasUnresolved = true;
          }
        }

        resolved[key] = resolvedValue;
      }

      if (resolved[key].includes('calc(')) {
        const calcMatch = resolved[key].match(/calc\(([^)]+)\)/);
        if (calcMatch) {
          const expression = calcMatch[1];

          // Simple evaluation for expressions like "8px / 2"
          const simpleCalc = expression.match(/^(\d+(?:\.\d+)?)(px|rem|em|%)\s*\/\s*(\d+(?:\.\d+)?)$/);
          if (simpleCalc) {
            const value = parseFloat(simpleCalc[1]);
            const unit = simpleCalc[2];
            const divisor = parseFloat(simpleCalc[3]);
            const result = value / divisor;
            resolved[key] = resolved[key].replace(calcMatch[0], `${result}${unit}`);
          }
        }
      }
    }

    if (!hasUnresolved) {
      break;
    }
  }

  return resolved;
}

function splitPalettes(tokens: Token[]): Token[][] {
  let paletteIdx = 0;

  return tokens.reduce<Token[][]>((res, token, idx, list) => {
    if (idx) {
      const paletteName = token.name.split(/-\d{3}$/)[0];
      const previousPaletteName = list[idx - 1].name.split(/-\d{3}$/)[0];

      if (previousPaletteName !== paletteName) {
        paletteIdx++;
        res.push([]);
      }
    }
    res[paletteIdx].push(token);
    return res;
  }, [[]]);
}

function categorizeTokens(tokens: Record<string, string>): Record<TOKEN_CATEGORY, Token[]> {
  return Object.entries(tokens).reduce<Record<TOKEN_CATEGORY, Token[]>>((res, [name, value]) => {
    if (name.startsWith('--ods-color')) {
      if (isPalette(name)) {
        res[TOKEN_CATEGORY.palette].push({ name, type: TOKEN_TYPE.palette, value });
      } else {
        res[TOKEN_CATEGORY.deprecated].push({ name, type: guessTokenType(name), value });
      }
    } else if (!name.startsWith('--ods-theme')) {
      res[TOKEN_CATEGORY.deprecated].push({ name, type: guessTokenType(name), value });
    } else if (name.startsWith('--ods-theme-font-family')) {
      res[TOKEN_CATEGORY.fontFamily].push({ name, type: TOKEN_TYPE.fontFamily, value });
    } else if (name.startsWith('--ods-theme-input')) {
      res[TOKEN_CATEGORY.formElement].push({ name, type: guessTokenType(name), value });
    } else if (name.startsWith('--ods-theme-outline')) {
      res[TOKEN_CATEGORY.outline].push({ name, type: TOKEN_TYPE.outline, value });
    } else if (name.startsWith('--ods-theme-backdrop') || name.startsWith('--ods-theme-overlay')) {
      res[TOKEN_CATEGORY.overlay].push({ name, type: guessTokenType(name), value });
    } else if (!name.includes('-color')) {
      res[TOKEN_CATEGORY.spacing].push({ name, type: guessTokenType(name), value });
    } else {
      res[TOKEN_CATEGORY.color].push({ name, type: TOKEN_TYPE.color, value });
    }

    return res;
  }, {
    [TOKEN_CATEGORY.color]: [],
    [TOKEN_CATEGORY.deprecated]: [],
    [TOKEN_CATEGORY.fontFamily]: [],
    [TOKEN_CATEGORY.formElement]: [],
    [TOKEN_CATEGORY.outline]: [],
    [TOKEN_CATEGORY.overlay]: [],
    [TOKEN_CATEGORY.palette]: [],
    [TOKEN_CATEGORY.spacing]: [],
  });
}

enum INPUT_TYPE {
  color = 'color',
  quantity = 'quantity',
  range = 'range',
  select = 'select',
  text = 'text',
}

function getInputTypeForToken(token: Token): INPUT_TYPE {
  const { name, type, value } = token;

  // Color tokens use color picker
  if (type === TOKEN_TYPE.color || name.includes('-color')) {
    return INPUT_TYPE.color;
  }

  // Opacity tokens use quantity with decimal step
  if (type === TOKEN_TYPE.opacity || name.includes('opacity')) {
    return INPUT_TYPE.quantity;
  }

  // Border style and outline style use select
  if (name.includes('style')) {
    return INPUT_TYPE.select;
  }

  // Values ending with "px" use quantity
  if (value.trim().endsWith('px')) {
    return INPUT_TYPE.quantity;
  }

  // Z-index tokens use quantity
  if (type === TOKEN_TYPE.zIndex || name.includes('z-index')) {
    return INPUT_TYPE.quantity;
  }

  // Border radius and spacing-related tokens use quantity
  if (type === TOKEN_TYPE.borderRadius || name.includes('border-radius') || type === TOKEN_TYPE.margin || type === TOKEN_TYPE.padding || type === TOKEN_TYPE.gap || name.includes('spacing')) {
    return INPUT_TYPE.quantity;
  }

  // Default to text input
  return INPUT_TYPE.text;
}

export {
  categorizeTokens,
  getInputTypeForToken,
  guessTokenType,
  INPUT_TYPE,
  isPalette,
  resolveTokenValues,
  splitPalettes,
};
