import { useState } from 'react';
import { Combobox } from '../../src';

export default {
  component: Combobox,
  title: 'Tests behavior',
};

const simpleItems = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Cherry', value: 'cherry' },
  { label: 'Date', value: 'date' }
];

export const Disabled = () => (
  <Combobox
    disabled
    items={ simpleItems } />
);

export const Filtering = () => (
  <Combobox
    allowCustomValue={ false }
    clearable
    items={ simpleItems } />
);

export const KeyboardNavigation = () => (
  <Combobox items={ simpleItems } />
);

export const MultipleControlled = () => {
  const [value, setValue] = useState<typeof simpleItems>([]);

  return (
    <Combobox
      items={ simpleItems }
      multiple
      onValueChange={ (details) => setValue(details) }
      value={ value } />
  );
};

export const MultipleUncontrolled = () => (
  <Combobox
    items={ simpleItems }
    multiple />
);

export const Readonly = () => (
  <Combobox
    items={ simpleItems }
    readOnly />
);
