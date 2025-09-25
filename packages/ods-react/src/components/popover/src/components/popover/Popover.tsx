import { Popover as VendorPopover } from '@ark-ui/react/popover';
import { type FC, type JSX, type PropsWithChildren } from 'react';
import { POPOVER_POSITION, type PopoverPosition } from '../../constants/popover-position';
import { PopoverProvider, usePopover } from '../../contexts/usePopover';

interface PopoverOpenChangeDetail {
  open: boolean,
}

interface PopoverProp {
  /**
   * Whether to automatically set focus on the first focusable content within the popover when opened.
   */
  autoFocus?: boolean,
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
  /**
   * Whether to make the floating element same width as the reference element.
   */
  sameWidth?: boolean,
  /**
   * ID of an external trigger element to use in place of the PopoverTrigger component.
   */
  triggerId?: string
}

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
