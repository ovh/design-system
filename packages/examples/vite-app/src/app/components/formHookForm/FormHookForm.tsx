import { OdsButton, OdsFormField, OdsFormFieldError, OdsFormFieldHelper, OdsFormFieldLabel, OdsTextarea } from '@ovhcloud/ods-react';
import { type ReactElement, useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './formHookForm.module.scss';

type FormData = {
  textarea: string,
}

const defaultValue: FormData = {
  textarea: 'default textarea',
};

function FormHookForm(): ReactElement {
  const {
    formState: { errors },
    handleSubmit,
    register,
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

      <OdsFormField invalid={ !!errors.textarea }>
        <OdsFormFieldLabel>
          Textarea:
        </OdsFormFieldLabel>

        <OdsTextarea
          { ...register('textarea', {
            required: areAllRequired,
          })} />

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
        <OdsButton
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

export { FormHookForm };
