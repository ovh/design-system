import { OdsThemeTypographyLevel, OdsThemeTypographyLevelList, OdsThemeTypographyLevelUnion } from '@ovhcloud/ods-theming';

/**
 * Since the Text component level should be the same as the Theming typography level, we inherit its interface
 */

export { OdsThemeTypographyLevel as OdsTextLevel };

export type OdsTextLevelUnion = OdsThemeTypographyLevelUnion;

export const OdsTextLevelList = OdsThemeTypographyLevelList;
