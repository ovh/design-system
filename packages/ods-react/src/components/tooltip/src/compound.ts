import { type TooltipProp, Tooltip as TooltipRoot } from './components/tooltip/Tooltip';
import { TooltipContent, type TooltipContentProp } from './components/tooltip-content/TooltipContent';
import { TooltipTrigger, type TooltipTriggerProp } from './components/tooltip-trigger/TooltipTrigger';

const Tooltip = {
  Content: TooltipContent,
  Root: TooltipRoot,
  Trigger: TooltipTrigger,
};

export { Tooltip };
export type { TooltipProp, TooltipContentProp, TooltipTriggerProp };
export { TOOLTIP_POSITION, TOOLTIP_POSITIONS, type TooltipPosition } from './constants/tooltip-position';
export { type TooltipOpenChangeDetail } from './contexts/useTooltip';
