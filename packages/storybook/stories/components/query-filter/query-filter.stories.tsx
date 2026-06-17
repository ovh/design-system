import { type Meta, type StoryObj } from '@storybook/react';
import React, { useMemo } from 'react';
import { QueryFilter, QueryFilterClear, QueryFilterContent, QueryFilterControl, type QueryFilterProp, QueryFilterTags } from '../../../../ods-react/src/components/query-filter/src';
import { excludeFromDemoControls } from '../../../src/helpers/controls';
import { staticSourceRenderConfig } from '../../../src/helpers/source';

type Story = StoryObj<QueryFilterProp>;

const meta: Meta<QueryFilterProp> = {
  argTypes: excludeFromDemoControls(['defaultOpen', 'defaultValue', 'i18n', 'filterOption', 'filterProperty', 'locale', 'name', 'onInputValueChange', 'onOpenChange', 'onValueChange', 'open', 'overlayConfig', 'required', 'value']),
  component: QueryFilter,
  subcomponents: { QueryFilterClear, QueryFilterContent, QueryFilterControl, QueryFilterTags },
  tags: ['new'],
  title: 'React Components/Query Filter',
};

export default meta;

const filterProperty = {
  label: 'Properties',
  options: [
    { label: 'Instance ID', value: 'instance-id' },
    { label: 'States', value: 'states' },
  ],
};

const filterOption = {
  ['instance-id']: {
    operator: {
      label: 'Operators',
      options: [
        { label: 'equals', value: '=' },
        { label: 'does not equal', value: '!=' },
      ],
    },
    value: {
      label: 'Instance Values',
      options: [
        { label: 'instance 1', value: 'instance-1' },
        { label: 'instance 2', value: 'instance-2' },
      ],
    },
  },
  states: {
    operator: {
      label: 'Operators',
      options: [
        { label: 'equals', value: '=' },
        { label: 'does not equal', value: '!=' },
      ],
    },
    value: {
      label: 'State Values',
      options: [
        { label: 'Running', value: 'running' },
        { label: 'Stopped', value: 'stopped' },
      ],
    },
  }
};

export const AnatomyTech: Story = {
  parameters: {
    layout: 'start',
  },
  tags: ['!dev'],
  render: ({}) => (
    <QueryFilter
      filterOption={ filterOption }
      filterProperty={ filterProperty }
      open
      overlayConfig={{
        flip: false,
      }}
      value={[
        ['instance-id', '!=', 'instance-1'],
        ['states', '===', 'running'],
      ]}>
      <QueryFilterControl />

      <QueryFilterContent createPortal={ false } />

      <div style={{ display: 'flex', flexDirection: 'row', gap: '8px', alignItems: 'center', marginTop: '100px' }}>
        <QueryFilterTags style={{ justifyContent: 'end' }} />

        <QueryFilterClear>
          Clear
        </QueryFilterClear>
      </div>
    </QueryFilter>
  ),
};

export const Default: Story = {
  globals: {
    imports: `import { QueryFilter, QueryFilterClear, QueryFilterControl, QueryFilterContent, QueryFilterTags } from '@ovhcloud/ods-react';
import { useMemo } from 'react';`,
  },
  parameters: {
    docs: {
      source: { ...staticSourceRenderConfig() },
    },
  },
  tags: ['!dev'],
  render: ({}) => {
    const filterProperty = useMemo(() => ({
      label: 'Properties',
      options: [
        { label: 'Instance ID', value: 'instance-id' },
        { label: 'States', value: 'states' },
      ],
    }), []);

    const filterOption = useMemo(() => ({
      ['instance-id']: {
        operator: {
          label: 'Operators I',
          options: [
            { label: 'equals', value: '=' },
            { label: 'does not equal', value: '!=' },
          ],
        },
        value: {
          label: 'Instance Values',
          options: [
            { label: 'instance 1', value: 'instance-1' },
            { label: 'instance 2', value: 'instance-2' },
          ],
        },
      },
      states: {
        operator: {
          label: 'Operators S',
          options: [
            { label: 'equals', value: '=' },
            { label: 'does not equal', value: '!=' },
          ],
        },
        value: {
          label: 'State Values',
          options: [
            { label: 'Running', value: 'running' },
            { label: 'Stopped', value: 'stopped' },
          ],
        },
      }
    }), []);

    return (
      <QueryFilter
        filterOption={ filterOption }
        filterProperty={ filterProperty }>
        <QueryFilterControl />

        <QueryFilterContent />

        <QueryFilterTags />

        <QueryFilterClear>
          Clear all
        </QueryFilterClear>
      </QueryFilter>
    );
  },
};

export const Overview: Story = {
  tags: ['!dev'],
  parameters: {
    layout: 'centered',
  },
  render: ({}) => (
    <QueryFilter
      filterOption={ filterOption }
      filterProperty={ filterProperty }>
      <QueryFilterControl style={{ alignSelf: 'end', width: '300px' }} />

      <QueryFilterContent />

      <div style={{ display: 'flex', flexDirection: 'row', gap: '8px', alignItems: 'center' }}>
        <QueryFilterTags style={{ justifyContent: 'end' }} />

        <QueryFilterClear>
          Clear
        </QueryFilterClear>
      </div>
    </QueryFilter>
  ),
};

export const ThemeGenerator: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['!dev'],
  render: ({}) => (
    <QueryFilter
      filterOption={ filterOption }
      filterProperty={ filterProperty }>
      <QueryFilterControl />

      <QueryFilterContent />

      <QueryFilterTags />

      <QueryFilterClear>
        Clear all
      </QueryFilterClear>
    </QueryFilter>
  ),
};
