import { OdsThemeColorIntent } from '@ods/theming';
import { OdsHTMLAnchorElementTarget } from '../../types/ods-html-anchor-element-target';
/**
 * default attribute values of breadcrumbs
 */
export const odsBreadcrumbsDefaultAttributesDoc = {
  color: OdsThemeColorIntent.default,
  contrasted: false,
  disabled: false,
  download: undefined,
  href: '',
  referrerpolicy: undefined,
  rel: undefined,
  target: OdsHTMLAnchorElementTarget._self,
  type: undefined,
};
export const odsBreadcrumbsDefaultAttributes = odsBreadcrumbsDefaultAttributesDoc;
