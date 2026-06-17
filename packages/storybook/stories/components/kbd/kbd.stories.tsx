import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';
import { Kbd, type KbdProp } from '../../../../ods-react/src/components/kbd/src';

type Story = StoryObj<KbdProp>;

const meta: Meta<KbdProp> = {
  component: Kbd,
  title: 'React Components/Kbd',
};

export default meta;

export const AnatomyTech: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Kbd>Esc</Kbd>
  ),
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
    <Kbd>Esc</Kbd>
  ),
};

export const ThemeGenerator: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Kbd>Cmd</Kbd>
  ),
};
