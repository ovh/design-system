import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import style from './progressBar.module.scss';

interface ProgressBarProp extends ComponentPropsWithRef<'progress'> {
  /**
   * The maximum value of the progress bar.
   */
  max?: string | number,
  /**
   * The current value of the progress bar
   */
  value?: string | number,
}

const ProgressBar: FC<ProgressBarProp> = forwardRef(({
  className,
  max = 100,
  value = 0,
  ...props
}, ref): JSX.Element => {
  return (
    <progress
      className={ classNames(style['progress-bar'], className) }
      max={ max }
      ref={ ref }
      value={ value }
      { ...props } />
  );
});

ProgressBar.displayName = 'ProgressBar';

export {
  ProgressBar,
  type ProgressBarProp,
};
