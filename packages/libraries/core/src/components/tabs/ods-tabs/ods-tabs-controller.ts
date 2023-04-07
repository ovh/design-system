import { OdsComponentController } from '../../ods-component-controller';
import { OdsTabs } from './ods-tabs';

/**
 * common controller logic for text component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsTabsController extends OdsComponentController<OdsTabs> {
  constructor(component: OdsTabs) {
    super(component);
  }


  afterInit() {
    this.changeActivePanel(this.component.panel);
  }

  changeActivePanel(panel: string) {
    this.component.getTabItems().forEach(item => item.active = item.panel === panel);
    this.component.getTabPanels().forEach(tabPanel => tabPanel.active = tabPanel.name === panel);
    this.component.panel = panel;
    this.component.emitChanged();
  }

}
