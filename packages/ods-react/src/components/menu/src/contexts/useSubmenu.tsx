import type { JSX, ReactNode } from 'react';
import { createContext, useContext as useReactContext } from 'react';

interface SubmenuContextType {
  isSubmenu: boolean,
}

const SubmenuContext = createContext<SubmenuContextType | undefined>(undefined);

interface SubmenuProviderProp {
  children: ReactNode,
}

function SubmenuProvider({ children }: SubmenuProviderProp): JSX.Element {
  return (
    <SubmenuContext.Provider value={{ isSubmenu: true }}>
      { children }
    </SubmenuContext.Provider>
  );
}

function useSubmenu(): SubmenuContextType {
  const context = useReactContext(SubmenuContext);
  return context ?? { isSubmenu: false };
}

export {
  SubmenuContext,
  SubmenuProvider,
  type SubmenuContextType,
  useSubmenu,
};
