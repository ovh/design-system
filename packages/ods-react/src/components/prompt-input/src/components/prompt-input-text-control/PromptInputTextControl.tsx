import classNames from 'classnames';
import { type FC, type JSX, type MutableRefObject, type RefCallback, forwardRef, useCallback } from 'react';
import { Textarea, type TextareaProp } from '../../../../textarea/src';
import { usePromptInput } from '../../contexts/usePromptInput';
import style from './PromptInputTextControl.module.scss';

interface PromptInputTextControlProp extends Omit<TextareaProp, 'rows'> {}

const supportsFieldSizing = CSS.supports('field-sizing', 'content');

function applyScrollHeight(el: HTMLTextAreaElement): void {
  el.style.setProperty('--explicit-height', 'unset');
  el.style.setProperty('--explicit-height', `${el.scrollHeight}px`);
}

const PromptInputTextControl: FC<PromptInputTextControlProp> = forwardRef(
  ({ className, ...props }, ref): JSX.Element => {
    const {
      defaultValue,
      disabled,
      inputValue,
      name,
      onInputSubmit,
      readOnly,
      required,
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
          onInputSubmit?.(event.currentTarget.value);
        }
      }
    };

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
      if (!supportsFieldSizing) {
        applyScrollHeight(event.target);
      }
      props.onChange?.(event);

      setInputValue(event.target.value);
    };

    return (
      <Textarea
        className={classNames(style['prompt-input-text-control'], className)}
        data-ods="prompt-input-text-control"
        {...props}
        defaultValue={defaultValue}
        disabled={disabled}
        name={name}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        readOnly={readOnly}
        ref={callbackRef}
        required={required}
        rows={1}
      />
    );
  },
);

PromptInputTextControl.displayName = 'PromptInputTextControl';

export { PromptInputTextControl, type PromptInputTextControlProp };
