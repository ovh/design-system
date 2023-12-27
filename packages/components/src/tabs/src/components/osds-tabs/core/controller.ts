import type { OsdsTabBarItem } from '../../osds-tab-bar-item/osds-tab-bar-item';
import type { OsdsTabsPanel } from '../../osds-tab-panel/osds-tab-panel';
import type { OsdsTabs } from '../osds-tabs';

/**
 * common controller logic for text component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
class OdsTabsController {
  protected component: OsdsTabs;

  public _tabItems: (Array<OsdsTabBarItem & HTMLElement>) = [];

  public get tabItems(): (Array<OsdsTabBarItem & HTMLElement>) {
    return this._tabItems;
  }

  public set tabItems(value: (Array<OsdsTabBarItem & HTMLElement>)) {
    this._tabItems = value;
  }

  private _tabPanels: (Array<OsdsTabsPanel & HTMLElement>) = [];

  public get tabPanels(): (Array<OsdsTabsPanel & HTMLElement>) {
    return this._tabPanels;
  }

  public set tabPanels(value: (Array<OsdsTabsPanel & HTMLElement>)) {
    this._tabPanels = value;
  }

  constructor(component: OsdsTabs) {
    this.component = component;
  }

  beforeInit(): void {
    this.changeActivePanel(this.component.panel);
    this.component.onContrastedPropChange(this.component.contrasted);
  }

  changeActivePanel(panel: string): void {
    const items = this.tabItems;
    // if not item found, select the first one
    if (!items.find((item) => item.getAttribute('panel') === panel) && items.length) {
      panel = items[0].getAttribute('panel')!;
    }
    items.forEach((item) => item.active = item.getAttribute('panel') === panel);
    this.tabPanels.forEach((tabPanel) => tabPanel.active = tabPanel.name === panel);
    if (this.component.panel !== panel) {
      this.component.panel = panel;
      this.component.emitChanged();
    }
  }

  handleArrowKey(event: KeyboardEvent): void {
    const currentSelectedTabIndex = this.tabItems.findIndex((tab) => tab.hasAttribute('active'));
    if (currentSelectedTabIndex === -1 || typeof currentSelectedTabIndex === 'undefined' ) {
      return;
    }

    if(currentSelectedTabIndex === 0 && event.code === 'ArrowLeft') {
      return;
    }

    if(currentSelectedTabIndex === this.tabItems.length - 1 && event.code === 'ArrowRight' ) {
      return;
    }

    if(event.code === 'ArrowLeft') {
      const previousPanel = this.tabItems[currentSelectedTabIndex - 1].getAttribute('panel');
      this.changeActivePanel(previousPanel!);
    } else {
      const nextPanel = this.tabItems[currentSelectedTabIndex + 1].getAttribute('panel');
      this.changeActivePanel(nextPanel!);
    }
  }

  propagateContrastedToItems(contrasted: boolean): void {
    this.tabItems.forEach((item) => item.contrasted = contrasted);
  }
}

export {
  OdsTabsController,
};
