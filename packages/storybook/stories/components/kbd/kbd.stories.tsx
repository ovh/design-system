import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';
import { Kbd, type KbdProp } from '../../../../ods-react/src/components/kbd/src';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { orderControls } from '../../../src/helpers/controls';

type Story = StoryObj<KbdProp>;

const meta: Meta<KbdProp> = {
  component: Kbd,
  title: 'React Components/Kbd',
};

export default meta;

export const Demo: Story = {
  argTypes: orderControls({
    children: {
      table: {
        category: CONTROL_CATEGORY.slot,
      },
      control: 'text',
    },
  }),
  args: {
    children: 'Cmd + L',
  },
};

export const Default: Story = {
  globals: {
    imports: `import { Kbd } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Kbd>Cmd</Kbd>
  ),
};

export const Overview: Story = {
  tags: ['!dev'],
  parameters: {
    layout: 'centered',
  },
  render: ({}) => (
    <>
      <Kbd>Esc</Kbd>
    </>
  ),
};

export const ThemeGenerator: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Kbd>Cmd</Kbd>
  ),
};
