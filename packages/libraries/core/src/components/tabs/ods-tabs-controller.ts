import { OdsComponentController } from '../ods-component-controller';
import { OdsTabs } from './ods-tabs';

/**
 * common controller logic for text component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsTabsController extends OdsComponentController<OdsTabs> {
  constructor(component: OdsTabs) {
    super(component);
  }

  /**
   * mandatory function
   */
  afterInit(): void {}
}
