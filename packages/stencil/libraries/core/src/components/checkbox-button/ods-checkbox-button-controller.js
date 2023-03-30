import { OdsComponentController } from '../ods-component-controller';
import { OdsIconName } from '../icon/ods-icon-size';
/**
 * common controller logic for checkbox button component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsCheckboxButtonController extends OdsComponentController {
  constructor(component) {
    super(component);
  }
  computeIconName(checked = false, indeterminate = false) {
    if (indeterminate) {
      return OdsIconName.MINUS;
    }
    else if (checked) {
      return OdsIconName.OK;
    }
    return undefined;
  }
}
