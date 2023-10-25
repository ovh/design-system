import type { ODS_LINK_REFERRER_POLICY } from '../constants/referrer-policies';
import type { OdsHTMLAnchorElementRel, OdsHTMLAnchorElementTarget } from '@ovhcloud/ods-common-core';
import type { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';


interface OdsLinkAttribute {
  /** Link color theme */
  color?: ODS_THEME_COLOR_INTENT
  /** Link design as contrasted version */
  contrasted?: boolean
  /** Link should be disabled or not */
  disabled?: boolean
  /**  Link as download source */
  download?: HTMLAnchorElement['download']
  /** Link URL */
  href?: string
  /** Link referrer policy */
  referrerpolicy?: ODS_LINK_REFERRER_POLICY
  /**  Link relationship */
  rel?: OdsHTMLAnchorElementRel
  /**
   * Link target type
   * If href is set the default value `_self` is set
   */
  target?: OdsHTMLAnchorElementTarget
  /** Link type (for download source) */
  type?: string
}

export {
  OdsLinkAttribute,
};
