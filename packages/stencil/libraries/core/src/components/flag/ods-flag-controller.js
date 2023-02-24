import { OdsComponentController } from '../ods-component-controller';
/**
 * common controller logic for flag component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsFlagController extends OdsComponentController {
  constructor(component) {
    super(component);
  }
}
