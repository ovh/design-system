import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';
import { ProgressBar, type ProgressBarProp } from '../../../../ods-react/src/components/progress-bar/src';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { orderControls } from '../../../src/helpers/controls';

type Story = StoryObj<ProgressBarProp>;

const meta: Meta<ProgressBarProp> = {
  component: ProgressBar,
  title: 'React Components/Progress Bar',
};

export default meta;

export const Demo: Story = {
  argTypes: orderControls({
    max: {
      table: {
        category: CONTROL_CATEGORY.general,
        type: { summary: 'number' },
      },
      control: 'number',
    },
    value: {
      table: {
        category: CONTROL_CATEGORY.general,
        type: { summary: 'number' },
      },
      control: 'number',
    },
  }),
};

export const Default: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <ProgressBar />
  ),
};

export const Max: StoryObj = {
  tags: ['!dev'],
  render: ({}) => (
    <ProgressBar
      max="500"
      value="50" />
  ),
};

export const Overview: Story = {
  tags: ['!dev'],
  parameters: {
    layout: 'centered',
  },
  render: ({}) => (
    <ProgressBar value="50" />
  ),
};

export const Value: StoryObj = {
  tags: ['!dev'],
  render: ({}) => (
    <ProgressBar value="50" />
  ),
};

export const AccessibilityLabel: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <ProgressBar aria-label="Converting" />
  ),
};
