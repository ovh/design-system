import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';
import { OdsSkeleton, type OdsSkeletonProp } from '../../../../ods-react/src/components/skeleton/src';

type Story = StoryObj<OdsSkeletonProp>;

const meta: Meta<OdsSkeletonProp> = {
  component: OdsSkeleton,
  title: 'ODS Components/Skeleton',
};

export default meta;

export const Demo: Story = {
};

export const Default: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <OdsSkeleton />
  ),
};

export const Overview: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <OdsSkeleton />
  ),
};
