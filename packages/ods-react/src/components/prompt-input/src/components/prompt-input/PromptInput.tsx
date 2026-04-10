import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { PromptInputProvider, type PromptInputRootProp } from '../../contexts/usePromptInput';
import style from './promptInput.module.scss';

interface PromptInputProp extends Omit<ComponentPropsWithRef<'div'>, 'defaultValue'>, PromptInputRootProp {}

const PromptInput: FC<PromptInputProp> = forwardRef(({
  className,
  disabled,
  defaultValue,
  children,
  loading,
  required,
  readOnly,
  name,
  onInputSubmit,
  onValueChange,
  ...props
}, ref): JSX.Element => {

  return (
    <PromptInputProvider
      defaultValue={ defaultValue }
      disabled={ disabled }
      name={ name }
      required={ required }
      readOnly={ readOnly }
      loading={ loading }
      onInputSubmit={ onInputSubmit }
      onValueChange={ onValueChange }
    >
      <div
        className={ classNames(style['prompt-input'], className) }
        data-ods="prompt-input"
        ref={ ref }
        { ...props }
      >
        {children}
      </div>
    </PromptInputProvider>
  );
});

PromptInput.displayName = 'PromptInput';

export {
  PromptInput,
  type PromptInputProp,
};
