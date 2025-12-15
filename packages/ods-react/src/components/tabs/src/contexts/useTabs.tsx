import { type JSX, type ReactNode, type RefObject, createContext, useState } from 'react';
import { useContext } from '../../../../utils/context';
import { type TabsSize } from '../constants/tabs-size';
import { type TabsVariant } from '../constants/tabs-variant';

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
   * The size preset to use.
   */
  size?: TabsSize,
  /**
   * The controlled value of the selected tab.
   */
  value?: string,
  /**
   * The variant preset to use.
   */
  variant?: TabsVariant,
  /**
   * Whether the component displays navigation arrows around the tabs.
   */
  withArrows?: boolean,
}

interface TabsProviderProp extends Pick<TabsRootProp, 'size' | 'variant' | 'withArrows'> {
  children: ReactNode;
}

type TabsContextType = Omit<TabsProviderProp, 'children'> & {
  scrollContainerRef?: RefObject<HTMLElement> | null;
  setScrollContainerRef: (ref: RefObject<HTMLElement>) => void;
}

const TabsContext = createContext<TabsContextType | undefined>(undefined);

function TabsProvider({
  children,
  size,
  variant,
  withArrows,
}: TabsProviderProp): JSX.Element {
  const [scrollContainerRef, setScrollContainerRef] = useState<RefObject<HTMLElement> | null>(null);

  return (
    <TabsContext.Provider value={{
      scrollContainerRef,
      setScrollContainerRef,
      size,
      variant,
      withArrows,
    }}>
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
