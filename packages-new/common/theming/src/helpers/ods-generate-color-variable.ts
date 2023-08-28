import type { ODS_THEME_COLOR_HUE } from '../constants/ods-theme-color-hue';
import type { ODS_THEME_COLOR_INTENT } from '../constants/ods-theme-color-intent';

// TODO used only by text, keep or move to text?
function odsGenerateColorVariable(
  intent: ODS_THEME_COLOR_INTENT,
  hue: ODS_THEME_COLOR_HUE,
  contrasted = false,
): string {
  return `--ods-color-${intent}-${hue}${contrasted ? '-contrasted' : ''}`;
}

export {
  odsGenerateColorVariable,
};
