import { ODS_OVERLAY_POSITION, ODS_OVERLAY_POSITIONS, type OdsOverlayPosition } from '../../../../utils/overlay';

// Needed copy otherwise Stencil generate wrong types
type OdsTooltipPosition = OdsOverlayPosition;

export {
  ODS_OVERLAY_POSITION as ODS_TOOLTIP_POSITION,
  ODS_OVERLAY_POSITIONS as ODS_TOOLTIP_POSITIONS,
  type OdsTooltipPosition,
};
