/* eslint-disable no-console */
import { BUTTON_VARIANT, Divider, FileThumbnail } from '@ovhcloud/ods-react';
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

export const ControlledPromptInput = (): JSX.Element => {

  const [inputValue, setInputValue] = useState('default controlled value');
  const [fileCollection, setFileCollection] = useState<File[]>([]);

  const onInputValueChange = ({ inputValue }: { inputValue: string }): void => {
    setInputValue(inputValue);
  };
  const onFileChange = ({ files }: { files: File[] }): void => {
    setFileCollection([...fileCollection, ...files]);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <PromptInput value={ inputValue } onValueChange={ onInputValueChange } fileCollection={ fileCollection } onFileChange={ onFileChange }>
        <PromptInputFiles>
          {fileCollection?.map((file, index) => (
            <FileThumbnail
              key={index}
              file={file}
              onFileRemove={() => {
                setFileCollection((prev) => prev.filter((_, i) => i !== index));
              }}
            />
          ))}
        </PromptInputFiles>
        <PromptInputControls>
          <PromptInputFileUploadButton />
          <PromptInputTextControl />
          <PromptInputSendButton />
        </PromptInputControls>
      </PromptInput>
      <PromptInput value={ inputValue } onValueChange={ onInputValueChange } fileCollection={ fileCollection } onFileChange={ onFileChange }>
        <PromptInputFiles>
          {fileCollection?.map((file, index) => (
            <FileThumbnail
              key={index}
              file={file}
              onFileRemove={() => {
                setFileCollection((prev) => prev.filter((_, i) => i !== index));
              }}
            />
          ))}
        </PromptInputFiles>
        <PromptInputControls>
          <PromptInputTextControl />
          <PromptInputSendButton />
        </PromptInputControls>
      </PromptInput>
    </div>
  );
};

export const Events = (): JSX.Element => {
  const [inputValue, setInputValue] = useState('');
  const [submitValue, setSubmitValue] = useState('');
  const [fileChangeValue, setFileChangeValue] = useState<File[]>([]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <PromptInput
        onValueChange={({ inputValue }) => {
          console.log('fire valueChange');
          setInputValue(inputValue);
        }}
        onInputSubmit={({ inputValue }) => {
          console.log('fire inputSubmit');
          setSubmitValue(inputValue);
        }}
        onFileChange={({ files }) => {
          console.log('fire fileChange');
          setFileChangeValue(files);
        }}
      >
        <PromptInputControls>
          <PromptInputFileUploadButton multiple />
          <PromptInputTextControl />
          <PromptInputSendButton />
        </PromptInputControls>
      </PromptInput>

      <div>
        Value : {inputValue}<br />
        Submit value : {submitValue}  <br />
        File change value : {fileChangeValue.map((file) => file.name).join(', ')}
      </div>
    </div>
  );
};

export const WithFiles = (): JSX.Element => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([
    new File(['foo'], 'a-default-file.txt', { type: 'text/plain' }),
    new File(['foo'], 'another-default-file.txt', { type: 'text/plain' }),
  ]);
  const MAX_FILE_SIZE = 1_000_000;

  function handleFileChange({ files }: { files: File[] }): void {
    const selected = Array.from(files);

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

  return <PromptInput onFileChange={handleFileChange} fileCollection={uploadedFiles}>
    <PromptInputFiles>
      {uploadedFiles?.map((file, index) => (
        <FileThumbnail
          key={index}
          file={file}
          progress={20 * (index + 2)}
          onFileRemove={() => {
            setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
          }}
        />
      ))}
    </PromptInputFiles>
    <PromptInputControls>
      <PromptInputFileUploadButton variant={BUTTON_VARIANT.default} accept="image/png" multiple />
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

export const CompoundPattern = (): JSX.Element => (
  <PromptInput>
    <PromptInput.Controls>
      <PromptInput.FileUploadButton />
      <PromptInput.TextControl placeholder='placeholding the place' />
      <PromptInput.SendButton />
    </PromptInput.Controls>
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
        onValueChange={({ inputValue }) => setInputValue(inputValue)}
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
