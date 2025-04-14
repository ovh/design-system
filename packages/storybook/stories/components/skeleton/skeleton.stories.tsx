import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';
import { Skeleton, type SkeletonProp } from '../../../../ods-react/src/components/skeleton/src';

type Story = StoryObj<SkeletonProp>;

const meta: Meta<SkeletonProp> = {
  component: Skeleton,
  title: 'ODS Components/Skeleton',
};

export default meta;

export const Demo: Story = {
};

export const Default: Story = {
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
