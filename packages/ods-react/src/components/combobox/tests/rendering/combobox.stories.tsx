import { useState } from 'react';
import { Combobox, ComboboxContent, ComboboxControl, type ComboboxItem } from '../../src';

export default {
  component: Combobox,
  title: 'Tests rendering',
};

const simpleItems = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Cherry', value: 'cherry' },
];

const groupedItems = [
  {
    label: 'Fruits',
    options: [
      { label: 'Apple', value: 'apple' },
      { label: 'Banana', value: 'banana' },
      { label: 'Cherry', value: 'cherry' },
    ]
  },
  {
    label: 'Vegetables',
    options: [
      { label: 'Carrot', value: 'carrot' },
      { label: 'Broccoli', value: 'broccoli' },
      { label: 'Spinach', value: 'spinach' }
    ]
  }
];

export const Controlled = () => {
  const [values, setValues] = useState<string[]>([]);

  return (
    <Combobox
      items={ simpleItems }
      onValueChange={ ({ value }) => setValues(value) }
      value={ values }>
      <ComboboxControl />
      <ComboboxContent />
    </Combobox>
  );
};

export const CustomOptionRenderer = () => {
  type MyData = {
    description?: string,
  }

  const items = [
    { label: 'Dog', value: 'dog', customRendererData: { description: 'My dog is stupid' }},
    { label: 'Cat', value: 'cat', customRendererData: { description: 'All cats are awesome' }},
    { label: 'Hamster', value: 'hamster', customRendererData: { description: 'Where is my hamster?' }},
    { label: 'Parrot', value: 'parrot', customRendererData: { description: 'Repeat repeat repeat' }},
    { label: 'Spider', value: 'spider', customRendererData: { description: 'Spider? Where?' }},
    { label: 'Goldfish', value: 'goldfish', customRendererData: { description: 'Cool a new aquarium' }},
  ];

  return (
    <Combobox
      customOptionRenderer={ (item: ComboboxItem<MyData>) => (
        <div data-testid="custom-item">
          { item.label } { item.customRendererData?.description }
        </div>
      )}
      items={ items }>
      <ComboboxControl />
      <ComboboxContent />
    </Combobox>
  );
};

export const Default = () => (
  <Combobox items={ simpleItems }>
    <ComboboxControl />
    <ComboboxContent />
  </Combobox>
);

export const DefaultValue = () => (
  <Combobox
    defaultValue={ [simpleItems[0].value] }
    items={ simpleItems }>
    <ComboboxControl />
    <ComboboxContent />
  </Combobox>
);

export const DefaultValueMultiple = () => (
  <Combobox
    defaultValue={ [simpleItems[0].value, simpleItems[1].value]}
    items={ simpleItems }
    multiple>
    <ComboboxControl />
    <ComboboxContent />
  </Combobox>
);

export const Disabled = () => (
  <Combobox
    disabled
    items={ simpleItems }>
    <ComboboxControl />
    <ComboboxContent />
  </Combobox>
);

export const Empty = () => (
  <Combobox items={ [] }>
    <ComboboxControl />
    <ComboboxContent />
  </Combobox>
);

export const Group = () => (
  <Combobox items={ groupedItems }>
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
