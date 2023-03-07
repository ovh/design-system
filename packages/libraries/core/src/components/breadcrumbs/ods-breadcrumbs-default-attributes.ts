import { OdsBreadcrumbsAttributes } from './ods-breadcrumbs-attributes';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { OdsHTMLAnchorElementTarget } from '../../types/ods-html-anchor-element-target';

/**
 * default attribute values of breadcrumbs
 */
export const odsBreadcrumbsDefaultAttributesDoc = {
  color: OdsThemeColorIntent.default,
  contrasted: false,
  disabled: false,
  active: true,
  download: undefined,
  href: '',
  referrerpolicy: undefined,
  rel: undefined,
  target: OdsHTMLAnchorElementTarget._self,
  type: undefined,
} as const;

export const odsBreadcrumbsDefaultAttributes = odsBreadcrumbsDefaultAttributesDoc as OdsBreadcrumbsAttributes;
