import { Field } from '@ark-ui/react/field';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';

interface OdsFormFieldHelperProp extends ComponentPropsWithRef<'span'> {}

const OdsFormFieldHelper: FC<OdsFormFieldHelperProp> = forwardRef(({
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

OdsFormFieldHelper.displayName = 'OdsFormFieldHelper';

export {
  OdsFormFieldHelper,
  type OdsFormFieldHelperProp,
};
