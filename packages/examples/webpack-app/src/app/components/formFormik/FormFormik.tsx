import { OdsButton, OdsFormField, OdsFormFieldError, OdsFormFieldHelper, OdsFormFieldLabel, OdsInput, OdsTextarea } from '@ovhcloud/ods-react';
import { useFormik } from 'formik';
import React, { type ReactElement } from 'react';
import * as yup from 'yup';
import styles from './formFormik.scss';

type FormData = {
  input: string,
  textarea: string,
}

const validationSchema = yup.object<FormData>({
  input: yup.string().nullable().required(),
  textarea: yup.string().nullable().required(),
});

function FormFormik(): ReactElement {
  const formik = useFormik<FormData>({
    initialValues: {
      input: 'default input',
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

      <OdsFormField  invalid={ formik.touched.input && !!formik.errors.input }>
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
