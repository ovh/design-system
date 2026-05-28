import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';
import { FeatureList, type FeatureListProp } from '../../../../ods-organisms/src/components/feature-list/src';

type Story = StoryObj<FeatureListProp>;

const SAMPLE_FEATURES = [
  { label: 'Memory: up to 1.5 TB' },
  { label: 'SLA: 99.99%' },
  { label: 'Guaranteed public bandwidth from 5 Gbps to 25 Gbps', tooltipContent: 'Except for our Asia-Pacific regions.' },
  { label: '25 Gbps private bandwidth included' },
  { label: 'OVHcloud Link Aggregation' },
];

const meta: Meta<FeatureListProp> = {
  component: FeatureList,
  title: 'Organisms/Feature List',
};

export default meta;

export const Overview: Story = {
  tags: ['!dev'],
  parameters: {
    layout: 'centered',
  },
  render: ({}) => (
    <FeatureList items={ SAMPLE_FEATURES } />
  ),
};

export const Default: Story = {
  globals: {
    imports: `import { FeatureList } from '@ovhcloud/ods-organisms';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <FeatureList items={[
      { label: 'Unlimited storage' },
      { label: '24/7 support' },
      { label: 'Custom domain' },
    ]} />
  ),
};

export const WithTooltips: Story = {
  globals: {
    imports: `import { FeatureList } from '@ovhcloud/ods-organisms';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <FeatureList items={[
      { label: 'Guaranteed public bandwidth from 5 Gbps to 25 Gbps', tooltipContent: 'Except for our Asia-Pacific regions.' },
      { label: 'SLA: 99.99%', tooltipContent: 'Monthly uptime guarantee.' },
      { label: 'Free SSL certificate' },
    ]} />
  ),
};


