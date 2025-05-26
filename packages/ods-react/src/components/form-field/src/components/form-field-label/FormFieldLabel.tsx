import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { TEXT_PRESET, Text } from '../../../../text/src';
import { useFormField } from '../../contexts/useFormField';
import style from './formFieldLabel.module.scss';

interface FormFieldLabelProp extends ComponentPropsWithRef<'label'> {}

const FormFieldLabel: FC<FormFieldLabelProp> = forwardRef(({
  children,
  className,
  ...props
}, ref): JSX.Element => {
  const { id } = useFormField();

  return (
    <Text
      className={ classNames(style['form-field-label'], className) }
      htmlFor={ id }
      preset={ TEXT_PRESET.label }
      ref={ ref }
      { ...props }>
      { children }
    </Text>
  );
});

FormFieldLabel.displayName = 'FormFieldLabel';

export {
  FormFieldLabel,
  type FormFieldLabelProp,
};
