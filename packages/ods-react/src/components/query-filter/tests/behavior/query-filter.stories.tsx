import { QueryFilter, QueryFilterContent, QueryFilterControl } from '../../src';

export default {
  component: QueryFilter,
  title: 'Tests behavior',
};

const manyProperties = {
  label: 'Properties',
  options: Array.from({ length: 40 }, (_, idx) => ({ label: `Property ${idx + 1}`, value: `property-${idx + 1}` })),
};

const manyPropertiesOption = Object.fromEntries(manyProperties.options.map(({ value }) => [value, {
  operator: {
    label: 'Operators',
    options: [{ label: 'equals', value: '=' }],
  },
  value: {
    label: 'Values',
    options: [{ label: 'Value', value: 'value' }],
  },
}]));

export const ManyOptions = () => (
  <QueryFilter
    filterOption={ manyPropertiesOption }
    filterProperty={ manyProperties }>
    <QueryFilterControl />

    <QueryFilterContent />
  </QueryFilter>
);
