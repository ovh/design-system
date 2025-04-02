import { Popover } from '@ark-ui/react/popover';
import { type FC, type JSX, type ReactNode } from 'react';
import { ODS_POPOVER_POSITION, type OdsPopoverPosition } from '../../constants/popover-position';

interface OdsPopoverProp {
  children: ReactNode,
  isOpen?: boolean,
  position?: OdsPopoverPosition,
}

const OdsPopover: FC<OdsPopoverProp> = ({
  children,
  isOpen,
  position = ODS_POPOVER_POSITION.top,
}): JSX.Element => {
  return (
    <Popover.Root
      open={ isOpen }
      positioning={{
        placement: position,
      }}>
      { children }
    </Popover.Root>
  );
};

OdsPopover.displayName = 'OdsPopover';

export {
  OdsPopover,
  type OdsPopoverProp,
};
