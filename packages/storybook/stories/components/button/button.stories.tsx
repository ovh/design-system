import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';
import { BUTTON_COLOR, BUTTON_COLORS, BUTTON_SIZE, BUTTON_SIZES, BUTTON_VARIANT, BUTTON_VARIANTS, Button, type ButtonProp } from '../../../../ods-react/src/components/button/src';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { orderControls } from '../../../src/helpers/controls';

type Story = StoryObj<ButtonProp>;

const meta: Meta<ButtonProp> = {
  component: Button,
  title: 'ODS Components/Button',
};

export default meta;

export const Demo: Story = {
  argTypes: orderControls({
    children: {
      table: {
        category: CONTROL_CATEGORY.slot,
        defaultValue: { summary: 'ø' },
      },
      control: 'text',
    },
    color: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: { summary: BUTTON_COLOR.primary },
        type: { summary: BUTTON_COLORS },
      },
      control: { type: 'select' },
      options: BUTTON_COLORS,
    },
    isLoading: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' }
      },
      control: 'boolean',
    },
    size: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: { summary: BUTTON_SIZE.md },
        type: { summary: BUTTON_SIZES }
      },
      control: { type: 'select' },
      options: BUTTON_SIZES,
    },
    variant: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: { summary: BUTTON_VARIANT.default },
        type: { summary: BUTTON_VARIANTS }
      },
      control: { type: 'select' },
      options: BUTTON_VARIANTS,
    },
  }),
  args: {
    children: 'My button',
  },
};

export const Color: StoryObj = {
  decorators: [(story) => <div style={{ display: 'flex', flexFlow: 'row', gap: '8px', alignItems: 'center' }}>{ story() }</div>],
  tags: ['!dev'],
  render: ({}) => (
    <>
      <Button color={ BUTTON_COLOR.primary }>Primary button</Button>
      <Button color={ BUTTON_COLOR.critical }>Critical button</Button>
      <Button color={ BUTTON_COLOR.neutral }>Neutral button</Button>
    </>
  ),
};

export const Default: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Button>
      My button
    </Button>
  ),
};

export const IsLoading: StoryObj = {
  tags: ['!dev'],
  render: ({}) => (
    <Button isLoading={ true }>
      Loading button
    </Button>
  ),
};

export const Overview: Story = {
  tags: ['!dev'],
  parameters: {
    layout: 'centered',
  },
  render: ({}) => (
    <Button>
      Button
    </Button>
  ),
};

export const Size: StoryObj = {
  decorators: [(story) => <div style={{ display: 'flex', flexFlow: 'row', gap: '8px', alignItems: 'center' }}>{ story() }</div>],
  tags: ['!dev'],
  render: ({}) => (
    <>
      <Button size={ BUTTON_SIZE.md }>MB button</Button>
      <Button size={ BUTTON_SIZE.sm }>SM button</Button>
      <Button size={ BUTTON_SIZE.xs }>XS button</Button>
    </>
  ),
};

export const Variant: StoryObj = {
  decorators: [(story) => <div style={{ display: 'flex', flexFlow: 'row', gap: '8px', alignItems: 'center' }}>{ story() }</div>],
  tags: ['!dev'],
  render: ({}) => (
    <>
      <Button variant={ BUTTON_VARIANT.default }>Default button</Button>
      <Button variant={ BUTTON_VARIANT.outline }>Outline button</Button>
      <Button variant={ BUTTON_VARIANT.ghost }>Ghost button</Button>
    </>
  ),
};
