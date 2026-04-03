import { useState } from 'react'
import { QueryFilter, QueryFilterClear, QueryFilterContent, QueryFilterControl, QueryFilterTags, type QueryFilterValueChangeDetails } from '.';

export default {
  component: QueryFilter,
  title: 'QueryFilter dev',
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

export const AllowCustomValue = () => (
  <QueryFilter
    allowCustomValue
    filterOption={ filterOption }
    filterProperty={ filterProperty }>
    <QueryFilterControl />

    <QueryFilterContent />

    <QueryFilterTags />

    <QueryFilterClear>
      Clear filters
    </QueryFilterClear>
  </QueryFilter>
);

export const Controlled = () => {
  const [values, setValues] = useState([
    ['states', '=', 'running'],
    ['states', '===', 'running'],
    [],
    ['dummy', 'is fooled'],
    ['very', 'long', 'filter', 'with', 'more', 'than', 'expected', 'values'],
  ]);

  function onValueChange({ value }: QueryFilterValueChangeDetails): void {
    setValues(value);
  }

  return (
    <>
      <p>
        Current value: { values.join(', ') }
      </p>

      <QueryFilter
        filterOption={ filterOption }
        filterProperty={ filterProperty }
        onValueChange={ onValueChange }
        value={ values }>
        <QueryFilterControl />

        <QueryFilterContent />

        <QueryFilterTags />
      </QueryFilter>
    </>
  );
}

export const Default = () => (
  <QueryFilter
    filterOption={ filterOption }
    filterProperty={ filterProperty }>
    <QueryFilterControl />

    <QueryFilterContent />

    <QueryFilterTags />

    <QueryFilterClear>
      Clear filters
    </QueryFilterClear>
  </QueryFilter>
);

export const DefaultValue = () => (
  <QueryFilter
    defaultValue={[
      ['states', '=', 'running'],
      ['states', '===', 'running'],
      [],
      ['dummy', 'is fooled'],
      ['very', 'long', 'filter', 'with', 'more', 'than', 'expected', 'values'],
    ]}
    filterOption={ filterOption }
    filterProperty={ filterProperty }>
    <QueryFilterControl />

    <QueryFilterContent />

    <QueryFilterTags />
  </QueryFilter>
);

export const Disabled = () => (
  <QueryFilter
    disabled
    filterOption={ filterOption }
    filterProperty={ filterProperty }>
    <QueryFilterControl />

    <QueryFilterContent />

    <QueryFilterTags />
  </QueryFilter>
);

export const Handlers = () => {
  const [inputValueChangeEvents, setInputValueChangeEvents] = useState<string[]>([]);
  const [valueChangeEvents, setValueChangeEvents] = useState<string[]>([]);

  return (
    <>
      <QueryFilter
        allowCustomValue
        filterOption={ filterOption }
        filterProperty={ filterProperty }
        onInputValueChange={ (event) => setInputValueChangeEvents((e) => e.concat([JSON.stringify(event)])) }
        onValueChange={ (event) => setValueChangeEvents((e) => e.concat([JSON.stringify(event)])) }>
        <QueryFilterControl />

        <QueryFilterContent />

        <QueryFilterTags />
      </QueryFilter>

      <p>onInputValueChange events</p>
      <textarea
        readOnly
        style={{ height: '200px', width: '100%' }}
        value={ inputValueChangeEvents.join('\n----------\n') } />

      <p>onValueChange events</p>
      <textarea
        readOnly
        style={{ height: '200px', width: '100%' }}
        value={ valueChangeEvents.join('\n----------\n') } />
    </>
  );
};

export const HighlightResults = () => (
  <QueryFilter
    filterOption={ filterOption }
    filterProperty={ filterProperty }
    highlightResults>
    <QueryFilterControl />

    <QueryFilterContent />

    <QueryFilterTags />
  </QueryFilter>
);

export const InputOption = () => (
  <>
    <QueryFilter
      filterOption={ filterOption }
      filterProperty={ filterProperty }>
      <QueryFilterControl
        clearable
        placeholder="Clearable input" />

      <QueryFilterContent />

      <QueryFilterTags />
    </QueryFilter>

    <br /><br />

    <QueryFilter
      filterOption={ filterOption }
      filterProperty={ filterProperty }>
      <QueryFilterControl
        loading
        placeholder="Loading input" />

      <QueryFilterContent />

      <QueryFilterTags />
    </QueryFilter>
  </>
);

export const Readonly = () => (
  <QueryFilter
    filterOption={ filterOption }
    filterProperty={ filterProperty }
    readOnly>
    <QueryFilterControl />

    <QueryFilterContent />

    <QueryFilterTags />
  </QueryFilter>
);
