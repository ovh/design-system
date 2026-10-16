import { type FC, type JSX, forwardRef } from 'react';
import { BUTTON_EMPHASIS, BUTTON_SIZE, Button, type ButtonProp } from '../../../../button/src';
import { ICON_NAME, Icon } from '../../../../icon/src';
import { usePromptInput } from '../../contexts/usePromptInput';

interface PromptInputSendButtonProp extends ButtonProp {}

const PromptInputSendButton: FC<PromptInputSendButtonProp> = forwardRef(({ ...props }, ref): JSX.Element => {
  const {
    disabled,
    inputValue,
    fileCollection,
    loading,
    onInputSubmit,
  } = usePromptInput();
  const isDisabled = disabled || (inputValue.trim() === '' && !fileCollection?.length) || loading;

  return (
    <Button
      data-ods="prompt-input-send-button"
      emphasis={ BUTTON_EMPHASIS.low }
      size={BUTTON_SIZE.sm}
      ref={ref}
      {...props}
      disabled={ isDisabled }
      loading={ loading }
      onClick={() => onInputSubmit?.({ inputValue })}
      type="button"
    >
      <Icon name={ICON_NAME.arrowUp} />
    </Button>
  );
});

PromptInputSendButton.displayName = 'PromptInputSendButton';

export { PromptInputSendButton, type PromptInputSendButtonProp };
