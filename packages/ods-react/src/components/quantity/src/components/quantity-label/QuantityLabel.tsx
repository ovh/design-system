import { NumberInput } from '@ark-ui/react/number-input';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import style from './quantityLabel.module.scss';

interface QuantityLabelProp extends ComponentPropsWithRef<'label'> {}

const QuantityLabel: FC<QuantityLabelProp> = forwardRef(({
  children,
  className,
  ...props
}, ref): JSX.Element => {
  return (
    <NumberInput.Label
      className={ classNames(style['quantity-label'], className) }
      ref={ ref }
      { ...props }>
      { children }
    </NumberInput.Label>
  );
});

QuantityLabel.displayName = 'QuantityLabel';

export {
  QuantityLabel,
  type QuantityLabelProp,
};
