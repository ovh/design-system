import { type JSX, type ReactNode, createContext, useContext, useState } from 'react';

type PopoverContextType = {
  triggerId?: string,
  setTriggerId?: (value: string) => void,
};

const PopoverContext = createContext<PopoverContextType>({});

interface PopoverProviderProp extends PopoverContextType{
  children: ReactNode,
}

function PopoverProvider({ children }: PopoverProviderProp): JSX.Element {
  const [triggerId, setTriggerId] = useState<string>();

  return (
    <PopoverContext.Provider value={{
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
  PopoverProvider,
  usePopover,
};
