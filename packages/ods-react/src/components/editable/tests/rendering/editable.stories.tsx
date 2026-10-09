import { BUTTON_COLOR, BUTTON_SIZE, BUTTON_STATUS, BUTTON_VARIANT, Button } from '../../../button/src';
import { Editable, EditableCancelTrigger, EditableDisplay, EditableEditTrigger, EditableInput, EditableSubmitTrigger } from '../../src';

export default {
  component: Editable,
  title: 'Tests rendering',
};

export const render = () => (
  <Editable>
    <EditableDisplay>
      Some label
    </EditableDisplay>

    <EditableInput>
      <input />
    </EditableInput>
  </Editable>
);

export const triggers = () => (
  <Editable>
    <EditableDisplay>
      Some label
    </EditableDisplay>

    <EditableEditTrigger data-testid="edit-default" />
    <EditableEditTrigger
      color={ BUTTON_COLOR.success }
      data-testid="edit-color" />
    <EditableSubmitTrigger
      color={ BUTTON_COLOR.success }
      data-testid="submit-color" />
    <EditableCancelTrigger data-testid="cancel-default" />
    <EditableCancelTrigger
      data-testid="cancel-status"
      status={ BUTTON_STATUS.critical } />

    <Button
      color={ BUTTON_COLOR.success }
      data-testid="button-color-success"
      size={ BUTTON_SIZE.sm }
      variant={ BUTTON_VARIANT.ghost } />
    <Button
      data-testid="button-status-brand"
      size={ BUTTON_SIZE.sm }
      status={ BUTTON_STATUS.brand }
      variant={ BUTTON_VARIANT.ghost } />
    <Button
      data-testid="button-status-critical"
      size={ BUTTON_SIZE.sm }
      status={ BUTTON_STATUS.critical }
      variant={ BUTTON_VARIANT.ghost } />
    <Button
      data-testid="button-status-neutral"
      size={ BUTTON_SIZE.sm }
      status={ BUTTON_STATUS.neutral }
      variant={ BUTTON_VARIANT.ghost } />
  </Editable>
);
