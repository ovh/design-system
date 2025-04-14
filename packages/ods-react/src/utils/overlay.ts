enum OVERLAY_POSITION {
  bottom = 'bottom',
  bottomEnd = 'bottom-end',
  bottomStart = 'bottom-start',
  left = 'left',
  leftEnd = 'left-end',
  leftStart = 'left-start',
  right = 'right',
  rightEnd = 'right-end',
  rightStart = 'right-start',
  top = 'top',
  topEnd = 'top-end',
  topStart = 'top-start',
}

type OverlayPosition = `${OVERLAY_POSITION}`;

const OVERLAY_POSITIONS = Object.freeze(Object.values(OVERLAY_POSITION));

export {
  OVERLAY_POSITION,
  OVERLAY_POSITIONS,
  type OverlayPosition,
};
