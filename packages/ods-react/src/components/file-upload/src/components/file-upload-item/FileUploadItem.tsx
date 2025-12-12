import { FileUpload } from '@ark-ui/react/file-upload';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { useI18n } from '../../../../../hooks/useI18n';
import { BUTTON_SIZE, BUTTON_VARIANT, Button } from '../../../../button/src';
import { ICON_NAME, Icon } from '../../../../icon/src';
import { SPINNER_SIZE, Spinner } from '../../../../spinner/src';
import { FILE_UPLOAD_I18N, TRANSLATION_FILE } from '../../constants/file-upload-i18n';
import { useFileUpload } from '../../contexts/useFileUpload';
import { isUploading } from '../../controller/file-upload';
import style from './fileUploadItem.module.scss';

interface FileUploadItemProp extends ComponentPropsWithRef<'li'> {
  /**
   * The file error message to display.
   */
  error?: string,
  /**
   * The current File object.
   */
  file: File,
  /**
   * Internal translations override.
   */
  i18n?: Partial<Record<FILE_UPLOAD_I18N, string>>,
  /**
   * The file upload progress.
   */
  progress?: number,
  /**
   * @deprecated
   * The label displayed after a successful upload.
   * DEPRECATED: Latest design change removed the upload success label in favor of a visual icon update.
   */
  uploadSuccessLabel?: string,
}

const FileUploadItem: FC<FileUploadItemProp> = forwardRef(({
  className,
  error,
  file,
  i18n,
  progress,
  ...props
}, ref): JSX.Element => {
  const { locale } = useFileUpload();
  const { translate } = useI18n(TRANSLATION_FILE, locale, i18n);
  const isInProgress = isUploading(progress);

  return (
    <FileUpload.Item
      className={ classNames(style['file-upload-item'], className) }
      data-ods="file-upload-item"
      file={ file }
      ref={ ref }
      { ...props }>
      {
        isInProgress
          ? <span role="status">
            <Spinner
              aria-label={ translate(FILE_UPLOAD_I18N.progressBar) }
              size={ SPINNER_SIZE.sm } />
          </span>
          : <Icon
            className={ classNames(
              style['file-upload-item__icon'],
              { [style['file-upload-item__icon--error']]: !!error },
            )}
            name={ error ? ICON_NAME.circleXmark : ICON_NAME.file } />
      }

      <div className={ style['file-upload-item__info'] }>
        <FileUpload.ItemName className={ classNames(
          style['file-upload-item__info__name'],
          { [style['file-upload-item__info__name--error']]: !!error },
        )} />

        {
          isInProgress
            ? <span className={ style['file-upload-item__info__size'] }>{ progress }%</span>
            : <FileUpload.ItemSizeText className={ style['file-upload-item__info__size'] } />
        }
      </div>

      <FileUpload.ItemDeleteTrigger asChild>
        <Button
          aria-label={ isInProgress ? translate(FILE_UPLOAD_I18N.cancelButton) : translate(FILE_UPLOAD_I18N.deleteButton) }
          className={ style['file-upload-item__delete'] }
          size={ BUTTON_SIZE.xs }
          variant={ BUTTON_VARIANT.ghost }>
          <Icon name={ ICON_NAME.xmark } />
        </Button>
      </FileUpload.ItemDeleteTrigger>

      {
        !!error &&
        <span
          className={ style['file-upload-item__error'] }
          role="alert">
          { error }
        </span>
      }
    </FileUpload.Item>
  );
});

FileUploadItem.displayName = 'FileUploadItem';

export {
  FileUploadItem,
  type FileUploadItemProp,
};
