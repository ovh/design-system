/* eslint-disable no-console */
import { Divider, FileThumbnail } from '@ovhcloud/ods-react';
import { useState } from 'react';
import { PromptInputControls } from './components/prompt-input-controls/PromptInputControls';
import { PromptInputFileUploadButton } from './components/prompt-input-file-upload-button/PromptInputFileUploadButton';
import { PromptInputFiles } from './components/prompt-input-files/PromptInputFiles';
import { PromptInputSendButton } from './components/prompt-input-send-button/PromptInputSendButton';
import { PromptInputTextControl } from './components/prompt-input-text-control/PromptInputTextControl';
import { FormField, FormFieldError, FormFieldHelper } from '../../form-field/src';
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
        <PromptInputControls>
          <PromptInputFileUploadButton />
          <PromptInputTextControl />
          <PromptInputSendButton />
        </PromptInputControls>
      </PromptInput>

      <Divider style={{ marginBlock: '32px' }} />

      <h4>With placeholder and onInputSubmit</h4>
      <PromptInput name="prompt-input-textArea" onInputSubmit={(v) => console.log('[DEV]: Submit value:', v)}>
        <PromptInputControls>
          <PromptInputFileUploadButton aria-label="Upload file" />
          <PromptInputTextControl placeholder="Placeholder" />
          <PromptInputSendButton />
        </PromptInputControls>
      </PromptInput>

      <Divider style={{ marginBlock: '32px' }} />

      <h4>With default value and onValueChange</h4>
      <PromptInput
        name="prompt-input-textArea"
        defaultValue="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore"
        onValueChange={(v) => console.log('[DEV]: value:', v)}
      >
        <PromptInputControls>
          <PromptInputFileUploadButton />
          <PromptInputTextControl />
          <PromptInputSendButton />
        </PromptInputControls>
      </PromptInput>
    </>
  );
};

export const WithFiles = (): JSX.Element => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([
    new File(['foo'], 'a-default-file.txt', { type: 'text/plain' }),
    new File(['foo'], 'another-default-file.txt', { type: 'text/plain' }),
  ]);
  const MAX_FILE_SIZE = 1_000_000;

  function handleChange({ target }: React.ChangeEvent<HTMLInputElement>): void {
    const selected = Array.from(target.files ?? []);
    target.value = '';

    const accepted = selected.filter((file) => file.size <= MAX_FILE_SIZE);
    const rejected = selected.filter((file) => file.size > MAX_FILE_SIZE);

    if (accepted.length > 0) {
      console.log('[DEV]: accepted files:', accepted);
      setUploadedFiles((prev) => [...prev, ...accepted]);
    }

    if (rejected.length > 0) {
      console.log('[DEV]: rejected files (too large):', rejected);
    }
  }

  return <PromptInput>
    {Boolean(uploadedFiles?.length) &&
    <PromptInputFiles>
      {uploadedFiles.map((file, index) => (
        <FileThumbnail
          key={index}
          file={file}
          progress={20}
          onFileRemove={() => {
            setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
          }}
        />
      ))}
    </PromptInputFiles>
    }
    <PromptInputControls>
      <PromptInputFileUploadButton accept='' multiple onChange={handleChange} />
      <PromptInputTextControl placeholder="Enter your prompt" />
      <PromptInputSendButton />
    </PromptInputControls>
  </PromptInput>;
};

export const Readonly = (): JSX.Element => (
  <PromptInput
    readOnly
    name="prompt-input-textArea"
    defaultValue="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore"
    onValueChange={(v) => console.log('[DEV]: value:', v)}
  >
    <PromptInputControls>
      <PromptInputFileUploadButton />
      <PromptInputTextControl />
      <PromptInputSendButton />
    </PromptInputControls>
  </PromptInput>
);

export const Loading = (): JSX.Element => (
  <PromptInput
    loading
    name="prompt-input-textArea"
    defaultValue="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore"
    onValueChange={(v) => console.log('[DEV]: value:', v)}
  >
    <PromptInputControls>
      <PromptInputFileUploadButton />
      <PromptInputTextControl />
      <PromptInputSendButton />
    </PromptInputControls>
  </PromptInput>
);

export const Disabled = (): JSX.Element => (
  <PromptInput
    disabled
    name="prompt-input-textArea"
    defaultValue="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore"
    onValueChange={(v) => console.log('[DEV]: value:', v)}
  >
    <PromptInputControls>
      <PromptInputFileUploadButton />
      <PromptInputTextControl />
      <PromptInputSendButton />
    </PromptInputControls>
  </PromptInput>
);

export const InsideFormField = (): JSX.Element => {
  const maxLength = 60;
  const [inputValue, setInputValue] = useState('Some text that is almost hitting the length limit...');

  return (
    <FormField invalid={inputValue.length > maxLength}>
      <PromptInput
        defaultValue={inputValue}
        name="prompt-input-textArea"
        onValueChange={setInputValue}
      >
        <PromptInputControls>
          <PromptInputFileUploadButton />
          <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, gap: '4px' }}>
            <PromptInputTextControl aria-label="enter your prompt" />
            <FormFieldHelper>{inputValue.length} / {maxLength}</FormFieldHelper>
            <FormFieldError>Character limit exceeded</FormFieldError>
          </div>
          <PromptInputSendButton aria-label="send prompt" />
        </PromptInputControls>
      </PromptInput>
    </FormField>
  );
};
