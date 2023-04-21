import { OdsMenuGroupAttributes } from '@ovhcloud/ods-core';
import { odsMenuGroupBaseAttributes } from './ods-menu-group-base-attributes';

export function OdsMenuGroupCreateAttributes(attributes: Partial<OdsMenuGroupAttributes>): OdsMenuGroupAttributes {
  return {
    ...odsMenuGroupBaseAttributes,
    ...attributes
  };
}
