import classNames from 'classnames';
import { type ComponentPropsWithoutRef, type FC, type JSX } from 'react';
import { ICON_NAME, Icon } from '../../../../icon/src';
import { ProgressBar } from '../../../../progress-bar/src';
import { isUploading } from '../../controller/file-upload';
import style from './fileUploadItemStatus.module.scss';

interface FileUploadItemStatusProp extends ComponentPropsWithoutRef<'div'> {
  error?: string,
  progress?: number,
  progressLabel?: string,
  successLabel: string,
}

function renderStatus(successLabel: string, error?: string, progress?: number, progressLabel?: string): JSX.Element {
  if (error) {
    return (
      <span className={ style['file-upload-item-status__error'] }>
        { error }
      </span>
    );
  }

  if (isUploading(progress)) {
    return (
      <div className={ style['file-upload-item-status__progress'] }>
        <ProgressBar
          aria-label={ progressLabel }
          value={ progress } />

        <span>
          { progress }%
        </span>
      </div>
    );
  }

  if (progress && progress >= 100) {
    return (
      <span className={ style['file-upload-item-status__success'] }>
        <Icon name={ ICON_NAME.check } />&nbsp;{ successLabel }
      </span>
    );
  }

  return <></>;
}

const FileUploadItemStatus: FC<FileUploadItemStatusProp> = ({
  className,
  error,
  progress,
  progressLabel,
  successLabel,
}): JSX.Element => {
  return (
    <div
      className={ classNames(style['file-upload-item-status'], className) }
      role={ error ? 'error' : 'status'}>
      { renderStatus(successLabel, error, progress, progressLabel) }
    </div>
  );
};

FileUploadItemStatus.displayName = 'FileUploadItemStatus';

export {
  FileUploadItemStatus,
  type FileUploadItemStatusProp,
};
