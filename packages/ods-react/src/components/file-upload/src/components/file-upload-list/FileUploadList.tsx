import { FileUpload, useFileUploadContext } from '@ark-ui/react/file-upload';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import style from './fileUploadList.module.scss';

interface FileUploadListProp extends ComponentPropsWithRef<'ul'> {}

const FileUploadList: FC<FileUploadListProp> = forwardRef(({
  children,
  className,
  ...props
}, ref): JSX.Element => {
  const { acceptedFiles } = useFileUploadContext();

  return (
    <FileUpload.ItemGroup
      className={ classNames(
        style['file-upload-list'],
        { [style['file-upload-list--not-empty']]: acceptedFiles.length > 0 },
        className,
      )}
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
