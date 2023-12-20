import { ODS_ICON_NAME } from "../../../../../icon/src";
class OdsCheckboxButtonController {
  computeIconName(checked = false, indeterminate = false) {
    if (indeterminate) {
      return ODS_ICON_NAME.MINUS;
    }
    else if (checked) {
      return ODS_ICON_NAME.OK;
    }
    return undefined;
  }
}
export { OdsCheckboxButtonController, };
