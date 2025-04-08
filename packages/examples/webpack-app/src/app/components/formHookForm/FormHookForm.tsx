import { OdsButton, OdsFormField, OdsFormFieldError, OdsFormFieldHelper, OdsFormFieldLabel, OdsInput, OdsPassword, OdsTextarea } from '@ovhcloud/ods-react';
import React, { type ReactElement, useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './formHookForm.scss';

type FormData = {
  input: string,
  password: string,
  textarea: string,
}

const defaultValue: FormData = {
  input: 'default input',
  password: 'default password',
  textarea: 'default textarea',
};

function FormHookForm(): ReactElement {
  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
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
