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
   * Removed in v20, use overlayConfig.gutter. Typed never so that the v19 prop also fails through a spread object.
   * @internal
   */
  gutter?: never,
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
   * The overlay configuration.
   */
  overlayConfig?: {
    /**
     * Whether to flip the position.
     */
    flip?: boolean,
    /**
     * The main axis offset or gap between the reference and floating elements.
     */
    gutter?: number;
    /**
     * @type=POPOVER_POSITION
     * \@default-value=POPOVER_POSITION.top
     * The popover position around the trigger.
     */
    position?: PopoverPosition,
    /**
     * Whether to make the floating element same width as the reference element.
     */
    sameWidth?: boolean,
  },
  /**
   * Removed in v20, use overlayConfig.position. Typed never so that the v19 prop also fails through a spread object.
   * @internal
   */
  position?: never,
  /**
   * Custom style applied to the overlay positioner. Useful if you want to override the overlay z-index.
   */
  positionerStyle?: CSSProperties,
  /**
   * Removed in v20, use overlayConfig.sameWidth. Typed never so that the v19 prop also fails through a spread object.
   * @internal
   */
  sameWidth?: never,
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
