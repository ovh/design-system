import { OdsPanelValue } from './public-api';

export interface OdsTabPanelClickEvent {
  value: OdsPanelValue,
  id: string | number | null | undefined,
}
