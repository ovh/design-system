import { Popover } from '@ark-ui/react/popover';
import { type FC, type ReactNode } from 'react';
import { ODS_POPOVER_POSITION, type OdsPopoverPosition } from '../../constants/popover-position';

interface OdsPopoverProp {
  children: ReactNode,
  position?: OdsPopoverPosition,
}

const OdsPopover: FC<OdsPopoverProp> = ({
  children,
  position = ODS_POPOVER_POSITION.top,
}) => {
  return (
    <Popover.Root
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
