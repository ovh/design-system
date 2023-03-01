import { OdsTabsPanelAttributes } from './ods-tabs-panel-attributes';
import { OdsTabsSize, } from '../ods-tabs-size';

/**
 * Default attribute values of OdsTabs panel component
 * (these are values for `odsTabsPanelDefaultAttributes`)
 * @enum
 */
export const odsTabsPanelDefaultAttributesDoc = {
  size: OdsTabsSize.md,  
} as const;

export const odsTabsPanelDefaultAttributes = odsTabsPanelDefaultAttributesDoc as OdsTabsPanelAttributes;
