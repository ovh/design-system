import { formatBytes } from '@zag-js/i18n-utils';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef, useMemo, useState } from 'react';
import { useI18n } from '../../../../../hooks/useI18n';
import { type Locale } from '../../../../../utils/locales';
import { BUTTON_COLOR, BUTTON_SIZE, BUTTON_VARIANT, Button } from '../../../../button/src';
import { ICON_NAME, Icon } from '../../../../icon/src';
import { ProgressBar } from '../../../../progress-bar/src';
import { TEXT_PRESET, Text } from '../../../../text/src';
import { FILE_THUMBNAIL_I18N, TRANSLATION_FILE } from '../../constants/file-thumbnail-i18n';
import { isImage, isUploading } from '../../controller/file-thumbnail';
import style from './fileThumbnail.module.scss';

interface FileThumbnailRemoveDetail {
  file: File,
}

interface FileThumbnailProp extends ComponentPropsWithRef<'div'> {
  /**
   * Whether the component is disabled.
   */
  disabled?: boolean,
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
  i18n?: Partial<Record<FILE_THUMBNAIL_I18N, string>>,
  /**
   * The locale used for size formatting and the translation of the internal elements.
   */
  locale?: Locale,
  /**
   * Callback fired when the file is removed.
   */
  onFileRemove?: (detail: FileThumbnailRemoveDetail) => void,
  /**
   * The file upload progress.
   */
  progress?: number,
}

const FileThumbnail: FC<FileThumbnailProp> = forwardRef(({
  className,
  disabled,
  error,
  file,
  i18n,
  locale,
  onFileRemove,
  progress,
  ...props
}, ref): JSX.Element => {
  const { translate } = useI18n(TRANSLATION_FILE, locale, i18n);
  const [imageError, setImageError] = useState(false);
  const preview = useMemo(() => {
    if (isImage(file.name)) {
      try {
        return URL.createObjectURL(file);
      } catch {
        setImageError(true);
      }
    }
  }, [file]);
  const isInProgress = isUploading(progress);

  return (
    <div
      className={ classNames(
        style['file-thumbnail'],
        { [ style[ 'file-thumbnail--disabled' ] ]: disabled },
        { [ style[ 'file-thumbnail--error' ] ]: !!error },
        className,
      )}
      data-ods="file-thumbnail"
      ref={ ref }
      { ...props }>
      {
        (preview && !imageError)
          ? <img
            alt={ file.name }
            className={ style['file-thumbnail__preview'] }
            height={ 32 }
            onError={ () => setImageError(true) }
            src={ preview }
            width={ 32 } />
          : <Icon
            className={ classNames(
              style['file-thumbnail__icon'],
              { [ style[ 'file-thumbnail__icon--error' ] ]: !!error },
            )}
            name={ error ? ICON_NAME.circleXmark : ICON_NAME.file } />
      }

      <div className={ style['file-thumbnail__file'] }>
        <Text
          as="span"
          className={ style['file-thumbnail__file__name'] }
          disabled={ disabled }
          preset={ TEXT_PRESET.small }
          title={ file.name }>
          { file.name }
        </Text>

        {
          !error && (isInProgress
            ? <div
              className={ style['file-thumbnail__file__progress'] }
              role="status">
              <ProgressBar
                aria-label={ `${translate(FILE_THUMBNAIL_I18N.progressBar)} - ${progress}%` }
                max={ 100 }
                value={ progress }/>
              <Text preset={ TEXT_PRESET.caption }>
                {/* zero-width space to simulate the correct baseline */}
                &#8203;
              </Text>
            </div>
            : <Text
              className={ classNames(
                style['file-thumbnail__file__size'],
                { [ style[ 'file-thumbnail__file__size--disabled' ] ]: disabled },
              )}
              disabled={ disabled }
              preset={ TEXT_PRESET.caption }>
              { formatBytes(file.size, locale) }
            </Text>)
        }

        {
          !!error &&
          <span
            className={ style['file-thumbnail__file__error'] }
            role="alert">
            { error }
          </span>
        }
      </div>

      <Button
        aria-label={ isInProgress ? translate(FILE_THUMBNAIL_I18N.cancelButton) : translate(FILE_THUMBNAIL_I18N.deleteButton) }
        className={ style['file-thumbnail__delete'] }
        color={ BUTTON_COLOR.neutral }
        disabled={ disabled }
        onClick={ () => onFileRemove?.({ file }) }
        size={ BUTTON_SIZE.xs }
        variant={ BUTTON_VARIANT.ghost }>
        <Icon name={ ICON_NAME.xmark } />
      </Button>
    </div>
  );
});

FileThumbnail.displayName = 'FileThumbnail';

export {
  FileThumbnail,
  type FileThumbnailProp,
  type FileThumbnailRemoveDetail,
};
