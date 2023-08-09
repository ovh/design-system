import type { OdsChipAttribute } from '../interfaces/attributes';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { ODS_CHIP_SIZE } from './chip-size';
import { ODS_CHIP_VARIANT } from './chip-variant';

const DEFAULT_ATTRIBUTE: OdsChipAttribute = Object.freeze({
  color: OdsThemeColorIntent.default,
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
