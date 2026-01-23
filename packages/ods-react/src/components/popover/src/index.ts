import { type PopoverProp, Popover as PopoverRoot } from './components/popover/Popover';
import { PopoverContent, type PopoverContentProp } from './components/popover-content/PopoverContent';
import { PopoverTrigger, type PopoverTriggerProp } from './components/popover-trigger/PopoverTrigger';

const Popover = Object.assign(PopoverRoot, {
  Content: PopoverContent,
  Trigger: PopoverTrigger,
});

export { Popover };
export { PopoverContent, PopoverTrigger };
export type { PopoverProp, PopoverContentProp, PopoverTriggerProp };
export { POPOVER_POSITION, POPOVER_POSITIONS, type PopoverPosition } from './constants/popover-position';
export { type PopoverOpenChangeDetail, type PopoverPositionChangeDetail } from './contexts/usePopover';
