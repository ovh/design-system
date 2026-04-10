import { type FC, type JSX, forwardRef } from 'react';
import { BUTTON_SIZE, BUTTON_VARIANT, Button, type ButtonProp } from '../../../../button/src';
import { ICON_NAME, Icon } from '../../../../icon/src';
import { usePromptInput } from '../../contexts/usePromptInput';

interface PromptInputSendButtonProp extends ButtonProp {}

const PromptInputSendButton: FC<PromptInputSendButtonProp> = forwardRef(({ ...props }, ref): JSX.Element => {
  const { loading, inputValue, disabled, onInputSubmit } = usePromptInput();
  const isDisabled = props.disabled !== undefined ? props.disabled : inputValue === '' || disabled;

  return (
    <Button
      data-ods="prompt-input-send-button"
      size={BUTTON_SIZE.sm}
      variant={BUTTON_VARIANT.ghost}
      ref={ref}
      {...props}
      type="button"
      loading={loading}
      disabled={isDisabled}
      onClick={() => onInputSubmit?.(inputValue)}
    >
      <Icon name={ICON_NAME.arrowUp} />
    </Button>
  );
});

PromptInputSendButton.displayName = 'PromptInputSendButton';

export { PromptInputSendButton, type PromptInputSendButtonProp };
