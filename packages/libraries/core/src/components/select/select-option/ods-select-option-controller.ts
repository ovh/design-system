import { OdsComponentController } from '../../ods-component-controller';
import { OdsSelectOption } from './ods-select-option';

/**
 * common controller logic for select option component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsSelectOptionController extends OdsComponentController<OdsSelectOption> {
  constructor(component: OdsSelectOption) {
    super(component);
  }
}
