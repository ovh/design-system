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
  Range,
  Select, SelectContent, SelectControl,
  Textarea,
  Timepicker, TimepickerControl,
} from '@ovhcloud/ods-react';
import { useFormik } from 'formik';
import React, { type ReactElement } from 'react';
import * as yup from 'yup';
import styles from './formFormik.scss';

type FormData = {
  checkboxAlone: string,
  checkboxGroup: string[],
  datepicker: Date,
  input: string,
  password: string,
  phoneNumber: string,
  quantity: string,
  radioGroup: string,
  range: number,
  select: string,
  textarea: string,
  timepicker: string,
}

const validationSchema = yup.object<FormData>({
  checkboxAlone: yup.string().nullable().required(),
  checkboxGroup: yup.array().of(yup.string()).nullable().required(),
  datepicker: yup.date().nullable().required(),
  input: yup.string().nullable().required(),
  password: yup.string().nullable().required(),
  phoneNumber: yup.string().nullable().required(),
  quantity: yup.string().nullable().required(),
  radioGroup: yup.string().nullable().required(),
  range: yup.number().nullable().required(),
  select: yup.string().nullable().required(),
  textarea: yup.string().nullable().required(),
  timepicker: yup.string().nullable().required(),
});

function FormFormik(): ReactElement {
  const formik = useFormik<FormData>({
    initialValues: {
      checkboxAlone: 'checkbox alone',
      checkboxGroup: ['grouped checkbox 1'],
      datepicker: new Date(),
      input: 'default input',
      password: 'default password',
      phoneNumber: '',
      quantity: '42',
      radioGroup: '',
      range: 50,
      select: 'cat',
      textarea: 'default textarea',
      timepicker: '',
    },
    onSubmit: (values) => {
      console.log('Formik values', values);
    },
    validateOnMount: true,
    validationSchema,
  });

  return (
    <form
      className={ styles['form-formik'] }
      onSubmit={ formik.handleSubmit }>
      <h1>Formik</h1>

      <FormField invalid={ formik.touched.checkboxAlone && !!formik.errors.checkboxAlone }>
        <Checkbox
          defaultChecked={ !!formik.initialValues.checkboxAlone }
          name="checkboxAlone"
          onBlur={ formik.handleBlur }
          onCheckedChange={ ({ checked }) => {
            formik.setFieldValue('checkboxAlone', checked ? formik.initialValues.checkboxAlone : null);
          }}
          required={ true }
          value={ formik.initialValues.checkboxAlone }>
          <CheckboxControl />

          <CheckboxLabel>
            Checkbox alone
          </CheckboxLabel>
        </Checkbox>
      </FormField>

      <CheckboxGroup
        defaultValue={ formik.initialValues.checkboxGroup }
        invalid={ formik.touched.checkboxGroup && !!formik.errors.checkboxGroup }
        name="checkboxGroup"
        onBlur={ formik.handleBlur }
        onValueChange={ (value) => {
          formik.setFieldValue('checkboxGroup', value);
        }}>
        <FormField>
          <Checkbox
            required={ true }
            value="grouped checkbox 1">
            <CheckboxControl />

            <CheckboxLabel>
              Grouped checkbox 1
            </CheckboxLabel>
          </Checkbox>
        </FormField>

        <FormField>
          <Checkbox
            required={ true }
            value="grouped checkbox 2">
            <CheckboxControl />

            <CheckboxLabel>
              Grouped checkbox 2
            </CheckboxLabel>
          </Checkbox>
        </FormField>
      </CheckboxGroup>

      <FormField invalid={ formik.touched.datepicker && !!formik.errors.datepicker }>
        <FormFieldLabel>
          Datepicker:
        </FormFieldLabel>

        <Datepicker
          defaultValue={ formik.initialValues.datepicker }
          name="datepicker"
          onBlur={ formik.handleBlur }
          onValueChange={ ({ value }) => {
            formik.setFieldValue('datepicker', value);
          }}
          required={ true }>
          <DatepickerControl />

          <DatepickerContent />
        </Datepicker>
      </FormField>

      <FormField invalid={ formik.touched.input && !!formik.errors.input }>
        <FormFieldLabel>
          Input:
        </FormFieldLabel>

        <Input
          clearable
          defaultValue={ formik.initialValues.input }
          name="input"
          onBlur={ formik.handleBlur }
          onChange={ formik.handleChange }
          required={ true } />

        <FormFieldHelper>
          This is an input to fill
        </FormFieldHelper>

        <FormFieldError>
          Error while filling input
        </FormFieldError>
      </FormField>

      <FormField invalid={ formik.touched.password && !!formik.errors.password }>
        <FormFieldLabel>
          Password:
        </FormFieldLabel>

        <Password
          clearable
          defaultValue={ formik.initialValues.password }
          name="password"
          onBlur={ formik.handleBlur }
          onChange={ formik.handleChange }
          required={ true } />

        <FormFieldHelper>
          This is a password to fill
        </FormFieldHelper>

        <FormFieldError>
          Error while filling password
        </FormFieldError>
      </FormField>

      <FormField invalid={ formik.touched.phoneNumber && !!formik.errors.phoneNumber }>
        <FormFieldLabel>
          Phone number:
        </FormFieldLabel>

        <PhoneNumber
          country="fr"
          defaultValue={ formik.initialValues.phoneNumber }
          name="phoneNumber"
          onValueChange={ ({ isNumberValid, parsingError, value }) => {
            if (isNumberValid) {
              formik.setFieldValue('phoneNumber', value);
            } else {
              formik.setFieldValue('phoneNumber', '');
              formik.setFieldError('phoneNumber', parsingError);
            }
          }}
          required={ true }>
          <PhoneNumberCountryList />

          <PhoneNumberControl
            clearable
            onBlur={ formik.handleBlur } />
        </PhoneNumber>

        <FormFieldHelper>
          This is a phone number to fill
        </FormFieldHelper>

        <FormFieldError>
          Error while filling phone number
        </FormFieldError>
      </FormField>

      <FormField invalid={ formik.touched.quantity && !!formik.errors.quantity }>
        <FormFieldLabel>
          Quantity:
        </FormFieldLabel>

        <Quantity
          defaultValue={ formik.initialValues.quantity }
          name="quantity"
          onValueChange={ ({ value }) => {
            formik.setFieldValue('quantity', value);
          }}
          required={ true }>
          <QuantityControl>
            <QuantityInput onBlur={ formik.handleBlur } />
          </QuantityControl>
        </Quantity>

        <FormFieldHelper>
          This is a quantity to fill
        </FormFieldHelper>

        <FormFieldError>
          Error while filling quantity
        </FormFieldError>
      </FormField>

      <RadioGroup
        defaultValue={ formik.initialValues.radioGroup }
        name="radioGroup"
        onBlur={ formik.handleBlur }
        onValueChange={ ({ value }) => {
          formik.setFieldValue('radioGroup', value);
        }}>
        <FormField>
          <FormFieldLabel>
            Radio group:
          </FormFieldLabel>

          <Radio
            required={ true }
            value="radio 1">
            <RadioControl />

            <RadioLabel>
              Radio 1
            </RadioLabel>
          </Radio>

          <Radio
            required={ true }
            value="radio 2">
            <RadioControl />

            <RadioLabel>
              Radio 2
            </RadioLabel>
          </Radio>
        </FormField>
      </RadioGroup>

      <FormField invalid={ formik.touched.range && !!formik.errors.range }>
        <FormFieldLabel>
          Range:
        </FormFieldLabel>

        <Range
          defaultValue={ [formik.initialValues.range] }
          name="range"
          onBlur={ formik.handleBlur }
          onValueChange={ ({ value }) => {
            formik.setFieldValue('range', value[0]);
          }} />

        <FormFieldHelper>
          This is a range to fill
        </FormFieldHelper>

        <FormFieldError>
          Error while filling range
        </FormFieldError>
      </FormField>

      <FormField invalid={ formik.touched.select && !!formik.errors.select }>
        <FormFieldLabel>
          Select:
        </FormFieldLabel>

        <Select
          defaultValue={ formik.initialValues.select }
          items={[
            { label: 'Dog', value:'dog' },
            { label: 'Cat', value:'cat' },
            { label: 'Hamster', value:'hamster' },
            { label: 'Parrot', value:'parrot' },
            { label: 'Spider', value:'spider' },
            { label: 'Goldfish', value:'goldfish' },
          ]}
          name="select"
          onBlur={ formik.handleBlur }
          onChange={ formik.handleChange }
          required={ true }>

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

      <FormField invalid={ formik.touched.textarea && !!formik.errors.textarea }>
        <FormFieldLabel>
          Textarea:
        </FormFieldLabel>

        <Textarea
          defaultValue={ formik.initialValues.textarea }
          name="textarea"
          onBlur={ formik.handleBlur }
          onChange={ formik.handleChange }
          required={ true } />

        <FormFieldHelper>
          This is a textarea to fill
        </FormFieldHelper>

        <FormFieldError>
          Error while filling textarea
        </FormFieldError>
      </FormField>

      <FormField invalid={ formik.touched.timepicker && !!formik.errors.timepicker }>
        <FormFieldLabel>
          Timepicker:
        </FormFieldLabel>

        <Timepicker
          defaultValue={ formik.initialValues.timepicker }
          name="timepicker"
          onValueChange={ ({ value }) => formik.setFieldValue('timepicker', value) }
          required={ true }>
          <TimepickerControl onBlur={ formik.handleBlur } />
        </Timepicker>

        <FormFieldHelper>
          This is a timepicker to fill
        </FormFieldHelper>

        <FormFieldError>
          Error while filling timepicker
        </FormFieldError>
      </FormField>

      <p>
        Errors:
        <br />
        { JSON.stringify(formik.errors) }
      </p>

      <div>
        <Button
          onClick={ () => formik.resetForm({ values: formik.initialValues }) }
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

export { FormFormik };
