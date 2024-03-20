enum ODS_TOOLTIP_POSITION {
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

type OdsTooltipPosition = `${ODS_TOOLTIP_POSITION}`;

const ODS_TOOLTIP_POSITIONS = Object.freeze(Object.values(ODS_TOOLTIP_POSITION));

export {
  ODS_TOOLTIP_POSITION,
  ODS_TOOLTIP_POSITIONS,
  type OdsTooltipPosition,
};
