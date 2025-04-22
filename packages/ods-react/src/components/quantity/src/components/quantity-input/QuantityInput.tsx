import { NumberInput } from '@ark-ui/react/number-input';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import style from './quantityInput.module.scss';

interface QuantityInputProp extends ComponentPropsWithRef<'input'> {}

const QuantityInput: FC<QuantityInputProp> = forwardRef(({
  className,
  ...props
}, ref): JSX.Element => {
  return (
    <NumberInput.Input
      className={ classNames(style['quantity-input'], className) }
      ref={ ref }
      { ...props } />
  );
});

QuantityInput.displayName = 'QuantityInput';

export {
  QuantityInput,
  type QuantityInputProp,
};
