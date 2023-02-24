import { OdsThemeTypographySize, OdsThemeTypographySizeUnion, OdsThemeTypographySizeList } from '@ovhcloud/ods-theming';

/**
 * Since the Text component size should be the same as the Theming typography size, we inherit its interface
 */

export { OdsThemeTypographySize as OdsTextSize };

export type OdsTextSizeUnion = OdsThemeTypographySizeUnion;

export const OdsTextSizeList = OdsThemeTypographySizeList;

