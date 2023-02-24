import { OdsSelectOptionAttributes } from '@ovhcloud/ods-core';
import { odsSelectOptionBaseAttributes } from './ods-select-option-base-attributes';

export function OdsSelectOptionCreateAttributes(attributes: Partial<OdsSelectOptionAttributes>): OdsSelectOptionAttributes {
  return {
    ...odsSelectOptionBaseAttributes,
    ...attributes
  };
}
