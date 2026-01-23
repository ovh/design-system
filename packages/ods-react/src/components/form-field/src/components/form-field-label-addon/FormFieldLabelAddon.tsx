import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import style from './formFieldLabelAddon.module.scss';

interface FormFieldLabelAddonProp extends ComponentPropsWithRef<'span'> {}

const FormFieldLabelAddon: FC<FormFieldLabelAddonProp> = forwardRef(({
  children,
  className,
  ...props
}, ref): JSX.Element => {
  return (
    <span
      className={ classNames(style['form-field-label-addon'], className) }
      data-ods="form-field-label-addon"
      ref={ ref }
      { ...props }>
      { children }
    </span>
  );
});

FormFieldLabelAddon.displayName = 'FormFieldLabelAddon';

export {
  FormFieldLabelAddon,
  type FormFieldLabelAddonProp,
};
