import { Tooltip as VendorTooltip } from '@ark-ui/react/tooltip';
import { type FC, type JSX, type PropsWithChildren } from 'react';
import { TOOLTIP_POSITION } from '../../constants/tooltip-position';
import { TooltipProvider, type TooltipRootProp, useTooltip } from '../../contexts/useTooltip';

interface TooltipProp extends TooltipRootProp {}

const TooltipRoot: FC<PropsWithChildren<TooltipProp>> = ({
  children,
  closeDelay = 50,
  onOpenChange,
  open,
  openDelay = 0,
  position = TOOLTIP_POSITION.top,
  ...props
}): JSX.Element => {
  const { triggerId } = useTooltip();

  return (
    <VendorTooltip.Root
      closeDelay={ closeDelay }
      closeOnClick={ false }
      closeOnPointerDown={ false }
      closeOnScroll={ false }
      ids={{
        trigger: triggerId,
      }}
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

const Tooltip: FC<PropsWithChildren<TooltipProp>> = (props): JSX.Element => {
  return (
    <TooltipProvider>
      <TooltipRoot { ...props } />
    </TooltipProvider>
  );
};

Tooltip.displayName = 'Tooltip';

export {
  Tooltip,
  type TooltipProp,
};
