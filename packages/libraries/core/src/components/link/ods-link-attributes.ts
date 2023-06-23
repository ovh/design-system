import { OdsLinkReferrerpolicy } from './ods-link-referrerpolicy';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { OdsComponentAttributes } from '../ods-component-attributes';
import { OdsHTMLAnchorElementRel } from '../../types/ods-html-anchor-element-rel';
import { OdsHTMLAnchorElementTarget } from '../../types/ods-html-anchor-element-target';

export interface OdsLinkAttributes extends OdsComponentAttributes {
  /** Link color theme */
  color?: OdsThemeColorIntent
  /** Link design as contrasted version */
  contrasted?: boolean
  /** Link should be disabled or not */
  disabled?: boolean
  /**  Link as download source */
  download?: HTMLAnchorElement['download']
  /** Link URL */
  href?: string
  /** Link referrer policy */
  referrerpolicy?: OdsLinkReferrerpolicy
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
