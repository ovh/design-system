import { type FileUploadProp, FileUpload as FileUploadRoot } from './components/file-upload/FileUpload';
import { FileUploadItem, type FileUploadItemProp } from './components/file-upload-item/FileUploadItem';
import { FileUploadList, type FileUploadListProp } from './components/file-upload-list/FileUploadList';

const FileUpload = {
  Item: FileUploadItem,
  List: FileUploadList,
  Root: FileUploadRoot,
};

export { FileUpload };
export type { FileUploadProp, FileUploadItemProp, FileUploadListProp };
export { FILE_REJECTION_CAUSE, FILE_REJECTION_CAUSES, type FileRejectionCause } from './constants/file-error';
export { FILE_UPLOAD_I18N } from './constants/file-upload-i18n';
export { FILE_UPLOAD_VARIANT, FILE_UPLOAD_VARIANTS, type FileUploadVariant } from './constants/file-upload-variant';
export { type FileUploadAcceptDetail, type FileUploadRejectDetail } from './contexts/useFileUpload';
