import { FileUpload } from '@ark-ui/react/file-upload';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import style from './fileUploadList.module.scss';

interface FileUploadListProp extends ComponentPropsWithRef<'ul'> {}

const FileUploadList: FC<FileUploadListProp> = forwardRef(({
  children,
  className,
  ...props
}, ref): JSX.Element => {
  return (
    <FileUpload.ItemGroup
      className={ classNames(
        style['file-upload-list'],
        className,
      )}
      data-ods="file-upload-list"
      ref={ ref }
      { ...props }>
      { children }
    </FileUpload.ItemGroup>
  );
});

FileUploadList.displayName = 'FileUploadList';

export {
  FileUploadList,
  type FileUploadListProp,
};
