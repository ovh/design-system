import { useCallback, useRef, useState } from 'react';
import { FormField } from '../../form-field/src';
import { Input } from '../../input/src';
import { Select, SelectContent, SelectControl } from '../../select/src';
import { Textarea } from '../../textarea/src';
import { Editable, EditableActions, EditableCancelTrigger, EditableDisplay, EditableDisplayEmpty, EditableEditTrigger, type EditableEditingChangeDetail, EditableInput, EditableSubmitTrigger } from '.';

export default {
  component: Editable,
  title: 'Editable dev',
};

const PARAGRAPH_VALUE = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.';

export const ComplexFormElement = () => {
  const [displayValue, setDisplayValue] = useState('');
  const [accountValue, setAccountValue] = useState('');
  const [domainValue, setDomainValue] = useState('');

  function onCancel(): void {
    const [account, domain] = displayValue.split('@ovhcloud');

    setAccountValue(account || '');
    setDomainValue(domain || '');
  }

  return (
    <Editable
      onCancel={ onCancel }
      onSubmit={ () => setDisplayValue(`${accountValue}@ovhcloud${domainValue}`) }>
      <EditableDisplay>
        { displayValue || <EditableDisplayEmpty>Account name</EditableDisplayEmpty> }
      </EditableDisplay>

      <EditableInput>
        <FormField style={{ display: 'flex', flexFlow: 'row', alignItems: 'center', columnGap: '8px' }}>
          <Input
            name="account-name"
            onChange={ (e) => setAccountValue(e.target.value) }
            pattern="^([a-zA-Z0-9]|([._\-](?![._\-])))*[a-zA-Z0-9]$"
            placeholder="Account name"
            value={ accountValue } />

          <span>
            @ovhcloud
          </span>

          <Select
            items={[
              { label: '.fr', value: '.fr' },
              { label: '.com', value: '.com' },
              { label: '.dev', value: '.dev' },
            ]}
            name="domain"
            onValueChange={ ({ value }) => setDomainValue(value[0]) }
            value={ domainValue ? [domainValue] : [] }>
            <SelectControl placeholder="Select domain" />

            <SelectContent />
          </Select>
        </FormField>
      </EditableInput>

      <EditableActions />
    </Editable>
  );
};

export const ControlledEditState = () => {
  const [isEditing, setIsEditing] = useState(false);
  const onEditChange = useCallback(({ editing }: EditableEditingChangeDetail) => setIsEditing(editing), []);

  return (
    <Editable
      editing={ isEditing }
      onEditChange={ onEditChange }>
      <EditableDisplay>
        Some render node
      </EditableDisplay>

      <EditableInput>
        <input />
      </EditableInput>

      <EditableActions />
    </Editable>
  );
};

export const ControlledValue = () => {
  const [displayValue, setDisplayValue] = useState(PARAGRAPH_VALUE);
  const [value, setValue] = useState(PARAGRAPH_VALUE);

  return (
    <Editable
      onCancel={ () => setValue(displayValue) }
      onSubmit={ () => setDisplayValue(value) }>
      <EditableDisplay>
        <p style={{ margin: 0 }}>
          { displayValue }
        </p>
      </EditableDisplay>

      <EditableInput>
        <Textarea
          onChange={ (e) => setValue(e.target.value) }
          value={ value } />
      </EditableInput>

      <EditableActions />
    </Editable>
  );
};

export const CustomActions = () => (
  <Editable>
    <EditableDisplay>
      Some render node
    </EditableDisplay>

    <EditableInput>
      <input />
    </EditableInput>

    <EditableActions>
      {
        ({ editing }) => (
          editing
          ? <>
            <EditableSubmitTrigger asChild>
              <button>Custom Submit</button>
            </EditableSubmitTrigger>
            <EditableCancelTrigger asChild>
              <button>Custom Cancel</button>
            </EditableCancelTrigger>
          </>
          : <EditableEditTrigger asChild>
              <button>Custom Edit</button>
            </EditableEditTrigger>
        )
      }
    </EditableActions>
  </Editable>
);

export const Default = () => (
  <Editable>
    <EditableDisplay>
      Some render node
    </EditableDisplay>

    <EditableInput>
      <input autoFocus />
    </EditableInput>

    <EditableActions />
  </Editable>
);

export const Handlers = () => (
  <Editable
    onCancel={ () => console.log('Cancel') }
    onEditChange={ ({ editing }) => console.log(`Edit change to ${editing}`) }
    onSubmit={ () => console.log('Submit') }>
    <EditableDisplay>
      Some render node
    </EditableDisplay>

    <EditableInput>
      <input />
    </EditableInput>

    <EditableActions />
  </Editable>
);

export const Refs = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const displayRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLDivElement>(null);
  const editTriggerRef = useRef<HTMLButtonElement>(null);
  const editTriggerAsChildRef = useRef<HTMLButtonElement>(null);

  function logRefs() {
    console.log(`rootRef:`, rootRef.current);
    console.log(`displayRef:`, displayRef.current);
    console.log(`inputRef:`, inputRef.current);
    console.log(`editTriggerRef:`, editTriggerRef.current);
    console.log(`editTriggerAsChildRef:`, editTriggerAsChildRef.current);
  }

  return (
    <>
      <Editable ref={ rootRef }>
        <EditableDisplay ref={ displayRef }>
          Some render node
        </EditableDisplay>

        <EditableInput ref={ inputRef }>
          <input />
        </EditableInput>

        <EditableEditTrigger ref={ editTriggerRef } />

        <EditableEditTrigger
          asChild
          ref={ editTriggerAsChildRef }>
          <button id="custom">Edit</button>
        </EditableEditTrigger>
      </Editable>

      <button onClick={ logRefs }>Log Refs</button>
    </>
  );
};

export const Uncontrolled = () => {
  const [value, setValue] = useState(PARAGRAPH_VALUE);
  const bufferValue = useRef(value);

  return (
    <Editable
      onCancel={ () => bufferValue.current = value }
      onSubmit={ () => setValue(bufferValue.current) }>
      <EditableDisplay>
        <p style={{ margin: 0 }}>
          { value }
        </p>
      </EditableDisplay>

      <EditableInput>
        <Textarea
          defaultValue={ value }
          onChange={ (e) => bufferValue.current = e.target.value } />
      </EditableInput>

      <EditableActions />
    </Editable>
  );
};
