import { Combobox, ComboboxContent, ComboboxControl } from '../../src';

export default {
  component: Combobox,
  title: 'Tests accessibility',
};

const items = [
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
    ],
  },
  {
    label: 'Vegetables',
    options: [
      { label: 'Carrot', value: 'carrot' },
    ],
  },
];

export const Group = () => (
  <Combobox items={ groupedItems }>
    <ComboboxControl />
    <ComboboxContent createPortal={ false } />
  </Combobox>
);

export const Multiple = () => (
  <Combobox
    items={ items }
    multiple>
    <ComboboxControl />
    <ComboboxContent createPortal={ false } />
  </Combobox>
);

export const Single = () => (
  <Combobox items={ items }>
    <ComboboxControl />
    <ComboboxContent createPortal={ false } />
  </Combobox>
);
