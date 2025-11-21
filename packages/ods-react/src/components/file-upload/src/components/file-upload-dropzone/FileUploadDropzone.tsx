import { FileUpload, useFileUploadContext } from '@ark-ui/react/file-upload';
import classNames from 'classnames';
import { type FC, type JSX, useId, useMemo } from 'react';
import { BUTTON_SIZE, BUTTON_VARIANT, Button } from '../../../../button/src';
import { ICON_NAME, Icon } from '../../../../icon/src';
import { FILE_UPLOAD_VARIANT, type FileUploadVariant } from '../../constants/file-upload-variant';
import style from './fileUploadDropzone.module.scss';

interface FileUploadDropzoneProp {
  acceptedFileLabel?: string,
  dropzoneLabel: string,
  error?: string,
  invalid?: boolean,
  maxFile?: number,
  maxFileLabel?: string,
  maxSize?: number,
  maxSizeLabel?: string,
  triggerLabel: string,
  variant: FileUploadVariant,
}

const FileUploadDropzone: FC<FileUploadDropzoneProp> = ({
  acceptedFileLabel,
  dropzoneLabel,
  error,
  invalid,
  maxFile,
  maxFileLabel,
  maxSize,
  maxSizeLabel,
  triggerLabel,
  variant,
}): JSX.Element => {
  const ruleBlockId = useId();
  const { disabled, dragging, getFileSize } = useFileUploadContext();
  const hasRule = useMemo(() => !!acceptedFileLabel || !!maxFileLabel || !!maxSizeLabel, [acceptedFileLabel, maxFileLabel, maxSizeLabel]);
  const isCompact = variant === FILE_UPLOAD_VARIANT.compact;

  return (
    <div className={ classNames(
      style['file-upload-dropzone'],
      { [style['file-upload-dropzone--compact']]: isCompact },
      { [style['file-upload-dropzone--dragging']]: dragging },
      { [style['file-upload-dropzone--disabled']]: disabled },
      { [style['file-upload-dropzone--invalid']]: invalid },
    )}>
      <div className={ classNames(
        style['file-upload-dropzone__main'],
        { [style['file-upload-dropzone__main--compact']]: isCompact },
      )}>
        {
          !isCompact &&
          <Icon
            className={ style['file-upload-dropzone__main__icon'] }
            name={ ICON_NAME.filePlus } />
        }

        <span>
          { dropzoneLabel }
        </span>

        <FileUpload.Trigger asChild>
          <Button
            aria-describedby={ hasRule ? ruleBlockId : '' }
            size={ BUTTON_SIZE.md }
            variant={ BUTTON_VARIANT.ghost }>
            <Icon name={ ICON_NAME.upload } /> { triggerLabel }
          </Button>
        </FileUpload.Trigger>
      </div>

      {
        hasRule &&
        <div
          className={ style['file-upload-dropzone__rules'] }
          id={ ruleBlockId }>
          {
            maxFileLabel && typeof maxFile === 'number' && maxFile >= 0 &&
            <span>
              { maxFileLabel }&nbsp;{ maxFile }
            </span>
          }

          {
            maxSizeLabel && typeof maxSize === 'number' && maxSize >= 0 &&
            <span>
              { maxSizeLabel }&nbsp;{ getFileSize({ size: maxSize } as File) }
            </span>
          }

          {
            acceptedFileLabel &&
            <span>
              { acceptedFileLabel }
            </span>
          }
        </div>
      }

      {
        !!error &&
        <div className={ style['file-upload-dropzone__error'] }>
          <span role="alert">
            { error }
          </span>
        </div>
      }
    </div>
  );
};

FileUploadDropzone.displayName = 'FileUploadDropzone';

export {
  FileUploadDropzone,
  type FileUploadDropzoneProp,
};
