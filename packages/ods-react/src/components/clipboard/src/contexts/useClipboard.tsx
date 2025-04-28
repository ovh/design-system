import { type JSX, type ReactNode, createContext, useContext } from 'react';

type ClipboardContextType = {
  disabled?: boolean,
};

const ClipboardContext = createContext<ClipboardContextType>({
  disabled: false,
});

interface ClipboardProviderProp {
  children: ReactNode,
  disabled?: boolean,
}

function ClipboardProvider({ children, disabled }: ClipboardProviderProp): JSX.Element {
  return (
    <ClipboardContext.Provider value={{ disabled }}>
      { children }
    </ClipboardContext.Provider>
  );
}

function useClipboard(): ClipboardContextType {
  return useContext(ClipboardContext);
}

export { ClipboardContext, ClipboardProvider, useClipboard };
