import { OdsComponentController } from '../../ods-component-controller';
import { OdsTabPanel } from './ods-tab-panel';

/**
 * common controller logic for text component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsTabPanelController extends OdsComponentController<OdsTabPanel> {
  constructor(component: OdsTabPanel) {
    super(component);
  }

  /**
   * mandatory function
   */
  afterInit(): void {}
}
