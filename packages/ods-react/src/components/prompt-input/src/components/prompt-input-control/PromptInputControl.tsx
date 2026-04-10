import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import style from './promptInputControl.module.scss';

interface PromptInputControlProp extends ComponentPropsWithRef<'div'> {}

const PromptInputControl: FC<PromptInputControlProp> = forwardRef(
  ({ children, className, ...props }, ref): JSX.Element => {
    return (
      <div
        className={classNames(style['prompt-input-control'], className)}
        data-ods="prompt-input-control"
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  },
);

PromptInputControl.displayName = 'PromptInputControl';

export { PromptInputControl, type PromptInputControlProp };
