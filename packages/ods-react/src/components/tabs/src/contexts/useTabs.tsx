import { type JSX, type ReactNode, type RefObject, createContext, useState } from 'react';
import { useContext } from '../../../../utils/context';
import { type TabsMountStrategy } from '../constants/tabs-mount-strategy';
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
   * @type=TABS_MOUNT_STRATEGY
   * @default-value='keep'
   * When the content of the inactive panels is rendered: always ('keep'), from the first time it is shown ('lazy')
   * or only while it is shown ('unmount'). Each TabContent can override it.
   * SEO: only 'keep' puts the content of the inactive panels in the server-rendered HTML, so it can be indexed.
   */
  mountStrategy?: TabsMountStrategy,
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

interface TabsProviderProp extends Pick<TabsRootProp, 'mountStrategy' | 'size' | 'variant' | 'withArrows'> {
  children: ReactNode;
}

type TabsContextType = Omit<TabsProviderProp, 'children'> & {
  scrollContainerRef?: RefObject<HTMLElement | null> | null;
  setScrollContainerRef: (ref: RefObject<HTMLElement | null>) => void;
}

const TabsContext = createContext<TabsContextType | undefined>(undefined);

function TabsProvider({
  children,
  mountStrategy,
  size,
  variant,
  withArrows,
}: TabsProviderProp): JSX.Element {
  const [scrollContainerRef, setScrollContainerRef] = useState<RefObject<HTMLElement | null> | null>(null);

  return (
    <TabsContext.Provider value={{
      mountStrategy,
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
