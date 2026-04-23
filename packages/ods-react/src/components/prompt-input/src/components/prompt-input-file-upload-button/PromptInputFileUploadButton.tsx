import { type ChangeEvent, type FC, type JSX, forwardRef, useRef } from 'react';
import { BUTTON_SIZE, BUTTON_VARIANT, Button, type ButtonProp } from '../../../..//button/src';
import { ICON_NAME, Icon } from '../../../../icon/src';
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
    const { disabled, loading, onFileChange } = usePromptInput();
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>): void => {
      const newFiles = Array.from(event.target.files ?? []);
      onFileChange?.({ files: newFiles });
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
          className={className}
          data-ods="prompt-input-file-upload-button"
          size={BUTTON_SIZE.sm}
          variant={BUTTON_VARIANT.ghost}
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
