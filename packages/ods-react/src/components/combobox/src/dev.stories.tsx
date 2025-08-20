import { type FormEvent, useRef, useState } from 'react';
import { FormField, FormFieldError, FormFieldLabel } from '../../form-field/src';
import { ICON_NAME, Icon } from '../../icon/src';
import { INPUT_I18N } from '../../input/src';
import { Modal, ModalBody, ModalContent, ModalTrigger } from '../../modal/src';
import { Combobox, type ComboboxInstance, type ComboboxItem } from '.';
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

const longList: ComboboxItem[] = [];

for (let i = 0; i < 500; i++) {
  longList.push({
    label: `Option ${i} - (${Math.random() * (1000 - 1) + 1})`,
    value: `value-${i}`,
  });
}

export const Default = () => (
  <Combobox items={ items } />
);

export const DefaultValue = () => (
  <Combobox
    defaultValue={ [items[0]] }
    items={ items } />
);

export const NoCustomValue = () => (
  <Combobox
    allowCustomValue={ false }
    items={ items } />
);

export const NewElementLabel = () => (
  <Combobox
    items={ items }
    newElementLabel="Ajouter : " />
);

export const NoResultLabel = () => (
  <Combobox
    items={ [] }
    noResultLabel="Aucun résultat trouvé" />
);

export const Clearable = () => (
  <>
    <Combobox
      clearable
      items={ items } allowCustomValue={ false }
      onValueChange={ (v) => console.log(`[DEV]: value:`, v) }
    />

    <br />

    <Combobox
      clearable
      defaultValue={ [items[0]] }
      items={ items }
      onValueChange={ (v) => console.log(`[DEV]: value:`, v) } />

    <br />

    <Combobox
      clearable
      defaultValue={ [items[0]] }
      disabled
      items={ items }
      onValueChange={ (v) => console.log(`[DEV]: value:`, v) } />

    <br />

    <Combobox
      clearable
      defaultValue={ [items[0]] }
      items={ items }
      onValueChange={ (v) => console.log(`[DEV]: value:`, v) }
      readOnly />
  </>
);

export const Loading = () => (
  <Combobox
    items={ items }
    loading />
);

export const Disabled = () => (
  <>
    <Combobox
      disabled
      items={ items } />

    <br />

    <Combobox
      defaultValue={ [items[0]] }
      disabled
      items={ items } />
  </>
);

export const Readonly = () => (
  <>
    <Combobox
      items={ items }
      readOnly />

    <br />

    <Combobox
      defaultValue={ [items[0]] }
      items={ items }
      readOnly />
  </>
);

export const Placeholder = () => (
  <Combobox
    items={ items }
    placeholder="Select a value" />
);

export const Invalid = () => (
  <Combobox
    invalid
    items={ items } />
);

export const HighlightResults = () => (
  <Combobox
    highlightResults
    items={ items } />
);

export const Groups = () => (
  <Combobox items={ groupedItems } />
);

export const GroupsWithSameLabel = () => (
  <Combobox items={[
    {
      label: 'Server Bare Metal',
      options: [
        { label: 'RAM100', value: 'bare-ram100' },
        { label: 'RAM200', value: 'bare-ram100' },
        { label: 'RAM300', value: 'bare-ram100' },
      ],
    },
    {
      label: 'Server Flashy Aluminium',
      options: [
        { label: 'RAM100', value: 'alu-ram100' },
        { label: 'RAM200', value: 'alu-ram100' },
        { label: 'RAM300', value: 'alu-ram100' },
      ],
    },
    { label: 'RAM100', value: 'ram100' },
    { label: 'RAM200', value: 'ram200' },
    { label: 'RAM300', value: 'ram300' },
  ]} />
);

export const BottomPage = () => (
  <div style={{ display: 'flex', alignItems: 'flex-end', height: '90vh' }}>
    <Combobox items={ items } />
  </div>
);

export const Handlers = () => (
  <Combobox
    items={ items }
    onInputChange={ (v) => console.log('onInputChange', v) }
    onValueChange={ (v) => console.log('onValueChange', v) } />
);

export const OptionDisabled = () => (
  <Combobox
    items={[
      { label: 'Dog', value: 'dog' },
      { label: 'Cat', value: 'cat' },
      { label: 'Hamster', value: 'hamster', disabled: true },
      { label: 'Parrot', value: 'parrot'},
      { label: 'Spider', value: 'spider', disabled: true },
      { label: 'Goldfish', value: 'goldfish' },
    ]} />
);

export const GroupDisabled = () => (
  <Combobox
    items={[
      {
        label: 'Europe',
        options: [
          { label: 'France', value: 'fr' },
          { label: 'Germany', value: 'de' },
          { label: 'Italy', value: 'it' },
        ],
      },
      {
        disabled: true,
        label: 'Asia',
        options: [
          { label: 'China', value: 'cn', disabled: true, },
          { label: 'Japan', value: 'jp', disabled: true, },
          { label: 'Russia', value: 'ru' },
        ],
      },
      { label: 'World', value: 'world' },
    ]} />
);

export const CustomFilter = () => (
  <>
    <span>Search from right to left in each word</span>

    <Combobox
      customFilter={ (item, inputValue) => {
        const reversedLabel = item.label.split('').reverse().join('');
        return new RegExp(`^${inputValue}`, 'i').test(reversedLabel);
      }}
      items={ items } />
  </>
);

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
      items={ items }
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
      )} />
  );
};

