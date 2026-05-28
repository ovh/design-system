import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';
import { BADGE_COLOR, Badge } from '../../../../ods-react/src/components/badge/src';
import { Code } from '../../../../ods-react/src/components/code/src';
import { Link } from '../../../../ods-react/src/components/link/src';
import { DefinitionList, type DefinitionListProp } from '../../../../ods-organisms/src/components/definition-list/src';

type Story = StoryObj<DefinitionListProp>;


const meta: Meta<DefinitionListProp> = {
  argTypes: {
    emptyValueLabel: {
      control: 'text',
      description: 'The text displayed when no value is provided for an item.',
      table: {
        defaultValue: { summary: '"-"' },
        type: { summary: 'string' },
      },
    },
    items: {
      control: false,
      description: 'The list of definition items to display.',
      table: {
        type: { summary: 'DefinitionListItem[]' },
      },
    },
  },
  title: 'Organisms/Definition List',
};

export default meta;

export const Overview: Story = {
  decorators: [(story) => <div style={{ width: '300px' }}>{ story() }</div>],
  tags: ['!dev'],
  parameters: {
    layout: 'centered',
  },
  render: ({}) => (
    <DefinitionList items={[
      { label: 'ID Licence', value: '95726515' },
      { label: 'Domaine', value: '894b0c39-1355-4dd2-ade2-ef6f3a27b8d3' },
      { label: 'Service', value: 'vps-42ecd1c8.vps.ovh.net' },
      { label: 'Version', value: 'version-solo-cloud' },
      { label: 'Date de création', value: '15 déc. 2025' },
    ]} />
  ),
};

export const Default: Story = {
  globals: {
    imports: `import { DefinitionList } from '@ovhcloud/ods-organisms';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <DefinitionList items={[
      { label: 'Name', value: 'my-server-01' },
      { label: 'Region', value: 'EU West' },
      { label: 'Created at', value: '2025-01-15' },
    ]} />
  ),
};

export const WithEmptyValues: Story = {
  globals: {
    imports: `import { DefinitionList } from '@ovhcloud/ods-organisms';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <DefinitionList items={[
      { label: 'Name', value: 'my-server-01' },
      { label: 'Description' },
      { label: 'Tag' },
    ]} />
  ),
};

export const WithTooltips: Story = {
  globals: {
    imports: `import { DefinitionList } from '@ovhcloud/ods-organisms';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <DefinitionList items={[
      { label: 'vCPU', tooltipContent: 'Number of virtual CPUs allocated', value: '4' },
      { label: 'RAM', tooltipContent: 'Total memory available for the instance', value: '16 GB' },
      { label: 'SLA', tooltipContent: 'Monthly uptime guarantee', value: '99.99%' },
    ]} />
  ),
};

export const WithRichValues: Story = {
  globals: {
    imports: `import { Badge, BADGE_COLOR, Code, Link } from '@ovhcloud/ods-react';
import { DefinitionList } from '@ovhcloud/ods-organisms';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <DefinitionList items={[
      { label: 'Status', value: <Badge color={ BADGE_COLOR.success }>Active</Badge> },
      { label: 'IP Address', value: <Code>192.168.1.42</Code> },
      { label: 'Documentation', value: <Link href="https://help.ovhcloud.com">View docs</Link> },
    ]} />
  ),
};




