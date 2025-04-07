import { type ChangeEvent, useState } from 'react';
import { ODS_INPUT_TYPE, OdsInput } from '.';

export default {
  component: OdsInput,
  title: 'OdsInput dev',
};

export const Actions = () => (
  <>
    <div>
      <label>Clearable alone: </label>
      <OdsInput
        clearable
        defaultValue="value" />
    </div>

    <div>
      <label>Clearable and loading: </label>
      <OdsInput
        clearable
        defaultValue="value"
        loading />
    </div>

    <div>
      <label>Clearable and mask: </label>
      <OdsInput
        clearable
        defaultValue="value"
        maskOption={{ enable: true }} />
    </div>

    <div>
      <label>Clearable and search: </label>
      <OdsInput
        clearable
        defaultValue="value"
        type={ ODS_INPUT_TYPE.search } />
    </div>

    <div>
      <label>Clearable, loading and mask: </label>
      <OdsInput
        clearable
        defaultValue="value"
        loading
        maskOption={{ enable: true }} />
    </div>

    <div>
      <label>Clearable, loading and search: </label>
      <OdsInput
        clearable
        defaultValue="value"
        loading
        type={ ODS_INPUT_TYPE.search } />
    </div>

    <div>
      <label>Clearable, mask and search: </label>
      <OdsInput
        clearable
        defaultValue="value"
        maskOption={{ enable: true }}
        type={ ODS_INPUT_TYPE.search } />
    </div>

    <div>
      <label>Clearable, loading, mask and search: </label>
      <OdsInput
        clearable
        defaultValue="value"
        loading
        maskOption={{ enable: true }}
        type={ ODS_INPUT_TYPE.search } />
    </div>

    <div>
      <label>With mask alone: </label>
      <OdsInput maskOption={{ enable: true }} />
    </div>

    <div>
      <label>With mask and loading: </label>
      <OdsInput
        loading
        maskOption={{ enable: true }} />
    </div>

    <div>
      <label>With mask and search: </label>
      <OdsInput
        maskOption={{ enable: true }}
        type={ ODS_INPUT_TYPE.search } />
    </div>

    <div>
      <label>With mask, loading and search: </label>
      <OdsInput
        loading
        maskOption={{ enable: true }}
        type={ ODS_INPUT_TYPE.search } />
    </div>

    <div>
      <label>Loading alone: </label>
      <OdsInput loading />
    </div>

    <div>
      <label>Loading and search: </label>
      <OdsInput
        loading
        type={ ODS_INPUT_TYPE.search } />
    </div>

    <div>
      <label>Search alone: </label>
      <OdsInput type={ ODS_INPUT_TYPE.search } />
    </div>
  </>
);

export const Clearable = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <OdsInput
      clearable
      onChange={ (e: ChangeEvent<HTMLInputElement>) => { setInputValue(e.target.value)} }
      onClear={ () => { setInputValue('') } }
      value={ inputValue } />
  );
};

export const ControlledUncontrolled = () => {
  const [controlledValue, setControlledValue] = useState('');

  return (
    <>
      <label>Controlled</label>
      <OdsInput
        clearable
        onChange={ (e: ChangeEvent<HTMLInputElement>) => setControlledValue(e.target.value) }
        onClear={ () => { setControlledValue('') } }
        value={ controlledValue } />

      <br /><br />

      <label>Uncontrolled</label>
      <OdsInput
        clearable
        onChange={ () => console.log('Uncontrolled change') }
        onClear={ () => console.log('cleared') } />
    </>
  );
};

export const Datalist = () => (
  <>
    <OdsInput list="ice-cream-flavors" />

    <datalist id="ice-cream-flavors">
      <option value="Chocolate"></option>
      <option value="Coconut"></option>
      <option value="Mint"></option>
      <option value="Strawberry"></option>
      <option value="Vanilla"></option>
    </datalist>
  </>
);

export const Default = () => (
  <OdsInput />
);

export const Disabled = () => (
  <OdsInput disabled />
);

export const DisabledActions = () => (
  <OdsInput
    clearable
    defaultValue="value"
    disabled
    maskOption={{ enable: true }}
    type={ ODS_INPUT_TYPE.search } />
);

export const Readonly = () => (
  <OdsInput readOnly />
);

export const Types = () => (
  <>
    <OdsInput type={ ODS_INPUT_TYPE.email } placeholder="email" /><br />
    <OdsInput type={ ODS_INPUT_TYPE.number } placeholder="number" /><br />
    <OdsInput type={ ODS_INPUT_TYPE.password } placeholder="password" /><br />
    <OdsInput type={ ODS_INPUT_TYPE.search } placeholder="search" /><br />
    <OdsInput type={ ODS_INPUT_TYPE.text } placeholder="text" /><br />
    <OdsInput type={ ODS_INPUT_TYPE.time } placeholder="time" /><br />
    <OdsInput type={ ODS_INPUT_TYPE.url } placeholder="url" /><br />
  </>
);
