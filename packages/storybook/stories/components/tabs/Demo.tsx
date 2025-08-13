import { Tabs, TabList, Tab } from '@ovhcloud/ods-react';
import React from 'react';

export default () => (
  <Tabs defaultValue="tab1">
    <TabList>
      <Tab value="tab1">Tab 1</Tab>
      <Tab value="tab2">Tab 2</Tab>
      <Tab value="tab3">Tab 3</Tab>
    </TabList>
  </Tabs>
);
