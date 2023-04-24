import { OdsTabBarItemAttributes } from './ods-tab-bar-item-attributes';

/**
 * Default attribute values of OdsTabs panel component
 * (these are values for `OdsTabBarDefaultAttributes`)
 */
export const OdsTabBarItemDefaultAttributesDoc = {
  panel: '',
  active: false,
  disabled: false,
  contrasted: false
} as const;

export const odsTabBarItemDefaultAttributes = OdsTabBarItemDefaultAttributesDoc as OdsTabBarItemAttributes;
