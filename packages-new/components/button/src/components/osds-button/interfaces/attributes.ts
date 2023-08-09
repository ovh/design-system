import type { OdsHTMLAnchorElementRel, OdsHTMLAnchorElementTarget } from '@ovhcloud/ods-common-core';
import type { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import type { ODS_BUTTON_SIZE } from '../constants/button-size';
import type { ODS_BUTTON_TYPE } from '../constants/button-type';
import type { ODS_BUTTON_VARIANT } from '../constants/button-variant';

interface OdsButtonAttribute {
  /** Uses a circle shape as variant */
  circle?: boolean;
  /** Component main color */
  color?: OdsThemeColorIntent;
  /** Contrasted mode */
  contrasted?: boolean;
  /** Disabled mode */
  disabled?: boolean;
  /** Button with href as download source */
  download?: HTMLAnchorElement['download'];
  /** Uses a button as link by replace `<button>` with `<a>` */
  href?: string;
  /** Inline modet */
  inline?: boolean;
  /** Link's `rel` (works only if we are already in link-mode -using `href` attribute -) */
  rel?: OdsHTMLAnchorElementRel;
  /** Component size */
  size?: ODS_BUTTON_SIZE;
  /** Link's target (works only if we are already in link-mode -using `href` attribute -) */
  target?: OdsHTMLAnchorElementTarget;
  /** Button type */
  type?: ODS_BUTTON_TYPE;
  /** Uses a variant type */
  variant?: ODS_BUTTON_VARIANT;
}

export {
  OdsButtonAttribute,
};
