import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';
import { SWITCH_SIZE, SWITCH_SIZES, Switch, SwitchItem, type SwitchProp } from '../../../../ods-react/src/components/switch/src';
import { TEXT_PRESET, Text } from '../../../../ods-react/src/components/text/src';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { excludeFromDemoControls, orderControls } from '../../../src/helpers/controls';

type Story = StoryObj<SwitchProp>;

const meta: Meta<SwitchProp> = {
  argTypes: excludeFromDemoControls(['defaultValue', 'onValueChange', 'value']),
  component: Switch,
  subcomponents: { SwitchItem },
  tags: ['deprecated'],
  title: 'React Components/Switch',
};

export default meta;

export const Demo: Story = {
  render: (arg) => (
    <Switch { ...arg }>
      <SwitchItem value="item-1">Item 1</SwitchItem>
      <SwitchItem value="item-2">Item 2</SwitchItem>
      <SwitchItem value="item-3">Item 3</SwitchItem>
    </Switch>
  ),
  argTypes: orderControls({
    disabled: {
      table: {
        category: CONTROL_CATEGORY.general,
      },
      control: 'boolean',
    },
    size: {
      table: {
        category: CONTROL_CATEGORY.design,
        type: { summary: 'SWITCH_SIZE' }
      },
      control: { type: 'select' },
      options: SWITCH_SIZES,
    },
  }),
};

export const AccessibilityAriaLabel: Story = {
  globals: {
    imports: `import { Switch, SwitchItem } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Switch aria-label="Select an item">
      <SwitchItem value="item-1">Item 1</SwitchItem>
      <SwitchItem value="item-2">Item 2</SwitchItem>
      <SwitchItem value="item-3">Item 3</SwitchItem>
    </Switch>
  ),
};

export const AccessibilityAriaLabelledby: Story = {
  decorators: [(story) => <div style={{ display: 'flex', flexFlow: 'column', alignItems: 'start' }}>{ story() }</div>],
  globals: {
    imports: `import { TEXT_PRESET, Switch, SwitchItem, Text } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <>
      <Text
        id="switch-label"
        preset={ TEXT_PRESET.label }>
        Select an item:
      </Text>

      <Switch aria-labelledby="switch-label">
        <SwitchItem value="item-1">Item 1</SwitchItem>
        <SwitchItem value="item-2">Item 2</SwitchItem>
        <SwitchItem value="item-3">Item 3</SwitchItem>
      </Switch>
    </>
  ),
};

export const Checked: Story = {
  globals: {
    imports: `import { Switch, SwitchItem } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Switch defaultValue="item-1">
      <SwitchItem value="item-1">Item 1</SwitchItem>
      <SwitchItem value="item-2">Item 2</SwitchItem>
      <SwitchItem value="item-3">Item 3</SwitchItem>
    </Switch>
  ),
};

export const Default: Story = {
  globals: {
    imports: `import { Switch, SwitchItem } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Switch>
      <SwitchItem value="item-1">Item 1</SwitchItem>
      <SwitchItem value="item-2">Item 2</SwitchItem>
      <SwitchItem value="item-3">Item 3</SwitchItem>
    </Switch>
  ),
};

export const Disabled: Story = {
  globals: {
    imports: `import { Switch, SwitchItem } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Switch disabled>
      <SwitchItem value="item-1">Item 1</SwitchItem>
      <SwitchItem value="item-2">Item 2</SwitchItem>
      <SwitchItem value="item-3">Item 3</SwitchItem>
    </Switch>
  ),
};

export const Overview: Story = {
  tags: ['!dev'],
  parameters: {
    layout: 'centered',
  },
  render: ({}) => (
    <Switch defaultValue="item-1">
      <SwitchItem value="item-1">Item 1</SwitchItem>
      <SwitchItem value="item-2">Item 2</SwitchItem>
      <SwitchItem value="item-3">Item 3</SwitchItem>
    </Switch>
  ),
};

export const Sizes: Story = {
  decorators: [(story) => <div style={{ display: 'flex', flexFlow: 'row', gap: '8px', alignItems: 'center' }}>{ story() }</div>],
  globals: {
    imports: `import { SWITCH_SIZE, Switch, SwitchItem } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <>
      <Switch size={ SWITCH_SIZE.sm }>
        <SwitchItem value="item-1">Item 1</SwitchItem>
        <SwitchItem value="item-2">Item 2</SwitchItem>
        <SwitchItem value="item-3">Item 3</SwitchItem>
      </Switch>

      <Switch size={ SWITCH_SIZE.md }>
        <SwitchItem value="item-1">Item 1</SwitchItem>
        <SwitchItem value="item-2">Item 2</SwitchItem>
        <SwitchItem value="item-3">Item 3</SwitchItem>
      </Switch>
    </>
  ),
};


export const ThemeGenerator: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['!dev'],
  render: ({}) => (
    <div style={{ display: 'flex', flexFlow: 'column', rowGap: '16px' }}>
      <Switch style={{ alignSelf: 'start' }}>
        <SwitchItem value="item-1">Item 1</SwitchItem>
        <SwitchItem value="item-2">Item 2</SwitchItem>
        <SwitchItem value="item-3">Item 3</SwitchItem>
      </Switch>

      <Switch
        disabled
        style={{ alignSelf: 'start' }}>
        <SwitchItem value="item-1">Item 1</SwitchItem>
        <SwitchItem value="item-2">Item 2</SwitchItem>
        <SwitchItem value="item-3">Item 3</SwitchItem>
      </Switch>

      <Switch
        size={ SWITCH_SIZE.sm }
        style={{ alignSelf: 'start' }}>
        <SwitchItem value="item-1">Small 1</SwitchItem>
        <SwitchItem value="item-2">Small 2</SwitchItem>
      </Switch>
    </div>
  ),
};
