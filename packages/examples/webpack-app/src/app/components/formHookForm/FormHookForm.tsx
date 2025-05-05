import {
  Button,
  Checkbox, CheckboxControl, CheckboxGroup, CheckboxLabel,
  Datepicker, DatepickerControl, DatepickerContent,
  FormField, FormFieldError, FormFieldHelper, FormFieldLabel,
  Input,
  Password,
  PhoneNumber, PhoneNumberControl, PhoneNumberCountryList,
  Quantity, QuantityControl, QuantityInput,
  Radio, RadioControl, RadioLabel, RadioGroup,
  Select, SelectContent, SelectControl,
  Textarea,
  Timepicker, TimepickerControl,
} from '@ovhcloud/ods-react';
import React, { type ReactElement, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import styles from './formHookForm.scss';

type FormData = {
  checkboxAlone: string,
  checkboxGroup: string[],
  datepicker: Date,
  input: string,
  password: string,
  phoneNumber: string,
  quantity: string,
  radioGroup: string,
  select: string,
  textarea: string,
  timepicker: string,
}

const defaultValue: FormData = {
  checkboxAlone: 'checkbox alone',
  checkboxGroup: ['grouped checkbox 1'],
  datepicker: new Date(),
  input: 'default input',
  password: 'default password',
  phoneNumber: '',
  quantity: '42',
  radioGroup: '',
  select: 'cat',
  textarea: 'default textarea',
  timepicker: '',
};

function FormHookForm(): ReactElement {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
    reset,
    setError,
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

      <Controller
        control={ control }
        name="datepicker"
        render={ ({ field} ) => (
          <FormField invalid={ !!errors.input }>
            <FormFieldLabel>
              Datepicker:
            </FormFieldLabel>

            <Datepicker
              defaultValue={ defaultValue.datepicker }
              onValueChange={ ({ value }) => setValue(field.name, value) }
              required={ areAllRequired }>
              <DatepickerControl />

              <DatepickerContent />
            </Datepicker>
          </FormField>
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

      <Controller
        control={ control }
        name="phoneNumber"
        render={ ({ field }) => (
          <FormField invalid={ !!errors.phoneNumber }>
            <FormFieldLabel>
              Phone number:
            </FormFieldLabel>

            <PhoneNumber
              country="fr"
              defaultValue={ defaultValue.phoneNumber }
              onValueChange={ ({ isNumberValid, parsingError, value }) =>
                isNumberValid ? setValue(field.name, value) : setError(field.name, { message: parsingError }) }
              required={ areAllRequired }>
              <PhoneNumberCountryList />

              <PhoneNumberControl clearable />
            </PhoneNumber>

            <FormFieldHelper>
              This is a phone number to fill
            </FormFieldHelper>

            <FormFieldError>
              Error while filling phone number
            </FormFieldError>
          </FormField>
        )} />

      <Controller
        control={ control }
        name="quantity"
        render={ ({ field }) => (
          <FormField invalid={ !!errors.quantity }>
            <FormFieldLabel>
              Quantity:
            </FormFieldLabel>

            <Quantity
              defaultValue={ defaultValue.quantity }
              onValueChange={ ({ value }) => setValue(field.name, value) }
              required={ areAllRequired }>
              <QuantityControl>
                <QuantityInput />
              </QuantityControl>
            </Quantity>

            <FormFieldHelper>
              This is a quantity to fill
            </FormFieldHelper>

            <FormFieldError>
              Error while filling quantity
            </FormFieldError>
          </FormField>
        )} />

      <FormField>
        <Controller
        control={ control }
        name="radioGroup"
        render={ ({ field} ) => (
          <RadioGroup
            defaultValue={ defaultValue.radioGroup }
            onValueChange={ ({ value }) => value && setValue(field.name, value) }>
            <FormFieldLabel>
              Radio Group:
            </FormFieldLabel>

            <Radio
              invalid={ !!errors.radioGroup }
              required={ areAllRequired }
              value="radio 1">
              <RadioControl />

              <RadioLabel>
                Radio 1
              </RadioLabel>
            </Radio>

            <Radio
              invalid={ !!errors.radioGroup }
              required={ areAllRequired }
              value="radio 2">
              <RadioControl />

              <RadioLabel>
                Radio 2
              </RadioLabel>
            </Radio>
          </RadioGroup>
        )} />
      </FormField>

      <FormField invalid={ !!errors.select }>
        <FormFieldLabel>
          Select:
        </FormFieldLabel>

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

      <Controller
        control={ control }
        name="timepicker"
        render={ ({ field }) => (
          <FormField invalid={ !!errors.timepicker }>
            <FormFieldLabel>
              Timepicker:
            </FormFieldLabel>

            <Timepicker
              defaultValue={ defaultValue.timepicker }
              onValueChange={ ({ value }) => setValue(field.name, value) }
              required={ areAllRequired }>
              <TimepickerControl />
            </Timepicker>

            <FormFieldHelper>
              This is a timepicker to fill
            </FormFieldHelper>

            <FormFieldError>
              Error while filling timepicker
            </FormFieldError>
          </FormField>
        )} />

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
