import { type JSX, type ReactNode, createContext, useContext } from 'react';

interface TabsValueChangeEvent {
  value: string,
}

interface TabsRootProp {
  /**
   * The initial value of the selected tab. Use when you don't need to control the value of the tabs.
   */
  defaultValue?: string,
  /**
   * Callback fired when the state of selected tab changes.
   */
  onValueChange?: (event: TabsValueChangeEvent) => void,
  /**
   * The controlled value of the selected tab.
   */
  value?: string,
  /**
   * Whether the component displays navigation arrows around the tabs.
   */
  withArrows?: boolean,
}

type TabsContextType = Pick<TabsRootProp, 'withArrows'>;

interface TabsProviderProp extends TabsContextType {
  children: ReactNode;
}

const TabsContext = createContext<TabsContextType>({});

function TabsProvider({ children, withArrows }: TabsProviderProp): JSX.Element {
  return (
    <TabsContext.Provider value={{ withArrows }}>
      { children }
    </TabsContext.Provider>
  );
}

function useTabs(): TabsContextType {
  return useContext(TabsContext);
}

export {
  TabsProvider,
  type TabsRootProp,
  type TabsValueChangeEvent,
  useTabs,
};
