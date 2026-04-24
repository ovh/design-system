import classNames from 'classnames';
import { Children, type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import style from './promptInputFiles.module.scss';

interface PromptInputFilesProp extends ComponentPropsWithRef<'div'> {}

const PromptInputFiles: FC<PromptInputFilesProp> = forwardRef(({ children, className, ...props }, ref): JSX.Element => {
  if (!Children.count(children)) {
    return <></>;
  }

  return (
    <div
      className={ classNames(style['prompt-input-files'], className) }
      data-ods="prompt-input-files"
      ref={ref}
      {...props}
    >
      {children}
    </div>
  );
});

PromptInputFiles.displayName = 'PromptInputFiles';

export {
  PromptInputFiles,
  type PromptInputFilesProp,
};
