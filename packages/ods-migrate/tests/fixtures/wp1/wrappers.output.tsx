import { BUTTON_STATUS, BUTTON_EMPHASIS, CartAction, EditableCancelTrigger, EditableEditTrigger, EditableSubmitTrigger, PromptInputFileUploadButton, PromptInputSendButton, QueryFilterClear } from '@ovhcloud/ods-react';

export const Wrappers = () => (
  <>
    <CartAction status={ BUTTON_STATUS.brand } emphasis="low">Order</CartAction>
    <EditableCancelTrigger emphasis="high" />
    <EditableEditTrigger status="neutral" emphasis={ BUTTON_EMPHASIS.medium } />
    <EditableSubmitTrigger status="brand" />
    <PromptInputFileUploadButton emphasis={ BUTTON_EMPHASIS.low } />
    <PromptInputSendButton emphasis="medium" />
    <QueryFilterClear status={ BUTTON_STATUS.critical } emphasis="medium">Clear</QueryFilterClear>
  </>
);
