import classNames from 'classnames';
import { type FC, type JSX, forwardRef } from 'react';
import { useSwipeable } from 'react-swipeable';
import { useDevice } from '../../../../../hooks/useDevice';
import { useI18n } from '../../../../../hooks/useI18n';
import { Button } from '../../../../button/src';
import { CARD_COLOR, Card } from '../../../../card/src';
import { CART_I18N, TRANSLATION } from '../../constants/cart-i18n';
import { CartProvider, type CartRootProp, useCart } from '../../contexts/useCart';
import style from './cart.module.scss';

interface CartProp extends CartRootProp {}

const CartRoot: FC<CartProp> = forwardRef(({
  children,
  className,
  ...props
}, ref): JSX.Element => {
  const { closeCart, i18n, isEmpty, isOpen, locale, openCart, toggleCart } = useCart();
  const { isMobile } = useDevice();
  const { translate } = useI18n(TRANSLATION, locale, i18n);
  const swipeHandler = useSwipeable({
    onSwipedDown: closeCart,
    onSwipedUp: openCart,
    preventScrollOnSwipe: true,
  });

  return (
    <Card
      className={ classNames(style['cart'], className) }
      color={ CARD_COLOR.neutral }
      data-ods="cart"
      ref={ ref }
      { ...props }>
      {
        !isEmpty && isMobile &&
        <Button
          aria-label={ isOpen ? translate(CART_I18N.reduceButton) : translate(CART_I18N.expandButton) }
          className={ style['cart__handle'] }
          onClick={ toggleCart }
          { ...swipeHandler } />
      }

      { children }
    </Card>
  );
});

const Cart: FC<CartProp> = ({
  i18n,
  locale,
  onOpenChange,
  ...props
}): JSX.Element => {
  return (
    <CartProvider
      i18n={ i18n }
      locale={ locale }
      onOpenChange={ onOpenChange }>
      <CartRoot { ...props } />
    </CartProvider>
  );
};

Cart.displayName = 'Cart';

export {
  Cart,
  type CartProp,
};
