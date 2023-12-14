import type { OsdsTabs } from '../osds-tabs';

import { OsdsTabBarItem } from '../../osds-tab-bar-item/osds-tab-bar-item';
import { OsdsTabsPanel } from '../../osds-tab-panel/osds-tab-panel';

/**
 * common controller logic for text component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
class OdsTabsController {
  protected component: OsdsTabs;

  constructor(component: OsdsTabs) {
    this.component = component;
  }

  beforeInit() {
    this.changeActivePanel(this.component.panel);
    this.component.onContrastedPropChange(this.component.contrasted);
  }

  changeActivePanel(panel: string) {
    const items = this.component.getTabItems();
    // if not item found, select the first one
    if (!items.find((item) => item.panel === panel) && items.length) {
      panel = items[0].panel;
    }
    items.forEach((item) => item.active = item.panel === panel);
    this.component.getTabPanels().forEach((tabPanel) => tabPanel.active = tabPanel.name === panel);
    if (this.component.panel !== panel) {
      this.component.panel = panel;
      this.component.emitChanged();
    }
  }

  handleArrowKey(event: KeyboardEvent): void {
    const currentSelectedTabIndex = this.component.getTabItems().findIndex((tab) => tab.hasAttribute('active'))
    if(currentSelectedTabIndex === 0 && event.code === 'ArrowLeft' ) {
      return;
    }
    if(currentSelectedTabIndex === this.component.getTabItems().length - 1 && event.code === 'ArrowRight' ) {
      return;
    }

    if(event.code === 'ArrowLeft') {
      const previousPanel = this.component.getTabItems()[currentSelectedTabIndex - 1].getAttribute('panel');
      this.changeActivePanel(previousPanel!);
    } else {
      const nextPanel = this.component.getTabItems()[currentSelectedTabIndex + 1].getAttribute('panel');
      this.changeActivePanel(nextPanel!);
    }
  }

  propagateContrastedToItems(contrasted: boolean) {
    this.component.getTabItems().forEach((item) => item.contrasted = contrasted);
  }

  getTabItems(elementTag: string) {
    return Array.from(this.component.el.querySelectorAll<OsdsTabBarItem & HTMLElement>(elementTag));
  }

  getTabPanels(elementTag: string) {
    return Array.from(this.component.el.querySelectorAll<OsdsTabsPanel & HTMLElement>(elementTag));
  }

}

export {
  OdsTabsController,
};
