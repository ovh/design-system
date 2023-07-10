import { OdsFormField } from './ods-form-field';
import { OdsComponentController } from '../ods-component-controller';

/**
 * common controller logic for cmpnt component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsFormFieldController extends OdsComponentController<OdsFormField> {
  // private readonly logger = new OdsLogger('OdsFormFieldController');

  constructor(component: OdsFormField) {
    super(component);
  }
}
