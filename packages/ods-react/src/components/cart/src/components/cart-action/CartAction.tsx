import { type FC, type JSX, forwardRef } from 'react';
import { type AsChildProp, AsChildSlot } from '../../../../../helpers/AsChild';
import { Button, type ButtonProp } from '../../../../button/src';
import { useCart } from '../../contexts/useCart';

type CartActionProp = AsChildProp<ButtonProp>

const CartAction: FC<CartActionProp> = forwardRef(({
  asChild,
  ...props
}, ref): JSX.Element => {
  const { isEmpty } = useCart();

  return (
    asChild
      ? <AsChildSlot
        data-ods="cart-action"
        ref={ ref }
        { ...props } />
      : <Button
        data-ods="cart-action"
        disabled={ isEmpty }
        ref={ ref }
        { ...props } />
  );
});

CartAction.displayName = 'CartAction';

export {
  CartAction,
  type CartActionProp,
};
