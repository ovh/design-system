import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { OdsChipSize } from './ods-chip-size';
import { OdsChipVariant } from './ods-chip-variant';
export const odsChipDefaultAttributesDoc = {
  color: OdsThemeColorIntent.default,
  contrasted: false,
  disabled: false,
  flex: false,
  removable: false,
  selectable: false,
  size: OdsChipSize.md,
  variant: OdsChipVariant.flat,
};
export const odsChipDefaultAttributes = odsChipDefaultAttributesDoc;
