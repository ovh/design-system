import { Field } from '@ark-ui/react/field';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import style from './formFieldLabel.module.scss';

interface FormFieldLabelProp extends ComponentPropsWithRef<'label'> {}

const FormFieldLabel: FC<FormFieldLabelProp> = forwardRef(({
  children,
  className,
  ...props
}, ref): JSX.Element => {
  return (
    <Field.Label
      className={ classNames(style['form-field-label'], className) }
      ref={ ref }
      { ...props }>
      { children }
    </Field.Label>
  );
});

FormFieldLabel.displayName = 'FormFieldLabel';

export {
  FormFieldLabel,
  type FormFieldLabelProp,
};
