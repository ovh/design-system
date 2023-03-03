import { OdsComponentController } from '../../ods-component-controller';
import { OdsTabBarItem } from './ods-tab-bar-item';

/**
 * common controller logic for text component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsTabBarItemController extends OdsComponentController<OdsTabBarItem> {
  constructor(component: OdsTabBarItem) {
    super(component);
  }

  /**
   * mandatory function
   */
  afterInit(): void {}
}
