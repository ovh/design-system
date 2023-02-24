import { OdsRangeAttributes, odsRangeDefaultAttributes, OdsRequiredProperties } from '@ovhcloud/ods-core';

/**
 * base attributes values (mandatory values)
 */
export const odsRangeBaseAttributes: OdsRequiredProperties<OdsRangeAttributes> = {
  value: odsRangeDefaultAttributes.value,
  forbiddenValues: odsRangeDefaultAttributes.forbiddenValues,
};
