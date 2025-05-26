import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { withFormField } from '../../../../form-field/src';
import style from './textarea.module.scss';

interface TextareaProp extends ComponentPropsWithRef<'textarea'> {
  invalid?: boolean,
}

const Textarea: FC<TextareaProp> = withFormField(forwardRef(({
  className,
  invalid,
  ...props
}, ref): JSX.Element => {
  return (
    <textarea
      className={ classNames(style['textarea'], className) }
      data-invalid={ invalid ? true : undefined }
      ref={ ref }
      { ...props } />
  );
}));

Textarea.displayName = 'Textarea';

export {
  Textarea,
  type TextareaProp,
};
