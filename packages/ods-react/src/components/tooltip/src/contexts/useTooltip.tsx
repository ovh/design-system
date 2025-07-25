import { type JSX, type ReactNode, createContext, useContext, useState } from 'react';

type TooltipContextType = {
  triggerId?: string,
  setTriggerId?: (value: string) => void,
};

const TooltipContext = createContext<TooltipContextType>({});

interface TooltipProviderProp extends TooltipContextType{
  children: ReactNode,
}

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
  TooltipProvider,
  useTooltip,
};
