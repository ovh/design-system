import { OdsComponentController } from '../../ods-component-controller';
import { OdsSelectGroup } from './ods-select-group';

/**
 * common controller logic for select group component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsSelectGroupController extends OdsComponentController<OdsSelectGroup> {
  constructor(component: OdsSelectGroup) {
    super(component);
  }
}
