/* eslint-disable jsx-a11y/label-has-associated-control */
import { type ChangeEvent, useEffect, useRef, useState } from 'react';
import style from './dev.module.css';
import { BUTTON_SIZE, BUTTON_VARIANT, Button } from '../../button/src';
import { FormField, FormFieldError, FormFieldHelper, FormFieldLabel } from '../../form-field/src';
import { ICON_NAME, Icon } from '../../icon/src';
import { Link } from '../../link/src';
import { TEXT_PRESET, Text } from '../../text/src';
import { INPUT_TYPE, Input } from '.';

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

export const Clearable = () => (
  <>
    <Input clearable />

    <br /><br />

    <Input
      clearable
      defaultValue="Some value" />

    <br /><br />

    <Input
      clearable
      onChange={ () => {} }
      value="" />

    <br /><br />

    <Input
      clearable
      onChange={ () => {} }
      value="Some value" />
  </>
);

export const ClearableControlled = () => {
  const [inputValue, setInputValue] = useState('Some value');

  return (
    <>
      <p>Value is: { inputValue }</p>

      <Input
        clearable
        onChange={ (e: ChangeEvent<HTMLInputElement>) => {
          setInputValue(e.target.value);
        }}
        value={ inputValue } />
    </>
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
        onClear={ () => {
          setControlledValue('');
        }}
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

export const CustomLabel = () => (
  <>
    <Text
      htmlFor="input"
      preset={ TEXT_PRESET.label }>
      Label:
    </Text>

    <Input id="input" />
  </>
);

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
  <>
    <div>
      <label>Plain: </label>
      <Input
        defaultValue="Disabled"
        disabled />
    </div>

    <div>
      <label>Text adornments: </label>
      <Input
        defaultValue="Disabled"
        disabled
        endContent="kg"
        startContent="~" />
    </div>

    {/*
      The component never disables the content it is given.
      The first field's button stays enabled on purpose (the consumer owns that)
      The second shows the correct usage if we want the button to be disabled.
    */}
    <div>
      <label>Button adornment, not disabled by the consumer: </label>
      <Input
        defaultValue="Disabled"
        disabled
        endContent={ (
          <Button
            size={ BUTTON_SIZE.xs }
            variant={ BUTTON_VARIANT.ghost }>
            <Icon name={ ICON_NAME.fileCopy } />
          </Button>
        ) } />
    </div>

    <div>
      <label>Button adornment, disabled by the consumer: </label>
      <Input
        defaultValue="Disabled"
        disabled
        endContent={ (
          <Button
            disabled
            size={ BUTTON_SIZE.xs }
            variant={ BUTTON_VARIANT.ghost }>
            <Icon name={ ICON_NAME.fileCopy } />
          </Button>
        ) } />
    </div>
  </>
);

export const DisabledActions = () => (
  <>
    <Input
      clearable
      defaultValue="value"
      disabled
      maskOption={{ enable: true, initialState: 'open' }}
      type={ INPUT_TYPE.search } />

    <Input
      clearable
      defaultValue="value"
      disabled
      endContent="kg"
      maskOption={{ enable: true, initialState: 'open' }}
      type={ INPUT_TYPE.search } />
  </>
);

export const InFormField = () => {
  const [isInvalid, setIsInvalid] = useState(false);

  return (
    <>
      <button onClick={ () => setIsInvalid((v) => !v) }>
        Toggle validity
      </button>

      <FormField invalid={ isInvalid }>
        <FormFieldLabel>
          My input:
        </FormFieldLabel>

        <Input />

        <FormFieldHelper>
          Help text
        </FormFieldHelper>

        <FormFieldError>
          Error message
        </FormFieldError>
      </FormField>
    </>
  );
};

export const Invalid = () => (
  <Input invalid />
);

export const Readonly = () => (
  <Input
    defaultValue="Readonly"
    readOnly />
);

export const Ref = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.log(inputRef.current);
  }, [inputRef]);

  return (
    <Input ref={ inputRef } />
  );
};

