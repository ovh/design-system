import { OdsPanelValue } from './ods-panel-value';
import { OdsTabBarItem } from './ods-tab-bar-item/ods-tab-bar-item';

export interface OdsTabItemSelectEventDetail {
  panel: OdsPanelValue,
  tabItem: OdsTabBarItem
}
