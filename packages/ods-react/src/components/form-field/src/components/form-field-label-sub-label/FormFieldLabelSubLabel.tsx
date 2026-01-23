import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import style from './formFieldLabelSubLabel.module.scss';

interface FormFieldLabelSubLabelProp extends ComponentPropsWithRef<'span'> {}

const FormFieldLabelSubLabel: FC<FormFieldLabelSubLabelProp> = forwardRef(({
  children,
  className,
  ...props
}, ref): JSX.Element => {
  return (
    <span
      className={ classNames(style['form-field-label-sub-label'], className) }
      data-ods="form-field-label-sub-label"
      ref={ ref }
      { ...props }>
      { children }
    </span>
  );
});

FormFieldLabelSubLabel.displayName = 'FormFieldLabelSubLabel';

export {
  FormFieldLabelSubLabel,
  type FormFieldLabelSubLabelProp,
};
