import { type JSX, type ReactNode, createContext, useContext, useState } from 'react';

interface PopoverProviderProp {
  children: ReactNode,
}

type PopoverContextType = {
  contentId?: string,
  triggerId?: string,
  setContentId: (value: string) => void,
  setTriggerId: (value: string) => void,
};

const PopoverContext = createContext<PopoverContextType | undefined>(undefined);

function PopoverProvider({ children }: PopoverProviderProp): JSX.Element {
  const [contentId, setContentId] = useState<string>();
  const [triggerId, setTriggerId] = useState<string>();

  return (
    <PopoverContext.Provider value={{
      contentId,
      setContentId,
      setTriggerId,
      triggerId,
    }}>
      { children }
    </PopoverContext.Provider>
  );
}

function usePopover(): PopoverContextType {
  const context = useContext(PopoverContext);
  if (!context) {
    throw new Error('usePopover must be used within a PopoverProvider');
  }
  return context;
}

export {
  PopoverContext,
  PopoverProvider,
  usePopover,
};
