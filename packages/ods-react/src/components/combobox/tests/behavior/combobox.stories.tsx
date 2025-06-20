import { useState } from 'react';
import { Combobox, ComboboxControl, ComboboxContent } from '../../src';

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
      { label: 'Broccoli', value: 'broccoli' }
    ]
  }
];

export const keyboardNavigation = () => (
  <Combobox items={simpleItems} data-testid="keyboard-navigation">
    <ComboboxControl />
    <ComboboxContent />
  </Combobox>
);

export const filtering = () => (
  <Combobox 
    items={simpleItems} 
    data-testid="filtering"
  >
    <ComboboxControl clearable />
    <ComboboxContent />
  </Combobox>
);

export const selectionBehavior = () => {
  const [value, setValue] = useState<string[]>([]);
  
  return (
    <div data-testid="selection-wrapper">
      <div data-testid="selection-value">{value.join(',')}</div>
      <Combobox 
        items={simpleItems} 
        value={value}
        onValueChange={(details) => setValue(details.value)}
        data-testid="selection-behavior"
      >
        <ComboboxControl />
        <ComboboxContent />
      </Combobox>
    </div>
  );
};

export const controlledBehavior = () => {
  const [value, setValue] = useState<string[]>([]);
  
  return (
    <div data-testid="controlled-wrapper">
      <div data-testid="controlled-value">{value.join(',')}</div>
      <Combobox 
        items={simpleItems} 
        value={value}
        onValueChange={(details) => setValue(details.value)}
        data-testid="controlled-behavior"
      >
        <ComboboxControl clearable />
        <ComboboxContent />
      </Combobox>
    </div>
  );
};

export const groupNavigation = () => {
  const [value, setValue] = useState<string[]>([]);
  
  return (
    <div data-testid="group-navigation-wrapper">
      <div data-testid="group-value">{value.join(',')}</div>
      <Combobox 
        items={groupedItems} 
        value={value}
        onValueChange={(details) => setValue(details.value)}
        data-testid="group-navigation"
      >
        <ComboboxControl />
        <ComboboxContent />
      </Combobox>
    </div>
  );
};

export const customValueBehavior = () => {
  const [value, setValue] = useState<string[]>([]);
  
  return (
    <div data-testid="custom-value-wrapper">
      <div data-testid="custom-value-display">{value.join(',')}</div>
      <Combobox 
        items={simpleItems} 
        value={value}
        allowCustomValue={true}
        onValueChange={(details) => setValue(details.value)}
        data-testid="custom-value-behavior"
      >
        <ComboboxControl />
        <ComboboxContent />
      </Combobox>
    </div>
  );
};

export const interactionModes = () => (
  <div>
    <h3>Disabled</h3>
    <Combobox items={simpleItems} disabled data-testid="interaction-disabled">
      <ComboboxControl />
      <ComboboxContent />
    </Combobox>
    
    <h3>Read Only</h3>
    <Combobox 
      items={simpleItems} 
      readOnly 
      defaultValue={['apple']} 
      data-testid="interaction-readonly"
    >
      <ComboboxControl />
      <ComboboxContent />
    </Combobox>
  </div>
); 

export const uncontrolledMultiple = () => (
  <Combobox items={simpleItems} multiple data-testid="uncontrolled-multiple">
    <ComboboxControl />
    <ComboboxContent />
  </Combobox>
);

export const controlledMultiple = () => {
  const [value, setValue] = useState<string[]>([]);
  
  return (
    <div data-testid="controlled-multiple-wrapper">
      <div data-testid="controlled-multiple-values">{value.join(',')}</div>
      <Combobox 
        items={simpleItems} 
        multiple
        value={value}
        onValueChange={(details) => setValue(details.value)}
        data-testid="controlled-multiple"
      >
        <ComboboxControl />
        <ComboboxContent />
      </Combobox>
    </div>
  );
};