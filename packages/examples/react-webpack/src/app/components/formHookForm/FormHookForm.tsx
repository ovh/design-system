import React from 'react';
import { useForm, Controller } from 'react-hook-form';
// @ts-ignore
import { OdsFormField, OdsTextarea } from '@ovhcloud/ods-react';

interface FormValues {
  controlledMessage: string;
  uncontrolledMessage: string;
}

const FormHookForm: React.FC = () => {
  const {
    control,
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
    watch,
  } = useForm<FormValues>({
    defaultValues: {
      controlledMessage: '',
      uncontrolledMessage: 'Default value',
    },
  });

  const onSubmit = async (data: FormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.log('React Hook Form submitted with values:', data);
  };

  const controlledValue = watch('controlledMessage');

  return (
    <div className="form-rhf-container">
      <h2>React Hook Form Integration Test</h2>

      <form onSubmit={ handleSubmit(onSubmit) }>
        <section>
          <h3>Component with Controller</h3>
          <OdsFormField
            errorText={ errors.controlledMessage?.message }
            helperText="Enter your text below"
            legend="Controlled Form"
          >
            <Controller
              control={ control }
              name="controlledMessage"
              rules={ {
                minLength: {
                  message: 'Message must contain at least 5 characters',
                  value: 5
                },
                required: 'This field is required'
              } }
              render={ ({ field }) => (
                <OdsTextarea
                  { ...field }
                  placeholder="Type something..."
                />
              ) }
            />
          </OdsFormField>
          <div>
            <p>Current value: { controlledValue }</p>
          </div>
        </section>

        <section>
          <h3>Component with register</h3>
          <OdsFormField
            errorText={ errors.uncontrolledMessage?.message }
            helperText="Enter your text below"
            legend="Form with initial value"
          >
            <OdsTextarea
              { ...register('uncontrolledMessage', {
                minLength: {
                  message: 'Message must contain at least 5 characters',
                  value: 5
                },
                required: 'This field is required'
              }) }
              placeholder="Type something..."
            />
          </OdsFormField>
        </section>

        <div className="form-actions">
          <button type="submit" disabled={ isSubmitting }>
            { isSubmitting ? 'Submitting...' : 'Submit' }
          </button>
        </div>
      </form>
    </div>
  );
};

export { FormHookForm };
