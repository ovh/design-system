import { OdsComponentController } from '../../ods-component-controller';
import { OdsTabBar } from './ods-tab-bar';

/**
 * common controller logic for text component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsTabBarController extends OdsComponentController<OdsTabBar> {
  constructor(component: OdsTabBar) {
    super(component);
  }

  /**
   * mandatory function
   */
  afterInit(): void {}
}
