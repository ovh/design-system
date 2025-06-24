import {
  Button,
  Checkbox, CheckboxControl, CheckboxGroup, CheckboxLabel,
  Combobox, ComboboxContent, ComboboxControl,
  Datepicker, DatepickerControl, DatepickerContent,
  FormField, FormFieldError, FormFieldHelper, FormFieldLabel,
  Input,
  Password,
  PhoneNumber, PhoneNumberControl, PhoneNumberCountryList,
  Quantity, QuantityControl, QuantityInput,
  Radio, RadioControl, RadioLabel, RadioGroup,
  Range,
  Select, SelectContent, SelectControl,
  Textarea,
  Timepicker, TimepickerControl,
} from '@ovhcloud/ods-react';
import React, { type FormEvent, type ReactElement, useRef, useState } from 'react';
import styles from './formNative.scss';

function FormNative(): ReactElement {
  const formRef = useRef<HTMLFormElement>(null);
  const [areAllRequired, setAreAllRequired] = useState(true);

  function onSubmit(e: FormEvent) {
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
          Combobox multiple:
        </FormFieldLabel>

        <Combobox
          defaultValue={['apple']}
          items={[
            { label: 'Apple', value: 'apple' },
            { label: 'Banana', value: 'banana' },
            { label: 'Orange', value: 'orange' },
            { label: 'Pineapple', value: 'pineapple' },
            { label: 'Mango', value: 'mango' },
          ]}
          multiple
          name="combobox"
          onValueChange={({ value }) => {
            console.log('Native Combobox value changed:', value);
          }}
          >
          <ComboboxControl />
          <ComboboxContent />
        </Combobox>

        <FormFieldHelper>
          This is a combobox with multiple selection
        </FormFieldHelper>

        <FormFieldError>
          Error while selecting items
        </FormFieldError>
      </FormField>

      <FormField >
        <FormFieldLabel>
          Datepicker:
        </FormFieldLabel>

        <Datepicker
          name="datepicker"
          required={ areAllRequired }>
          <DatepickerControl />

          <DatepickerContent />
        </Datepicker>
      </FormField>

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
        <FormFieldLabel>
          Phone number:
        </FormFieldLabel>

        <PhoneNumber
          country="fr"
          defaultValue="+33612345678"
          name="phone-number"
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

      <FormField>
        <FormFieldLabel>
          Quantity:
        </FormFieldLabel>

        <Quantity
          defaultValue="42"
          name="quantity"
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

      <FormField>
        <RadioGroup name="radioGroup">
          <FormFieldLabel>
            Radio group:
          </FormFieldLabel>

          <Radio
            required={ areAllRequired }
            value="radio 1">
            <RadioControl />

            <RadioLabel>
              Radio 1
            </RadioLabel>
          </Radio>

          <Radio
            required={ areAllRequired }
            value="radio 2">
            <RadioControl />

            <RadioLabel>
              Radio 2
            </RadioLabel>
          </Radio>
        </RadioGroup>

        <FormFieldHelper>
          This is a radio group to fill
        </FormFieldHelper>

        <FormFieldError>
          Error while filling radio group
        </FormFieldError>
      </FormField>

      <FormField>
        <FormFieldLabel>
          Range:
        </FormFieldLabel>

        <Range
          defaultValue={ [50] }
          name="range" />

        <FormFieldHelper>
          This is a range to fill
        </FormFieldHelper>

        <FormFieldError>
          Error while filling range
        </FormFieldError>
      </FormField>

      <FormField>
        <FormFieldLabel>
          Select:
        </FormFieldLabel>

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

      <FormField>
        <FormFieldLabel>
          Timepicker:
        </FormFieldLabel>

        <Timepicker
          name="timepicker"
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
