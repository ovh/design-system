import { Popover as VendorPopover } from '@ark-ui/react/popover';
import { type FC, type JSX, type PropsWithChildren } from 'react';
import { POPOVER_POSITION, type PopoverPosition } from '../../constants/popover-position';
import { PopoverProvider, usePopover } from '../../contexts/usePopover';

interface PopoverOpenChangeDetail {
  open: boolean,
}

interface PopoverProp {
  /**
   * Callback fired when the popover open state changes.
   */
  onOpenChange?: (detail: PopoverOpenChangeDetail) => void
  /**
   * The controlled open state of the popover.
   */
  open?: boolean,
  /**
   * @type=POPOVER_POSITION
   * The popover position around the trigger.
   */
  position?: PopoverPosition,
}

const PopoverRoot: FC<PropsWithChildren<PopoverProp>> = ({
  children,
  onOpenChange,
  open,
  position = POPOVER_POSITION.top,
  ...props
}): JSX.Element => {
  const { triggerId } = usePopover();

  return (
    <VendorPopover.Root
      ids={{
        trigger: triggerId,
      }}
      onOpenChange={ onOpenChange }
      open={ open }
      positioning={{
        placement: position,
      }}
      { ...props }>
      { children }
    </VendorPopover.Root>
  );
};

const Popover: FC<PropsWithChildren<PopoverProp>> = (props): JSX.Element => {
  return (
    <PopoverProvider>
      <PopoverRoot { ...props } />
    </PopoverProvider>
  );
};

Popover.displayName = 'Popover';

export {
  Popover,
  type PopoverOpenChangeDetail,
  type PopoverProp,
};
