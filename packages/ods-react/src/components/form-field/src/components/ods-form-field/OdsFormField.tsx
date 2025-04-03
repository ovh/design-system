import { Field } from '@ark-ui/react/field';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import style from './odsFormField.module.scss';

interface OdsFormFieldProp extends ComponentPropsWithRef<'div'> {
  disabled?: boolean;
  invalid?: boolean;
  readOnly?: boolean;
  required?: boolean;
}

const OdsFormField: FC<OdsFormFieldProp> = forwardRef(({
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
      className={ classNames(style['ods-form-field'], className) }
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

OdsFormField.displayName = 'OdsFormField';

export {
  OdsFormField,
  type OdsFormFieldProp,
};
