import { Field } from '@ark-ui/react/field';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import style from './odsFormFieldLabel.module.scss';

interface OdsFormFieldLabelProp extends ComponentPropsWithRef<'label'> {}

const OdsFormFieldLabel: FC<OdsFormFieldLabelProp> = forwardRef(({
  children,
  className,
  ...props
}, ref): JSX.Element => {
  return (
    <Field.Label
      className={ classNames(style['ods-form-field-label'], className) }
      ref={ ref }
      { ...props }>
      { children }
    </Field.Label>
  );
});

OdsFormFieldLabel.displayName = 'OdsFormFieldLabel';

export {
  OdsFormFieldLabel,
  type OdsFormFieldLabelProp,
};
