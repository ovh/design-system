import { formatHex, oklch, parse } from 'culori';

const PALETTE_STEPS = ['000', '025', '050', '075', '100', '200', '300', '400', '500', '600', '700', '800', '900'] as const;

const LIGHTNESS_MAP_LIGHT: Record<string, number> = {
  '000': 0.95,
  '025': 0.90,
  '050': 0.85,
  '075': 0.80,
  '100': 0.75,
  '200': 0.68,
  '300': 0.60,
  '400': 0.55,
  '500': 0.50,
  '600': 0.42,
  '700': 0.35,
  '800': 0.25,
  '900': 0.15,
};

const CHROMA_MULTIPLIERS: Record<string, number> = {
  '000': 0.30,
  '025': 0.40,
  '050': 0.55,
  '075': 0.70,
  '100': 0.80,
  '200': 0.90,
  '300': 0.95,
  '400': 0.98,
  '500': 1.00,
  '600': 0.85,
  '700': 0.65,
  '800': 0.40,
  '900': 0.20,
};

export interface PaletteResult {
  [step: string]: string;
}

/**
 * Generates a 13-step color palette from a seed color using OKLCH color space
 *
 * @param seedHex - Seed color in hex format (e.g., "#466AFF")
 * @returns Object with step names as keys and hex colors as values
 *
 * @example
 * const palette = generatePalette('#466AFF');
 * // Returns: { '000': '#ffffff', '025': '#f3fdff', ... }
 */
export function generatePalette(seedHex: string): PaletteResult {
  const seedColor = parse(seedHex);
  if (!seedColor) {
    throw new Error(`Invalid hex color: ${seedHex}`);
  }

  const seedOklch = oklch(seedColor);
  if (!seedOklch) {
    throw new Error(`Failed to convert ${seedHex} to OKLCH`);
  }

  const baseChroma = seedOklch.c ?? 0;
  const hue = seedOklch.h ?? 0;

  const palette: PaletteResult = {};

  for (const step of PALETTE_STEPS) {
    const lightness = LIGHTNESS_MAP_LIGHT[step];
    const chromaMultiplier = CHROMA_MULTIPLIERS[step];
    const chroma = baseChroma * chromaMultiplier;

    const stepColor = oklch({
      mode: 'oklch',
      l: lightness,
      c: chroma,
      h: hue,
    });

    const hexColor = formatHex(stepColor);

    palette[step] = hexColor;
  }

  return palette;
}

export const COLOR_FAMILIES = [
  'neutral',
  'primary',
  'information',
  'success',
  'warning',
  'critical',
] as const;

export type ColorFamily = typeof COLOR_FAMILIES[number];

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
export function formatPaletteAsCssVariables(
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


