import type { EventEmitter } from '@stencil/core';
import { OsdsTabBarItem } from '../osds-tab-bar-item';

interface OdsTabItemSelectEventDetail {
  panel: string;
  tabItem: OsdsTabBarItem;
}

interface OdsTabBarItemEvent {
  /** Tab Bar item is selected */
  odsTabItemSelectEvent: EventEmitter<OdsTabItemSelectEventDetail>;
}

export {
  OdsTabBarItemEvent,
  OdsTabItemSelectEventDetail,
};
