import { Field } from '@ark-ui/react/field';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import style from './textarea.module.scss';

interface TextareaProp extends ComponentPropsWithRef<'textarea'> {
  invalid?: boolean,
}

const Textarea: FC<TextareaProp> = forwardRef(({
  className,
  invalid,
  ...props
}, ref): JSX.Element => {
  return (
    <Field.Textarea
      className={ classNames(style['textarea'], className) }
      data-invalid={ invalid ? true : undefined }
      ref={ ref }
      { ...props } />
  );
});

Textarea.displayName = 'Textarea';

export {
  Textarea,
  type TextareaProp,
};
