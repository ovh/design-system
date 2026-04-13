import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { PromptInputProvider, type PromptInputRootProp } from '../../contexts/usePromptInput';
import style from './promptInput.module.scss';

interface PromptInputProp extends Omit<ComponentPropsWithRef<'div'>, 'defaultValue'>, PromptInputRootProp {}

const PromptInput: FC<PromptInputProp> = forwardRef(({
  children,
  className,
  defaultValue,
  disabled,
  loading,
  name,
  onInputSubmit,
  onValueChange,
  readOnly,
  required,
  ...props
}, ref): JSX.Element => {

  return (
    <PromptInputProvider
      defaultValue={ defaultValue }
      disabled={ disabled }
      // Will properly handle loading in another commit
      loading={false}
      name={ name }
      onInputSubmit={ onInputSubmit }
      onValueChange={ onValueChange }
      readOnly={ readOnly }
      required={ required }
    >
      <div
        className={ classNames(style['prompt-input'],
          { [style['prompt-input--disabled']]: disabled },
          className) }
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
