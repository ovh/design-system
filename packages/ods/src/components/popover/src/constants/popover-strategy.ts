import { ODS_OVERLAY_STRATEGIES, ODS_OVERLAY_STRATEGY, type OdsOverlayStrategy } from '../../../../utils/overlay';

// Needed copy otherwise Stencil generate wrong types
type OdsPopoverStrategy = OdsOverlayStrategy;

export {
  ODS_OVERLAY_STRATEGIES as ODS_POPOVER_STRATEGIES,
  ODS_OVERLAY_STRATEGY as ODS_POPOVER_STRATEGY,
  type OdsPopoverStrategy,
};
