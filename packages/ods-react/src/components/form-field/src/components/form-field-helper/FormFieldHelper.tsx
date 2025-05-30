import { type ComponentPropsWithRef, type FC, type JSX, forwardRef, useEffect, useId, useMemo } from 'react';
import { useFormField } from '../../contexts/useFormField';

interface FormFieldHelperProp extends ComponentPropsWithRef<'span'> {}

const FormFieldHelper: FC<FormFieldHelperProp> = forwardRef(({
  children,
  className,
  id,
  ...props
}, ref): JSX.Element => {
  const { setHelperId } = useFormField();
  const defaultId = useId();
  const computedId = useMemo(() => id ?? defaultId, [defaultId, id]);

  useEffect(() => {
    setHelperId && setHelperId(computedId);
  }, [computedId, setHelperId]);

  return (
    <span
      className={ className }
      id={ computedId }
      ref={ ref }
      { ...props }>
      { children }
    </span>
  );
});

FormFieldHelper.displayName = 'FormFieldHelper';

export {
  FormFieldHelper,
  type FormFieldHelperProp,
};
