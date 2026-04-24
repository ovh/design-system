import { useState } from 'react';
import { FileThumbnail } from '../../../file-thumbnail/src';
import { PromptInput, PromptInputControls, PromptInputFileUploadButton, PromptInputFiles, PromptInputSendButton, PromptInputTextControl } from '../../src';

export default {
  component: PromptInput,
  title: 'Tests behavior',
};

export const AddFile = (): JSX.Element => {
  const [fileCollection, setFileCollection] = useState<File[]>([]);

  return (
    <PromptInput fileCollection={fileCollection} onFileChange={({ files }) => setFileCollection(files)}>
      <PromptInputControls>
        <PromptInputFileUploadButton />
        <PromptInputTextControl />
        <PromptInputSendButton />
      </PromptInputControls>
    </PromptInput>
  );
};

export const TypeText = (): JSX.Element => (
  <PromptInput>
    <PromptInputControls>
      <PromptInputFileUploadButton />
      <PromptInputTextControl />
      <PromptInputSendButton />
    </PromptInputControls>
  </PromptInput>
);

export const ClearText = (): JSX.Element => (
  <PromptInput value="input text value">
    <PromptInputControls>
      <PromptInputFileUploadButton />
      <PromptInputTextControl />
      <PromptInputSendButton />
    </PromptInputControls>
  </PromptInput>
);

export const RemoveFile = (): JSX.Element => {
  const [fileCollection, setFileCollection] = useState<File[]>([new File(['foo'], 'text-file.txt', { type: 'text/plain' })]);

  return (
    <PromptInput fileCollection={fileCollection} onFileChange={({ files }) => setFileCollection(files)}>
      <PromptInputFiles>
        {fileCollection.map((file, index) => (
          <FileThumbnail
            key={index}
            file={file}
            onFileRemove={() => setFileCollection((prev) => prev.filter((_, i) => i !== index))}
          />
        ))}
      </PromptInputFiles>
      <PromptInputControls>
        <PromptInputFileUploadButton />
        <PromptInputTextControl />
        <PromptInputSendButton />
      </PromptInputControls>
    </PromptInput>
  );
};
