import { OdsSelectAttributes } from '@ovhcloud/ods-core';
import { odsSelectBaseAttributes } from './ods-select-base-attributes';

export function OdsSelectCreateAttributes(attributes: Partial<OdsSelectAttributes>): OdsSelectAttributes {
  return {
    ...odsSelectBaseAttributes,
    ...attributes
  };
}
