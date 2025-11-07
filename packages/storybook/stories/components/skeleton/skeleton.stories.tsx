import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';
import { Skeleton, type SkeletonProp } from '../../../../ods-react/src/components/skeleton/src';

type Story = StoryObj<SkeletonProp>;

const meta: Meta<SkeletonProp> = {
  component: Skeleton,
  title: 'React Components/Skeleton',
};

export default meta;

export const Demo: Story = {};

export const Default: Story = {
  globals: {
    imports: 'import { Skeleton } from \'@ovhcloud/ods-react\';',
  },
  tags: ['!dev'],
  render: ({}) => (
    <Skeleton />
  ),
};

export const Overview: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Skeleton />
  ),
};

export const AccessibilityLoading: Story = {
  globals: {
    imports: 'import { Skeleton } from \'@ovhcloud/ods-react\';',
  },
  tags: ['!dev'],
  render: ({}) => (
    <div aria-busy="true">
      <Skeleton />
    </div>
  ),
};

export const AccessibilityBadPracticeLoading: Story = {
  globals: {
    imports: 'import { Skeleton } from \'@ovhcloud/ods-react\';',
  },
  tags: ['!dev'],
  render: ({}) => (
    <div>
      <Skeleton />
    </div>
  ),
};

export const ThemeGenerator: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['!dev'],
  render: ({}) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </div>
  ),
};
