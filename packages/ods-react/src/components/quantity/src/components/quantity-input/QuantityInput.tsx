import { NumberInput } from '@ark-ui/react/number-input';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { useFormField } from '../../../../form-field/src';
import style from './quantityInput.module.scss';

interface QuantityInputProp extends ComponentPropsWithRef<'input'> {}

const QuantityInput: FC<QuantityInputProp> = forwardRef(({
  className,
  id,
  ...props
}, ref): JSX.Element => {
  const fieldContext = useFormField();

  return (
    <NumberInput.Input
      aria-describedby={ props['aria-describedby'] || fieldContext?.ariaDescribedBy }
      className={ classNames(style['quantity-input'], className) }
      id={ id || fieldContext?.id }
      ref={ ref }
      { ...props } />
  );
});

QuantityInput.displayName = 'QuantityInput';

export {
  QuantityInput,
  type QuantityInputProp,
};
