import { OdsDatePicker } from './ods-date-picker';
import { OdsComponentController } from '../ods-component-controller';

/**
 * common controller logic for cmpnt component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsDatePickerController extends OdsComponentController<OdsDatePicker> {
  // private readonly logger = new OdsLogger('OdsDatePickerController');

  constructor(component: OdsDatePicker) {
    super(component);
  }

  /**
   * Attributes validation documentation
   */
  validateAttributes(): void {
      return;
  }
}
