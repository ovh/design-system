import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import style from './odsFormField.module.scss';
import { Fieldset } from '@ark-ui/react';

interface OdsFormFieldProp extends ComponentPropsWithRef<'fieldset'> {
  children: React.ReactNode;
  errorText?: string;
  helperText?: string;
  legend?: string;
}

const OdsFormField: FC<OdsFormFieldProp> = forwardRef(({
  className,
  children,
  legend,
  helperText,
  errorText,
  ...props
}, ref): JSX.Element => {
  return (
    <Fieldset.Root 
      {...props} 
      ref={ref}
      className={classNames(style['ods-form'], className)}
    >
      {legend
       && 
      <Fieldset.Legend>{legend}</Fieldset.Legend>}
      {helperText && <Fieldset.HelperText>{helperText}</Fieldset.HelperText>}
      {errorText && <Fieldset.ErrorText>{errorText}</Fieldset.ErrorText>}
      {children}
    </Fieldset.Root>
  );
});

export {
  OdsFormField,
  type OdsFormFieldProp,
};
