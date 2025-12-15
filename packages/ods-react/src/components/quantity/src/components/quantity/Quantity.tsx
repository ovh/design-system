import { NumberInput } from '@ark-ui/react/number-input';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { useFormField } from '../../../../form-field/src';
import { QuantityProvider, type QuantityRootProp, useQuantity } from '../../contexts/useQuantity';

interface QuantityProp extends Omit<ComponentPropsWithRef<'div'>, 'defaultValue' | 'inputMode'>, QuantityRootProp {}

const QuantityRoot: FC<QuantityProp> = forwardRef(({
  children,
  className,
  defaultValue,
  disabled,
  invalid,
  max,
  min,
  name,
  onValueChange,
  readOnly,
  required,
  step,
  value,
  ...props
}, ref): JSX.Element => {
  const fieldContext = useFormField();
  const { inputId } = useQuantity();

  return (
    <NumberInput.Root
      clampValueOnBlur={ false }
      className={ className }
      data-ods="quantity"
      defaultValue={ defaultValue }
      disabled={ disabled }
      ids={{
        input: inputId,
      }}
      inputMode="decimal"
      invalid={ invalid || fieldContext?.invalid }
      max={ max }
      min={ min }
      name={ name }
      onValueChange={ onValueChange }
      readOnly={ readOnly }
      ref={ ref }
      required={ required }
      step={ step }
      value={ value }
      { ...props }>
      { children }
    </NumberInput.Root>
  );
});

const Quantity: FC<QuantityProp> = forwardRef((props, ref): JSX.Element => {
  return (
    <QuantityProvider>
      <QuantityRoot
        { ...props }
        ref={ ref } />
    </QuantityProvider>
  );
});

Quantity.displayName = 'Quantity';

export {
  Quantity,
  type QuantityProp,
};
