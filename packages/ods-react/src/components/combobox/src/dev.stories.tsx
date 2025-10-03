import { type FormEvent, useRef, useState } from 'react';
import { FormField, FormFieldError, FormFieldLabel } from '../../form-field/src';
import { ICON_NAME, Icon } from '../../icon/src';
import { INPUT_I18N } from '../../input/src';
import { Modal, ModalBody, ModalContent, ModalTrigger } from '../../modal/src';
import { Combobox, ComboboxContent, ComboboxControl, type ComboboxItem, type ComboboxValueChangeDetails } from '.';
import style from './dev.module.css';

export default {
  component: Combobox,
  title: 'Combobox dev',
};

const items = [
  { label: 'Dog', value: 'the-dog' },
  { label: 'Cat', value: 'the-cat' },
  { label: 'Hamster', value: 'the-hamster' },
  { label: 'Parrot', value: 'the-parrot' },
  { label: 'Spider', value: 'the-spider' },
  { label: 'Goldfish', value: 'the-goldfish' },
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
  { label: 'World', value: 'the-world' },
];

const longList: ComboboxItem[] = [];

for (let i = 0; i < 500; i++) {
  longList.push({
    label: `Option ${i} - (${Math.random() * (1000 - 1) + 1})`,
    value: `value-${i}`,
  });
}

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

      <Combobox items={ asyncItems }>
        <ComboboxControl loading={ isLoading } />
        <ComboboxContent />
      </Combobox>
    </>
  );
};

export const BottomPage = () => (
  <div style={{ display: 'flex', alignItems: 'flex-end', height: '90vh' }}>
    <Combobox items={ items }>
      <ComboboxControl />
      <ComboboxContent />
    </Combobox>
  </div>
);

export const Clearable = () => (
  <>
    <Combobox
      items={ items }
      onValueChange={ (v) => console.log(`[DEV]: value:`, v) }>
      <ComboboxControl clearable />
      <ComboboxContent />
    </Combobox>

    <br />

    <Combobox
      defaultValue={ [items[0].value] }
      items={ items }
      onValueChange={ (v) => console.log(`[DEV]: value:`, v) }>
      <ComboboxControl clearable />
      <ComboboxContent />
    </Combobox>

    <br />

    <Combobox
      defaultValue={ [items[0].value] }
      disabled
      items={ items }
      onValueChange={ (v) => console.log(`[DEV]: value:`, v) }>
      <ComboboxControl clearable />
      <ComboboxContent />
    </Combobox>

    <br />

    <Combobox
      defaultValue={ [items[0].value] }
      items={ items }
      onValueChange={ (v) => console.log(`[DEV]: value:`, v) }
      readOnly>
      <ComboboxControl clearable />
      <ComboboxContent />
    </Combobox>
  </>
);

export const Controlled = () => {
  const [values, setValues] = useState([items[0].value]);

  function onValueChange({ value }: ComboboxValueChangeDetails): void {
    setValues(value);
  }

  return (
    <>
      <p>
        Current value: { values.join(', ') }
      </p>

      <Combobox
        items={ groupedItems }
        onValueChange={ onValueChange }
        value={ values }>
        <ComboboxControl />
        <ComboboxContent />
      </Combobox>
    </>
  );
}

