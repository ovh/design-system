import { Popover as VendorPopover } from '@ark-ui/react/popover';
import { type FC, type JSX, type PropsWithChildren } from 'react';
import { POPOVER_POSITION, type PopoverPosition } from '../../constants/popover-position';

interface PopoverProp {
  open?: boolean,
  position?: PopoverPosition,
}

const Popover: FC<PropsWithChildren<PopoverProp>> = ({
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
