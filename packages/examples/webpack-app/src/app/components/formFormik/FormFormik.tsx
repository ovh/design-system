import { OdsButton, OdsCheckbox, OdsCheckboxControl, OdsCheckboxGroup, OdsCheckboxLabel, OdsFormField, OdsFormFieldError, OdsFormFieldHelper, OdsFormFieldLabel, OdsInput, OdsPassword, OdsTextarea } from '@ovhcloud/ods-react';
import { useFormik } from 'formik';
import React, { type ReactElement } from 'react';
import * as yup from 'yup';
import styles from './formFormik.scss';

type FormData = {
  checkboxAlone: string,
  checkboxGroup: string[],
  input: string,
  password: string,
  textarea: string,
}

const validationSchema = yup.object<FormData>({
  checkboxAlone: yup.string().nullable().required(),
  checkboxGroup: yup.array().of(yup.string()).nullable().required(),
  input: yup.string().nullable().required(),
  password: yup.string().nullable().required(),
  textarea: yup.string().nullable().required(),
});

function FormFormik(): ReactElement {
  const formik = useFormik<FormData>({
    initialValues: {
      checkboxAlone: 'checkbox alone',
      checkboxGroup: ['grouped checkbox 1'],
      input: 'default input',
      password: 'default password',
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

      <OdsFormField invalid={ formik.touched.checkboxAlone && !!formik.errors.checkboxAlone }>
        <OdsCheckbox
          defaultChecked={ !!formik.initialValues.checkboxAlone }
          name="checkboxAlone"
          onBlur={ formik.handleBlur }
          onCheckedChange={ ({ checked }) => {
            formik.setFieldValue('checkboxAlone', checked ? formik.initialValues.checkboxAlone : null);
          }}
          required={ true }
          value={ formik.initialValues.checkboxAlone }>
          <OdsCheckboxControl />

          <OdsCheckboxLabel>
            Checkbox alone
          </OdsCheckboxLabel>
        </OdsCheckbox>
      </OdsFormField>

      <OdsCheckboxGroup
        defaultValue={ formik.initialValues.checkboxGroup }
        invalid={ formik.touched.checkboxGroup && !!formik.errors.checkboxGroup }
        name="checkboxGroup"
        onBlur={ formik.handleBlur }
        onValueChange={ (value) => {
          formik.setFieldValue('checkboxGroup', value);
        }}>
        <OdsFormField>
          <OdsCheckbox
            required={ true }
            value="grouped checkbox 1">
            <OdsCheckboxControl />

            <OdsCheckboxLabel>
              Grouped checkbox 1
            </OdsCheckboxLabel>
          </OdsCheckbox>
        </OdsFormField>

        <OdsFormField>
          <OdsCheckbox
            required={ true }
            value="grouped checkbox 2">
            <OdsCheckboxControl />

            <OdsCheckboxLabel>
              Grouped checkbox 2
            </OdsCheckboxLabel>
          </OdsCheckbox>
        </OdsFormField>
      </OdsCheckboxGroup>

      <OdsFormField invalid={ formik.touched.input && !!formik.errors.input }>
        <OdsFormFieldLabel>
          Input:
        </OdsFormFieldLabel>

        <OdsInput
          clearable
          defaultValue={ formik.initialValues.input }
          name="input"
          onBlur={ formik.handleBlur }
          onChange={ formik.handleChange }
          required={ true } />

        <OdsFormFieldHelper>
          This is an input to fill
        </OdsFormFieldHelper>

        <OdsFormFieldError>
          Error while filling input
        </OdsFormFieldError>
      </OdsFormField>

      <OdsFormField invalid={ formik.touched.password && !!formik.errors.password }>
        <OdsFormFieldLabel>
          Password:
        </OdsFormFieldLabel>

        <OdsPassword
          clearable
          defaultValue={ formik.initialValues.password }
          name="password"
          onBlur={ formik.handleBlur }
          onChange={ formik.handleChange }
          required={ true } />

        <OdsFormFieldHelper>
          This is a password to fill
        </OdsFormFieldHelper>

        <OdsFormFieldError>
          Error while filling password
        </OdsFormFieldError>
      </OdsFormField>

      <OdsFormField invalid={ formik.touched.textarea && !!formik.errors.textarea }>
        <OdsFormFieldLabel>
          Textarea:
        </OdsFormFieldLabel>

        <OdsTextarea
          defaultValue={ formik.initialValues.textarea }
          name="textarea"
          onBlur={ formik.handleBlur }
          onChange={ formik.handleChange }
          required={ true } />

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
        { JSON.stringify(formik.errors) }
      </p>

      <div>
        <OdsButton
          onClick={ () => formik.resetForm({ values: formik.initialValues }) }
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

export { FormFormik };
