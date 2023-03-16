import { OdsTabsAttributes } from './ods-tabs-attributes';
import { OdsTabsSize, } from './ods-tabs-size';

/**
 * Default attribute values of OdsTabs component
 * (these are values for `odsTabsDefaultAttributes`)
 * @enum
 */
export const odsTabsDefaultAttributesDoc = {
  size: OdsTabsSize.md,
  tabsId: '',
  contrasted: false,
} as const;

export const odsTabsDefaultAttributes = odsTabsDefaultAttributesDoc as OdsTabsAttributes;
