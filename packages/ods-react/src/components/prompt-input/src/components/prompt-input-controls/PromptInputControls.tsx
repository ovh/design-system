import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import style from './promptInputControls.module.scss';

interface PromptInputControlsProp extends ComponentPropsWithRef<'div'> {}

const PromptInputControls: FC<PromptInputControlsProp> = forwardRef(
  ({ children, className, ...props }, ref): JSX.Element => {
    return (
      <div
        className={classNames(style['prompt-input-controls'], className)}
        data-ods="prompt-input-controls"
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  },
);

PromptInputControls.displayName = 'PromptInputControls';

export { PromptInputControls, type PromptInputControlsProp };
