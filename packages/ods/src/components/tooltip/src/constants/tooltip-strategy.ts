import { ODS_OVERLAY_STRATEGIES, ODS_OVERLAY_STRATEGY, type OdsOverlayStrategy } from '../../../../utils/overlay';

// Needed copy otherwise Stencil generate wrong types
type OdsTooltipStrategy = OdsOverlayStrategy;

export {
  ODS_OVERLAY_STRATEGIES as ODS_TOOLTIP_STRATEGIES,
  ODS_OVERLAY_STRATEGY as ODS_TOOLTIP_STRATEGY,
  type OdsTooltipStrategy,
};
