import { Tooltip as VendorTooltip } from '@ark-ui/react/tooltip';
import { type FC, type JSX, type PropsWithChildren } from 'react';
import { TOOLTIP_POSITION, type TooltipPosition } from '../../constants/tooltip-position';

interface TooltipOpenChangeDetail {
  open: boolean,
}

interface TooltipProp {
  /**
   * Number of milliseconds before closing the tooltip.
   */
  closeDelay?: number,
  /**
   * Callback fired when the tooltip open state changes.
   */
  onOpenChange?: (detail: TooltipOpenChangeDetail) => void
  /**
   * The controlled open state of the tooltip.
   */
  open?: boolean,
  /**
   * Number of milliseconds before opening the tooltip.
   */
  openDelay?: number,
  /**
   * @type=TOOLTIP_POSITION
   * The tooltip position around the trigger.
   */
  position?: TooltipPosition,
}

const Tooltip: FC<PropsWithChildren<TooltipProp>> = ({
  children,
  closeDelay = 50,
  onOpenChange,
  open,
  openDelay = 0,
  position = TOOLTIP_POSITION.top,
  ...props
}): JSX.Element => {
  return (
    <VendorTooltip.Root
      closeDelay={ closeDelay }
      closeOnClick={ false }
      closeOnPointerDown={ false }
      closeOnScroll={ false }
      interactive={ true }
      onOpenChange={ onOpenChange }
      open={ open }
      openDelay={ openDelay }
      positioning={{
        placement: position,
      }}
      { ...props }>
      { children }
    </VendorTooltip.Root>
  );
};

Tooltip.displayName = 'Tooltip';

export {
  Tooltip,
  type TooltipOpenChangeDetail,
  type TooltipProp,
};
