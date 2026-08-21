import { generate } from '@ant-design/colors';
import { PALETTES } from '../doc/ports/constants/designTokens';

/* Ported from the Storybook theme generator: 10-step palettes from a seed
   color, via Ant Design's perceptually-uniform color algorithm (the seed maps
   to step 500). */

const PALETTE_STEPS = Object.freeze(['000', '100', '200', '300', '400', '500', '600', '700', '800', '900']);

type ColorFamily = typeof PALETTES[number];

interface PaletteResult {
  [step: string]: string;
}

function formatPaletteAsCssVariables(family: ColorFamily, palette: PaletteResult): Record<string, string> {
  const result: Record<string, string> = {};
  for (const [step, hex] of Object.entries(palette)) {
    result[`--ods-color-${family}-${step}`] = hex;
  }
  return result;
}

function generatePalette(seedHex: string): PaletteResult {
  try {
    const colors = generate(seedHex);
    const palette: PaletteResult = {};
    PALETTE_STEPS.forEach((step, index) => {
      palette[step] = colors[index];
    });
    return palette;
  } catch {
    throw new Error(`Invalid color: ${seedHex}`);
  }
}

export { type ColorFamily, formatPaletteAsCssVariables, generatePalette, PALETTE_STEPS, type PaletteResult };
