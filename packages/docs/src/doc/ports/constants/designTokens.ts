/* The hue families of the palette, plus the two ramps a theme re-aims onto them. */
const PALETTES = Object.freeze([
  'accent',
  'blue',
  'brand',
  'gray',
  'green',
  'navy',
  'orange',
  'red',
]);

enum TOKEN_TYPE {
  borderRadius = 'border-radius',
  borderWidth = 'border-width',
  boxShadow = 'box-shadow',
  color = 'color',
  fontFamily = 'font-family',
  gap = 'gap',
  height = 'height',
  margin = 'margin',
  opacity = 'opacity',
  outline = 'outline',
  padding = 'padding',
  palette = 'palette',
  unknown = 'unknown',
  width = 'width',
  zIndex = 'z-index',
}

const TOKEN_TYPES = Object.freeze(Object.values(TOKEN_TYPE));

enum TOKEN_CATEGORY {
  color = 'theme-color',
  elevation = 'elevation',
  focus = 'focus',
  font = 'font',
  motion = 'motion',
  other = 'other',
  palette = 'color-palette',
  size = 'size',
}

interface Token {
  name: string,
  type: TOKEN_TYPE,
  value: string,
}

export {
  PALETTES,
  TOKEN_CATEGORY,
  TOKEN_TYPE,
  TOKEN_TYPES,
  type Token,
};
