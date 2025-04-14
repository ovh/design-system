import { Field } from '@ark-ui/react/field';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import style from './formField.module.scss';

interface FormFieldProp extends ComponentPropsWithRef<'div'> {
  disabled?: boolean;
  invalid?: boolean;
  readOnly?: boolean;
  required?: boolean;
}

const FormField: FC<FormFieldProp> = forwardRef(({
  children,
  className,
  disabled,
  invalid,
  readOnly,
  required,
  ...props
}, ref): JSX.Element => {
  return (
    <Field.Root
      className={ classNames(style['form-field'], className) }
      disabled={ disabled }
      invalid={ invalid }
      readOnly={ readOnly }
      required={ required }
      ref={ ref }
      { ...props }>
      { children }
    </Field.Root>
  );
});

FormField.displayName = 'FormField';

export {
  FormField,
  type FormFieldProp,
};
