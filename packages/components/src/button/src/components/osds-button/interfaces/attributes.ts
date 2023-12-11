
import type { ODS_BUTTON_SIZE } from '../constants/button-size';
import type { ODS_BUTTON_TEXT_ALIGN } from '../constants/button-text-align';
import type { ODS_BUTTON_TYPE } from '../constants/button-type';
import type { ODS_BUTTON_VARIANT } from '../constants/button-variant';
import type { OdsHTMLAnchorElementRel, OdsHTMLAnchorElementTarget } from '@ovhcloud/ods-common-core';
import type { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';

interface OdsButtonAttribute {
  /** use a circle shape */
  circle?: boolean;
  /** main color: see component principles */
  color?: ODS_THEME_COLOR_INTENT;
  /** contrasted or not: see component principles */
  contrasted?: boolean;
  /** disabled or not: see component principles */
  disabled?: boolean;
  /** Button with href as download source */
  download?: HTMLAnchorElement['download'];
  /** use a button as a link with `<a>` element */
  href?: string;
  /** inline or not: see component principles */
  inline?: boolean;
  /** Button with href relationship */
  rel?: OdsHTMLAnchorElementRel;
  /** size: see component principles */
  size?: ODS_BUTTON_SIZE;
  /** link target if we are in a link-mode (using `href` attribute) */
  target?: OdsHTMLAnchorElementTarget;
  /** type of the vanilla button */
  textAlign?: ODS_BUTTON_TEXT_ALIGN;
  type?: ODS_BUTTON_TYPE;
  /** used design aspect */
  variant?: ODS_BUTTON_VARIANT;
}

export {
  OdsButtonAttribute,
};
