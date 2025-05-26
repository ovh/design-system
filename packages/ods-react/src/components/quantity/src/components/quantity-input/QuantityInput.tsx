import { NumberInput } from '@ark-ui/react/number-input';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { useFormField } from '../../../../form-field/src';
import style from './quantityInput.module.scss';

interface QuantityInputProp extends ComponentPropsWithRef<'input'> {}

const QuantityInput: FC<QuantityInputProp> = forwardRef(({
  className,
  ...props
}, ref): JSX.Element => {
  const field = useFormField();

  return (
    <NumberInput.Input
      className={ classNames(style['quantity-input'], className) }
      ref={ ref }
      { ...props }
      id={ field?.id || props.id } />
  );
});

QuantityInput.displayName = 'QuantityInput';

export {
  QuantityInput,
  type QuantityInputProp,
};
