import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { FileThumbnail }from '../../../../../../src/components/file-thumbnail/src/components/file-thumbnail/FileThumbnail';
import style from './promptInputFiles.module.scss';

interface PromptInputFilesProp extends ComponentPropsWithRef<'div'> {
  files: File[],
  /**
   * Whether the component is in loading state.
   */
  loading?: boolean,
}

const PromptInputFiles: FC<PromptInputFilesProp> = forwardRef(({
  className,
  files,
  loading,
  ...props
}, ref): JSX.Element => {

  return (
    files?.length ? <div
      className={ classNames(style['prompt-input__files'], className) }
      data-ods="prompt-input-files"
      ref={ref}
      {...props}
    >
      {files.map((file, index) => (
        <FileThumbnail file={file} key={index} className={style['prompt-input__file']} />
      ))}
    </div> : <></>
  );
});

PromptInputFiles.displayName = 'PromptInputFiles';

export {
  PromptInputFiles,
  type PromptInputFilesProp,
};
