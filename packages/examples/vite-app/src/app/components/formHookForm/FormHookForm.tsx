/* eslint-disable no-console */
import { Button, FormField, FormFieldError, FormFieldHelper, FormFieldLabel, PromptInput, PromptInputControls, PromptInputSendButton, PromptInputTextControl, Textarea } from '@ovhcloud/ods-react';
import { type ReactElement, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import styles from './formHookForm.module.scss';

type FormData = {
  promptInput: string,
  textarea: string,
}

const defaultValue: FormData = {
  promptInput: 'prompt input default value',
  textarea: 'default textarea',
};

function FormHookForm(): ReactElement {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormData>({
    defaultValues: defaultValue,
    mode: 'onBlur',
  });
  const [areAllRequired, setAreAllRequired] = useState(false);

  function onSubmit(data: FormData): void {
    console.log('-- submit --');
    console.log(data);
  }

  function onAllRequiredToggle(): void {
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

      <Controller
        control={control}
        name="promptInput"
        rules={{ required: areAllRequired }}
        render={({ field }) => (
          <FormField invalid={!!errors.promptInput}>
            <PromptInput
              defaultValue={defaultValue.promptInput}
              name={field.name}
              onInputSubmit={(value) => {
                field.onChange(value);
                handleSubmit(onSubmit)();
              }}
            >
              <PromptInputControls>
                <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, gap: '4px' }}>
                  <PromptInputTextControl aria-label="enter your prompt" />
                  <FormFieldError>Some error message</FormFieldError>
                </div>
                <PromptInputSendButton disabled={false} aria-label="send prompt" />
              </PromptInputControls>
            </PromptInput>
          </FormField>
        )}
      />

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
