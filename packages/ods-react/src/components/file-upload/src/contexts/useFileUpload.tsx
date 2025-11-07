import { type JSX, type ReactNode, createContext, useContext } from 'react';
import { type Locale } from '../../../../utils/locales';
import { type FILE_REJECTION_CAUSE } from '../constants/file-error';
import { type FileUploadVariant } from '../constants/file-upload-variant';

interface FileUploadAcceptDetail {
  files: File[],
}

interface FileUploadRejectDetail {
  files: {
    errors: FILE_REJECTION_CAUSE[],
    file: File;
  }[],
}

interface FileUploadRootProp {
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
   * The locale used for the translation of the internal elements.
   */
  locale?: Locale,
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
  /**
   * The variant preset to use.
   */
  variant?: FileUploadVariant,
}

type FileUploadContextType = Pick<FileUploadRootProp, 'locale'>

interface FileUploadProviderProp extends FileUploadContextType {
  children: ReactNode,
}

const FileUploadContext = createContext<FileUploadContextType>({});

function FileUploadProvider({ children, locale }: FileUploadProviderProp): JSX.Element {
  return (
    <FileUploadContext.Provider value={{ locale }}>
      { children }
    </FileUploadContext.Provider>
  );
}

function useFileUpload(): FileUploadContextType {
  return useContext(FileUploadContext);
}

export {
  type FileUploadContextType,
  type FileUploadAcceptDetail,
  FileUploadProvider,
  type FileUploadRejectDetail,
  type FileUploadRootProp,
  useFileUpload,
};
