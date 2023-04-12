import { OdsComponentController } from '../../ods-component-controller';
import { OdsTabs } from './ods-tabs';
import { OdsTabBarItem } from '../ods-tab-bar-item/ods-tab-bar-item';
import { OdsTabPanel } from '../ods-tab-panel/ods-tab-panel';

/**
 * common controller logic for text component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsTabsController extends OdsComponentController<OdsTabs> {
  constructor(component: OdsTabs) {
    super(component);
  }

  afterInit() {
    // nothing for now
  }

  beforeInit() {
    this.changeActivePanel(this.component.panel);
    this.component.onContrastedPropChange(this.component.contrasted);
  }

  changeActivePanel(panel: string) {
    const items = this.component.getTabItems();
    // if not item found, select the first one
    if (!items.find(item => item.panel === panel) && items.length) {
      panel = items[0].panel;
    }
    items.forEach(item => item.active = item.panel === panel);
    this.component.getTabPanels().forEach(tabPanel => tabPanel.active = tabPanel.name === panel);
    if (this.component.panel !== panel) {
      this.component.panel = panel;
      this.component.emitChanged();
    }
  }

  propagateContrastedToItems(contrasted: boolean) {
    this.component.getTabItems().forEach((item) => item.contrasted = contrasted);
  }

  getTabItems(elementTag: string) {
    return Array.from(this.component.el.querySelectorAll<OdsTabBarItem & HTMLElement>(elementTag));
  }

  getTabPanels(elementTag: string) {
    return Array.from(this.component.el.querySelectorAll<OdsTabPanel & HTMLElement>(elementTag));
  }

}
