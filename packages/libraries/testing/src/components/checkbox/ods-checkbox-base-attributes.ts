import { OdsCheckboxAttributes, odsCheckboxDefaultAttributes } from '@ovhcloud/ods-core';

/**
 * base attributes value of checkbox
 */
export const odsCheckboxBaseAttributes: OdsCheckboxAttributes = {
  ...odsCheckboxDefaultAttributes,
  name: 'my-checkbox-name',
  value: 'my-value'
};
