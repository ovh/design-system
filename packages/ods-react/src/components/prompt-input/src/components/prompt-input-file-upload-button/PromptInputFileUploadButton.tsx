import { type ChangeEvent, type FC, type JSX, forwardRef, useRef } from 'react';
import { useI18n } from '../../../../../hooks/useI18n';
import { BUTTON_EMPHASIS, BUTTON_SIZE, Button, type ButtonProp } from '../../../../button/src';
import { ICON_NAME, Icon } from '../../../../icon/src';
import { PROMPT_INPUT_I18N, TRANSLATION } from '../../constants/prompt-input-i18n';
import { usePromptInput } from '../../contexts/usePromptInput';
import style from './PromptInputFileUploadButton.module.scss';

interface PromptInputFileUploadButtonProp extends ButtonProp {
  /**
   * Expected file type in file upload controls
   */
  accept?: HTMLInputElement['accept'];
  /**
   * Whether multiple files can be selected at once
   */
  multiple?: HTMLInputElement['multiple'];
}

const PromptInputFileUploadButton: FC<PromptInputFileUploadButtonProp> = forwardRef(
  ({ accept, className, multiple, ...props }, ref): JSX.Element => {
    const { disabled, i18n, loading, locale, onFileChange } = usePromptInput();
    const { translate } = useI18n(TRANSLATION, locale, i18n);
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>): void => {
      const newFiles = Array.from(event.target.files ?? []);
      onFileChange?.({ files: newFiles });
      /* Reset the input value to allow uploading the same file(s) again (Blink/WebKit). */
      event.target.value = '';
    };

    return (
      <>
        <input
          accept={accept}
          aria-hidden
          className={style['prompt-input-file-upload-button__input']}
          disabled={disabled || loading || props.disabled}
          multiple={multiple}
          onChange={handleFileChange}
          ref={inputRef}
          type="file"
        />
        <Button
          aria-label={translate(PROMPT_INPUT_I18N.fileUploadButton)}
          className={className}
          data-ods="prompt-input-file-upload-button"
          emphasis={ BUTTON_EMPHASIS.low }
          size={BUTTON_SIZE.sm}
          {...props}
          disabled={disabled || loading || props.disabled}
          onClick={() => inputRef.current?.click()}
          ref={ref}
          type='button'
        >
          <Icon name={ICON_NAME.paperclip} />
        </Button>
      </>
    );
  },
);

PromptInputFileUploadButton.displayName = 'PromptInputFileUploadButton';

export { PromptInputFileUploadButton, type PromptInputFileUploadButtonProp };
