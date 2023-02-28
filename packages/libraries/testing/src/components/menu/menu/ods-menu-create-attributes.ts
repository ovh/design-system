import { OdsMenuAttributes } from '@ovhcloud/ods-core';
import { odsMenuBaseAttributes } from './ods-menu-base-attributes';

export function OdsMenuCreateAttributes(attributes: Partial<OdsMenuAttributes>): OdsMenuAttributes {
  return {
    ...odsMenuBaseAttributes,
    ...attributes
  };
}
