import { OdsButton, OdsCheckbox, OdsCheckboxControl, OdsCheckboxGroup, OdsCheckboxLabel, OdsFormField, OdsFormFieldError, OdsFormFieldHelper, OdsFormFieldLabel, OdsInput, OdsPassword, OdsTextarea } from '@ovhcloud/ods-react';
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

      <OdsFormField>
        <OdsCheckbox
          name="checkbox"
          required={ areAllRequired }
          value="checkbox">
          <OdsCheckboxControl />

          <OdsCheckboxLabel>
            Checkbox
          </OdsCheckboxLabel>
        </OdsCheckbox>
      </OdsFormField>

      <OdsCheckboxGroup name="checkboxGroup">
        <OdsFormField>
          <OdsCheckbox
            required={ areAllRequired }
            value="grouped checkbox 1">
            <OdsCheckboxControl />

            <OdsCheckboxLabel>
              Grouped checkbox 1
            </OdsCheckboxLabel>
          </OdsCheckbox>
        </OdsFormField>

        <OdsFormField>
          <OdsCheckbox
            required={ areAllRequired }
            value="grouped checkbox 2">
            <OdsCheckboxControl />

            <OdsCheckboxLabel>
              Grouped checkbox 2
            </OdsCheckboxLabel>
          </OdsCheckbox>
        </OdsFormField>
      </OdsCheckboxGroup>

      <OdsFormField>
        <OdsFormFieldLabel>
          Input:
        </OdsFormFieldLabel>

        <OdsInput
          clearable
          defaultValue="default"
          name="input"
          required={ areAllRequired } />

        <OdsFormFieldHelper>
          This is an input to fill
        </OdsFormFieldHelper>

        <OdsFormFieldError>
          Error while filling input
        </OdsFormFieldError>
      </OdsFormField>

      <OdsFormField>
        <OdsFormFieldLabel>
          Password:
        </OdsFormFieldLabel>

        <OdsPassword
          clearable
          defaultValue="default"
          name="password"
          required={ areAllRequired } />

        <OdsFormFieldHelper>
          This is a password to fill
        </OdsFormFieldHelper>

        <OdsFormFieldError>
          Error while filling password
        </OdsFormFieldError>
      </OdsFormField>

      <OdsFormField>
        <OdsFormFieldLabel>
          Textarea:
        </OdsFormFieldLabel>

        <OdsTextarea
          name="textarea"
          required={ areAllRequired } />

        <OdsFormFieldHelper>
          This is a textarea to fill
        </OdsFormFieldHelper>

        <OdsFormFieldError>
          Error while filling textarea
        </OdsFormFieldError>
      </OdsFormField>

      <input
        name="hidden-input"
        type="hidden"
        value="should be present in form data" />

      <div>
        <OdsButton
          type="reset"
          variant="outline">
          Reset button
        </OdsButton>

        <OdsButton type="submit">
          Submit button
        </OdsButton>
      </div>
    </form>
  );
}

export { FormNative };
