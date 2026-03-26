import { type EditableProp, Editable as EditableRoot } from './components/editable/Editable';
import { EditableActions, type EditableActionsProp } from './components/editable-actions/EditableActions';
import { EditableCancelTrigger, type EditableCancelTriggerProp } from './components/editable-cancel-trigger/EditableCancelTrigger';
import { EditableDisplay, type EditableDisplayProp } from './components/editable-display/EditableDisplay';
import { EditableDisplayEmpty, type EditableDisplayEmptyProp } from './components/editable-display-empty/EditableDisplayEmpty';
import { EditableEditTrigger, type EditableEditTriggerProp } from './components/editable-edit-trigger/EditableEditTrigger';
import { EditableInput, type EditableInputProp } from './components/editable-input/EditableInput';
import { EditableSubmitTrigger, type EditableSubmitTriggerProp } from './components/editable-submit-trigger/EditableSubmitTrigger';

const Editable = Object.assign(EditableRoot, {
  Actions: EditableActions,
  CancelTrigger: EditableCancelTrigger,
  Display: EditableDisplay,
  DisplayEmpty: EditableDisplayEmpty,
  EditTrigger: EditableEditTrigger,
  Input: EditableInput,
  SubmitTrigger: EditableSubmitTrigger,
});

export { Editable };
export { EditableActions, EditableCancelTrigger, EditableDisplay, EditableDisplayEmpty, EditableEditTrigger, EditableInput, EditableSubmitTrigger };
export type { EditableProp, EditableActionsProp, EditableCancelTriggerProp, EditableDisplayProp, EditableDisplayEmptyProp, EditableEditTriggerProp, EditableInputProp, EditableSubmitTriggerProp };
export { EDITABLE_I18N } from './constants/editable-i18n';
export { type EditableEditingChangeDetail } from './contexts/useEditable';
