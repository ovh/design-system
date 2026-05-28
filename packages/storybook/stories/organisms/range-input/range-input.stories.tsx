import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';
import { RangeInput, type RangeInputProp } from '../../../../ods-organisms/src/components/range-input/src';

type Story = StoryObj<RangeInputProp>;

const meta: Meta<RangeInputProp> = {
  component: RangeInput,
  title: 'Organisms/Range Input',
};

export default meta;


export const Overview: Story = {
  decorators: [(story) => <div style={{ width: '240px' }}>{ story() }</div>],
  tags: ['!dev'],
  parameters: {
    layout: 'centered',
  },
  render: ({}) => (
    <RangeInput defaultValue={ 50 } />
  ),
};

export const Default: Story = {
  globals: {
    imports: `import { RangeInput } from '@ovhcloud/ods-organisms';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <RangeInput />
  ),
};

export const Disabled: Story = {
  globals: {
    imports: `import { RangeInput } from '@ovhcloud/ods-organisms';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <RangeInput defaultValue={ 30 } disabled />
  ),
};

export const CustomRange: Story = {
  globals: {
    imports: `import { RangeInput } from '@ovhcloud/ods-organisms';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <RangeInput
      defaultValue={ 50 }
      max={ 200 }
      min={ 10 }
      step={ 5 } />
  ),
};

