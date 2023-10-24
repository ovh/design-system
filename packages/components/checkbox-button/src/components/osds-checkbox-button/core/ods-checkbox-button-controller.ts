import { ODS_ICON_NAME } from '@ovhcloud/ods-component-icon';

class OdsCheckboxButtonController {

  computeIconName(checked = false, indeterminate = false): ODS_ICON_NAME | undefined {
    if (indeterminate) {
      return ODS_ICON_NAME.MINUS;
    } else if (checked) {
      return ODS_ICON_NAME.OK;
    }
    return undefined;
  }
}

export {
  OdsCheckboxButtonController,
};