import { type Meta, type StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { TABS_SIZE, TABS_SIZES, TABS_VARIANT, TABS_VARIANTS, Tabs, TabList, Tab, TabContent, type TabsProp, type TabsValueChangeEvent } from '../../../../ods-react/src/components/tabs/src';
import { excludeFromDemoControls, orderControls } from '../../../src/helpers/controls';
import { staticSourceRenderConfig } from '../../../src/helpers/source';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';

type Story = StoryObj<TabsProp>;

const meta: Meta<TabsProp> = {
  component: Tabs,
  subcomponents: { TabList, Tab, TabContent },
  argTypes: excludeFromDemoControls(['defaultValue', 'onValueChange', 'value']),
  title: 'React Components/Tabs',
};

export default meta;

export const Demo: Story = {
  render: (arg) => (
    <Tabs
      defaultValue="tab1"
      { ...arg }>
      <TabList >
        <Tab value="tab1">Tab 1</Tab>
        <Tab value="tab2">Tab 2</Tab>
        <Tab value="tab3">Tab 3</Tab>
        <Tab value="tab4">Tab 4</Tab>
        <Tab value="tab5">Tab 5</Tab>
        <Tab value="tab6">Tab 6</Tab>
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

      <TabContent value="tab4">
        <p>Tab 4 Content</p>
      </TabContent>

      <TabContent value="tab5">
        <p>Tab 5 Content</p>
      </TabContent>

      <TabContent value="tab6">
        <p>Tab 6 Content</p>
      </TabContent>
    </Tabs>
  ),
  argTypes: orderControls({
    size: {
      table: {
        category: CONTROL_CATEGORY.design,
        type: { summary: 'TABS_SIZE' }
      },
      control: { type: 'select' },
      options: TABS_SIZES,
    },
    variant: {
      table: {
        category: CONTROL_CATEGORY.design,
        type: { summary: 'TABS_VARIANT' }
      },
      control: { type: 'select' },
      options: TABS_VARIANTS,
    },
    withArrows: {
      table: {
        category: CONTROL_CATEGORY.design,
      },
      control: { type: 'boolean' },
    },
  }),
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
    <Tabs defaultValue="tab1">
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

export const Size: Story = {
  globals: {
    imports: `import { TABS_SIZE, TABS_VARIANT, Tabs, TabList, Tab } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <>
      <p>MD</p>
      <Tabs
        defaultValue="tab1"
        size={ TABS_SIZE.md }
        variant={ TABS_VARIANT.switch }>
        <TabList>
          <Tab value="tab1">Tab 1</Tab>
          <Tab value="tab2">Tab 2</Tab>
          <Tab value="tab3">Tab 3</Tab>
        </TabList>
      </Tabs>

      <p>SM</p>
      <Tabs
        defaultValue="tab1"
        size={ TABS_SIZE.sm }
        variant={ TABS_VARIANT.switch }>
        <TabList>
          <Tab value="tab1">Tab 1</Tab>
          <Tab value="tab2">Tab 2</Tab>
          <Tab value="tab3">Tab 3</Tab>
        </TabList>
      </Tabs>

      <p>XS</p>
      <Tabs
        defaultValue="tab1"
        size={ TABS_SIZE.xs }
        variant={ TABS_VARIANT.switch }>
        <TabList>
          <Tab value="tab1">Tab 1</Tab>
          <Tab value="tab2">Tab 2</Tab>
          <Tab value="tab3">Tab 3</Tab>
        </TabList>
      </Tabs>
    </>
  ),
};

export const Variant: Story = {
  globals: {
    imports: `import { TABS_VARIANT, Tabs, TabList, Tab } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Tabs
      defaultValue="tab1"
      variant={ TABS_VARIANT.switch }>
      <TabList>
        <Tab value="tab1">Tab 1</Tab>
        <Tab value="tab2">Tab 2</Tab>
        <Tab value="tab3">Tab 3</Tab>
      </TabList>
    </Tabs>
  ),
};

export const WithArrows: Story = {
  globals: {
    imports: `import { Tabs, TabList, Tab } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Tabs
      defaultValue="tab1"
      withArrows>
      <TabList>
        <Tab value="tab1">Tab 1</Tab>
        <Tab value="tab2">Tab 2</Tab>
        <Tab value="tab3">Tab 3</Tab>
        <Tab value="tab4">Tab 4</Tab>
        <Tab value="tab5">Tab 5</Tab>
        <Tab value="tab6">Tab 6</Tab>
        <Tab value="tab7">Tab 7</Tab>
        <Tab value="tab8">Tab 8</Tab>
        <Tab value="tab9">Tab 9</Tab>
        <Tab value="tab10">Tab 10</Tab>
        <Tab value="tab11">Tab 11</Tab>
        <Tab value="tab12">Tab 12</Tab>
        <Tab value="tab13">Tab 13</Tab>
        <Tab value="tab14">Tab 14</Tab>
        <Tab value="tab15">Tab 15</Tab>
      </TabList>
    </Tabs>
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
    <Tabs withArrows defaultValue="tab1">
      <TabList>
        <Tab value="tab1">Tab 1</Tab>
        <Tab value="tab2" disabled>Tab 2</Tab>
        <Tab value="tab3">Tab 3</Tab>
        <Tab value="tab4">Tab 4</Tab>
        <Tab value="tab5">Tab 5</Tab>
        <Tab value="tab6">Tab 6</Tab>
        <Tab value="tab7">Tab 7</Tab>
        <Tab value="tab8">Tab 8</Tab>
        <Tab value="tab9">Tab 9</Tab>
        <Tab value="tab10">Tab 10</Tab>
        <Tab value="tab11">Tab 11</Tab>
        <Tab value="tab12">Tab 12</Tab>
        <Tab value="tab13">Tab 13</Tab>
        <Tab value="tab14">Tab 14</Tab>
        <Tab value="tab15">Tab 15</Tab>
      </TabList>
      <TabContent value="tab1"><p>Content 1</p></TabContent>
      <TabContent value="tab2"><p>Content 2</p></TabContent>
      <TabContent value="tab3"><p>Content 3</p></TabContent>
      <TabContent value="tab4"><p>Content 4</p></TabContent>
      <TabContent value="tab5"><p>Content 5</p></TabContent>
      <TabContent value="tab6"><p>Content 6</p></TabContent>
      <TabContent value="tab7"><p>Content 7</p></TabContent>
      <TabContent value="tab8"><p>Content 8</p></TabContent>
      <TabContent value="tab9"><p>Content 9</p></TabContent>
      <TabContent value="tab10"><p>Content 10</p></TabContent>
      <TabContent value="tab11"><p>Content 11</p></TabContent>
      <TabContent value="tab12"><p>Content 12</p></TabContent>
      <TabContent value="tab13"><p>Content 13</p></TabContent>
      <TabContent value="tab14"><p>Content 14</p></TabContent>
      <TabContent value="tab15"><p>Content 15</p></TabContent>
    </Tabs>
  ),
};
