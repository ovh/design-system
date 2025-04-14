import { Popover as VendorPopover } from '@ark-ui/react/popover';
import { type FC, type JSX, type ReactNode } from 'react';
import { POPOVER_POSITION, type PopoverPosition } from '../../constants/popover-position';

interface PopoverProp {
  children: ReactNode,
  open?: boolean,
  position?: PopoverPosition,
}

const Popover: FC<PopoverProp> = ({
  children,
  open,
  position = POPOVER_POSITION.top,
}): JSX.Element => {
  return (
    <VendorPopover.Root
      open={ open }
      positioning={{
        placement: position,
      }}>
      { children }
    </VendorPopover.Root>
  );
};

Popover.displayName = 'Popover';

export {
  Popover,
  type PopoverProp,
};
