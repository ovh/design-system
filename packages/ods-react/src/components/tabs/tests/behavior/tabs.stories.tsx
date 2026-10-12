import { Suspense, startTransition, use, useState } from 'react';
import { Tabs, TabList, Tab, TabContent, type TabsMountStrategy } from '../../src';

export default {
  component: Tabs,
  title: 'Tests behavior',
};

export const KeyboardNavigation = () => (
  <Tabs defaultValue="tab1">
    <TabList>
      <Tab value="tab1">Tab 1</Tab>
      <Tab value="tab2">Tab 2</Tab>
      <Tab value="tab3">Tab 3</Tab>
    </TabList>
    <TabContent value="tab1">Content 1</TabContent>
    <TabContent value="tab2">Content 2</TabContent>
    <TabContent value="tab3">Content 3</TabContent>
  </Tabs>
);

export const Controlled = () => {
  const [active, setActive] = useState('tab1');
  return (
    <>
      <div data-testid="controlled-value">{active}</div>
      <Tabs value={ active } onValueChange={ ({ value }) => setActive(value) }>
        <TabList>
          <Tab value="tab1">Tab 1</Tab>
          <Tab value="tab2">Tab 2</Tab>
          <Tab value="tab3">Tab 3</Tab>
        </TabList>
        <TabContent value="tab1">Content 1</TabContent>
        <TabContent value="tab2">Content 2</TabContent>
        <TabContent value="tab3">Content 3</TabContent>
      </Tabs>
    </>
  );
};

export const Disabled = () => (
  <Tabs defaultValue="tab1">
    <TabList>
      <Tab value="tab1">Tab 1</Tab>
      <Tab value="tab2" disabled>Tab 2</Tab>
      <Tab value="tab3" disabled>Tab 3</Tab>
    </TabList>
    <TabContent value="tab1">Content 1</TabContent>
    <TabContent value="tab2">Content 2</TabContent>
    <TabContent value="tab3">Content 3</TabContent>
  </Tabs>
);

const MountStrategyTabs = ({ mountStrategy, overrides = {} }: {
  mountStrategy?: TabsMountStrategy,
  overrides?: Partial<Record<'tab2' | 'tab3', TabsMountStrategy>>,
}) => (
  <Tabs defaultValue="tab1" mountStrategy={ mountStrategy }>
    <TabList>
      <Tab value="tab1">Tab 1</Tab>
      <Tab value="tab2">Tab 2</Tab>
      <Tab value="tab3">Tab 3</Tab>
    </TabList>
    <TabContent value="tab1">
      <p data-testid="content-1">Content 1</p>
    </TabContent>
    <TabContent mountStrategy={ overrides.tab2 } value="tab2">
      <input aria-label="Tab 2 input" data-testid="input-2" />
    </TabContent>
    <TabContent mountStrategy={ overrides.tab3 } value="tab3">
      <p data-testid="content-3">Content 3</p>
    </TabContent>
  </Tabs>
);

export const MountStrategyKeep = () => <MountStrategyTabs mountStrategy="keep" />;

export const MountStrategyLazy = () => <MountStrategyTabs mountStrategy="lazy" />;

export const MountStrategyUnmount = () => <MountStrategyTabs mountStrategy="unmount" />;

export const MountStrategyOverride = () => (
  <MountStrategyTabs
    mountStrategy="lazy"
    overrides={{ tab2: 'unmount', tab3: 'keep' }} />
);

const neverResolved = new Promise<never>(() => {});

const SuspendedContent = () => {
  use(neverResolved);

  return <p data-testid="suspended-content">Suspended content</p>;
};

export const MountStrategyLazyAbandonedTransition = () => {
  const [value, setValue] = useState('tab1');
  const [, setRenderCount] = useState(0);

  return (
    <>
      <button data-testid="transition-to-tab2" onClick={ () => startTransition(() => setValue('tab2')) }>Transition to tab 2</button>
      <button data-testid="back-to-tab1" onClick={ () => setValue('tab1') }>Back to tab 1</button>
      <button data-testid="rerender" onClick={ () => setRenderCount((count) => count + 1) }>Rerender</button>

      <Suspense fallback={ <p data-testid="fallback">Loading</p> }>
        <Tabs mountStrategy="lazy" onValueChange={ ({ value }) => setValue(value) } value={ value }>
          <TabList>
            <Tab value="tab1">Tab 1</Tab>
            <Tab value="tab2">Tab 2</Tab>
          </TabList>
          <TabContent value="tab1">
            <p data-testid="content-1">Content 1</p>
          </TabContent>
          <TabContent value="tab2">
            <SuspendedContent />
          </TabContent>
        </Tabs>
      </Suspense>
    </>
  );
};
