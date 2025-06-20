import { type FileUploadFileRejectDetails, FileUpload as VendorFileUpload } from '@ark-ui/react/file-upload';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef, useCallback } from 'react';
import { useFormField } from '../../../../form-field/src';
import { type FILE_REJECTION_CAUSE } from '../../constants/file-error';
import { mapErrorCodes } from '../../controller/file-upload';
import { FileUploadDropzone } from '../file-upload-dropzone/FileUploadDropzone';
import style from './fileUpload.module.scss';

interface FileUploadAcceptDetail {
  files: File[],
}

interface FileUploadRejectDetail {
  files: {
    file: File;
    errors: FILE_REJECTION_CAUSE[],
  }[],
}

interface FileUploadProp extends ComponentPropsWithRef<'div'> {
  /**
   * The accepted file types.
   */
  accept?: string,
  /**
   * Label describing the accepted file types.
   */
  acceptedFileLabel?: string,
  /**
   * Whether the component is disabled.
   */
  disabled?: boolean,
  /**
   * The dropzone label.
   */
  dropzoneLabel?: string,
  /**
   * The global error message to display.
   */
  error?: string,
  /**
   * Whether the component is in error state.
   */
  invalid?: boolean,
  /**
   * The maximum number of files that can be selected.
   */
  maxFile?: number,
  /**
   * Label describing the maximum number of files that can be selected.
   */
  maxFileLabel?: string,
  /**
   * The maximum size of selectable files.
   */
  maxSize?: number,
  /**
   * Label describing the maximum size of selectable files.
   */
  maxSizeLabel?: string,
  /**
   * The name of the form element. Useful for form submission.
   */
  name?: string,
  /**
   * Callback fired when a some files have been successfully added.
   */
  onFileAccept?: (detail: FileUploadAcceptDetail) => void,
  /**
   * Callback fired when a some files have been rejected.
   */
  onFileReject?: (detail: FileUploadRejectDetail) => void,
  /**
   * Whether the component is required.
   */
  required?: boolean,
  /**
   * Upload button label.
   */
  triggerLabel?: string,
}

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

  return (
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
      id={ id || fieldContext?.id }
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
        aria-describedby={ props['aria-describedby'] || fieldContext?.ariaDescribedBy } />
    </VendorFileUpload.Root>
  );
});

FileUpload.displayName = 'FileUpload';

export {
  FileUpload,
  type FileUploadAcceptDetail,
  type FileUploadProp,
  type FileUploadRejectDetail,
};
