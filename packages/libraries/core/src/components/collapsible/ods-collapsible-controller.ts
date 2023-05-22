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

  onToggle(): void {
    this.component.emitToggle(this.component.opened || false);
  }
}
