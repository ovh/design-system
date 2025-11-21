import { OVERLAY_POSITION } from '../../../../utils/overlay';

enum TOASTER_POSITION {
  bottom = OVERLAY_POSITION.bottom,
  bottomEnd = OVERLAY_POSITION.bottomEnd,
  bottomStart = OVERLAY_POSITION.bottomStart,
  top = OVERLAY_POSITION.top,
  topEnd = OVERLAY_POSITION.topEnd,
  topStart = OVERLAY_POSITION.topStart,
}

type ToasterPosition = `${TOASTER_POSITION}`;

const TOASTER_POSITIONS = Object.freeze(Object.values(TOASTER_POSITION));

export {
  TOASTER_POSITION,
  TOASTER_POSITIONS,
  type ToasterPosition,
};
