import { OdsChipAttributes, OdsChipSize, OdsChipVariant } from '@ovhcloud/ods-core';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

/**
 * base attributes value of chip
 */
export const odsChipBaseAttributes: OdsChipAttributes = {
    color: OdsThemeColorIntent.default,
    contrasted: false,
    disabled: false,
    flex: undefined,
    removable: false,
    selectable: false,
    size: OdsChipSize.md,
    variant: OdsChipVariant.flat,
};
