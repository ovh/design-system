import { useState } from 'react';
import { Combobox, ComboboxItem } from '../../src';

export default {
  component: Combobox,
  title: 'Tests rendering',
};

const simpleItems = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Cherry', value: 'cherry' }
];

const groupedItems = [
  {
    label: 'Fruits',
    options: [
      { label: 'Apple', value: 'apple' },
      { label: 'Banana', value: 'banana' }
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
  const [values, setValues] = useState<typeof simpleItems>([]);

  return (
    <Combobox
      items={ simpleItems }
      onValueChange={ (values) => setValues(values) }
      value={ values } />
  );
};

export const CustomOptionRenderer = () => {
  type CustomData = {
    description: string,
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
      customOptionRenderer={ (item: ComboboxItem<CustomData>) => (
        <div data-testid="custom-item">
          { item.label } { item.customRendererData?.description }
        </div>
      )}
      items={ items } />
  );
};

export const Default = () => (
  <Combobox items={ simpleItems } />
);

export const DefaultValue = () => (
  <Combobox
    defaultValue={ [simpleItems[0]] }
    items={ simpleItems } />
);

export const DefaultValueMultiple = () => (
  <Combobox
    defaultValue={ [simpleItems[0], simpleItems[1]]}
    items={ simpleItems }
    multiple />
);

export const Disabled = () => (
  <Combobox
    disabled
    items={ simpleItems } />
);

export const Empty = () => (
  <Combobox items={ [] } />
);

export const Group = () => (
  <Combobox items={ groupedItems } />
);

export const Readonly = () => (
  <Combobox
    items={ simpleItems }
    readOnly />
);
