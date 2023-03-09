import { OdsTabBarItemAttributes } from './ods-tab-bar-item-attributes';
import { OdsTabsSize, } from '../ods-tabs/ods-tabs-size';

/**
 * Default attribute values of OdsTabs panel component
 * (these are values for `OdsTabBarDefaultAttributes`)
 * @enum
 */
export const OdsTabBarItemDefaultAttributesDoc = {
  size: OdsTabsSize.md,  
  checked: false,
} as const;

export const OdsTabBarItemDefaultAttributes = OdsTabBarItemDefaultAttributesDoc as OdsTabBarItemAttributes;
