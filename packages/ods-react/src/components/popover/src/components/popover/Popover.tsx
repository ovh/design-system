import { Popover as VendorPopover } from '@ark-ui/react/popover';
import { type FC, type JSX, type PropsWithChildren } from 'react';
import { POPOVER_POSITION } from '../../constants/popover-position';
import { PopoverProvider, type PopoverRootProp, usePopover } from '../../contexts/usePopover';

/**
 * @inheritDoc PopoverRootProp
 */
interface PopoverProp extends PopoverRootProp {}

const PopoverRoot: FC<PropsWithChildren<PopoverProp>> = ({
  autoFocus = true,
  children,
  onOpenChange,
  open,
  position = POPOVER_POSITION.top,
  sameWidth,
  triggerId,
  ...props
}): JSX.Element => {
  const { contentId, triggerId: popoverTriggerId } = usePopover();

  return (
    <VendorPopover.Root
      autoFocus={ autoFocus }
      ids={{
        content: contentId,
        trigger: triggerId ?? popoverTriggerId,
      }}
      onOpenChange={ onOpenChange }
      open={ open }
      positioning={{
        placement: position,
        sameWidth: sameWidth,
      }}
      { ...props }>
      { children }
    </VendorPopover.Root>
  );
};

const Popover: FC<PropsWithChildren<PopoverProp>> = ({
  onPositionChange,
  ...props
}): JSX.Element => {
  return (
    <PopoverProvider onPositionChange={ onPositionChange }>
      <PopoverRoot { ...props } />
    </PopoverProvider>
  );
};

Popover.displayName = 'Popover';

export {
  Popover,
  type PopoverProp,
};
