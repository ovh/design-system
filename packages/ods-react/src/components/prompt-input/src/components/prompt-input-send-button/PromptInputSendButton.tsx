import { type FC, type JSX, forwardRef } from 'react';
import { useI18n } from '../../../../../hooks/useI18n';
import { BUTTON_EMPHASIS, BUTTON_SIZE, Button, type ButtonProp } from '../../../../button/src';
import { ICON_NAME, Icon } from '../../../../icon/src';
import { PROMPT_INPUT_I18N, TRANSLATION } from '../../constants/prompt-input-i18n';
import { usePromptInput } from '../../contexts/usePromptInput';

interface PromptInputSendButtonProp extends ButtonProp {}

const PromptInputSendButton: FC<PromptInputSendButtonProp> = forwardRef(({ ...props }, ref): JSX.Element => {
  const {
    disabled,
    inputValue,
    fileCollection,
    i18n,
    loading,
    locale,
    onInputSubmit,
  } = usePromptInput();
  const { translate } = useI18n(TRANSLATION, locale, i18n);
  const isDisabled = disabled || (inputValue.trim() === '' && !fileCollection?.length) || loading;

  return (
    <Button
      aria-label={translate(PROMPT_INPUT_I18N.sendButton)}
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
