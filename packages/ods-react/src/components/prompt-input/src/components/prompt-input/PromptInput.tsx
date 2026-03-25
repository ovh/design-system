import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import style from './promptInput.module.scss';

interface PromptInputProp extends ComponentPropsWithRef<'div'> {
  // ...
}

const PromptInput: FC<PromptInputProp> = forwardRef(({
  className,
  ...props
}, ref): JSX.Element => {
  return (
    <div
      className={ classNames(style['prompt-input'], className) }
      data-ods="prompt-input"
      ref={ ref }
      { ...props }>
    </div>
  );
});

PromptInput.displayName = 'PromptInput';

export {
  PromptInput,
  type PromptInputProp,
};
