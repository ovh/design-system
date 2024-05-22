import type { OdsIconName } from '../../../icon/src';
import type { OdsMessageColor } from '../constants/message-color';
import { ODS_ICON_NAME } from '../../../icon/src';

function getIconName(color: OdsMessageColor): OdsIconName {
  switch (color) {
    case 'critical':
      return ODS_ICON_NAME.critical;
    case 'danger':
      return ODS_ICON_NAME.danger;
    case 'information':
      return ODS_ICON_NAME.infoCircle;
    case 'success':
      return ODS_ICON_NAME.successCircle;
    case 'warning':
      return ODS_ICON_NAME.warningTriangle;
    default:
      return ODS_ICON_NAME.infoCircle;
  }
}

async function handleKeySpace(event: KeyboardEvent, callback: (event: KeyboardEvent) => void | Promise<void>): Promise<void> {
  event.preventDefault();
  if(event.key === ' ') {
    await callback(event);
  }
}

export {
  getIconName,
  handleKeySpace,
};
