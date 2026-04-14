import { PromptInput, PromptInputControls, PromptInputFileUploadButton, PromptInputSendButton, PromptInputTextControl } from '../../src';
import { PromptInputFiles } from '../../src/components/prompt-input-files/PromptInputFiles';

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
