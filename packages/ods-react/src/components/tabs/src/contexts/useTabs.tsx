import { type JSX, type ReactNode, type RefObject, createContext, useContext, useState } from 'react';

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

interface TabsContextType {
  withArrows?: boolean;
  scrollContainerRef?: RefObject<HTMLElement> | null;
  setScrollContainerRef?: (ref: RefObject<HTMLElement>) => void;
}

interface TabsProviderProp extends Pick<TabsRootProp, 'withArrows'> {
  children: ReactNode;
}

const TabsContext = createContext<TabsContextType>({});

function TabsProvider({ children, withArrows }: TabsProviderProp): JSX.Element {
  const [scrollContainerRef, setScrollContainerRef] = useState<RefObject<HTMLElement> | null>(null);

  return (
    <TabsContext.Provider value={{ withArrows, scrollContainerRef, setScrollContainerRef }}>
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
