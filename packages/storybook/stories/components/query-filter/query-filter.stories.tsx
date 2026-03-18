import { type Meta, type StoryObj } from '@storybook/react';
import React, { useMemo } from 'react';
import { QueryFilter, QueryFilterClear, QueryFilterContent, QueryFilterControl, type QueryFilterControlProp, type QueryFilterProp, QueryFilterTags } from '../../../../ods-react/src/components/query-filter/src';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { excludeFromDemoControls, orderControls } from '../../../src/helpers/controls';
import { staticSourceRenderConfig } from '../../../src/helpers/source';

type Story = StoryObj<QueryFilterProp>;
type DemoArg = Partial<QueryFilterProp> & Partial<QueryFilterControlProp> & {
  clearAllLabel?: string;
};

const meta: Meta<QueryFilterProp> = {
  argTypes: excludeFromDemoControls(['defaultValue', 'i18n', 'filterOption', 'filterProperty', 'locale', 'name', 'onInputValueChange', 'onValueChange', 'required', 'value']),
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
};

export const Demo: StoryObj = {
  render: (arg: DemoArg) => (
    <QueryFilter
      allowCustomValue={ arg.allowCustomValue }
      disabled={ arg.disabled }
      highlightResults={ arg.highlightResults }
      invalid={ arg.invalid }
      filterOption={ filterOption }
      filterProperty={ filterProperty }
      newElementLabel={ arg.newElementLabel }
      noResultLabel={ arg.noResultLabel }
      readOnly={ arg.readOnly }>
      <QueryFilterControl
        clearable={ arg.clearable }
        loading={ arg.loading }
        placeholder={ arg.placeholder } />

      <QueryFilterContent />

      <QueryFilterTags />

      <QueryFilterClear>
        { arg.clearAllLabel }
      </QueryFilterClear>
    </QueryFilter>
  ),
  argTypes: orderControls({
    allowCustomValue: {
      table: {
        category: CONTROL_CATEGORY.general,
      },
      control: 'boolean',
    },
    clearAllLabel: {
      table: {
        category: CONTROL_CATEGORY.general,
      },
      control: 'text',
    },
    clearable: {
      table: {
        category: CONTROL_CATEGORY.general,
        type: { summary: 'boolean' },
      },
      control: 'boolean',
    },
    disabled: {
      table: {
        category: CONTROL_CATEGORY.general,
      },
      control: 'boolean',
    },
    highlightResults: {
      table: {
        category: CONTROL_CATEGORY.general,
      },
      control: 'boolean',
    },
    invalid: {
      table: {
        category: CONTROL_CATEGORY.general,
      },
      control: 'boolean',
    },
    loading: {
      table: {
        category: CONTROL_CATEGORY.general,
        type: { summary: 'boolean' },
      },
      control: 'boolean',
    },
    newElementLabel: {
      table: {
        category: CONTROL_CATEGORY.general,
      },
      control: 'text',
    },
    noResultLabel: {
      table: {
        category: CONTROL_CATEGORY.general,
      },
      control: 'text',
    },
    placeholder: {
      table: {
        category: CONTROL_CATEGORY.general,
      },
      control: 'text',
    },
    readOnly: {
      table: {
        category: CONTROL_CATEGORY.general,
      },
      control: 'boolean',
    },
  }),
  args: {
    clearAllLabel: 'Clear all',
    placeholder: 'Add filters',
  },
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
      <QueryFilterControl />

      <QueryFilterContent />

      <QueryFilterTags />

      <QueryFilterClear>
        Clear all
      </QueryFilterClear>
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
