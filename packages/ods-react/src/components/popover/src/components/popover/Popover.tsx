import { Popover as VendorPopover } from '@ark-ui/react/popover';
import { type FC, type JSX, type PropsWithChildren } from 'react';
import { POPOVER_POSITION, type PopoverPosition } from '../../constants/popover-position';

interface PopoverOpenChangeDetail {
  open: boolean,
}

interface PopoverProp {
  onOpenChange?: (detail: PopoverOpenChangeDetail) => void
  open?: boolean,
  /** @type=POPOVER_POSITION */
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
