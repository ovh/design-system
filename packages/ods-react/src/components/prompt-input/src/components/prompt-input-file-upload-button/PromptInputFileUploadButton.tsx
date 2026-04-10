import type { FileUploadRootProps } from '@ark-ui/react/file-upload';
import type { ComponentPropsWithRef } from 'react';
import { FileUpload } from '@ark-ui/react/file-upload';
import { type FC, type JSX, forwardRef } from 'react';
import { Button } from '../../../..//button/src';
import { ICON_NAME, Icon } from '../../../../icon/src';

interface PromptInputFileUploadButtonProp extends ComponentPropsWithRef<'div'>, FileUploadRootProps {}

const PromptInputFileUploadButton: FC<PromptInputFileUploadButtonProp> = forwardRef(
  ({ onFileAccept, onFileReject, ...props }, ref): JSX.Element => {
    return (
      <FileUpload.Root
        data-ods="prompt-input-file-upload-button"
        onFileAccept={onFileAccept}
        onFileReject={onFileReject}
        {...props}
        ref={ref}
      >
        <FileUpload.Trigger asChild>
          <Button size="sm" variant="ghost">
            <Icon name={ICON_NAME.plus} />
          </Button>
        </FileUpload.Trigger>
        <FileUpload.HiddenInput />
      </FileUpload.Root>
    );
  },
);

PromptInputFileUploadButton.displayName = 'PromptInputFileUploadButton';

export { PromptInputFileUploadButton, type PromptInputFileUploadButtonProp };
