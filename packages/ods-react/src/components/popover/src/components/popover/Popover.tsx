import { Popover as VendorPopover } from '@ark-ui/react/popover';
import { type FC, type JSX, type PropsWithChildren } from 'react';
import { POPOVER_POSITION, type PopoverPosition } from '../../constants/popover-position';

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

const Popover: FC<PropsWithChildren<PopoverProp>> = ({
  children,
  onOpenChange,
  open,
  position = POPOVER_POSITION.top,
  ...props
}): JSX.Element => {
  return (
    <VendorPopover.Root
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

Popover.displayName = 'Popover';

export {
  Popover,
  type PopoverOpenChangeDetail,
  type PopoverProp,
};
