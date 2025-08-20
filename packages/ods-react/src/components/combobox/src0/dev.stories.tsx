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
  <Combobox
    className={ style['custom-combobox'] }
    items={ items }>
    <ComboboxControl className={ style['custom-combobox__control'] } />

    <ComboboxContent className={ style['custom-combobox__content'] } />
  </Combobox>
);

export const CustomOptionRenderer = () => {
  type CustomData = {
    description: string,
  }
  const [selectedValue, setSelectedValue] = useState<string[]>([]);

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
      highlightResults
      items={ items }
      onValueChange={ (val) => {
        console.log(val.value);setSelectedValue(val.value)
      }}
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
      )}>
      <ComboboxControl />

      <ComboboxContent />
    </Combobox>
  );
};

export const WithGroups = () => (
  <Combobox items={ groupedItems }>
    <ComboboxControl />

    <ComboboxContent />
  </Combobox>
);

export const DefaultValue = () => (
  <Combobox
    defaultValue={ ['hamster'] }
    items={ items }>
    <ComboboxControl />

    <ComboboxContent />
  </Combobox>
);

export const Disabled = () => (
  <Combobox
    disabled
    items={ items }>
    <ComboboxControl />

    <ComboboxContent />
  </Combobox>
);

export const HighlightResults = () => (
  <Combobox
    highlightResults
    items={ items }>
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

export const NoCustomValue = () => (
  <Combobox
    allowCustomValue={ false }
    items={ items }>
    <ComboboxControl />

    <ComboboxContent />
  </Combobox>
);

export const NoResultLabel = () => (
  <Combobox
    items={ [] }
    noResultLabel="Aucun résultat trouvé">
    <ComboboxControl />

    <ComboboxContent />
  </Combobox>
);

export const NewElementLabel = () => (
  <Combobox
    allowCustomValue
    items={ items }
    newElementLabel="Ajouter : ">
    <ComboboxControl />

    <ComboboxContent />
  </Combobox>
);

export const ReadOnly = () => (
  <Combobox
    items={ items }
    readOnly>
    <ComboboxControl />
    <ComboboxContent />
  </Combobox>
);

export const BottomPage = () => (
  <div style={{ display: 'flex', alignItems: 'flex-end', height: '90vh' }}>
    <Combobox items={ items }>
      <ComboboxControl />

      <ComboboxContent />
    </Combobox>
  </div>
)

export const Controlled = () => {
  const [value, setValue] = useState<string[]>(['dog']);

  return (
    <>
      <span>Value: { value }</span>

      <Combobox
        items={ items }
        onValueChange={ (val) => setValue(val.value) }
        value={ value }>
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
      <div>Selected value: { value }</div>

      <Combobox
        items={ groupedItems }
        onValueChange={ (val) => {
          setValue(val.value);
        }}
        value={ value }>
        <ComboboxControl />

        <ComboboxContent />
      </Combobox>
    </>
  );
};

export const UncontrolledMultiple = () => (
  <Combobox
    // onValueChange={ ({ value }) => console.log(value) }
    items={ items }
    multiple>
    <ComboboxControl clearable />

    <ComboboxContent />
  </Combobox>
);

export const UncontrolledMultipleDefaultValue = () => (
  <Combobox
    defaultValue={ ['dog', 'cat', 'toto'] }
    // onValueChange={ ({ value }) => console.log(value) }
    items={ items }
    multiple>
    <ComboboxControl clearable />

    <ComboboxContent />
  </Combobox>
);

export const ControlledMultiple = () => {
  const [value, setValue] = useState<string[]>(['dog', 'cat']);

  return (
    <>
      <div>Selected values: { value.join(', ') }</div>

      <Combobox
        items={ items }
        multiple
        onValueChange={ ({ value }) => setValue(value) }
        value={ value }>
        <ComboboxControl />

        <ComboboxContent />
      </Combobox>
    </>
  );
};

export const MultipleGroups = () => (
  <Combobox
    items={ groupedItems }
    multiple>
    <ComboboxControl />

    <ComboboxContent />
  </Combobox>
);

export const MultipleMultiline = () => {
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
        allowCustomValue
        items={ fruitsAndVegetables }
        multiple
        onValueChange={ (val) => setValue(val.value) }
        value={ value }>
        <ComboboxControl
          clearable
          placeholder="Select fruit or vegetable..." />

        <ComboboxContent />
      </Combobox>
    </div>
  );
};

export const DisabledMultiple = () => (
  <Combobox
    disabled
    defaultValue={ ['item1', 'item2'] }
    items={ items }
    multiple>
    <ComboboxControl />

    <ComboboxContent />
  </Combobox>
);

export const ReadOnlyMultiple = () => (
  <Combobox
    defaultValue={ ['item1', 'item2'] }
    items={ items }
    multiple
    readOnly>
    <ComboboxControl />

    <ComboboxContent />
  </Combobox>
);
