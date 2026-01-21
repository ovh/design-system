import { Tab, type TabProp } from './components/tab/Tab';
import { TabContent, type TabContentProp } from './components/tab-content/TabContent';
import { TabList, type TabListProp } from './components/tab-list/TabList';
import { type TabsProp, Tabs as TabsRoot } from './components/tabs/Tabs';

const Tabs = Object.assign(TabsRoot, {
  Content: TabContent,
  List: TabList,
  Tab: Tab,
});

export { Tabs };
export { Tab, TabContent, TabList };
export type { TabsProp, TabListProp, TabProp, TabContentProp };
export { TABS_SIZE, TABS_SIZES, type TabsSize } from './constants/tabs-size';
export { TABS_VARIANT, TABS_VARIANTS, type TabsVariant } from './constants/tabs-variant';
export { type TabsValueChangeEvent } from './contexts/useTabs';
