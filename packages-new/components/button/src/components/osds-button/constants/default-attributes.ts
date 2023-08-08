import type { OdsButtonAttribute } from '../interfaces/attributes';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { ODS_BUTTON_SIZE } from './button-size';
import { ODS_BUTTON_TYPE } from './button-type';
import { ODS_BUTTON_VARIANT } from './button-variant';

const DEFAULT_ATTRIBUTE: OdsButtonAttribute = Object.freeze({
  circle: false,
  color: OdsThemeColorIntent.default,
  contrasted: false,
  disabled: false,
  download: undefined,
  href: undefined,
  inline: false,
  rel: undefined,
  size: ODS_BUTTON_SIZE.md,
  target: undefined,
  type: ODS_BUTTON_TYPE.button,
  variant: ODS_BUTTON_VARIANT.flat,
});

export {
  DEFAULT_ATTRIBUTE,
};
