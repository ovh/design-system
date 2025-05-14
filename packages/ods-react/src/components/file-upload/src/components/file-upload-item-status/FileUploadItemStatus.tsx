import classNames from 'classnames';
import { type ComponentPropsWithoutRef, type FC, type JSX } from 'react';
import { ICON_NAME, Icon } from '../../../../icon/src';
import { ProgressBar } from '../../../../progress-bar/src';
import style from './fileUploadItemStatus.module.scss';

interface FileUploadItemStatusProp extends ComponentPropsWithoutRef<'div'> {
  error?: string,
  progress?: number,
  successLabel: string,
}

function renderStatus(successLabel: string, error?: string, progress?: number): JSX.Element {
  if (error) {
    return (
      <span className={ style['file-upload-item-status__error'] }>
        { error }
      </span>
    );
  }

  if ((progress || progress === 0) && progress < 100) {
    return (
      <div className={ style['file-upload-item-status__progress'] }>
        <ProgressBar value={ progress } />

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
  successLabel,
}): JSX.Element => {
  return (
    <div className={ classNames(style['file-upload-item-status'], className) }>
      { renderStatus(successLabel, error, progress) }
    </div>
  );
};

FileUploadItemStatus.displayName = 'FileUploadItemStatus';

export {
  FileUploadItemStatus,
  type FileUploadItemStatusProp,
};
