import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { OdsChipAttributes } from './ods-chip-attributes';
import { OdsChipSize } from './ods-chip-size';
import { OdsChipVariant } from './ods-chip-variant';

export const odsChipDefaultAttributesDoc  = {
  color: OdsThemeColorIntent.default,
  contrasted: false,
  disabled: false,
  inline: false,
  removable: false,
  selectable: false,
  size: OdsChipSize.md,
  variant: OdsChipVariant.flat,
} as const;

export const odsChipDefaultAttributes = odsChipDefaultAttributesDoc as OdsChipAttributes;
