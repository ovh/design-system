import { Field } from '@ark-ui/react/field';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import style from './odsTextarea.module.scss';

interface OdsTextareaProp extends ComponentPropsWithRef<'textarea'> {
  hasError?: boolean;
}

const OdsTextarea: FC<OdsTextareaProp> = forwardRef(({
  className,
  hasError = false,
  ...props
}, ref): JSX.Element => {
  return (
    <Field.Textarea
      className={ classNames(
        style['ods-textarea'],
        { [style['ods-textarea--error']]: hasError },
        className,
      )}
      ref={ ref }
      { ...props } />
  );
});

OdsTextarea.displayName = 'OdsTextarea';

export {
  OdsTextarea,
  type OdsTextareaProp,
};
