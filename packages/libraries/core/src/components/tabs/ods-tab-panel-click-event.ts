import { OdsPanelValue } from './ods-panel-value';

export interface OdsTabPanelClickEvent {
  value: OdsPanelValue,
  id: string | number | null | undefined,
}
