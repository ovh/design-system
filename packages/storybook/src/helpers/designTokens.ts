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
  splitPalettes,
};
