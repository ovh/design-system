import { Field } from '@ark-ui/react/field';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';

interface FormFieldHelperProp extends ComponentPropsWithRef<'span'> {}

const FormFieldHelper: FC<FormFieldHelperProp> = forwardRef(({
  children,
  className,
  ...props
}, ref): JSX.Element => {
  return (
    <Field.HelperText
      className={ className }
      ref={ ref }
      { ...props }>
      { children }
    </Field.HelperText>
  );
});

FormFieldHelper.displayName = 'FormFieldHelper';

export {
  FormFieldHelper,
  type FormFieldHelperProp,
};
