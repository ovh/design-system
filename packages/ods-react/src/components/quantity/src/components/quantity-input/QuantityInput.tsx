import { NumberInput } from '@ark-ui/react/number-input';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef, useEffect, useMemo } from 'react';
import { useFormField } from '../../../../form-field/src';
import { useQuantity } from '../../contexts/useQuantity';
import style from './quantityInput.module.scss';

interface QuantityInputProp extends ComponentPropsWithRef<'input'> {}

const QuantityInput: FC<QuantityInputProp> = forwardRef(({
  className,
  id,
  ...props
}, ref): JSX.Element => {
  const fieldContext = useFormField();
  const { setInputId } = useQuantity();
  const computedId = useMemo(() => id || fieldContext.id, [fieldContext.id, id]);

  useEffect(() => {
    setInputId(computedId);
  }, [computedId, setInputId]);

  return (
    <NumberInput.Input
      aria-describedby={ props['aria-describedby'] || fieldContext?.ariaDescribedBy }
      className={ classNames(style['quantity-input'], className) }
      data-ods="quantity-input"
      ref={ ref }
      { ...props } />
  );
});

QuantityInput.displayName = 'QuantityInput';

export {
  QuantityInput,
  type QuantityInputProp,
};
