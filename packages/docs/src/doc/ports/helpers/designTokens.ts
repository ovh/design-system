import { PALETTES, TOKEN_CATEGORY, TOKEN_TYPE, TOKEN_TYPES, type Token } from '../constants/designTokens';

/* The semantic names say what a token is for, not which CSS property reads it. */
const SEMANTIC_TYPES: [RegExp, TOKEN_TYPE][] = [
  [/^--ods-semantic-color-/, TOKEN_TYPE.color],
  [/^--ods-semantic-size-radius-/, TOKEN_TYPE.borderRadius],
  [/^--ods-semantic-border-(focus-)?thickness/, TOKEN_TYPE.borderWidth],
  [/^--ods-semantic-shadow-/, TOKEN_TYPE.boxShadow],
  [/^--ods-semantic-font-family-/, TOKEN_TYPE.fontFamily],
  [/^--ods-semantic-size-space-gap-/, TOKEN_TYPE.gap],
  [/^--ods-semantic-size-space-inset-/, TOKEN_TYPE.padding],
  [/^--ods-semantic-size-block-size-/, TOKEN_TYPE.height],
];

const PALETTE_RUNG = /^--ods-palette-([a-z]+)-(\d{2,3})$/;

function guessTokenType(name: string): TOKEN_TYPE {
  const semantic = SEMANTIC_TYPES.find(([pattern]) => pattern.test(name));

  if (semantic) {
    return semantic[1];
  }

  return TOKEN_TYPES.find((type) => name.includes(`-${type}`)) || TOKEN_TYPE.unknown;
}

/* tokens.json publishes resolved values in `root` and the var() references in `refs`: this gives
   back each token as the theme declares it. */
function declaredTokens(tokens: { refs?: Record<string, string>, root: Record<string, string> }): Record<string, string> {
  return { ...tokens.root, ...tokens.refs };
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
  const families = new Map<string, Token[]>();

  tokens.forEach((token) => {
    const family = token.name.match(PALETTE_RUNG)?.[1] || '';
    families.set(family, [...(families.get(family) || []), token]);
  });

  return [...families.values()];
}

function rungOf(token: Token): number {
  return parseInt(token.name.match(PALETTE_RUNG)?.[2] || '0', 10);
}

/* Splits the palette into its hue ramps, the one-off colors and the opacity rungs. */
function splitPaletteTokens(tokens: Token[]): { monoColors: Token[], opacities: Token[], palettes: Token[][] } {
  const monoColors: Token[] = [];
  const opacities: Token[] = [];
  const rampColors: Token[] = [];

  tokens.forEach((token) => {
    const family = token.name.match(PALETTE_RUNG)?.[1];

    if (family === 'opacity') {
      opacities.push(token);
    } else if (family && PALETTES.includes(family)) {
      rampColors.push(token);
    } else {
      monoColors.push(token);
    }
  });

  const byFamilyThenRung = (a: Token, b: Token): number => {
    const familyA = a.name.match(PALETTE_RUNG)?.[1] || '';
    const familyB = b.name.match(PALETTE_RUNG)?.[1] || '';
    return familyA.localeCompare(familyB) || rungOf(a) - rungOf(b);
  };

  return {
    monoColors: monoColors.sort((a, b) => a.name.localeCompare(b.name)),
    opacities: opacities.sort((a, b) => rungOf(a) - rungOf(b)),
    palettes: splitPalettes(rampColors.sort(byFamilyThenRung)),
  };
}

function categoryOf(name: string): TOKEN_CATEGORY {
  if (name.startsWith('--ods-palette-')) {
    return TOKEN_CATEGORY.palette;
  }
  if (name === '--ods-semantic-color-focus' || name.startsWith('--ods-semantic-border-focus-')) {
    return TOKEN_CATEGORY.focus;
  }
  if (name.startsWith('--ods-semantic-color-')) {
    return TOKEN_CATEGORY.color;
  }
  if (name.startsWith('--ods-semantic-size-') || name.startsWith('--ods-semantic-border-')) {
    return TOKEN_CATEGORY.size;
  }
  if (name.startsWith('--ods-semantic-font-')) {
    return TOKEN_CATEGORY.font;
  }
  if (/^--ods-semantic-(opacity|shadow|z-index)-/.test(name)) {
    return TOKEN_CATEGORY.elevation;
  }
  if (name.startsWith('--ods-semantic-motion-')) {
    return TOKEN_CATEGORY.motion;
  }
  return TOKEN_CATEGORY.other;
}

function categorizeTokens(tokens: Record<string, string>): Record<TOKEN_CATEGORY, Token[]> {
  const res = Object.fromEntries(Object.values(TOKEN_CATEGORY).map((category) => [category, []])) as unknown as Record<TOKEN_CATEGORY, Token[]>;

  Object.entries(tokens).forEach(([name, value]) => {
    const category = categoryOf(name);
    const type = guessTokenType(name);
    res[category].push({ name, type: category === TOKEN_CATEGORY.palette && type === TOKEN_TYPE.unknown ? TOKEN_TYPE.palette : type, value });
  });

  return res;
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
  if (type === TOKEN_TYPE.color || type === TOKEN_TYPE.palette || name.includes('-color')) {
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
  declaredTokens,
  getInputTypeForToken,
  guessTokenType,
  INPUT_TYPE,
  resolveTokenValues,
  splitPaletteTokens,
};
