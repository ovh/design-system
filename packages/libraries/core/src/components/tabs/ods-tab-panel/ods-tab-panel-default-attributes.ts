import { OdsTabPanelAttributes } from './ods-tab-panel-attributes';
import { OdsTabsSize, } from '../ods-tabs/ods-tabs-size';

/**
 * Default attribute values of OdsTabs panel component
 * (these are values for `odsTabPanelDefaultAttributes`)
 * @enum
 */
export const odsTabPanelDefaultAttributesDoc = {
  size: OdsTabsSize.md,  
} as const;

export const odsTabPanelDefaultAttributes = odsTabPanelDefaultAttributesDoc as OdsTabPanelAttributes;
