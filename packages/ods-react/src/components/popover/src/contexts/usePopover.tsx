import { type CSSProperties, type JSX, type ReactNode, createContext, useState } from 'react';
import { useContext } from '../../../../utils/context';
import { type PopoverPosition } from '../constants/popover-position';

interface PopoverOpenChangeDetail {
  open: boolean,
}

interface PopoverPositionChangeDetail {
  /**  @type=POPOVER_POSITION */
  position: PopoverPosition,
}

interface PopoverRootProp {
  /**
   * Whether to automatically set focus on the first focusable content within the popover when opened.
   */
  autoFocus?: boolean,
  /**
   * The main axis offset or gap between the reference and floating elements
   */
  gutter?: number;
  /**
   * Callback fired when the popover open state changes.
   */
  onOpenChange?: (detail: PopoverOpenChangeDetail) => void,
  /**
   * Callback fired when the popover position changes.
   */
  onPositionChange?: (detail: PopoverPositionChangeDetail) => void,
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
   * Custom style applied to the overlay positioner. Useful if you want to override the overlay z-index.
   */
  positionerStyle?: CSSProperties,
  /**
   * Whether to make the floating element same width as the reference element.
   */
  sameWidth?: boolean,
  /**
   * ID of an external trigger element to use in place of the PopoverTrigger component.
   */
  triggerId?: string,
}

interface PopoverProviderProp extends Pick<PopoverRootProp, 'onPositionChange' | 'positionerStyle'> {
  children: ReactNode,
}

type PopoverContextType = Omit<PopoverProviderProp, 'children'> & {
  contentId?: string,
  setContentId: (value: string) => void,
  setTriggerId: (value: string) => void,
  triggerId?: string,
};

const PopoverContext = createContext<PopoverContextType | undefined>(undefined);

function PopoverProvider({
  children,
  onPositionChange,
  positionerStyle,
}: PopoverProviderProp): JSX.Element {
  const [contentId, setContentId] = useState<string>();
  const [triggerId, setTriggerId] = useState<string>();

  return (
    <PopoverContext.Provider value={{
      contentId,
      onPositionChange,
      positionerStyle,
      setContentId,
      setTriggerId,
      triggerId,
    }}>
      { children }
    </PopoverContext.Provider>
  );
}

function usePopover(): PopoverContextType {
  return useContext(PopoverContext);
}

export {
  PopoverContext,
  type PopoverOpenChangeDetail,
  type PopoverPositionChangeDetail,
  PopoverProvider,
  type PopoverRootProp,
  usePopover,
};
