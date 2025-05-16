import { type ChangeEvent, useState } from 'react';
import { FormField, FormFieldLabel } from '../../form-field/src';
import { INPUT_TYPE, Input } from '.';
import style from './dev.module.css';

export default {
  component: Input,
  title: 'Input dev',
};

export const Actions = () => (
  <>
    <div>
      <label>Clearable alone: </label>
      <Input
        clearable
        defaultValue="value" />
    </div>

    <div>
      <label>Clearable and loading: </label>
      <Input
        clearable
        defaultValue="value"
        loading />
    </div>

    <div>
      <label>Clearable and mask: </label>
      <Input
        clearable
        defaultValue="value"
        maskOption={{ enable: true }} />
    </div>

    <div>
      <label>Clearable and search: </label>
      <Input
        clearable
        defaultValue="value"
        type={ INPUT_TYPE.search } />
    </div>

    <div>
      <label>Clearable, loading and mask: </label>
      <Input
        clearable
        defaultValue="value"
        loading
        maskOption={{ enable: true }} />
    </div>

    <div>
      <label>Clearable, loading and search: </label>
      <Input
        clearable
        defaultValue="value"
        loading
        type={ INPUT_TYPE.search } />
    </div>

    <div>
      <label>Clearable, mask and search: </label>
      <Input
        clearable
        defaultValue="value"
        maskOption={{ enable: true }}
        type={ INPUT_TYPE.search } />
    </div>

    <div>
      <label>Clearable, loading, mask and search: </label>
      <Input
        clearable
        defaultValue="value"
        loading
        maskOption={{ enable: true }}
        type={ INPUT_TYPE.search } />
    </div>

    <div>
      <label>With mask alone: </label>
      <Input maskOption={{ enable: true }} />
    </div>

    <div>
      <label>With mask and loading: </label>
      <Input
        loading
        maskOption={{ enable: true }} />
    </div>

    <div>
      <label>With mask and search: </label>
      <Input
        maskOption={{ enable: true }}
        type={ INPUT_TYPE.search } />
    </div>

    <div>
      <label>With mask, loading and search: </label>
      <Input
        loading
        maskOption={{ enable: true }}
        type={ INPUT_TYPE.search } />
    </div>

    <div>
      <label>Loading alone: </label>
      <Input loading />
    </div>

    <div>
      <label>Loading and search: </label>
      <Input
        loading
        type={ INPUT_TYPE.search } />
    </div>

    <div>
      <label>Search alone: </label>
      <Input type={ INPUT_TYPE.search } />
    </div>
  </>
);

export const Clearable = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <Input
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
      <Input
        clearable
        onChange={ (e: ChangeEvent<HTMLInputElement>) => setControlledValue(e.target.value) }
        onClear={ () => { setControlledValue('') } }
        value={ controlledValue } />

      <br /><br />

      <label>Uncontrolled</label>
      <Input
        clearable
        onChange={ () => console.log('Uncontrolled change') }
        onClear={ () => console.log('cleared') } />
    </>
  );
};

export const CustomStyle = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <div>
      <label>Custom Styled Input:</label>
      <Input
        className={ style['custom-input'] }
        placeholder="Type something here..."
      />
    </div>

    <div>
      <label>Custom Styled Input with Clear Button:</label>
      <Input
        className={ style['custom-input'] }
        clearable
        defaultValue="Clear me!"
      />
    </div>

    <div>
      <label>Custom Styled Search Input:</label>
      <Input
        className={ style['custom-input'] }
        type={ INPUT_TYPE.search }
        placeholder="Search..."
      />
    </div>

    <div>
      <label>Custom Styled Input with Loading:</label>
      <Input
        className={ style['custom-input'] }
        loading
        placeholder="Loading..."
      />
    </div>
  </div>
);

export const Datalist = () => (
  <>
    <Input list="ice-cream-flavors" />

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
  <Input />
);

export const Disabled = () => (
  <Input
    defaultValue="Disabled"
    disabled />
);

export const DisabledActions = () => (
  <Input
    clearable
    defaultValue="value"
    disabled
    maskOption={{ enable: true, initialState: 'open' }}
    type={ INPUT_TYPE.search } />
);

export const InFormField = () => (
  <FormField invalid>
    <FormFieldLabel>
      My input:
    </FormFieldLabel>

    <Input loading />
  </FormField>
);

export const Invalid = () => (
  <Input invalid />
);

export const Readonly = () => (
  <Input
    defaultValue="Readonly"
    readOnly />
);

export const Types = () => (
  <>
    <Input type={ INPUT_TYPE.email } placeholder="email" /><br />
    <Input type={ INPUT_TYPE.number } placeholder="number" /><br />
    <Input type={ INPUT_TYPE.password } placeholder="password" /><br />
    <Input type={ INPUT_TYPE.search } placeholder="search" /><br />
    <Input type={ INPUT_TYPE.text } placeholder="text" /><br />
    <Input type={ INPUT_TYPE.time } placeholder="time" /><br />
    <Input type={ INPUT_TYPE.url } placeholder="url" /><br />
  </>
);
