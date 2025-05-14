import { Combobox as ArkCombobox, createListCollection, Portal } from '@ark-ui/react';
import { useMemo, useState } from 'react';
import { Combobox, ComboboxContent, ComboboxControl, type ComboboxCustomOptionRendererArg, ComboboxLabel } from '.';
import { FormField } from '../../form-field/src';
import style from './dev.module.css';

export default {
  component: Combobox,
  title: 'Combobox dev',
};

export const Basic = () => {
  const initialItems = [
    { label: 'Dog', value: 'dog' },
    { label: 'Cat', value: 'cat' },
    { label: 'Hamster', value: 'hamster' },
    { label: 'Parrot', value: 'parrot' },
    { label: 'Spider', value: 'spider' },
    { label: 'Goldfish', value: 'goldfish' },
  ];

  const [items, setItems] = useState(initialItems);
  const collection = useMemo(() =>
      createListCollection({ items }),
    [items],
  );

  const handleInputChange = (details: { inputValue: string }) => {
    setItems(initialItems.filter(item =>
      item.label.toLowerCase().includes(details.inputValue.toLowerCase()),
    ));
  };

  return (
    <ArkCombobox.Root
      collection={ collection }
      onInputValueChange={ handleInputChange }
    >
      <ArkCombobox.Label>Framework</ArkCombobox.Label>
      <ArkCombobox.Control>
        <ArkCombobox.Input placeholder="Select an animal" />
        <ArkCombobox.Trigger>▼</ArkCombobox.Trigger>
        <ArkCombobox.ClearTrigger>✕</ArkCombobox.ClearTrigger>
      </ArkCombobox.Control>
      <Portal>
        <ArkCombobox.Positioner>
          <ArkCombobox.Content>
            <ArkCombobox.List>
              { collection.items.map((item) => (
                <ArkCombobox.Item key={ item.value } item={ item }>
                  <ArkCombobox.ItemText>{ item.label }</ArkCombobox.ItemText>
                  <ArkCombobox.ItemIndicator>✓</ArkCombobox.ItemIndicator>
                </ArkCombobox.Item>
              )) }
            </ArkCombobox.List>
          </ArkCombobox.Content>
        </ArkCombobox.Positioner>
      </Portal>
    </ArkCombobox.Root>
  );
};

export const CustomCSS = () => (
  <Combobox
    className={ style[ 'custom-combobox' ] }
    items={ [
      { label: 'Dog', value: 'dog' },
      { label: 'Cat', value: 'cat' },
      { label: 'Hamster', value: 'hamster' },
      { label: 'Parrot', value: 'parrot' },
      { label: 'Spider', value: 'spider' },
      { label: 'Goldfish', value: 'goldfish' },
    ] }>
    <ComboboxLabel className={ style[ 'custom-combobox-label' ] }>Label</ComboboxLabel>
    <ComboboxControl className={ style[ 'custom-combobox-control' ] } />
    <ComboboxContent className={ style[ 'custom-combobox-content' ] } />
  </Combobox>
);

export const Default = () => (
  <Combobox
    items={ [
      { label: 'Dog', value: 'dog' },
      { label: 'Cat', value: 'cat' },
      { label: 'Hamster', value: 'hamster' },
      { label: 'Parrot', value: 'parrot' },
      { label: 'Spider', value: 'spider' },
      { label: 'Goldfish', value: 'goldfish' },
    ] }>
    <ComboboxLabel>Label</ComboboxLabel>
    <ComboboxControl />
    <ComboboxContent />
  </Combobox>
);

export const Disabled = () => (
  <Combobox
    disabled
    items={ [
      { label: 'Dog', value: 'dog' },
      { label: 'Cat', value: 'cat' },
      { label: 'Hamster', value: 'hamster' },
      { label: 'Parrot', value: 'parrot' },
      { label: 'Spider', value: 'spider' },
      { label: 'Goldfish', value: 'goldfish' },
    ] }>
    <ComboboxLabel>Label</ComboboxLabel>
    <ComboboxControl />
    <ComboboxContent />
  </Combobox>
);

export const DisabledWhileOpen = () => (
  <Combobox
    disabled
    items={ [
      { label: 'Dog', value: 'dog' },
      { label: 'Cat', value: 'cat' },
      { label: 'Hamster', value: 'hamster' },
      { label: 'Parrot', value: 'parrot' },
      { label: 'Spider', value: 'spider' },
      { label: 'Goldfish', value: 'goldfish' },
    ] }>
    <ComboboxLabel>Label</ComboboxLabel>
    <ComboboxControl />
    <ComboboxContent />
  </Combobox>
);

export const Empty = () => (
  <Combobox items={ [] }>
    <ComboboxLabel>Label</ComboboxLabel>
    <ComboboxControl />
    <ComboboxContent />
  </Combobox>
);

