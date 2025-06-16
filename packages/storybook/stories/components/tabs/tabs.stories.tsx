import { type Meta, type StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Tabs, TabList, Tab, TabContent,type TabsChangeEvent, type TabsProp } from '../../../../ods-react/src/components/tabs/src';
import { excludeFromDemoControls } from '../../../src/helpers/controls';
import { staticSourceRenderConfig } from '../../../src/helpers/source';

type Story = StoryObj<TabsProp>;

const meta: Meta<TabsProp> = {
  component: Tabs,
  subcomponents: { TabList, Tab, TabContent },
  argTypes: excludeFromDemoControls(['defaultValue', 'value', 'onChange']),
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
  tags: ['!dev'],
  parameters: {
    docs: {
      source: { ...staticSourceRenderConfig() },
    },
  },
  render: ({}) => {
    const [value, setValue] = useState('tab1');

    const handleChange = (event: TabsChangeEvent) => {
      setValue(event.value);
    };

    return (
      <Tabs
        onChange={ handleChange }
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