export const CustomOptionRenderer = () => {
  type MyData = {
    description?: string,
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
      customOptionRenderer={ (item: ComboboxItem<MyData>) => (
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
      highlightResults
      items={ items }>
      <ComboboxControl />
      <ComboboxContent />
    </Combobox>
  );
};

export const CustomStyle = () => (
  <Combobox
    className={ style['custom-combobox'] }
    items={ items }>
    <ComboboxControl className={ style['custom-combobox__control'] } />
    <ComboboxContent className={ style['custom-combobox__content'] } />
  </Combobox>
);

export const Default = () => (
  <Combobox items={ items }>
    <ComboboxControl />
    <ComboboxContent />
  </Combobox>
);

export const DefaultValue = () => (
  <Combobox
    defaultValue={ [items[0].value] }
    items={ items }>
    <ComboboxControl />
    <ComboboxContent />
  </Combobox>
);

export const Disabled = () => (
  <>
    <Combobox
      disabled
      items={ items }>
      <ComboboxControl />
      <ComboboxContent />
    </Combobox>

    <br />

    <Combobox
      defaultValue={ [items[0].value] }
      disabled
      items={ items }>
      <ComboboxControl />
      <ComboboxContent />
    </Combobox>
  </>
);

export const Group = () => (
  <Combobox items={ groupedItems }>
    <ComboboxControl />
    <ComboboxContent />
  </Combobox>
);

export const GroupsWithSameLabel = () => (
  <Combobox items={[
    {
      label: 'Server Bare Metal',
      options: [
        { label: 'RAM100', value: 'bare-ram100' },
        { label: 'RAM200', value: 'bare-ram200' },
        { label: 'RAM300', value: 'bare-ram300' },
      ],
    },
    {
      label: 'Server Flashy Aluminium',
      options: [
        { label: 'RAM100', value: 'alu-ram100' },
        { label: 'RAM200', value: 'alu-ram200' },
        { label: 'RAM300', value: 'alu-ram300' },
      ],
    },
    { label: 'RAM100', value: 'ram100' },
    { label: 'RAM200', value: 'ram200' },
    { label: 'RAM300', value: 'ram300' },
  ]}>
    <ComboboxControl />
    <ComboboxContent />
  </Combobox>
);

export const Handlers = () => {
  const [inputValueChangeEvents, setInputValueChangeEvents] = useState<string[]>([]);
  const [valueChangeEvents, setValueChangeEvents] = useState<string[]>([]);

  return (
    <>
      <Combobox
        items={ items }
        onInputValueChange={ (event) => setInputValueChangeEvents((e) => e.concat([JSON.stringify(event)])) }
        onValueChange={ (event) => setValueChangeEvents((e) => e.concat([JSON.stringify(event)])) }>
        <ComboboxControl />
        <ComboboxContent />
      </Combobox>

      <p>onInputValueChange events</p>
      <textarea
        readOnly
        style={{ height: '200px', width: '100%' }}
        value={ inputValueChangeEvents.join('\n----------\n') } />

      <p>onValueChange events</p>
      <textarea
        readOnly
        style={{ height: '200px', width: '100%' }}
        value={ valueChangeEvents.join('\n----------\n') } />
    </>
  );
}

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

export const Invalid = () => (
  <Combobox
    invalid
    items={ items }>
    <ComboboxControl />
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

    <FormFieldError>
      Error
    </FormFieldError>
  </FormField>
);

export const InFormRequired = () => {
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
          items={ items }
          name="combobox"
          required>
          <ComboboxControl clearable />
          <ComboboxContent />
        </Combobox>

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

export const InModal = () => (
  <>
    <Modal>
      <ModalTrigger>
        Trigger Basic List Modal
      </ModalTrigger>

      <ModalContent>
        <ModalBody>
          <Combobox items={ items }>
            <ComboboxControl />
            <ComboboxContent createPortal={ false } />
          </Combobox>
        </ModalBody>
      </ModalContent>
    </Modal>

    <Modal>
      <ModalTrigger>
        Trigger Long List Modal
      </ModalTrigger>

      <ModalContent>
        <ModalBody>
          <Combobox items={ longList }>
            <ComboboxControl />
            <ComboboxContent createPortal={ false } />
          </Combobox>
        </ModalBody>
      </ModalContent>
    </Modal>
  </>
);

export const Loading = () => (
  <Combobox items={ items }>
    <ComboboxControl loading />
    <ComboboxContent />
  </Combobox>
);

export const LongList = () => (
  <Combobox items={ longList }>
    <ComboboxControl />
    <ComboboxContent />
  </Combobox>
);

export const NewElementLabel = () => (
  <Combobox
    items={ items }
    newElementLabel="Ajouter : ">
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

export const NoCustom = () => (
  <Combobox
    allowCustomValue={ false }
    items={ items }>
    <ComboboxControl />
    <ComboboxContent />
  </Combobox>
);

export const Placeholder = () => (
  <Combobox items={ items }>
    <ComboboxControl placeholder="Select a value" />
    <ComboboxContent />
  </Combobox>
);

export const Readonly = () => (
  <>
    <Combobox
      items={ items }
      readOnly>
      <ComboboxControl />
      <ComboboxContent />
    </Combobox>

    <br />

    <Combobox
      defaultValue={ [items[0].value] }
      items={ items }
      readOnly>
      <ComboboxControl />
      <ComboboxContent />
    </Combobox>
  </>
);

export const Reference = () => {
  const comboboxRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Combobox
        items={ items }
        ref={ comboboxRef }>
        <ComboboxControl />
        <ComboboxContent />
      </Combobox>

      <button
        onClick={ () => console.log(comboboxRef.current) }
        type="button">
        Log ref
      </button>
    </>
  );
};

export const States = () => (
  <>
    <span>Disabled & Readonly</span>
    <Combobox
      defaultValue={ [items[0].value] }
      disabled
      items={ items }
      readOnly>
      <ComboboxControl />
      <ComboboxContent />
    </Combobox>

    <span>Disabled & Invalid</span>
    <Combobox
      defaultValue={ [items[0].value] }
      disabled
      items={ items }
      invalid>
      <ComboboxControl />
      <ComboboxContent />
    </Combobox>

    <span>Readonly & Invalid</span>
    <Combobox
      defaultValue={ [items[0].value] }
      items={ items }
      invalid
      readOnly>
      <ComboboxControl />
      <ComboboxContent />
    </Combobox>

    <span>Disabled & Readonly & Invalid</span>
    <Combobox
      defaultValue={ [items[0].value] }
      disabled
      items={ items }
      invalid
      readOnly>
      <ComboboxControl />
      <ComboboxContent />
    </Combobox>
  </>
);

export const MultipleClearable = () => (
  <>
    <Combobox
      items={ items }
      multiple
      onValueChange={ (v) => console.log(`[DEV]: value:`, v) }>
      <ComboboxControl clearable />
      <ComboboxContent />
    </Combobox>

    <br />

    <Combobox
      defaultValue={ [items[0].value] }
      items={ items }
      multiple
      onValueChange={ (v) => console.log(`[DEV]: value:`, v) }>
      <ComboboxControl clearable />
      <ComboboxContent />
    </Combobox>

    <br />

    <Combobox
      defaultValue={ [items[0].value] }
      disabled
      items={ items }
      multiple
      onValueChange={ (v) => console.log(`[DEV]: value:`, v) }>
      <ComboboxControl clearable />
      <ComboboxContent />
    </Combobox>

    <br />

    <Combobox
      defaultValue={ [items[0].value] }
      items={ items }
      multiple
      onValueChange={ (v) => console.log(`[DEV]: value:`, v) }
      readOnly>
      <ComboboxControl clearable />
      <ComboboxContent />
    </Combobox>
  </>
);

export const MultipleDefault = () => (
  <Combobox
    items={ items }
    multiple>
    <ComboboxControl />
    <ComboboxContent />
  </Combobox>
);

export const MultipleDefaultValue = () => (
  <Combobox
    defaultValue={ [items[0].value, items[1].value] }
    items={ items }
    multiple>
    <ComboboxControl />
    <ComboboxContent />
  </Combobox>
);

export const MultipleGroup = () => (
  <Combobox
    items={ groupedItems }
    multiple>
    <ComboboxControl />
    <ComboboxContent />
  </Combobox>
);

export const MultipleNoCustom = () => (
  <Combobox
    allowCustomValue={ false }
    items={ items }
    multiple>
    <ComboboxControl />
    <ComboboxContent />
  </Combobox>
);
