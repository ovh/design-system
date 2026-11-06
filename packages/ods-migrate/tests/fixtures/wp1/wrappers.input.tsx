import { BUTTON_COLOR, BUTTON_VARIANT, CartAction, EditableCancelTrigger, EditableEditTrigger, EditableSubmitTrigger, PromptInputFileUploadButton, PromptInputSendButton, QueryFilterClear } from '@ovhcloud/ods-react';

export const Wrappers = () => (
  <>
    <CartAction color={ BUTTON_COLOR.primary } variant="ghost">Order</CartAction>
    <EditableCancelTrigger variant="default" />
    <EditableEditTrigger color="neutral" variant={ BUTTON_VARIANT.outline } />
    <EditableSubmitTrigger color="primary" />
    <PromptInputFileUploadButton variant={ BUTTON_VARIANT.ghost } />
    <PromptInputSendButton variant="outline" />
    <QueryFilterClear color={ BUTTON_COLOR.critical } variant="outline">Clear</QueryFilterClear>
  </>
);
