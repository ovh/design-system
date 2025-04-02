import React from 'react';
import { Formik, Form, Field, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { OdsFormField, OdsTextarea } from '@ovhcloud/ods-react';

const ValidationSchema = Yup.object().shape({
  controlledMessage: Yup.string()
    .min(5, 'Message must contain at least 5 characters')
    .required('This field is required'),
  uncontrolledMessage: Yup.string()
    .min(5, 'Message must contain at least 5 characters')
    .required('This field is required'),
});

interface FormValues {
  controlledMessage: string;
  uncontrolledMessage: string;
}

const FormFormik: React.FC = () => {
  const initialValues: FormValues = {
    controlledMessage: '',
    uncontrolledMessage: 'Default value',
  };

  const handleSubmit = (
    values: FormValues,
    { setSubmitting }: FormikHelpers<FormValues>
  ) => {
    setTimeout(() => {
      console.group('Form Submission Details');
      console.log('Controlled Message:', values.controlledMessage);
      console.log('Uncontrolled Message:', values.uncontrolledMessage);
      console.table(values);
      console.groupEnd();
      setSubmitting(false);
    }, 500);
  };

  return (
    <div className="form-formik-container">
      <h2>Formik Integration Test</h2>
      
      <Formik
        initialValues={ initialValues }
        onSubmit={ handleSubmit }
        validationSchema={ ValidationSchema }
      >
        {({ errors, handleBlur, handleChange, isSubmitting, touched, values }) => (
          <Form>
            <section>
              <h3>Controlled Component with Formik</h3>
              <OdsFormField 
                errorText={ touched.controlledMessage && errors.controlledMessage }
                helperText="Enter your text below"
                legend="Controlled Form"
              >
                <Field
                  as={ OdsTextarea }
                  id="controlledMessage"
                  name="controlledMessage"
                  onBlur={ handleBlur }
                  onChange={ handleChange }
                  placeholder="Type something..."
                  value={ values.controlledMessage }
                  hasError={ touched.controlledMessage && !!errors.controlledMessage }
                />
              </OdsFormField>
              <div>
                <p>Current value: { values.controlledMessage }</p>
              </div>
            </section>
            
            <section>
              <h3>Uncontrolled Component with Formik</h3>
              <OdsFormField 
                errorText={ touched.uncontrolledMessage && errors.uncontrolledMessage }
                helperText="Enter your text below"
                legend="Form with initial value"
              >
                <Field
                  as={ OdsTextarea }
                  id="uncontrolledMessage"
                  name="uncontrolledMessage"
                  onBlur={ handleBlur }
                  onChange={ handleChange }
                  placeholder="Type something..."
                  hasError={ touched.uncontrolledMessage && !!errors.uncontrolledMessage }
                />
              </OdsFormField>
            </section>
            
            <div className="form-actions">
              <button type="submit" disabled={ isSubmitting }>
                { isSubmitting ? 'Submitting...' : 'Submit' }
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export { FormFormik };
