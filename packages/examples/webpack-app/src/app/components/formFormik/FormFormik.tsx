import {
  Button,
  Checkbox, CheckboxControl, CheckboxGroup, CheckboxLabel,
  FormField, FormFieldError, FormFieldHelper, FormFieldLabel,
  Input,
  Password,
  Quantity, QuantityControl, QuantityInput,
  Radio, RadioControl, RadioLabel, RadioGroup, RadioGroupLabel,
  Select, SelectContent, SelectControl,
  Textarea,
} from '@ovhcloud/ods-react';
import { useFormik } from 'formik';
import React, { type ReactElement } from 'react';
import * as yup from 'yup';
import styles from './formFormik.scss';

type FormData = {
  checkboxAlone: string,
  checkboxGroup: string[],
  input: string,
  password: string,
  quantity: string,
  radioGroup: string,
  select: string,
  textarea: string,
}

const validationSchema = yup.object<FormData>({
  checkboxAlone: yup.string().nullable().required(),
  checkboxGroup: yup.array().of(yup.string()).nullable().required(),
  input: yup.string().nullable().required(),
  password: yup.string().nullable().required(),
  quantity: yup.string().nullable().required(),
  radioGroup: yup.string().nullable().required(),
  select: yup.string().nullable().required(),
  textarea: yup.string().nullable().required(),
});

function FormFormik(): ReactElement {
  const formik = useFormik<FormData>({
    initialValues: {
      checkboxAlone: 'checkbox alone',
      checkboxGroup: ['grouped checkbox 1'],
      input: 'default input',
      password: 'default password',
      quantity: '42',
      radioGroup: '',
      select: 'cat',
      textarea: 'default textarea',
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
          <RadioGroupLabel>
            Radio group:
          </RadioGroupLabel>

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
