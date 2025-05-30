import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { FormFieldProvider, type FormFieldRootProp } from '../../contexts/useFormField';
import style from './formField.module.scss';

interface FormFieldProp extends ComponentPropsWithRef<'div'>, FormFieldRootProp {}

const FormField: FC<FormFieldProp> = forwardRef(({
  children,
  className,
  id,
  invalid,
  ...props
}, ref): JSX.Element => {
  return (
    <FormFieldProvider
      id={ id }
      invalid={ invalid }>
      <div
        className={ classNames(style['form-field'], className) }
        ref={ ref }
        role="group"
        { ...props }>
        { children }
      </div>
    </FormFieldProvider>
  );
});

FormField.displayName = 'FormField';

export {
  FormField,
  type FormFieldProp,
};
