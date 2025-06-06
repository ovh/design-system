import { Combobox, ComboboxControl, ComboboxContent } from '../../src';

export default {
  component: Combobox,
  title: 'Tests rendering',
};

const items = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
];

export const customStyle = () => (
  <Combobox
    data-testid="custom-style"
    items={items}
    style={{ height: '42px' }}
  >
    <ComboboxControl />
    <ComboboxContent />
  </Combobox>
);

export const render = () => (
  <Combobox data-testid="render" items={items}>
    <ComboboxControl />
    <ComboboxContent />
  </Combobox>
);
