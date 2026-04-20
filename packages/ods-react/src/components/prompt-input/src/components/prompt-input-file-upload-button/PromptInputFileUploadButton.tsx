import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef, useRef } from 'react';
import { Button } from '../../../..//button/src';
import { ICON_NAME, Icon } from '../../../../icon/src';
import { usePromptInput } from '../../contexts/usePromptInput';
import style from './PromptInputFileUploadButton.module.scss';

interface PromptInputFileUploadButtonProp extends ComponentPropsWithRef<'input'> {}

const PromptInputFileUploadButton: FC<PromptInputFileUploadButtonProp> = forwardRef(
  ({ className, ...props }, ref): JSX.Element => {
    const { disabled, fileCollection, loading, setFileCollection } = usePromptInput();
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
      const newFiles = Array.from(event.target.files ?? []);
      event.target.value = '';
      setFileCollection([...fileCollection, ...newFiles]);
    };

    return (
      <>
        <input
          ref={(node) => {
            inputRef.current = node;
            if (typeof ref === 'function') {
              ref(node);
            } else if (ref) {
              ref.current = node;
            }
          }}
          {...props}
          className={style['prompt-input-file-upload-button__input']}
          disabled={disabled || loading}
          aria-hidden
          type="file"
          onChange={handleFileChange}
        />
        <Button
          aria-describedby={props['aria-describedby']}
          aria-label={props['aria-label']}
          className={classNames(style['prompt-input-file-upload-button__button'], className)}
          data-ods="prompt-input-file-upload-button"
          disabled={disabled || loading}
          onClick={() => inputRef.current?.click()}
          size="sm"
          type='button'
          variant="ghost"
        >
          <Icon name={ICON_NAME.paperclip} />
        </Button>
      </>
    );
  },
);

PromptInputFileUploadButton.displayName = 'PromptInputFileUploadButton';

export { PromptInputFileUploadButton, type PromptInputFileUploadButtonProp };
