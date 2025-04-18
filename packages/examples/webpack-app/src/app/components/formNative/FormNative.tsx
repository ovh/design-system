import { Button, Checkbox, CheckboxControl, CheckboxGroup, CheckboxLabel, FormField, FormFieldError, FormFieldHelper, FormFieldLabel, Input, Password, Select, SelectContent, SelectControl, SelectLabel, Textarea } from '@ovhcloud/ods-react';
import React, { type FormEvent, type ReactElement, useRef, useState } from 'react';
import styles from './formNative.scss';

function FormNative(): ReactElement {
  const formRef = useRef<HTMLFormElement>(null);
  const [areAllRequired, setAreAllRequired] = useState(true);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();

    const formData = new FormData(formRef.current!);

    for (const [key, value] of formData) {
      console.log(`${key}: ${value}`)
    }
  }

  function onAllRequiredToggle() {
    setAreAllRequired((value) => !value);
  }

  return (
    <form
      className={ styles['form-native'] }
      onSubmit={ onSubmit }
      ref={ formRef }>
      <div>
        <h1>Form Native</h1>

        <button onClick={ onAllRequiredToggle }
                type="button">
          Toggle All Required
        </button>
      </div>

      <p>
        Current configuration:
        <br />
        - All fields required: { areAllRequired.toString() }
      </p>

      <FormField>
        <Checkbox
          name="checkbox"
          required={ areAllRequired }
          value="checkbox">
          <CheckboxControl />

          <CheckboxLabel>
            Checkbox
          </CheckboxLabel>
        </Checkbox>
      </FormField>

      <CheckboxGroup name="checkboxGroup">
        <FormField>
          <Checkbox
            required={ areAllRequired }
            value="grouped checkbox 1">
            <CheckboxControl />

            <CheckboxLabel>
              Grouped checkbox 1
            </CheckboxLabel>
          </Checkbox>
        </FormField>

        <FormField>
          <Checkbox
            required={ areAllRequired }
            value="grouped checkbox 2">
            <CheckboxControl />

            <CheckboxLabel>
              Grouped checkbox 2
            </CheckboxLabel>
          </Checkbox>
        </FormField>
      </CheckboxGroup>

      <FormField>
        <FormFieldLabel>
          Input:
        </FormFieldLabel>

        <Input
          clearable
          defaultValue="default"
          name="input"
          required={ areAllRequired } />

        <FormFieldHelper>
          This is an input to fill
        </FormFieldHelper>

        <FormFieldError>
          Error while filling input
        </FormFieldError>
      </FormField>

      <FormField>
        <FormFieldLabel>
          Password:
        </FormFieldLabel>

        <Password
          clearable
          defaultValue="default"
          name="password"
          required={ areAllRequired } />

        <FormFieldHelper>
          This is a password to fill
        </FormFieldHelper>

        <FormFieldError>
          Error while filling password
        </FormFieldError>
      </FormField>

      <FormField>
        <Select
          items={[
            { label: 'Dog', value:'dog' },
            { label: 'Cat', value:'cat' },
            { label: 'Hamster', value:'hamster' },
            { label: 'Parrot', value:'parrot' },
            { label: 'Spider', value:'spider' },
            { label: 'Goldfish', value:'goldfish' },
          ]}
          name="select"
          required={ areAllRequired }>
          <SelectLabel>Select:</SelectLabel>

          <SelectControl />

          <SelectContent />
        </Select>

        <FormFieldHelper>
          This is a select to fill
        </FormFieldHelper>

        <FormFieldError>
          Error while filling select
        </FormFieldError>
      </FormField>

      <FormField>
        <FormFieldLabel>
          Textarea:
        </FormFieldLabel>

        <Textarea
          name="textarea"
          required={ areAllRequired } />

        <FormFieldHelper>
          This is a textarea to fill
        </FormFieldHelper>

        <FormFieldError>
          Error while filling textarea
        </FormFieldError>
      </FormField>

      <input
        name="hidden-input"
        type="hidden"
        value="should be present in form data" />

      <div>
        <Button
          type="reset"
          variant="outline">
          Reset button
        </Button>

        <Button type="submit">
          Submit button
        </Button>
      </div>
    </form>
  );
}

export { FormNative };