export const States = () => (
  <>
    <Input
      defaultValue="Disabled & Readonly"
      disabled
      endContent="kg"
      readOnly />

    <Input
      defaultValue="Disabled & Invalid"
      disabled
      endContent="kg"
      invalid />

    <Input
      defaultValue="Readonly & Invalid"
      endContent="kg"
      invalid
      readOnly />

    <Input
      defaultValue="Disabled & Readonly & Invalid"
      disabled
      endContent="kg"
      invalid
      readOnly />
  </>
);

export const StartAndEndSlots = () => (
  <>
    <div>
      <label>Start only: </label>
      <Input startContent="https://" />
    </div>

    <div>
      <label>End only: </label>
      <Input endContent="kg" />
    </div>

    <div>
      <label>Both: </label>
      <Input
        endContent=".com"
        startContent="https://" />
    </div>

    <div>
      <label>Icon: </label>
      <Input
        placeholder="Amount"
        startContent={ <Icon name={ ICON_NAME.moneyBagEuro } /> } />
    </div>

    <div>
      <label>Several children in one adornment: </label>
      <Input
        defaultValue="42"
        endContent={ (
          <>
            <Icon name={ ICON_NAME.circleInfo } />
            <span>kg</span>
          </>
        ) } />
    </div>

    <div>
      <label>Falsy but renderable content: </label>
      <Input endContent={ 0 } />
    </div>

    <div>
      <label>With every action: </label>
      <Input
        clearable
        defaultValue="42"
        endContent="kg"
        maskOption={{ enable: true }}
        startContent="~" />
    </div>

    <div>
      <label>Search type with a start adornment: </label>
      <Input
        defaultValue="query"
        startContent={ <Icon name={ ICON_NAME.filter } /> }
        type={ INPUT_TYPE.search } />
    </div>

    <div>
      <label>Ghost button, aligned with the built-in actions: </label>
      <Input
        defaultValue="42"
        endContent={ (
          <Button
            aria-label="Copy value"
            size={ BUTTON_SIZE.xs }
            variant={ BUTTON_VARIANT.ghost }>
            <Icon name={ ICON_NAME.fileCopy } />
          </Button>
        ) } />
    </div>

    <div>
      <label>Text and a button, plus the clear action: </label>
      <Input
        clearable
        defaultValue="42"
        endContent={ (
          <>
            <span>kg</span>

            <Button
              aria-label="Copy value"
              size={ BUTTON_SIZE.xs }
              variant={ BUTTON_VARIANT.ghost }>
              <Icon name={ ICON_NAME.fileCopy } />
            </Button>
          </>
        ) } />
    </div>

    <div>
      <label>Link adornment: </label>
      <Input
        defaultValue="42"
        endContent={ <Link href="#">Help</Link> } />
    </div>

    <div style={{ inlineSize: '180px' }}>
      <label>Long adornment in a constrained container: </label>
      <Input
        defaultValue="42"
        endContent="kilograms (± 5%)"
        style={{ inlineSize: '100%' }}
      />
    </div>

    <div>
      <label>Oversized adornments (xs fits, sm and md grow the field): </label>

      <Input
        defaultValue="42"
        endContent={ <Button size={ BUTTON_SIZE.xs }>xs</Button> } />

      <Input
        defaultValue="42"
        endContent={ <Button size={ BUTTON_SIZE.sm }>sm</Button> } />

      <Input
        defaultValue="42"
        endContent={ <Button size={ BUTTON_SIZE.md }>md</Button> } />
    </div>

    <div dir="rtl">
      <label>Right-to-left: </label>
      <Input
        clearable
        defaultValue="42"
        endContent="kg"
        startContent="~" />
    </div>

    <div>
      <label>In a form - the adornment is never submitted: </label>

      <form onSubmit={ (e) => {
        e.preventDefault();
        console.log(Object.fromEntries(new FormData(e.currentTarget).entries()));
      } }>
        <Input
          defaultValue="42"
          endContent="kg"
          name="weight"
          startContent="~" />

        <button type="submit">
          Log the submitted value
        </button>
      </form>
    </div>

    <div>
      <label>In a form field, with a helper and an error: </label>

      <FormField invalid>
        <FormFieldLabel>
          Weight
        </FormFieldLabel>

        <Input
          defaultValue="42"
          endContent="kg" />

        <FormFieldHelper>
          Help text
        </FormFieldHelper>

        <FormFieldError>
          Error message
        </FormFieldError>
      </FormField>
    </div>
  </>
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
