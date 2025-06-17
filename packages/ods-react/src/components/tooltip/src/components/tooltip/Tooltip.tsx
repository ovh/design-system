import { Tooltip as VendorTooltip } from '@ark-ui/react/tooltip';
import { type FC, type JSX, type PropsWithChildren } from 'react';
import { TOOLTIP_POSITION, type TooltipPosition } from '../../constants/tooltip-position';

interface TooltipOpenChangeDetail {
  open: boolean,
}

interface TooltipProp {
  closeDelay?: number,
  onOpenChange?: (detail: TooltipOpenChangeDetail) => void
  open?: boolean,
  openDelay?: number,
  /** @type=TOOLTIP_POSITION */
  position?: TooltipPosition,
}

const Tooltip: FC<PropsWithChildren<TooltipProp>> = ({
  children,
  closeDelay = 50,
  onOpenChange,
  open,
  openDelay = 0,
  position = TOOLTIP_POSITION.top,
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
      }}>
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
