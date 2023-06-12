import { OdsSwitchItemAttributes } from './ods-switch-item-attributes';

export const odsSwitchItemDefaultAttributesDoc = {
  value: '',
  id: '',
  checked: false,
} as const;

export const odsSwitchItemDefaultAttributes = odsSwitchItemDefaultAttributesDoc as OdsSwitchItemAttributes;
