import { NumberInput, useNumberInputContext } from '@ark-ui/react/number-input';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { BUTTON_COLOR, BUTTON_SIZE, BUTTON_VARIANT, Button } from '../../../../button/src';
import { useFormField } from '../../../../form-field/src';
import { ICON_NAME, Icon } from '../../../../icon/src';
import style from './quantityControl.module.scss';

interface QuantityControlProp extends ComponentPropsWithRef<'div'> {}

const QuantityControl: FC<QuantityControlProp> = forwardRef(({
  children,
  className,
  ...props
}, ref): JSX.Element => {
  const fieldContext = useFormField();
  const { decrement, getDecrementTriggerProps, getIncrementTriggerProps, increment, invalid } = useNumberInputContext();
  const decrementTriggerProps = getDecrementTriggerProps();
  const incrementTriggerProps = getIncrementTriggerProps();

  return (
    <NumberInput.Control
      className={ classNames(style['quantity-control'], className) }
      ref={ ref }
      role="group"
      { ...props }>
      <Button
        aria-controls={ fieldContext?.id || decrementTriggerProps['aria-controls'] }
        className={ classNames(
          style['quantity-control__decrement'],
          { [style['quantity-control__decrement--invalid']]: invalid },
        )}
        color={ invalid ? BUTTON_COLOR.critical : BUTTON_COLOR.primary }
        disabled={ decrementTriggerProps.disabled }
        onClick={ decrement }
        size={ BUTTON_SIZE.sm }
        tabIndex={ -1 }
        variant={ BUTTON_VARIANT.outline }>
        <Icon name={ ICON_NAME.minus } />
      </Button>

      { children }

      <Button
        aria-controls={ fieldContext?.id || incrementTriggerProps['aria-controls'] }
        className={ classNames(
          style['quantity-control__increment'],
          { [style['quantity-control__increment--invalid']]: invalid },
        )}
        color={ invalid ? BUTTON_COLOR.critical : BUTTON_COLOR.primary }
        disabled={ incrementTriggerProps.disabled }
        onClick={ increment }
        size={ BUTTON_SIZE.sm }
        tabIndex={ -1 }
        variant={ BUTTON_VARIANT.outline }>
        <Icon name={ ICON_NAME.plus } />
      </Button>
    </NumberInput.Control>
  );
});

QuantityControl.displayName = 'QuantityControl';

export {
  QuantityControl,
  type QuantityControlProp,
};
