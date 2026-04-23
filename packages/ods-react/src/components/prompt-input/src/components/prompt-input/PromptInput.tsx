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
  fileCollection,
  inputValue,
  loading,
  name,
  onFileChange,
  onInputSubmit,
  onValueChange,
  readOnly,
  ...props
}, ref): JSX.Element => {

  return (
    <PromptInputProvider
      defaultValue={ defaultValue }
      disabled={ disabled }
      fileCollection={ fileCollection }
      inputValue={ inputValue }
      loading={ loading }
      name={ name }
      onFileChange={ onFileChange }
      onInputSubmit={ onInputSubmit }
      onValueChange={ onValueChange }
      readOnly={ readOnly }
    >
      <div
        className={ classNames(style['prompt-input'],
          { [style['prompt-input--disabled']]: disabled || loading },
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
