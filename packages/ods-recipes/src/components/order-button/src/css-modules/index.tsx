import { ICON_NAME, Icon } from '@ovhcloud/ods-react';
import { type JSX, useState } from 'react';
import style from './index.module.scss';

type OrderButtonProp = {
  disabled?: boolean,
}

const OrderButton = ({ disabled }: OrderButtonProp): JSX.Element => {
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  function onBlur(): void {
    setIsFocused(false);
  }

  function onFocus(): void {
    setIsFocused(true);
  }

  function onMouseEnter(): void {
    setIsHovered(true);
  }

  function onMouseLeave(): void {
    setIsHovered(false);
  }

  return (
    <button
      className={ style['order-button'] }
      disabled={ disabled }
      onBlur={ onBlur }
      onFocus={ onFocus }
      onMouseEnter={ onMouseEnter }
      onMouseLeave={ onMouseLeave }
      type="button">
      <Icon
        className={ style['order-button__icon'] }
        name={ isFocused || isHovered ? ICON_NAME.shoppingCartPlus : ICON_NAME.shoppingCart } />
      Order
    </button>
  );
};

export {
  OrderButton,
  type OrderButtonProp,
};
