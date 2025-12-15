import { type JSX, type ReactNode, createContext, useState } from 'react';
import { useContext } from '../../../../utils/context';
import { type TooltipPosition } from '../constants/tooltip-position';

interface TooltipOpenChangeDetail {
  open: boolean,
}

interface TooltipRootProp {
  /**
   * Number of milliseconds before closing the tooltip.
   */
  closeDelay?: number,
  /**
   * Callback fired when the tooltip open state changes.
   */
  onOpenChange?: (detail: TooltipOpenChangeDetail) => void
  /**
   * The controlled open state of the tooltip.
   */
  open?: boolean,
  /**
   * Number of milliseconds before opening the tooltip.
   */
  openDelay?: number,
  /**
   * @type=TOOLTIP_POSITION
   * The tooltip position around the trigger.
   */
  position?: TooltipPosition,
}

interface TooltipProviderProp {
  children: ReactNode,
}

type TooltipContextType = Omit<TooltipProviderProp, 'children'> & {
  setTriggerId: (value: string) => void,
  triggerId?: string,
};

const TooltipContext = createContext<TooltipContextType | undefined>(undefined);

function TooltipProvider({ children }: TooltipProviderProp): JSX.Element {
  const [triggerId, setTriggerId] = useState<string>();

  return (
    <TooltipContext.Provider value={{
      setTriggerId,
      triggerId,
    }}>
      { children }
    </TooltipContext.Provider>
  );
}

function useTooltip(): TooltipContextType {
  return useContext(TooltipContext);
}

export {
  TooltipContext,
  type TooltipOpenChangeDetail,
  TooltipProvider,
  type TooltipRootProp,
  useTooltip,
};
