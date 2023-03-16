import { OdsPopoverContentAttributes } from '@ovhcloud/ods-core';
import { odsPopoverContentBaseAttributes } from './ods-popover-content-base-attributes';

export function OdsPopoverContentCreateAttributes(attributes: Partial<OdsPopoverContentAttributes>): OdsPopoverContentAttributes {
  return {
    ...odsPopoverContentBaseAttributes,
    ...attributes
  };
}
