import { OdsCheckboxButton } from './ods-checkbox-button';
import { OdsComponentController } from '../ods-component-controller';
import { ODS_ICON_NAME } from '@ovhcloud/ods-component-icon';

/**
 * common controller logic for checkbox button component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsCheckboxButtonController extends OdsComponentController<OdsCheckboxButton> {

  constructor(component: OdsCheckboxButton) {
    super(component);
  }

  computeIconName(checked = false, indeterminate = false): ODS_ICON_NAME | undefined {
    if (indeterminate) {
      return ODS_ICON_NAME.MINUS;
    } else if (checked) {
      return ODS_ICON_NAME.OK;
    }
    return undefined;
  }

}
