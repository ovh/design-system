import { OdsMenuItemAttributes } from '@ovhcloud/ods-core';
import { odsMenuItemBaseAttributes } from './ods-menu-item-base-attributes';

export function OdsMenuItemCreateAttributes(attributes: Partial<OdsMenuItemAttributes>): OdsMenuItemAttributes {
  return {
    ...odsMenuItemBaseAttributes,
    ...attributes
  };
}
