import { type FileUploadFileRejectDetails, FileUpload as VendorFileUpload } from '@ark-ui/react/file-upload';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef, useCallback } from 'react';
import { useFormField } from '../../../../form-field/src';
import { FileUploadProvider, type FileUploadRootProp } from '../../contexts/useFileUpload';
import { mapErrorCodes } from '../../controller/file-upload';
import { FileUploadDropzone } from '../file-upload-dropzone/FileUploadDropzone';
import style from './fileUpload.module.scss';

interface FileUploadProp extends ComponentPropsWithRef<'div'>, FileUploadRootProp {}

const FileUpload: FC<FileUploadProp> = forwardRef(({
  accept,
  acceptedFileLabel,
  children,
  className,
  disabled,
  dropzoneLabel = 'Drag & drop a file',
  error,
  id,
  invalid,
  locale,
  maxFile = Infinity,
  maxFileLabel,
  maxSize,
  maxSizeLabel,
  name,
  onFileAccept,
  onFileReject,
  required,
  triggerLabel = 'Browse files',
  ...props
}, ref): JSX.Element => {
  const fieldContext = useFormField();
  const onFileRejection = useCallback(({ files }: FileUploadFileRejectDetails) => {
    if (onFileReject) {
      onFileReject({
        files: files.map(({ errors, file }) => ({ errors: mapErrorCodes(errors), file })),
      });
    }
  }, [onFileReject]);
  const isInvalid = invalid || fieldContext?.invalid;
  const hiddenInputId = id || fieldContext?.id;

  return (
    <FileUploadProvider locale={ locale }>
      <VendorFileUpload.Root
        accept={ accept }
        allowDrop={ true }
        className={ classNames(
          style['file-upload'],
          { [style['file-upload--invalid']]: isInvalid },
          className,
        )}
        directory={ false }
        disabled={ disabled }
        ids={{
          hiddenInput: hiddenInputId,
        }}
        invalid={ isInvalid }
        maxFiles={ maxFile }
        maxFileSize={ maxSize }
        onFileAccept={ onFileAccept }
        onFileReject={ onFileRejection }
        name={ name }
        ref={ ref }
        required={ required }
        { ...props }>
        <VendorFileUpload.Dropzone
          disableClick={ true }
          onDragOver={ (e) => e.preventDefault() }
          onDrop={ (e) => e.preventDefault() }>
          <FileUploadDropzone
            acceptedFileLabel={ acceptedFileLabel }
            dropzoneLabel={ dropzoneLabel }
            error={ error }
            maxFile={ maxFile }
            maxFileLabel={ maxFileLabel }
            maxSize={ maxSize }
            maxSizeLabel={ maxSizeLabel }
            triggerLabel={ triggerLabel } />

          { children }
        </VendorFileUpload.Dropzone>

        <VendorFileUpload.HiddenInput
          aria-invalid={ isInvalid }
          aria-describedby={ props['aria-describedby'] || fieldContext?.ariaDescribedBy }
          id={ hiddenInputId } />
      </VendorFileUpload.Root>
    </FileUploadProvider>
  );
});

FileUpload.displayName = 'FileUpload';

export {
  FileUpload,
  type FileUploadProp,
};
