import type { OdsIconName } from '../../../icon/src';
import type { OdsMessageColor } from '../constants/message-color';
import { ODS_ICON_NAME } from '../../../icon/src';
import { ODS_MESSAGE_COLOR } from '../constants/message-color';

function getIconName(color: OdsMessageColor): OdsIconName {
  switch (color) {
    case ODS_MESSAGE_COLOR.critical:
      return ODS_ICON_NAME.hexagonExclamation;
    case ODS_MESSAGE_COLOR.danger:
      return ODS_ICON_NAME.diamondExclamation;
    case ODS_MESSAGE_COLOR.information:
      return ODS_ICON_NAME.circleInfo;
    case ODS_MESSAGE_COLOR.success:
      return ODS_ICON_NAME.circleCheck;
    case ODS_MESSAGE_COLOR.warning:
      return ODS_ICON_NAME.triangleExclamation;
    default:
      return ODS_ICON_NAME.circleInfo;
  }
}

export {
  getIconName,
};
