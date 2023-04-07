import { OdsTabPanelAttributes } from './ods-tab-panel-attributes';

/**
 * Default attribute values of OdsTabs panel component
 * (these are values for `odsTabPanelDefaultAttributes`)
 */
export const odsTabPanelDefaultAttributesDoc = {
  name: '',
  active: false,
} as const;

export const odsTabPanelDefaultAttributes = odsTabPanelDefaultAttributesDoc as OdsTabPanelAttributes;
