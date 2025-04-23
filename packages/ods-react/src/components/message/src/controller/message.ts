import { ICON_NAME, type IconName } from '../../../icon/src';
import { MESSAGE_COLOR, type MessageColor } from '../constants/message-color';

function getIconName(color: MessageColor): IconName {
  switch (color) {
    case MESSAGE_COLOR.critical:
      return ICON_NAME.hexagonExclamation;
    case MESSAGE_COLOR.danger:
      return ICON_NAME.diamondExclamation;
    case MESSAGE_COLOR.information:
      return ICON_NAME.circleInfo;
    case MESSAGE_COLOR.success:
      return ICON_NAME.circleCheck;
    case MESSAGE_COLOR.warning:
      return ICON_NAME.triangleExclamation;
    default:
      return ICON_NAME.circleInfo;
  }
}

export {
  getIconName,
};
