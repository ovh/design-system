import { generate } from '@ant-design/colors';

const COLOR_FAMILIES = Object.freeze([
  'neutral',
  'primary',
  'information',
  'success',
  'warning',
  'critical',
] as const);

const PALETTE_STEPS = Object.freeze(['000', '100', '200', '300', '400', '500', '600', '700', '800', '900']);

type ColorFamily = typeof COLOR_FAMILIES[number];

interface PaletteResult {
  [step: string]: string;
}

/**
 * Formats palette result into CSS variable format
 *
 * @param family - Color family name
 * @param palette - Generated palette
 * @returns Record of CSS variable names to hex values
 *
 * @example
 * const palette = generatePalette('#466AFF', 'light');
 * const cssVars = formatPaletteAsCssVariables('primary', palette);
 * // Returns: { '--ods-color-primary-000': '#ffffff', ... }
 */
function formatPaletteAsCssVariables(
  family: ColorFamily,
  palette: PaletteResult
): Record<string, string> {
  const result: Record<string, string> = {};

  for (const [step, hex] of Object.entries(palette)) {
    const varName = `--ods-color-${family}-${step}`;
    result[varName] = hex;
  }

  return result;
}

/**
 * Generates a 10-step color palette from a seed color using Ant Design's color algorithm
 * 
 * Uses @ant-design/colors generate function which produces perceptually uniform colors.
 * The seed color maps to step 500 (index 5 in the Ant Design palette).
 *
 * @param seedHex - Seed color in hex format (e.g., "#466AFF")
 * @returns Object with step names as keys and hex colors as values
 *
 * @example
 * const palette = generatePalette('#466AFF');
 * // Returns: { '000': '#f0f5ff', '100': '#d6e4ff', ..., '500': '#466AFF', ..., '900': '#061178' }
 */
function generatePalette(seedHex: string): PaletteResult {
  try {
    const colors = generate(seedHex);
    
    const palette: PaletteResult = {};
    
    PALETTE_STEPS.forEach((step, index) => {
      palette[step] = colors[index];
    });
    
    return palette;
  } catch (error) {
    throw new Error(`Invalid color: ${seedHex}`);
  }
}

export {
  COLOR_FAMILIES,
  type ColorFamily,
  formatPaletteAsCssVariables,
  generatePalette,
  PALETTE_STEPS,
  type PaletteResult,
};
