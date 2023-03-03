import { OdsTabBarAttributes } from './ods-tab-bar-attributes';
import { OdsTabsSize, } from '../ods-tabs/ods-tabs-size';

/**
 * Default attribute values of OdsTabs panel component
 * (these are values for `OdsTabBarDefaultAttributes`)
 * @enum
 */
export const OdsTabBarDefaultAttributesDoc = {
  size: OdsTabsSize.md,  
} as const;

export const OdsTabBarDefaultAttributes = OdsTabBarDefaultAttributesDoc as OdsTabBarAttributes;
