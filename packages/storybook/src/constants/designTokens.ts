const MONO_COLORS = Object.freeze([
  'alpha',
  'beta',
  'new',
  'promotion',
]);

const PALETTES = Object.freeze([
  'critical',
  'information',
  'neutral',
  'primary',
  'success',
  'warning',
]);

enum TOKEN_TYPE {
  borderRadius = 'border-radius',
  borderWidth = 'border-width',
  boxShadow = 'box-shadow',
  color = 'color',
  fontFamily = 'font-family',
  gap = 'gap',
  height = 'height',
  opacity = 'opacity',
  outline = 'outline',
  padding = 'padding',
  palette = 'palette',
  unknown = 'unknown',
  zIndex = 'z-index',
}

const TOKEN_TYPES = Object.freeze(Object.values(TOKEN_TYPE));

enum TOKEN_CATEGORY {
  color = 'theme-color',
  deprecated = 'deprecated',
  fontFamily = 'font-family',
  formElement = 'form-element',
  outline = 'outline',
  overlay = 'overlay',
  palette = 'color-palette',
  spacing = 'spacing',
}

interface Token {
  name: string,
  type: TOKEN_TYPE,
  value: string,
}

export {
  MONO_COLORS,
  PALETTES,
  TOKEN_CATEGORY,
  TOKEN_TYPE,
  TOKEN_TYPES,
  type Token,
};
