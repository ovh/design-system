import { useState } from 'react';
import { Combobox, ComboboxContent, ComboboxControl } from '.';
import { Icon } from '../../icon/src';
import { ICON_NAME } from '../../icon/src/constants/icon-name';
import style from './dev.module.css';

export default {
  component: Combobox,
  title: 'Combobox dev',
};

const items = [
  { label: 'Item 1', value: 'item1' },
  { label: 'Item 2', value: 'item2' },
  { label: 'Item 3', value: 'item3' },
];

const groupedItems = [
  {
    label: 'Europe',
    options: [
      { label: 'France', value: 'fr' },
      { label: 'Germany', value: 'de' },
      { label: 'Italy', value: 'it' },
    ],
  },
  {
    label: 'Asia',
    options: [
      { label: 'China', value: 'cn' },
      { label: 'Japan', value: 'jp' },
      { label: 'Russia', value: 'ru' },
    ],
  },
  { label: 'World', value: 'world' },
];

export const Default = () => (
  <Combobox items={items}>
    <ComboboxControl clearable />
    <ComboboxContent />
  </Combobox>
);

export const CustomStyle = () => (
  <Combobox className={style['custom-combobox']} items={items}>
    <ComboboxControl className={style['custom-combobox__control']} />
    <ComboboxContent className={style['custom-combobox__content']} />
  </Combobox>
);

export const CustomOptionRenderer = () => {
  const [selectedValue, setSelectedValue] = useState<string[]>([]);

  return (
    <Combobox
      items={items}
      highlightResults
      value={selectedValue}
      onValueChange={(val) => setSelectedValue(val.value)}
      customOptionRenderer={(item) => (
        <div className={style['custom-option']}>
          <div className={style['custom-option__content']}>
            <div className={style['custom-option__label']}>
              <Icon name={ICON_NAME.circleInfo} /> {item.label}
            </div>
            <div className={style['custom-option__description']}>
              <Icon name={ICON_NAME.arrowRight} /> Description for {item.label}
            </div>
          </div>
        </div>
      )}
    >
      <ComboboxControl />
      <ComboboxContent />
    </Combobox>
  );
};

export const WithGroups = () => (
  <Combobox
    items={groupedItems}
  >
    <ComboboxControl />
    <ComboboxContent />
  </Combobox>
);

export const DefaultValue = () => (
  <Combobox items={items} defaultValue={['item2']}>
    <ComboboxControl />
    <ComboboxContent />
  </Combobox>
);

export const Disabled = () => (
  <Combobox items={items} disabled>
    <ComboboxControl />
    <ComboboxContent />
  </Combobox>
);

export const HighlightResults = () => (
  <Combobox items={items} allowCustomValue={false} highlightResults>
    <ComboboxControl />
    <ComboboxContent />
  </Combobox>
);

export const NoResultLabel = () => (
  <Combobox items={[]} allowCustomValue={false} noResultLabel="Aucun résultat trouvé">
    <ComboboxControl />
    <ComboboxContent />
  </Combobox>
);

export const NewElementLabel = () => (
  <Combobox items={items} allowCustomValue newElementLabel="Ajouter : ">
    <ComboboxControl />
    <ComboboxContent />
  </Combobox>
);

export const ReadOnly = () => (
  <Combobox items={items} readOnly>
    <ComboboxControl />
    <ComboboxContent />
  </Combobox>
);

export const FlexEnd = () => (
  <div style={{ display: 'flex', alignItems: 'flex-end', height: '90vh' }}>
    <Combobox items={items}>
      <ComboboxControl />
      <ComboboxContent />
    </Combobox>
  </div>
)

export const Controlled = () => {
  const [value, setValue] = useState<string[]>(['item1']);
  return (
    <>
    { value }
    <Combobox
      items={items}
      value={value}
      onValueChange={(val) => setValue(val.value)}
    >
      <ComboboxControl />
      <ComboboxContent />
    </Combobox>
    </>
  );
};

export const ControlledWithGroups = () => {
  const [value, setValue] = useState<string[]>([]);
  return (
    <>
      <div>Selected value: {value}</div>
      <Combobox
        items={groupedItems}
        value={value}
        onValueChange={(val) => {
          setValue(val.value);
        }}
      >
        <ComboboxControl />
        <ComboboxContent />
      </Combobox>
    </>
  );
};

export const UncontrolledMultiple = () => (
  <Combobox items={items} multiple defaultValue={['item1', 'item2']}>
    <ComboboxControl />
    <ComboboxContent />
  </Combobox>
);

export const ControlledMultiple = () => {
  const [value, setValue] = useState<string[]>(['item1', 'item3']);
  
  return (
    <>
      <div>Selected values: {value.join(', ')}</div>
      <Combobox
        items={items}
        multiple
        value={value}
        onValueChange={(val) => setValue(val.value)}
      >
        <ComboboxControl />
        <ComboboxContent />
      </Combobox>
    </>
  );
};

export const MultipleWithTags = () => {
  const [value, setValue] = useState<string[]>(['item1']);
  
  const fruitsAndVegetables = [
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Cherry', value: 'cherry' },
    { label: 'Dates', value: 'dates' },
    { label: 'Elderberry', value: 'elderberry' },
    { label: 'Fig', value: 'fig' },
    { label: 'Carrot', value: 'carrot' },
    { label: 'Broccoli', value: 'broccoli' },
    { label: 'Spinach', value: 'spinach' },
  ];
  
  return (
    <div style={{ marginTop: '20px', width: '300px' }}>
      <div style={{ marginBottom: '10px' }}>
        Selected values: {value.join(', ')}
      </div>
      <Combobox
        items={fruitsAndVegetables}
        multiple
        value={value}
        onValueChange={(val) => setValue(val.value)}
        allowCustomValue
      >
        <ComboboxControl clearable placeholder="Select fruit or vegetable..." />
        <ComboboxContent />
      </Combobox>
    </div>
  );
};
