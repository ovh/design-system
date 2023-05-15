import { OdsCollapsible } from './ods-collapsible';
import { OdsComponentController } from '../ods-component-controller';

/**
 * common controller logic for cmpnt component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsCollapsibleController extends OdsComponentController<OdsCollapsible> {

  constructor(component: OdsCollapsible) {
    super(component);
  }

  /**
   * handle on toggle the `details` vanilla tag by synchronizing its `open` status into our `opened` one.
   * in case of no `details` already set, it won't change the `opened` status.
   */
  onToggle(): void {
    this.component.opened = !this.component.opened;
    this.component.emitToggle(this.component.opened || false);
  }
}
