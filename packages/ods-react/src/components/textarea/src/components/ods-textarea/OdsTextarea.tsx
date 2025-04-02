import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import style from './odsTextarea.module.scss';
import { Field } from '@ark-ui/react/field'

interface OdsTextareaProp extends Omit<ComponentPropsWithRef<'textarea'>, 'className'> {
  className?: string;
  hasError?: boolean;
  isResizable?: boolean;
}

const OdsTextarea: FC<OdsTextareaProp> = forwardRef(({
  className,
  hasError = false,
  isResizable = false,
  ...props
}, ref): JSX.Element => {
  return (
    <div className={ classNames(style['ods-textarea'], className) }>
       <Field.Textarea 
          className={ classNames(style['ods-textarea__textarea'], {
            [style['ods-textarea__textarea--error']]: hasError,
            [style['ods-textarea__textarea--resizable']]: isResizable
          }) }
          ref={ ref }
          { ...props }
        />
     </div>
  );
});

export {
  OdsTextarea,
  type OdsTextareaProp,
};
