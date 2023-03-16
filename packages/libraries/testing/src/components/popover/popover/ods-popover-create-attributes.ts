import { OdsPopoverAttributes } from '@ovhcloud/ods-core';
import { odsPopoverBaseAttributes } from './ods-popover-base-attributes';

export function OdsPopoverCreateAttributes(attributes: Partial<OdsPopoverAttributes>): OdsPopoverAttributes {
  return {
    ...odsPopoverBaseAttributes,
    ...attributes
  };
}
