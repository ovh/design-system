import { OdsButton, OdsCheckbox, OdsCheckboxControl, OdsCheckboxGroup, OdsCheckboxLabel, OdsFormField, OdsFormFieldError, OdsFormFieldHelper, OdsFormFieldLabel, OdsInput, OdsPassword, OdsTextarea } from '@ovhcloud/ods-react';
import React, { type ReactElement, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import styles from './formHookForm.scss';

type FormData = {
  checkboxAlone: string,
  checkboxGroup: string[],
  input: string,
  password: string,
  textarea: string,
}

const defaultValue: FormData = {
  checkboxAlone: 'checkbox alone',
  checkboxGroup: ['grouped checkbox 1'],
  input: 'default input',
  password: 'default password',
  textarea: 'default textarea',
};

function FormHookForm(): ReactElement {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
    reset,
    setValue,
  } = useForm<FormData>({
    defaultValues: defaultValue,
    mode: 'onBlur',
  });
  const [areAllRequired, setAreAllRequired] = useState(false);

  function onSubmit(data: FormData): void {
    console.log('-- submit --')
    console.log(data)
  }

  function onAllRequiredToggle() {
    setAreAllRequired(() => !areAllRequired);
  }

  return (
    <form
      className={ styles['form-hook-form'] }
      onSubmit={ handleSubmit(onSubmit) }>
      <div>
        <h1>Hook Form</h1>

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

      <OdsFormField invalid={ !!errors.checkboxAlone }>
        <OdsCheckbox
          defaultChecked={ !!defaultValue.checkboxAlone }
          value={ defaultValue.checkboxAlone }
          { ...register('checkboxAlone', {
            required: areAllRequired,
          })}>
          <OdsCheckboxControl />

          <OdsCheckboxLabel>
            Checkbox alone
          </OdsCheckboxLabel>
        </OdsCheckbox>

        <OdsFormFieldHelper>
          This is an checkbox to check
        </OdsFormFieldHelper>

        <OdsFormFieldError>
          Error while checking checkbox
        </OdsFormFieldError>
      </OdsFormField>

      <Controller
        control={ control }
        name="checkboxGroup"
        render={ ({ field} ) => (
          <OdsCheckboxGroup
            defaultValue={ defaultValue.checkboxGroup }
            invalid={ !!errors.checkboxGroup }
            onValueChange={ (value) => setValue(field.name, value) }>
            <OdsCheckbox
              required={ areAllRequired }
              value="grouped checkbox 1">
              <OdsCheckboxControl />

              <OdsCheckboxLabel>
                Grouped checkbox 1
              </OdsCheckboxLabel>
            </OdsCheckbox>

            <OdsCheckbox
              required={ areAllRequired }
              value="grouped checkbox 2">
              <OdsCheckboxControl />

              <OdsCheckboxLabel>
                Grouped checkbox 2
              </OdsCheckboxLabel>
            </OdsCheckbox>
          </OdsCheckboxGroup>
        )} />

      <OdsFormField invalid={ !!errors.input }>
        <OdsFormFieldLabel>
          Input:
        </OdsFormFieldLabel>

        <OdsInput
          clearable
          { ...register('input', {
            required: areAllRequired,
          })} />

        <OdsFormFieldHelper>
          This is an input to fill
        </OdsFormFieldHelper>

        <OdsFormFieldError>
          Error while filling input
        </OdsFormFieldError>
      </OdsFormField>

      <OdsFormField invalid={ !!errors.password }>
        <OdsFormFieldLabel>
          Password:
        </OdsFormFieldLabel>

        <OdsPassword
          clearable
          { ...register('password', {
            required: areAllRequired,
          })} />

        <OdsFormFieldHelper>
          This is a password to fill
        </OdsFormFieldHelper>

        <OdsFormFieldError>
          Error while filling password
        </OdsFormFieldError>
      </OdsFormField>

      <OdsFormField invalid={ !!errors.textarea }>
        <OdsFormFieldLabel>
          Textarea:
        </OdsFormFieldLabel>

        <OdsTextarea
          { ...register('textarea', {
            required: areAllRequired,
          })} />

        <OdsFormFieldHelper>
          This is a textarea to fill
        </OdsFormFieldHelper>

        <OdsFormFieldError>
          Error while filling textarea
        </OdsFormFieldError>
      </OdsFormField>

      <p>
        Errors:
        <br />
        {
          Object.entries(errors).map(([key, value]) => (
            <span key={ key }>
              { key }: { value.message }
              <br />
            </span>
          ))
        }
      </p>

      <div>
        <OdsButton
          onClick={ () => reset(defaultValue) }
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

export { FormHookForm };
