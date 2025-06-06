import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';
import { DIVIDER_COLOR, DIVIDER_COLORS, DIVIDER_SPACINGS, Divider, type DividerProp } from '../../../../ods-react/src/components/divider/src';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { orderControls } from '../../../src/helpers/controls';

type Story = StoryObj<DividerProp>;

const meta: Meta<DividerProp> = {
  component: Divider,
  title: 'React Components/Divider',
};

export default meta;

export const Demo: Story = {
  argTypes: orderControls({
    color: {
      table: {
        category: CONTROL_CATEGORY.design,
        type: { summary: 'DIVIDER_COLOR' },
      },
      control: { type: 'select' },
      options: DIVIDER_COLORS,
    },
    spacing: {
      table: {
        category: CONTROL_CATEGORY.design,
        type: { summary: 'DIVIDER_SPACING' },
      },
      control: { type: 'select' },
      options: DIVIDER_SPACINGS,
    },
  }),
};

export const Default: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Divider />
  ),
};

export const Overview: Story = {
  tags: ['!dev'],
  parameters: {
    layout: 'centered',
  },
  render: ({}) => (
    <>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <Divider color={ DIVIDER_COLOR.primary } />
      <p>Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
    </>
  ),
};

export const Color: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <>
      <Divider color={ DIVIDER_COLOR.neutral } />
      <Divider color={ DIVIDER_COLOR.primary } />
    </>
  ),
};

export const Spacing: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <>
      <Divider spacing="0" />
      <Divider spacing="2" />
      <Divider spacing="4" />
      <Divider spacing="6" />
    </>
  ),
};
