import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';
import { ODS_BUTTON_COLOR, ODS_BUTTON_COLORS, ODS_BUTTON_SIZE, ODS_BUTTON_SIZES, ODS_BUTTON_VARIANT, ODS_BUTTON_VARIANTS, OdsButton, type OdsButtonProp } from '../../../../ods-react/src/components/button/src';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { orderControls } from '../../../src/helpers/controls';

type Story = StoryObj<OdsButtonProp>;

const meta: Meta<OdsButtonProp> = {
  component: OdsButton,
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
        defaultValue: { summary: ODS_BUTTON_COLOR.primary },
        type: { summary: ODS_BUTTON_COLORS },
      },
      control: { type: 'select' },
      options: ODS_BUTTON_COLORS,
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
        defaultValue: { summary: ODS_BUTTON_SIZE.md },
        type: { summary: ODS_BUTTON_SIZES }
      },
      control: { type: 'select' },
      options: ODS_BUTTON_SIZES,
    },
    variant: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: { summary: ODS_BUTTON_VARIANT.default },
        type: { summary: ODS_BUTTON_VARIANTS }
      },
      control: { type: 'select' },
      options: ODS_BUTTON_VARIANTS,
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
      <OdsButton color={ ODS_BUTTON_COLOR.primary }>Primary button</OdsButton>
      <OdsButton color={ ODS_BUTTON_COLOR.critical }>Critical button</OdsButton>
      <OdsButton color={ ODS_BUTTON_COLOR.neutral }>Neutral button</OdsButton>
    </>
  ),
};

export const Default: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <OdsButton>
      My button
    </OdsButton>
  ),
};

export const IsLoading: StoryObj = {
  tags: ['!dev'],
  render: ({}) => (
    <OdsButton isLoading={ true }>
      Loading button
    </OdsButton>
  ),
};

export const Overview: Story = {
  tags: ['!dev'],
  parameters: {
    layout: 'centered',
  },
  render: ({}) => (
    <OdsButton>
      Button
    </OdsButton>
  ),
};

export const Size: StoryObj = {
  decorators: [(story) => <div style={{ display: 'flex', flexFlow: 'row', gap: '8px', alignItems: 'center' }}>{ story() }</div>],
  tags: ['!dev'],
  render: ({}) => (
    <>
      <OdsButton size={ ODS_BUTTON_SIZE.md }>MB button</OdsButton>
      <OdsButton size={ ODS_BUTTON_SIZE.sm }>SM button</OdsButton>
      <OdsButton size={ ODS_BUTTON_SIZE.xs }>XS button</OdsButton>
    </>
  ),
};

export const Variant: StoryObj = {
  decorators: [(story) => <div style={{ display: 'flex', flexFlow: 'row', gap: '8px', alignItems: 'center' }}>{ story() }</div>],
  tags: ['!dev'],
  render: ({}) => (
    <>
      <OdsButton variant={ ODS_BUTTON_VARIANT.default }>Default button</OdsButton>
      <OdsButton variant={ ODS_BUTTON_VARIANT.outline }>Outline button</OdsButton>
      <OdsButton variant={ ODS_BUTTON_VARIANT.ghost }>Ghost button</OdsButton>
    </>
  ),
};
