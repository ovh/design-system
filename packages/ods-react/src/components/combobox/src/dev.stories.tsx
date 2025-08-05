import { useState } from 'react';
import { FormField, FormFieldLabel } from '../../form-field/src';
import { ICON_NAME, Icon } from '../../icon/src';
import { INPUT_I18N } from '../../input/src';
import { Combobox, ComboboxContent, ComboboxControl, type ComboboxItem } from '.';
import style from './dev.module.css';

export default {
  component: Combobox,
  title: 'Combobox dev',
};

const items = [
  { label: 'Dog', value: 'dog' },
  { label: 'Cat', value: 'cat' },
  { label: 'Hamster', value: 'hamster' },
  { label: 'Parrot', value: 'parrot' },
  { label: 'Spider', value: 'spider' },
  { label: 'Goldfish', value: 'goldfish' },
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

export const Clearable = () => (
  <Combobox items={ items }>
    <ComboboxControl clearable />
    <ComboboxContent />
  </Combobox>
);

export const Default = () => (
  <Combobox items={ items }>
    <ComboboxControl />
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
  type CustomData = {
    description: string,
  }

  const [selectedValue, setSelectedValue] = useState<string[]>([]);

  const items = [
    { label: 'Dog', value: 'dog', customRendererData: { description: 'Some dog description' }},
    { label: 'Cat', value: 'cat', customRendererData: { description: 'Some cat description' }},
    { label: 'Hamster', value: 'hamster', customRendererData: { description: 'Some hamster description' }},
    { label: 'Parrot', value: 'parrot', customRendererData: { description: 'Some parrot description' }},
    { label: 'Spider', value: 'spider', customRendererData: { description: 'Some spider description' }},
    { label: 'Goldfish', value: 'goldfish', customRendererData: { description: 'Some goldfish description' }},
  ];

  return (
    <Combobox
      highlightResults
      items={ items }
      onValueChange={ (val) => setSelectedValue(val.value) }
      value={ selectedValue }
      customOptionRenderer={ (item: ComboboxItem<CustomData>) => (
        <div className={ style['custom-option'] }>
          <Icon name={ ICON_NAME.circleInfo } />
          <div className={ style['custom-option__label'] }>
            { item.label }
          </div>
          <div className={ style['custom-option__description'] }>
            <Icon name={ ICON_NAME.arrowRight } /> { item.customRendererData?.description }
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

export const I18n = () => (
  <Combobox
    i18n={{ [INPUT_I18N.clearButton]: 'Clear combobox' }}
    items={ items }>
    <ComboboxControl clearable />
    <ComboboxContent />
  </Combobox>
);

export const InFormField = () => (
  <FormField>
    <FormFieldLabel>
      Combobox:
    </FormFieldLabel>

    <Combobox items={ items }>
      <ComboboxControl />
      <ComboboxContent />
    </Combobox>
  </FormField>
);

export const Invalid = () => (
  <>
    <Combobox
      invalid
      items={ items }>
      <ComboboxControl />
      <ComboboxContent />
    </Combobox>

    <FormField invalid>
      <FormFieldLabel>
        Invalid combobox
      </FormFieldLabel>

      <Combobox items={ items }>
        <ComboboxControl />
        <ComboboxContent />
      </Combobox>
    </FormField>
  </>
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

export const DisabledMultiple = () => (
  <Combobox items={items} disabled multiple defaultValue={['item1', 'item2']}>
    <ComboboxControl />
    <ComboboxContent />
  </Combobox>
);

export const ReadOnlyMultiple = () => (
  <Combobox items={items} readOnly multiple defaultValue={['item1', 'item2']}>
    <ComboboxControl />
    <ComboboxContent />
  </Combobox>
);
