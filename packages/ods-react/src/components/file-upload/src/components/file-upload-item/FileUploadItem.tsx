import { FileUpload } from '@ark-ui/react/file-upload';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { BUTTON_SIZE, BUTTON_VARIANT, Button } from '../../../../button/src';
import { ICON_NAME, Icon } from '../../../../icon/src';
import { FileUploadItemStatus } from '../file-upload-item-status/FileUploadItemStatus';
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
   * The file upload progress.
   */
  progress?: number,
  /**
   * The label displayed after a successful upload.
   */
  uploadSuccessLabel?: string,
}

const FileUploadItem: FC<FileUploadItemProp> = forwardRef(({
  className,
  error,
  file,
  progress,
  uploadSuccessLabel = 'File uploaded',
  ...props
}, ref): JSX.Element => {
  return (
    <FileUpload.Item
      className={ classNames(style['file-upload-item'], className) }
      file={ file }
      ref={ ref }
      { ...props }>
      <Icon
        className={ style['file-upload-item__icon'] }
        name={ ICON_NAME.file } />

      <FileUpload.ItemName className={ style['file-upload-item__name'] } />

      <FileUpload.ItemSizeText className={ style['file-upload-item__size'] } />

      <FileUpload.ItemDeleteTrigger asChild>
        <Button
          size={ BUTTON_SIZE.sm }
          variant={ BUTTON_VARIANT.ghost }>
          <Icon name={ ICON_NAME.xmark } />
        </Button>
      </FileUpload.ItemDeleteTrigger>

      <FileUploadItemStatus
        className={ style['file-upload-item__status'] }
        error={ error }
        progress={ progress }
        successLabel={ uploadSuccessLabel } />
    </FileUpload.Item>
  );
});

FileUploadItem.displayName = 'FileUploadItem';

export {
  FileUploadItem,
  type FileUploadItemProp,
};
