import { useState } from 'react';
import { Combobox, ComboboxControl, ComboboxContent } from '../../src';

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

export const basic = () => (
  <Combobox items={[]} data-testid="basic">
    <ComboboxControl />
    <ComboboxContent />
  </Combobox>
);

export const withItems = () => (
  <Combobox items={simpleItems} data-testid="with-items">
    <ComboboxControl />
    <ComboboxContent />
  </Combobox>
);

export const withGroupedItems = () => (
  <Combobox items={groupedItems} data-testid="with-grouped-items">
    <ComboboxControl />
    <ComboboxContent />
  </Combobox>
);

export const withDefaultValue = () => (
  <div>
    <div data-testid="value-display">banana</div>
    <Combobox 
      items={simpleItems} 
      defaultValue={['banana']} 
      data-testid="with-default-value"
    >
      <ComboboxControl />
      <ComboboxContent />
    </Combobox>
  </div>
);

export const disabled = () => (
  <Combobox 
    items={simpleItems} 
    disabled 
    data-testid="disabled"
  >
    <ComboboxControl />
    <ComboboxContent />
  </Combobox>
);

export const withHighlight = () => (
  <Combobox 
    items={simpleItems} 
    highlightResults
    data-testid="with-highlight"
  >
    <ComboboxControl />
    <ComboboxContent />
  </Combobox>
);

export const readonly = () => (
  <Combobox 
    items={simpleItems} 
    readOnly 
    defaultValue={['apple']} 
    data-testid="readonly"
  >
    <ComboboxControl />
    <ComboboxContent />
  </Combobox>
);

interface CustomItemProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  item: any;
}

const CustomItem = ({ item }: CustomItemProps) => (
  <div data-testid="custom-item" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
    <span style={{ color: 'blue', fontWeight: 'bold' }}>★</span>
    <span>{item.label}</span>
  </div>
);

export const withCustomItems = () => (
  <Combobox 
    items={simpleItems} 
    data-testid="with-custom-items"
    customOptionRenderer={(item) => <CustomItem item={item} />}
  >
    <ComboboxControl />
    <ComboboxContent />
  </Combobox>
);

export const controlled = () => {
  const [value, setValue] = useState<string[]>([]);
  
  return (
    <div>
      <div data-testid="controlled-value">{value.join(',')}</div>
      <Combobox 
        items={simpleItems} 
        value={value}
        onValueChange={(details) => setValue(details.value)}
        data-testid="controlled"
      >
        <ComboboxControl />
        <ComboboxContent />
      </Combobox>
    </div>
  );
};
