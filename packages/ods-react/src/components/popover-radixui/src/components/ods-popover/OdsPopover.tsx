import { Popover } from 'radix-ui';
import { type FC, type ReactNode } from 'react';

interface OdsPopoverProp {
  children: ReactNode,
}

const OdsPopover: FC<OdsPopoverProp> = ({ children }) => {
  return (
    <Popover.Root>
      { children }
    </Popover.Root>
  );
};

OdsPopover.displayName = 'OdsPopover';

export {
  OdsPopover,
  type OdsPopoverProp,
};
