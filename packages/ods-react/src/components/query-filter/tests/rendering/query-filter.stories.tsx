import { QueryFilter, QueryFilterContent, QueryFilterControl, QueryFilterTags } from '../../src';

export default {
  component: QueryFilter,
  title: 'Tests rendering',
};

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

export const Render = () => (
  <QueryFilter
    filterOption={ filterOption }
    filterProperty={ filterProperty }>
    <QueryFilterControl />

    <QueryFilterContent />

    <QueryFilterTags />
  </QueryFilter>
);
