import { useState } from 'react';
import { Tabs, TabList, Tab, TabContent } from '../../src';

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


