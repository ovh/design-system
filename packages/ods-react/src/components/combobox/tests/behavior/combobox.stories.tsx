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

export const Clearable = () => (
  <Combobox items={ simpleItems }>
    <ComboboxControl clearable />
    <ComboboxContent />
  </Combobox>
);

export const ClearableControlled = () => {
  const [values, setValues] = useState<string[]>([]);

  return (
    <Combobox
      items={ simpleItems }
      onValueChange={ ({ value }) => setValues(value) }
      value={ values }>
      <ComboboxControl clearable />
      <ComboboxContent />
    </Combobox>
  );
};

export const ControlledValue = () => {
  const [values, setValues] = useState<string[]>(['the-apple']);

  return (
    <>
      <button
        id="force-value"
        onClick={ () => setValues(['the-banana']) }>
        Force value "Banana"
      </button>

      <Combobox
        items={ simpleItems }
        onValueChange={ ({ value }) => setValues(value) }
        value={ values }>
        <ComboboxControl />
        <ComboboxContent />
      </Combobox>
    </>
  );
};

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

export const FilteringCustom = () => (
  <Combobox
    allowCustomValue={ false }
    customFilter={ (label, inputValue) => {
      const reversedLabel = label.split('').reverse().join('');
      return new RegExp(`^${inputValue}`, 'i').test(reversedLabel);
    }}
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
        onValueChange={ ({ value }) => setValues(value) }
        value={ values }>
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

export const MultipleCombobox = () => (
  <>
    <Combobox
      id="combobox1"
      items={ simpleItems }>
      <ComboboxControl />
      <ComboboxContent createPortal={ false } />
    </Combobox>

    <Combobox
      id="combobox2"
      items={ simpleItems }>
      <ComboboxControl />
      <ComboboxContent createPortal={ false } />
    </Combobox>
  </>
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

export const OnBlur = () => (
  <Combobox items={ simpleItems }>
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
