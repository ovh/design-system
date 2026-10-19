import { BUTTON_COLOR, BUTTON_EMPHASIS, BUTTON_SIZE, BUTTON_STATUS, Button } from '../../../button/src';
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
    <EditableCancelTrigger
      data-testid="cancel-emphasis"
      emphasis={ BUTTON_EMPHASIS.high } />

    <Button
      color={ BUTTON_COLOR.success }
      data-testid="button-color-success"
      emphasis={ BUTTON_EMPHASIS.low }
      size={ BUTTON_SIZE.sm } />
    <Button
      data-testid="button-status-brand"
      emphasis={ BUTTON_EMPHASIS.low }
      size={ BUTTON_SIZE.sm }
      status={ BUTTON_STATUS.brand } />
    <Button
      data-testid="button-status-critical"
      emphasis={ BUTTON_EMPHASIS.low }
      size={ BUTTON_SIZE.sm }
      status={ BUTTON_STATUS.critical } />
    <Button
      data-testid="button-status-neutral"
      emphasis={ BUTTON_EMPHASIS.low }
      size={ BUTTON_SIZE.sm }
      status={ BUTTON_STATUS.neutral } />
    <Button
      data-testid="button-status-brand-medium"
      emphasis={ BUTTON_EMPHASIS.medium }
      size={ BUTTON_SIZE.sm }
      status={ BUTTON_STATUS.brand } />
    <Button
      data-testid="button-status-neutral-high"
      emphasis={ BUTTON_EMPHASIS.high }
      size={ BUTTON_SIZE.sm }
      status={ BUTTON_STATUS.neutral } />
  </Editable>
);
