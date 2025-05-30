import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef, useEffect, useId, useMemo } from 'react';
import { TEXT_PRESET, Text } from '../../../../text/src';
import { useFormField } from '../../contexts/useFormField';
import style from './formFieldLabel.module.scss';

interface FormFieldLabelProp extends ComponentPropsWithRef<'label'> {}

const FormFieldLabel: FC<FormFieldLabelProp> = forwardRef(({
  children,
  className,
  id,
  ...props
}, ref): JSX.Element => {
  const { id: forId, setLabelId } = useFormField();
  const defaultId = useId();
  const computedId = useMemo(() => id ?? defaultId, [defaultId, id]);

  useEffect(() => {
    setLabelId && setLabelId(computedId);
  }, [computedId, setLabelId]);

  return (
    <Text
      className={ classNames(style['form-field-label'], className) }
      htmlFor={ forId }
      id={ computedId }
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
