import { OdsComponentController } from '../ods-component-controller';
import { OdsText } from './ods-text';

/**
 * common controller logic for text component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsTextController extends OdsComponentController<OdsText> {

  constructor(component: OdsText) {
    super(component);
  }
}
