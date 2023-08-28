import type { OdsChipAttribute } from '../interfaces/attributes';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { ODS_CHIP_SIZE } from './chip-size';
import { ODS_CHIP_VARIANT } from './chip-variant';

const DEFAULT_ATTRIBUTE: OdsChipAttribute = Object.freeze({
  color: ODS_THEME_COLOR_INTENT.default,
  contrasted: false,
  disabled: false,
  inline: false,
  removable: false,
  selectable: false,
  size: ODS_CHIP_SIZE.md,
  variant: ODS_CHIP_VARIANT.flat,
});

export {
  DEFAULT_ATTRIBUTE,
};
