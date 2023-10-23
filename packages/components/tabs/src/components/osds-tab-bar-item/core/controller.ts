import {OsdsTabBarItem} from '../osds-tab-bar-item';

/**
 * common controller logic for text component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
class OdsTabBarItemController {
  protected component: OsdsTabBarItem;

  constructor(component: OsdsTabBarItem) {
    this.component = component;
  }

  /**
   *
   * @param event
  */
  handlePanelKeyEvent(event: KeyboardEvent) {
    if (!this.component.disabled) {
      if (event.keyCode === 13 || event.keyCode === 32) {
        this.component.select();
        //event.defaultPrevented();
        event.preventDefault();
      }
    }
  }

  getTabIndex(currentTabindex: number | string) {
    if(this.component.disabled) {
      return -1;
    }

    if (currentTabindex) {
      return currentTabindex;
    }

    return 0;
  }
}

export {
  OdsTabBarItemController,
};
