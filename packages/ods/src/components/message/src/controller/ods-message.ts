import type { OdsIconName } from '../../../icon/src';
import type { OdsMessageColor } from '../constants/message-color';
import { ODS_ICON_NAME } from '../../../icon/src';
import { ODS_MESSAGE_COLOR } from '../constants/message-color';

function getIconName(color: OdsMessageColor): OdsIconName {
  switch (color) {
    case ODS_MESSAGE_COLOR.critical:
      return ODS_ICON_NAME.criticalHexagon;
    case ODS_MESSAGE_COLOR.danger:
      return ODS_ICON_NAME.dangerDiamond;
    case ODS_MESSAGE_COLOR.information:
      return ODS_ICON_NAME.infoCircle;
    case ODS_MESSAGE_COLOR.success:
      return ODS_ICON_NAME.checkCircle;
    case ODS_MESSAGE_COLOR.warning:
      return ODS_ICON_NAME.warningTriangle;
    default:
      return ODS_ICON_NAME.infoCircle;
  }
}

export {
  getIconName,
};
