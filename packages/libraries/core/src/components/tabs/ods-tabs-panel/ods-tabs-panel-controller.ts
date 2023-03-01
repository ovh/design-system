import { OdsComponentController } from '../../ods-component-controller';
import { OdsTabsPanel } from './ods-tabs-panel';

/**
 * common controller logic for text component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsTabsPanelController extends OdsComponentController<OdsTabsPanel> {
  constructor(component: OdsTabsPanel) {
    super(component);
  }

  /**
   * mandatory function
   */
  afterInit(): void {}
}