export const CustomStyle = () => (
  <Combobox
    className={ style['custom-combobox'] }
    items={ items } />
);

export const States = () => (
  <>
    <span>Disabled & Readonly</span>
    <Combobox
      defaultValue={ [items[0]] }
      disabled
      items={ items }
      readOnly />

    <span>Disabled & Invalid</span>
    <Combobox
      defaultValue={ [items[0]] }
      disabled
      items={ items }
      invalid />

    <span>Readonly & Invalid</span>
    <Combobox
      defaultValue={ [items[0]] }
      items={ items }
      invalid
      readOnly />

    <span>Disabled & Readonly & Invalid</span>
    <Combobox
      defaultValue={ [items[0]] }
      disabled
      items={ items }
      invalid
      readOnly />
  </>
);

export const I18n = () => (
  <Combobox
    clearable
    i18n={{ [INPUT_I18N.clearButton]: 'Clear combobox' }}
    items={ items } />
);

export const Controlled = () => {
  const [values, setValues] = useState<typeof items>([items[0]]);

  return (
    <>
      <span>Value: { values.map((v) => v.value).join(',') }</span>

      <Combobox
        items={ items }
        onValueChange={ (values) => setValues(values) }
        value={ values } />
    </>
  );
};

export const Uncontrolled = () => {
  const [values, setValues] = useState<typeof items>([items[0]]);

  return (
    <>
      <span>Value: { values.map((v) => v.value).join(',') }</span>

      <Combobox
        defaultValue={ values }
        items={ items }
        onValueChange={ (values) => setValues(values) } />
    </>
  );
};

export const MultipleDefault = () => (
  <Combobox
    items={ items }
    multiple />
);

export const MultipleDefaultValues = () => (
  <Combobox
    defaultValue={ [items[0], items[1]]}
    items={ items }
    multiple />
);

export const MultipleClearable = () => (
  <Combobox
    clearable
    items={ items }
    onValueChange={ (v) => console.log(`[DEV]: value:`, v) }
    multiple />
);

export const MultipleLoading = () => (
  <Combobox
    items={ items }
    loading
    multiple />
);

export const MultipleDisabled = () => (
  <>
    <Combobox
      disabled
      items={ items }
      multiple />

    <br />

    <Combobox
      defaultValue={ [items[0], items[1]] }
      disabled
      items={ items }
      multiple />
  </>
);

export const MultipleReadonly = () => (
  <>
    <Combobox
      items={ items }
      multiple
      readOnly />

    <br />

    <Combobox
      defaultValue={ [items[0], items[1]] }
      items={ items }
      multiple
      readOnly />
  </>
);

export const MultipleControlled = () => {
  const [values, setValues] = useState<typeof items>([items[0], items[1]]);

  return (
    <>
      <span>Value: { values.map((v) => v.value).join(',') }</span>

      <Combobox
        items={ items }
        multiple
        onValueChange={ (values) => setValues(values) }
        value={ values } />
    </>
  );
};

export const LongList = () => (
  <Combobox items={ longList } />
);

export const InModal = () => (
  <>
    <Modal>
      <ModalTrigger>
        Trigger Basic List Modal
      </ModalTrigger>

      <ModalContent>
        <ModalBody>
          <Combobox
            createPortal={ false }
            items={ items } />
        </ModalBody>
      </ModalContent>
    </Modal>

    <Modal>
      <ModalTrigger>
        Trigger Long List Modal
      </ModalTrigger>

      <ModalContent>
        <ModalBody>
          <Combobox
            createPortal={ false }
            items={ longList } />
        </ModalBody>
      </ModalContent>
    </Modal>
  </>
);

export const Reference = () => {
  const comboboxRef = useRef<ComboboxInstance<ComboboxItem>>(null);

  return (
    <>
      <Combobox
        items={ items }
        ref={ comboboxRef } />

      <button
        onClick={ () => console.log(comboboxRef.current) }
        type="button">
        Log ref
      </button>
    </>
  );
};

export const Async = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [asyncItems, setAsyncItems] = useState<ComboboxItem[]>([]);

  function onLoad() {
    setIsLoading(true);

    setTimeout(() => {
      requestAnimationFrame(() => {
        setAsyncItems(longList);
        setIsLoading(false);
      });
    }, 2000);
  }

  return (
    <>
      <button
        onClick={ onLoad }
        type="button">
        Load data
      </button>

      <Combobox
        items={ asyncItems }
        loading={ isLoading }
        loadingLabel="Loading data ..." />
    </>
  );
};

export const InFormField = () => (
  <FormField>
    <FormFieldLabel>
      Combobox:
    </FormFieldLabel>

    <Combobox
      clearable
      items={ items }
      required />

    <FormFieldError>
      Error
    </FormFieldError>
  </FormField>
);

export const RequiredInForm = () => {
  const formRef = useRef<HTMLFormElement>(null);

  function onSubmit(e: FormEvent) {
    e.preventDefault();

    const formData = new FormData(formRef.current!);

    for (const [key, value] of formData) {
      console.log(`${key}: ${value}`)
    }
  }

  return (
    <form
      onSubmit={ onSubmit }
      ref={ formRef }>
      <FormField>
        <FormFieldLabel>
          Combobox:
        </FormFieldLabel>

        <Combobox
          clearable
          name="combobox"
          items={ items }
          required />

        <FormFieldError>
          Error
        </FormFieldError>
      </FormField>

      <button type="submit">
        Submit
      </button>
    </form>
  );
};
