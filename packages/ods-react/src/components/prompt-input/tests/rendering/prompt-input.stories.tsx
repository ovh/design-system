import { PromptInput, PromptInputControls, PromptInputFileUploadButton, PromptInputFiles, PromptInputSendButton, PromptInputTextControl } from '../../src';

export default {
  component: PromptInput,
  title: 'Tests rendering',
};

export const render = (): JSX.Element => (
  <PromptInput data-testid="render-trigger">
    <PromptInputFiles>
      <div>File 1</div>
      <div>File 2</div>
    </PromptInputFiles>
    <PromptInputControls>
      <PromptInputFileUploadButton />
      <PromptInputTextControl />
      <PromptInputSendButton />
    </PromptInputControls>
  </PromptInput>
);

export const sendButtonDisabledNoTextNoFile = (): JSX.Element => (
  <PromptInput>
    <PromptInputControls>
      <PromptInputFileUploadButton />
      <PromptInputTextControl />
      <PromptInputSendButton />
    </PromptInputControls>
  </PromptInput>
);

export const sendButtonEnabledWithText = (): JSX.Element => (
  <PromptInput value="input text value">
    <PromptInputControls>
      <PromptInputFileUploadButton />
      <PromptInputTextControl />
      <PromptInputSendButton />
    </PromptInputControls>
  </PromptInput>
);

export const sendButtonEnabledWithFile = (): JSX.Element => (
  <PromptInput fileCollection={[new File(['foo'], 'text-file.txt', { type: 'text/plain' })]}>
    <PromptInputControls>
      <PromptInputFileUploadButton />
      <PromptInputTextControl />
      <PromptInputSendButton />
    </PromptInputControls>
  </PromptInput>
);

export const sendButtonEnabledWithTextAndFile = (): JSX.Element => (
  <PromptInput value="input text value" fileCollection={[new File(['foo'], 'text-file.txt', { type: 'text/plain' })]}>
    <PromptInputControls>
      <PromptInputFileUploadButton />
      <PromptInputTextControl />
      <PromptInputSendButton />
    </PromptInputControls>
  </PromptInput>
);
