import { Field } from '@ark-ui/react/field';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import style from './textarea.module.scss';

interface TextareaProp extends ComponentPropsWithRef<'textarea'> {}

const Textarea: FC<TextareaProp> = forwardRef(({
  className,
  ...props
}, ref): JSX.Element => {
  return (
    <Field.Textarea
      className={ classNames(style['textarea'], className) }
      ref={ ref }
      { ...props } />
  );
});

Textarea.displayName = 'Textarea';

export {
  Textarea,
  type TextareaProp,
};
