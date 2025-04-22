import { Tabs, TabList, Tab, TabContent } from '../../src';

export default {
  component: Tabs,
  title: 'Tests rendering',
};

export const customStyle = () => (
  <Tabs
    data-testid="custom-style"
    defaultValue="tab1"
    style={{ height: '42px', padding: 0 }}>
      <TabList>
        <Tab value="tab1">Tab 1</Tab>
        <Tab value="tab2">Tab 2</Tab>
        <Tab value="tab3">Tab 3</Tab>
      </TabList>
      <TabContent value="tab1">
        <p>Content 1</p>
      </TabContent>
      <TabContent value="tab2">
        <p>Content 2</p>
      </TabContent>
      <TabContent value="tab3">
        <p>Content 3</p>
      </TabContent>
    </Tabs>
);

export const render = () => (
  <Tabs data-testid="render" defaultValue="tab1">
    <TabList>
      <Tab value="tab1">Tab 1</Tab>
      <Tab value="tab2">Tab 2</Tab>
      <Tab value="tab3">Tab 3</Tab>
    </TabList>
    <TabContent value="tab1">
      <p>Content 1</p>
    </TabContent>
    <TabContent value="tab2">
      <p>Content 2</p>
    </TabContent>
    <TabContent value="tab3">
      <p>Content 3</p>
    </TabContent>
  </Tabs>
);
