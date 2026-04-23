import classNames from 'classnames';
import {
  type ChangeEvent,
  type FC,
  type JSX,
  type KeyboardEvent,
  forwardRef,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
} from 'react';
import { Textarea, type TextareaProp } from '../../../../textarea/src';
import { usePromptInput } from '../../contexts/usePromptInput';
import style from './PromptInputTextControl.module.scss';

interface PromptInputTextControlProp extends TextareaProp {
  placeholder?: string;
}

const supportsFieldSizing = CSS.supports('field-sizing', 'content');

function applyScrollHeight(el: HTMLTextAreaElement): void {
  // Reset to 'unset' first so the browser recomputes scrollHeight without being constrained by the previously set height…
  el.style.setProperty('--explicit-height', 'unset');
  // …then apply the fresh value.
  el.style.setProperty('--explicit-height', `${el.scrollHeight}px`);
}

const PromptInputTextControl: FC<PromptInputTextControlProp> = forwardRef(
  ({ className, placeholder, ...props }, ref): JSX.Element => {
    const {
      disabled,
      inputValue,
      loading,
      name,
      onValueChange,
      onInputSubmit,
      readOnly,
      setInputValue,
    } = usePromptInput();

    const internalRef = useRef<HTMLTextAreaElement>(null);

    useImperativeHandle(ref, () => internalRef.current!);

    useLayoutEffect(() => {
      if (!supportsFieldSizing) {
        applyScrollHeight(internalRef.current!);
      }
    }, []);

    const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>): void => {
      if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        if (!disabled && inputValue.trim() !== '') {
          onInputSubmit?.({ inputValue: event.currentTarget.value });
        }
      }
    };

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
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
        value={inputValue}
        disabled={disabled || loading}
        name={name}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        readOnly={readOnly}
        ref={internalRef}
      />
    );
  },
);

PromptInputTextControl.displayName = 'PromptInputTextControl';

export { PromptInputTextControl, type PromptInputTextControlProp };
