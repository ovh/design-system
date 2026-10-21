import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { useFormField, useFormFieldId } from '../../../../form-field/src';
import style from './textarea.module.scss';

interface TextareaProp extends ComponentPropsWithRef<'textarea'> {
  /**
   * Whether the component is in error state.
   */
  invalid?: boolean,
}

const Textarea: FC<TextareaProp> = forwardRef(({
  className,
  id,
  invalid,
  ...props
}, ref): JSX.Element => {
  const fieldContext = useFormField();
  const textareaId = id || fieldContext?.id;

  useFormFieldId(textareaId ?? null);

  return (
    <textarea
      aria-invalid={ (invalid || fieldContext?.invalid) }
      aria-describedby={ props['aria-describedby'] || fieldContext?.ariaDescribedBy }
      className={ classNames(style['textarea'], className) }
      data-invalid={ (invalid || fieldContext?.invalid) ? true : undefined }
      data-ods="textarea"
      id={ textareaId }
      ref={ ref }
      { ...props } />
  );
});

Textarea.displayName = 'Textarea';

export {
  Textarea,
  type TextareaProp,
};
