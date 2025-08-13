import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';
import { Skeleton, type SkeletonProp } from '../../../../ods-react/src/components/skeleton/src';
import { addLiveEditorToStory } from '../../../src/helpers/liveCoding';
import demoCode from './Demo?raw';

type Story = StoryObj<SkeletonProp>;

const meta: Meta<SkeletonProp> = {
  component: Skeleton,
  title: 'React Components/Skeleton',
};

export default meta;

export const Demo: Story = {};

addLiveEditorToStory(Demo, demoCode);

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

export const AccessibilityLoading: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <div aria-busy="true">
      <Skeleton />
    </div>
  ),
};

export const AccessibilityBadPracticeLoading: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <div>
      <Skeleton />
    </div>
  ),
};
