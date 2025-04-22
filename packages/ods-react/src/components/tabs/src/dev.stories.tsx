import { Tabs, TabList, Tab, TabContent } from '.';

export default {
  component: Tabs,
  title: 'Tabs dev',
};

export const Default = () => (
  <Tabs defaultValue="tab1">
    <TabList>
      <Tab value="tab1">Tab 1</Tab>
      <Tab value="tab2">Tab 2</Tab>
      <Tab value="tab3">Tab 3</Tab>
    </TabList>
    <TabContent value="tab1">
      <p>Tab 1 Content</p>
    </TabContent>
    <TabContent value="tab2">
      <p>Tab 2 Content</p>
    </TabContent>
    <TabContent value="tab3">
      <p>Tab 3 Content</p>
    </TabContent>
  </Tabs>
);

export const Disabled = () => (
  <Tabs defaultValue="tab1">
    <TabList>
      <Tab value="tab1">Tab 1</Tab>
      <Tab value="tab2" disabled>Tab 2</Tab>
      <Tab value="tab3" disabled>Tab 3</Tab>
    </TabList>
    <TabContent value="tab1">
      <p>Tab 1 Content</p>
    </TabContent>
    <TabContent value="tab2">
      <p>Tab 2 Content</p>
    </TabContent>
    <TabContent value="tab3">
      <p>Tab 3 Content</p>
    </TabContent>
  </Tabs>
);

export const OverflowX = () => (
  <div style={{ width: '300px' }}>
    <Tabs defaultValue="tab1">
      <TabList>
        <Tab value="tab1">Tab 1</Tab>
        <Tab value="tab2">Tab 2</Tab>
        <Tab value="tab3">Tab 3</Tab>
        <Tab value="tab4">Tab 4</Tab>
        <Tab value="tab5">Tab 5</Tab>
        <Tab value="tab6">Tab 6</Tab>
      </TabList>
      <TabContent value="tab1">
        <p>Tab 1 content</p>
      </TabContent>
      <TabContent value="tab2">
        <p>Tab 2 content</p>
      </TabContent>
      <TabContent value="tab3">
        <p>Tab 3 content</p>
      </TabContent>
      <TabContent value="tab4">
        <p>Tab 4 content</p>
      </TabContent>
      <TabContent value="tab5">
        <p>Tab 5 content</p>
      </TabContent>
      <TabContent value="tab6">
        <p>Tab 6 content</p>
      </TabContent>
    </Tabs>
  </div>
);
