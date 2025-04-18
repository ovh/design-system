import { Button, Checkbox, CheckboxControl, CheckboxGroup, CheckboxLabel, FormField, FormFieldError, FormFieldHelper, FormFieldLabel, Input, Password, Select, SelectContent, SelectControl, SelectLabel, Textarea } from '@ovhcloud/ods-react';
import React, { type ReactElement, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import styles from './formHookForm.scss';

type FormData = {
  checkboxAlone: string,
  checkboxGroup: string[],
  input: string,
  password: string,
  select: string,
  textarea: string,
}

const defaultValue: FormData = {
  checkboxAlone: 'checkbox alone',
  checkboxGroup: ['grouped checkbox 1'],
  input: 'default input',
  password: 'default password',
  select: 'cat',
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

      <FormField invalid={ !!errors.checkboxAlone }>
        <Checkbox
          defaultChecked={ !!defaultValue.checkboxAlone }
          value={ defaultValue.checkboxAlone }
          { ...register('checkboxAlone', {
            required: areAllRequired,
          })}>
          <CheckboxControl />

          <CheckboxLabel>
            Checkbox alone
          </CheckboxLabel>
        </Checkbox>

        <FormFieldHelper>
          This is an checkbox to check
        </FormFieldHelper>

        <FormFieldError>
          Error while checking checkbox
        </FormFieldError>
      </FormField>

      <Controller
        control={ control }
        name="checkboxGroup"
        render={ ({ field} ) => (
          <CheckboxGroup
            defaultValue={ defaultValue.checkboxGroup }
            invalid={ !!errors.checkboxGroup }
            onValueChange={ (value) => setValue(field.name, value) }>
            <Checkbox
              required={ areAllRequired }
              value="grouped checkbox 1">
              <CheckboxControl />

              <CheckboxLabel>
                Grouped checkbox 1
              </CheckboxLabel>
            </Checkbox>

            <Checkbox
              required={ areAllRequired }
              value="grouped checkbox 2">
              <CheckboxControl />

              <CheckboxLabel>
                Grouped checkbox 2
              </CheckboxLabel>
            </Checkbox>
          </CheckboxGroup>
        )} />

      <FormField invalid={ !!errors.input }>
        <FormFieldLabel>
          Input:
        </FormFieldLabel>

        <Input
          clearable
          { ...register('input', {
            required: areAllRequired,
          })} />

        <FormFieldHelper>
          This is an input to fill
        </FormFieldHelper>

        <FormFieldError>
          Error while filling input
        </FormFieldError>
      </FormField>

      <FormField invalid={ !!errors.password }>
        <FormFieldLabel>
          Password:
        </FormFieldLabel>

        <Password
          clearable
          { ...register('password', {
            required: areAllRequired,
          })} />

        <FormFieldHelper>
          This is a password to fill
        </FormFieldHelper>

        <FormFieldError>
          Error while filling password
        </FormFieldError>
      </FormField>

      <FormField invalid={ !!errors.select }>
        <Select
          defaultValue={ defaultValue.select }
          items={[
            { label: 'Dog', value:'dog' },
            { label: 'Cat', value:'cat' },
            { label: 'Hamster', value:'hamster' },
            { label: 'Parrot', value:'parrot' },
            { label: 'Spider', value:'spider' },
            { label: 'Goldfish', value:'goldfish' },
          ]}
          { ...register('select', {
            required: areAllRequired,
          })}>
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

      <FormField invalid={ !!errors.textarea }>
        <FormFieldLabel>
          Textarea:
        </FormFieldLabel>

        <Textarea
          { ...register('textarea', {
            required: areAllRequired,
          })} />

        <FormFieldHelper>
          This is a textarea to fill
        </FormFieldHelper>

        <FormFieldError>
          Error while filling textarea
        </FormFieldError>
      </FormField>

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
        <Button
          onClick={ () => reset(defaultValue) }
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

export { FormHookForm };
