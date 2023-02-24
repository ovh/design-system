import { OdsComponentController } from '../ods-component-controller';
import { OdsRadioButton } from './ods-radio-button';

/**
 * common controller logic for radio button component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsRadioButtonController extends OdsComponentController<OdsRadioButton> {

  constructor(component: OdsRadioButton) {
    super(component);
  }
}
