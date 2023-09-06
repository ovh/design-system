import type { OdsButtonAttribute } from '../interfaces/attributes';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { ODS_BUTTON_SIZE } from './button-size';
import { ODS_BUTTON_TEXTALIGN } from './button-textalign';
import { ODS_BUTTON_TYPE } from './button-type';
import { ODS_BUTTON_VARIANT } from './button-variant';

const DEFAULT_ATTRIBUTE: OdsButtonAttribute = Object.freeze({
  circle: false,
  color: ODS_THEME_COLOR_INTENT.default,
  contrasted: false,
  disabled: false,
  download: undefined,
  href: undefined,
  inline: false,
  rel: undefined,
  size: ODS_BUTTON_SIZE.md,
  target: undefined,
  textAlign: ODS_BUTTON_TEXTALIGN.center,
  type: ODS_BUTTON_TYPE.button,
  variant: ODS_BUTTON_VARIANT.flat,
});

export {
  DEFAULT_ATTRIBUTE,
};
