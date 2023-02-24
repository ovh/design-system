import { OdsThemeColorIntent } from './ods-theme-color-intent';
import { OdsThemeColorHue } from './ods-theme-color-hue';

export const odsGenerateColorVariable = (
  intent: OdsThemeColorIntent,
  hue: OdsThemeColorHue,
  contrasted = false
): string => `--ods-color-${intent}-${hue}${contrasted ? '-contrasted' : ''}`;
