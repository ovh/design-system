import { Tooltip as VendorTooltip } from '@ark-ui/react/tooltip';
import { type FC, type JSX, type ReactNode } from 'react';
import { TOOLTIP_POSITION, type TooltipPosition } from '../../constants/tooltip-position';

interface TooltipProp {
  children: ReactNode,
  closeDelay?: number,
  open?: boolean,
  openDelay?: number,
  position?: TooltipPosition,
}

const Tooltip: FC<TooltipProp> = ({
  children,
  closeDelay = 50,
  open,
  openDelay = 0,
  position = TOOLTIP_POSITION.top,
}): JSX.Element => {
  return (
    <VendorTooltip.Root
      closeDelay={ closeDelay }
      interactive={ true }
      open={ open }
      openDelay={ openDelay }
      closeOnClick={ false }
      closeOnPointerDown={ false }
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
  type TooltipProp,
};
