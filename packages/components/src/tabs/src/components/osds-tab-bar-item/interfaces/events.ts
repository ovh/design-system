import type { OsdsTabBarItem } from '../osds-tab-bar-item';
import type { EventEmitter } from '@stencil/core';


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
