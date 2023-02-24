import { OdsCodeAttributes } from './ods-code-attributes';
import { OdsCodeSize } from './ods-code-size';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

/**
 * Default attribute values of Code component
 * (this are values for `odsCodeDefaultAttributes`)
 * @enum
 */
export const odsCodeDefaultAttributesDoc: OdsCodeAttributes = {
  color: OdsThemeColorIntent.default,
  contrasted: false,
  size: OdsCodeSize.md
} as const;

export const odsCodeDefaultAttributes = odsCodeDefaultAttributesDoc;
