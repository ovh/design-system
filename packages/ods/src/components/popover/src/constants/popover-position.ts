import { ODS_OVERLAY_POSITION, ODS_OVERLAY_POSITIONS, type OdsOverlayPosition } from '../../../../utils/overlay';

// Needed copy otherwise Stencil generate wrong types
type OdsPopoverPosition = OdsOverlayPosition;

export {
  ODS_OVERLAY_POSITION as ODS_POPOVER_POSITION,
  ODS_OVERLAY_POSITIONS as ODS_POPOVER_POSITIONS,
  type OdsPopoverPosition,
};
