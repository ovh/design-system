import { FileUpload, useFileUploadContext } from '@ark-ui/react/file-upload';
import classNames from 'classnames';
import { type FC, type JSX, useId, useMemo } from 'react';
import { BUTTON_SIZE, BUTTON_VARIANT, Button } from '../../../../button/src';
import { Divider } from '../../../../divider/src';
import { ICON_NAME, Icon } from '../../../../icon/src';
import style from './fileUploadDropzone.module.scss';

interface FileUploadDropzoneProp {
  acceptedFileLabel?: string,
  dropzoneLabel: string,
  error?: string,
  maxFile?: number,
  maxFileLabel?: string,
  maxSize?: number,
  maxSizeLabel?: string,
  triggerLabel: string,
}

const FileUploadDropzone: FC<FileUploadDropzoneProp> = ({
  acceptedFileLabel,
  dropzoneLabel,
  error,
  maxFile,
  maxFileLabel,
  maxSize,
  maxSizeLabel,
  triggerLabel,
}): JSX.Element => {
  const ruleBlockId = useId();
  const { acceptedFiles, disabled, dragging, getFileSize } = useFileUploadContext();
  const hasRule = useMemo(() => !!acceptedFileLabel || !!maxFileLabel || !!maxSizeLabel, [acceptedFileLabel, maxFileLabel, maxSizeLabel]);

  return (
    <div className={ classNames(
      style['file-upload-dropzone'],
      { [style['file-upload-dropzone--disabled']]: disabled },
      { [style['file-upload-dropzone--dragging']]: dragging },
      { [style['file-upload-dropzone--empty']]: !acceptedFiles.length },
    )}>
      <Icon
        className={ style['file-upload-dropzone__icon'] }
        name={ ICON_NAME.filePlus } />

      <span>
        { dropzoneLabel }
      </span>

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

      <FileUpload.Trigger asChild>
        <Button
          aria-describedby={ hasRule ? ruleBlockId : '' }
          size={ BUTTON_SIZE.md }
          variant={ BUTTON_VARIANT.ghost }>
          { triggerLabel }
        </Button>
      </FileUpload.Trigger>

      {
        !!error &&
        <div className={ style['file-upload-dropzone__error'] }>
          <span role="alert">
            { error }
          </span>

          <Divider className={ style['file-upload-dropzone__error__divider'] } />
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
