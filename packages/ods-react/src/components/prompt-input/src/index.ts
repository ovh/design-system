import { type PromptInputProp, PromptInput as PromptInputRoot } from './components/prompt-input/PromptInput';
import { PromptInputControls, type PromptInputControlsProp } from './components/prompt-input-controls/PromptInputControls';
import {
  PromptInputFileUploadButton,
  type PromptInputFileUploadButtonProp,
} from './components/prompt-input-file-upload-button/PromptInputFileUploadButton';
import { PromptInputFiles, type PromptInputFilesProp } from './components/prompt-input-files/PromptInputFiles';
import {
  PromptInputSendButton,
  type PromptInputSendButtonProp,
} from './components/prompt-input-send-button/PromptInputSendButton';
import {
  PromptInputTextControl,
  type PromptInputTextControlProp,
} from './components/prompt-input-text-control/PromptInputTextControl';

const PromptInput = Object.assign(PromptInputRoot, {
  Controls: PromptInputControls,
  FileUploadButton: PromptInputFileUploadButton,
  Files: PromptInputFiles,
  SendButton: PromptInputSendButton,
  TextControl: PromptInputTextControl,
});

export { PromptInput };
export { PromptInputControls, PromptInputFileUploadButton, PromptInputFiles, PromptInputSendButton, PromptInputTextControl };
export type { PromptInputProp, PromptInputControlsProp, PromptInputFileUploadButtonProp, PromptInputFilesProp, PromptInputSendButtonProp, PromptInputTextControlProp };
export {
  type PromptInputRootProp,
  type PromptInputInputSubmitDetails,
  type PromptInputValueChangeDetails,
  type PromptInputFileChangeDetails,
} from './contexts/usePromptInput';
