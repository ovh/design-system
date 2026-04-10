/* eslint-disable no-console */
import { Divider } from '@ovhcloud/ods-react';
import { PromptInputControl } from './components/prompt-input-control/PromptInputControl';
import { PromptInputSendButton } from './components/prompt-input-send-button/PromptInputSendButton';
import { PromptInputTextControl } from './components/prompt-input-text-control/PromptInputTextControl';
import { FormField, FormFieldError } from '../../form-field/src';
import { PromptInput } from '.';

export default {
  component: PromptInput,
  title: 'PromptInput dev',
};

export const Default = (): JSX.Element => {
  return (
    <>
      <h4>Flat</h4>
      <PromptInput>
        <PromptInputControl>
          <PromptInputTextControl />
          <PromptInputSendButton />
        </PromptInputControl>
      </PromptInput>

      <Divider style={{ marginBlock: '32px' }} />

      <h4>With placeholder and onInputSubmit</h4>
      <PromptInput name="prompt-input-textArea" onInputSubmit={(v) => console.log('[DEV]: Submit value:', v)}>
        <PromptInputControl>
          <PromptInputTextControl placeholder="Placeholder" />
          <PromptInputSendButton />
        </PromptInputControl>
      </PromptInput>

      <Divider style={{ marginBlock: '32px' }} />

      <h4>With default value and onValueChange</h4>
      <PromptInput
        name="prompt-input-textArea"
        defaultValue="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore"
        onValueChange={(v) => console.log('[DEV]: value:', v)}
      >
        <PromptInputControl>
          <PromptInputTextControl />
          <PromptInputSendButton />
        </PromptInputControl>
      </PromptInput>
    </>
  );
};

export const Readonly = (): JSX.Element => (
  <PromptInput
    readOnly
    name="prompt-input-textArea"
    defaultValue="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore"
    onValueChange={(v) => console.log('[DEV]: value:', v)}
  >
    <PromptInputControl>
      <PromptInputTextControl />
      <PromptInputSendButton />
    </PromptInputControl>
  </PromptInput>
);

export const Loading = (): JSX.Element => (
  <PromptInput
    loading
    name="prompt-input-textArea"
    defaultValue="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore"
    onValueChange={(v) => console.log('[DEV]: value:', v)}
  >
    <PromptInputControl>
      <PromptInputTextControl />
      <PromptInputSendButton />
    </PromptInputControl>
  </PromptInput>
);

export const Disabled = (): JSX.Element => (
  <PromptInput
    disabled
    name="prompt-input-textArea"
    defaultValue="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore"
    onValueChange={(v) => console.log('[DEV]: value:', v)}
  >
    <PromptInputControl>
      <PromptInputTextControl />
      <PromptInputSendButton />
    </PromptInputControl>
  </PromptInput>
);

export const InsideFormField = (): JSX.Element => (
  <FormField invalid={true}>
    <PromptInput defaultValue="Some text that is invalid, because of reasons..." onValueChange={(v) => console.log('[DEV]: value:', v)}>
      <PromptInputControl>
        <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, gap: '4px' }}>
          <PromptInputTextControl aria-label="enter your prompt" />
          <FormFieldError>Some error message</FormFieldError>
        </div>
        <PromptInputSendButton aria-label="send prompt" />
      </PromptInputControl>
    </PromptInput>
  </FormField>
);
