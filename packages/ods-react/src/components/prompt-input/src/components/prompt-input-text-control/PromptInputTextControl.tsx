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

    const { disabled, defaultValue, loading, name, readOnly, required, setInputValue } = usePromptInput();

    return (
      <Textarea
        className={classNames(style['prompt-input-text-control'], className)}
        data-ods="prompt-input-text-control"
        {...props}
        defaultValue={defaultValue}
        disabled={disabled}
        name={name}
        onChange={(event) => {
          if (!supportsFieldSizing) {
            applyScrollHeight(event.target);
          }
          props.onChange?.(event);
          setInputValue(event.target.value);
        }}
        readOnly={readOnly || loading}
        ref={callbackRef}
        required={required}
        rows={1}
      />
    );
  },
);

PromptInputTextControl.displayName = 'PromptInputTextControl';

export { PromptInputTextControl, type PromptInputTextControlProp };
