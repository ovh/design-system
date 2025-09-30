import { type Meta, type StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Tabs, TabList, Tab, TabContent, type TabsProp, type TabsValueChangeEvent } from '../../../../ods-react/src/components/tabs/src';
import { excludeFromDemoControls } from '../../../src/helpers/controls';
import { staticSourceRenderConfig } from '../../../src/helpers/source';

type Story = StoryObj<TabsProp>;

const meta: Meta<TabsProp> = {
  component: Tabs,
  subcomponents: { TabList, Tab, TabContent },
  argTypes: excludeFromDemoControls(['defaultValue', 'value', 'onValueChange']),
  title: 'React Components/Tabs',
};

export default meta;

export const Demo: Story = {
  render: () => (
    <Tabs defaultValue='tab1'>
      <TabList>
        <Tab value="tab1">Tab 1</Tab>
        <Tab value="tab2">Tab 2</Tab>
        <Tab value="tab3">Tab 3</Tab>
      </TabList>
    </Tabs>
  ),
}

export const Overview: Story = {
  tags: ['!dev'],
  parameters: {
    layout: 'centered',
  },
  render: ({}) => (
    <Tabs defaultValue="tab1">
      <TabList>
        <Tab value="tab1">Tab 1</Tab>
        <Tab value="tab2">Tab 2</Tab>
        <Tab value="tab3">Tab 3</Tab>
      </TabList>
    </Tabs>
  ),
};

export const Controlled: Story = {
  globals: {
    imports: `import { Tabs, TabList, Tab } from '@ovhcloud/ods-react';
import { useState } from 'react';`,
  },
  tags: ['!dev'],
  parameters: {
    docs: {
      source: { ...staticSourceRenderConfig() },
    },
  },
  render: ({}) => {
    const [value, setValue] = useState('tab1');

    const handleValueChange = (event: TabsValueChangeEvent) => {
      setValue(event.value);
    };

    return (
      <Tabs
        onValueChange={ handleValueChange }
        value={ value }>
        <TabList>
          <Tab value="tab1">Tab 1</Tab>
          <Tab value="tab2">Tab 2</Tab>
          <Tab value="tab3">Tab 3</Tab>
        </TabList>
      </Tabs>
    );
  },
};

export const Default: Story = {
  globals: {
    imports: `import { Tabs, TabList, Tab } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Tabs>
      <TabList>
        <Tab value="tab1">Tab 1</Tab>
        <Tab value="tab2">Tab 2</Tab>
        <Tab value="tab3">Tab 3</Tab>
      </TabList>
    </Tabs>
  ),
};

export const Disabled: Story = {
  globals: {
    imports: `import { Tabs, TabList, Tab } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Tabs defaultValue="tab1">
      <TabList>
        <Tab value="tab1">Tab 1</Tab>
        <Tab value="tab2" disabled>Tab 2</Tab>
        <Tab value="tab3">Tab 3</Tab>
      </TabList>
    </Tabs>
  ),
};

export const Overflow: Story = {
  globals: {
    imports: `import { Tabs, TabList, Tab } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
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
      </Tabs>
    </div>
  ),
};

export const WithContent: Story = {
  globals: {
    imports: `import { Tabs, TabContent, TabList, Tab } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Tabs defaultValue="tab1">
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
  ),
};

export const ThemeGenerator: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['!dev'],
  render: ({}) => (
    <Tabs defaultValue="tab1">
      <TabList>
        <Tab value="tab1">Tab 1</Tab>
        <Tab value="tab2" disabled>Tab 2</Tab>
        <Tab value="tab3">Tab 3</Tab>
      </TabList>
      <TabContent value="tab1"><p>Content 1</p></TabContent>
      <TabContent value="tab2"><p>Content 2</p></TabContent>
      <TabContent value="tab3"><p>Content 3</p></TabContent>
    </Tabs>
  ),
};
