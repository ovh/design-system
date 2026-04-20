import classNames from 'classnames';
import { type FC, type JSX, type MutableRefObject, type RefCallback, forwardRef, useCallback } from 'react';
import { Textarea, type TextareaProp } from '../../../../textarea/src';
import { usePromptInput } from '../../contexts/usePromptInput';
import style from './PromptInputTextControl.module.scss';

interface PromptInputTextControlProp extends TextareaProp {
  placeholder?: string;
}

const supportsFieldSizing = CSS.supports('field-sizing', 'content');

function applyScrollHeight(el: HTMLTextAreaElement): void {
  el.style.setProperty('--explicit-height', 'unset');
  el.style.setProperty('--explicit-height', `${el.scrollHeight}px`);
}

const PromptInputTextControl: FC<PromptInputTextControlProp> = forwardRef(
  ({ className, placeholder, ...props }, ref): JSX.Element => {
    const {
      defaultValue,
      disabled,
      inputValue,
      loading,
      name,
      onValueChange,
      onInputSubmit,
      readOnly,
      setInputValue,
    } = usePromptInput();

    const callbackRef: RefCallback<HTMLTextAreaElement> = useCallback(
      (node) => {
        if (node && !supportsFieldSizing) {
          applyScrollHeight(node);
        }

        if (ref) {
          if (typeof ref === 'function') {
            return (ref as RefCallback<HTMLTextAreaElement>)(node);
          }
          return ((ref as MutableRefObject<HTMLTextAreaElement | null>).current = node);
        }
      },
      [ref],
    );
    const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>): void => {
      if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        if (!disabled && inputValue.trim() !== '') {
          onInputSubmit?.({ inputValue: event.currentTarget.value });
        }
      }
    };

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
      if (!supportsFieldSizing) {
        applyScrollHeight(event.target);
      }
      onValueChange?.({ inputValue: event.currentTarget.value });

      setInputValue(event.target.value);
    };

    return (
      <Textarea
        className={classNames(style['prompt-input-text-control'], className)}
        data-ods="prompt-input-text-control"
        rows={1}
        {...props}
        placeholder={placeholder}
        defaultValue={defaultValue}
        disabled={disabled || loading}
        name={name}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        readOnly={readOnly}
        ref={callbackRef}
      />
    );
  },
);

PromptInputTextControl.displayName = 'PromptInputTextControl';

export { PromptInputTextControl, type PromptInputTextControlProp };
