import { Button, FormField, FormFieldError, FormFieldHelper, FormFieldLabel, Quantity, QuantityControl, QuantityInput, Textarea } from '@ovhcloud/ods-react';
import { useFormik } from 'formik';
import { type ReactElement } from 'react';
import * as yup from 'yup';
import styles from './formFormik.module.scss';

type FormData = {
  quantity: string,
  textarea: string,
}

const validationSchema = yup.object<FormData>({
  quantity: yup.string().nullable().required(),
  textarea: yup.string().nullable().required(),
});

function FormFormik(): ReactElement {
  const formik = useFormik<FormData>({
    initialValues: {
      quantity: '42',
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