export const Groups = () => (
  <Combobox
    items={ [
      {
        label: 'Europe',
        options: [
          { label: 'France', value: 'fr' },
          { label: 'Germany', value: 'de', disabled: true },
          { label: 'Italy', value: 'it' },
        ],
      },
      {
        label: 'Asia', disabled: true,
        options: [
          { label: 'China', value: 'cn' },
          { label: 'Japan', value: 'jp' },
          { label: 'Russia', value: 'ru' },
        ],
      },
      { label: 'World', value: 'world' },
    ] }>
    <ComboboxLabel>Label</ComboboxLabel>
    <ComboboxControl />
    <ComboboxContent />
  </Combobox>
);

export const InFormField = () => (
  <FormField>
    <Combobox
      items={ [
        { label: 'Dog', value: 'dog' },
        { label: 'Cat', value: 'cat' },
        { label: 'Hamster', value: 'hamster' },
        { label: 'Parrot', value: 'parrot' },
        { label: 'Spider', value: 'spider' },
        { label: 'Goldfish', value: 'goldfish' },
      ] }>
      <ComboboxLabel>Label</ComboboxLabel>
      <ComboboxControl />
      <ComboboxContent />
    </Combobox>
  </FormField>
);

export const Placeholder = () => (
  <Combobox
    items={ [
      { label: 'Dog', value: 'dog' },
      { label: 'Cat', value: 'cat' },
      { label: 'Hamster', value: 'hamster', disabled: true },
      { label: 'Parrot', value: 'parrot' },
      { label: 'Spider', value: 'spider' },
      { label: 'Goldfish', value: 'goldfish' },
    ] }>
    <ComboboxLabel>Label</ComboboxLabel>
    <ComboboxControl placeholder="Please select" />
    <ComboboxContent />
  </Combobox>
);

export const Readonly = () => (
  <Combobox
    readOnly
    items={ [
      { label: 'Dog', value: 'dog' },
      { label: 'Cat', value: 'cat' },
      { label: 'Hamster', value: 'hamster' },
      { label: 'Parrot', value: 'parrot' },
      { label: 'Spider', value: 'spider' },
      { label: 'Goldfish', value: 'goldfish' },
    ] }>
    <ComboboxLabel>Label</ComboboxLabel>
    <ComboboxControl />
    <ComboboxContent />
  </Combobox>
);

export const FlexEnd = () => (
  <div style={ { display: 'flex', height: '90vh', alignItems: 'flex-end' } }>
    <Combobox
      items={ [
        { label: 'Dog', value: 'dog' },
        { label: 'Cat', value: 'cat' },
        { label: 'Hamster', value: 'hamster', disabled: true },
        { label: 'Parrot', value: 'parrot' },
        { label: 'Spider', value: 'spider' },
        { label: 'Goldfish', value: 'goldfish' },
      ] }>
      <ComboboxLabel>Flex end</ComboboxLabel>
      <ComboboxControl placeholder="Please select" />
      <ComboboxContent />
    </Combobox>
  </div>
);

export const Highlight = () => (
  <Combobox
    highlightResults={ true }
    items={ [
      { label: 'Dog', value: 'dog' },
      { label: 'Cat', value: 'cat' },
      { label: 'Hamster', value: 'hamster' },
      { label: 'Parrot', value: 'parrot' },
      { label: 'Spider', value: 'spider' },
      { label: 'Goldfish', value: 'goldfish' },
    ] }
  >
    <ComboboxLabel>Label</ComboboxLabel>
    <ComboboxControl />
    <ComboboxContent />
  </Combobox>
);

export const CustomOptions = () => {
  const items = [
    { label: 'Apple', value: 'apple', customRendererData: { color: 'red', info: 'Fruit' } },
    { label: 'Bananaspan', value: 'banana', customRendererData: { color: 'yellow', info: 'Fruit' } },
    { label: 'Carrotspan', value: 'carrot', customRendererData: { color: 'orange', info: 'Vegetable' } },
    { label: 'Broccoli', value: 'broccoli', customRendererData: { color: 'green', info: 'Vegetable' } },
    { label: 'Blueberry', value: 'blueberry', customRendererData: { color: 'blue', info: 'Fruit' } },
  ];

  const customOptionRenderer = ({ label, customData }: ComboboxCustomOptionRendererArg) => {
    const data = (customData || {}) as Record<string, unknown>;
    const color = typeof data.color === 'string' ? data.color : undefined;
    const info = typeof data.info === 'string' ? data.info : '';
    return (
      <span style={ { color } }>
        { label } <span style={ { fontWeight: 'normal', fontSize: 12, color: '#888' } }>({ info })</span>
      </span>
    );
  };

  return (
    <Combobox
      highlightResults={ true }
      items={ items }
      customOptionRenderer={ customOptionRenderer }
    >
      <ComboboxLabel>Label</ComboboxLabel>
      <ComboboxControl />
      <ComboboxContent />
    </Combobox>
  );
};
