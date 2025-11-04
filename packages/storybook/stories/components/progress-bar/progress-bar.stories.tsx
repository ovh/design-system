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
  globals: {
    imports: `import { ProgressBar } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <ProgressBar />
  ),
};

export const Max: StoryObj = {
  globals: {
    imports: `import { ProgressBar } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <ProgressBar
      max="500"
      value="50" />
  ),
};

export const Overview: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <ProgressBar value="50" />
  ),
};

export const Value: StoryObj = {
  globals: {
    imports: `import { ProgressBar } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <ProgressBar value="50" />
  ),
};

export const AccessibilityLabel: Story = {
  globals: {
    imports: `import { ProgressBar } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <ProgressBar aria-label="Converting" />
  ),
};


export const ThemeGenerator: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['!dev'],
  render: ({}) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '300px' }}>
      <ProgressBar />
      <ProgressBar value="25" />
      <ProgressBar value="50" />
      <ProgressBar value="75" />
      <ProgressBar max="500" value="50" />
    </div>
  ),
};
