import { useState } from 'react';
import { Combobox, ComboboxControl, ComboboxContent } from '../../src';

export default {
  component: Combobox,
  title: 'Tests behavior',
};

const simpleItems = [
  { label: 'Apple', value: 'the-apple' },
  { label: 'Banana', value: 'the-banana' },
  { label: 'Cherry', value: 'the-cherry' },
  { label: 'Date', value: 'the-date' },
];

const groupedItems = [
  {
    label: 'Fruits',
    options: [
      { label: 'Apple', value: 'the-apple' },
      { label: 'Banana', value: 'the-banana' },
      { label: 'Cherry', value: 'the-cherry' },
      { label: 'Date', value: 'the-date' },
    ]
  },
  {
    label: 'Vegetables',
    options: [
      { label: 'Carrot', value: 'the-carrot' },
      { label: 'Broccoli', value: 'the-broccoli' },
      { label: 'Spinach', value: 'the-spinach' },
    ]
  }
];

export const Disabled = () => (
  <Combobox
    disabled
    items={ simpleItems }>
    <ComboboxControl />
    <ComboboxContent />
  </Combobox>
);

export const Filtering = () => (
  <Combobox
    allowCustomValue={ false }
    items={ simpleItems }>
    <ComboboxControl clearable />
    <ComboboxContent />
  </Combobox>
);

export const Group = () => {
  const [values, setValues] = useState<string[]>([]);

  return (
    <>
      <div data-testid="group-value">{ values.join(',') }</div>
      <Combobox
        items={ groupedItems }
        value={ values }
        onValueChange={ ({ value }) => setValues(value) }>
        <ComboboxControl />
        <ComboboxContent />
      </Combobox>
    </>
  );
};

export const KeyboardNavigation = () => (
  <Combobox items={ simpleItems }>
    <ComboboxControl />
    <ComboboxContent />
  </Combobox>
);

export const MultipleControlled = () => {
  const [values, setValues] = useState<string[]>([]);

  return (
    <Combobox
      items={ simpleItems }
      multiple
      onValueChange={ ({ value }) => setValues(value) }
      value={ values }>
      <ComboboxControl />
      <ComboboxContent />
    </Combobox>
  );
};

export const MultipleUncontrolled = () => (
  <Combobox
    items={ simpleItems }
    multiple>
    <ComboboxControl />
    <ComboboxContent />
  </Combobox>
);

export const Readonly = () => (
  <Combobox
    items={ simpleItems }
    readOnly>
    <ComboboxControl />
    <ComboboxContent />
  </Combobox>
);
