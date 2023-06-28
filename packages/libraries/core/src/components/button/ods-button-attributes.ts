import { OdsButtonSize } from './ods-button-size';
import { OdsButtonType } from './ods-button-type';
import { OdsButtonVariant } from './ods-button-variant';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { OdsComponentAttributes } from '../ods-component-attributes';
import { OdsHTMLAnchorElementRel } from '../../types/ods-html-anchor-element-rel';
import { OdsHTMLAnchorElementTarget } from '../../types/ods-html-anchor-element-target';

export interface OdsButtonAttributes extends OdsComponentAttributes {
  /** main color: see component principles */
  color?: OdsThemeColorIntent;
  /** contrasted or not: see component principles */
  contrasted?: boolean;
  /** disabled or not: see component principles */
  disabled?: boolean;
  /** Button with href as download source */
  download?: HTMLAnchorElement['download'];
  /** inline or not: see component principles */
  inline?: boolean;
  /** use a button as a link with `<a>` element */
  href?: string;
  /** Button with href relationship */
  rel?: OdsHTMLAnchorElementRel;
  /** size: see component principles */
  size?: OdsButtonSize;
  /** link target if we are in a link-mode (using `href` attribute) */
  target?: OdsHTMLAnchorElementTarget;
  /** type of the vanilla button */
  type?: OdsButtonType;
  /** used design aspect */
  variant?: OdsButtonVariant;
  /** use a circle shape */
  circle?: boolean;
}
