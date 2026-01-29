import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef, useEffect } from 'react';
import { ICON_NAME, Icon } from '../../../../icon/src';
import { useCart } from '../../contexts/useCart';
import style from './cartEmpty.module.scss';

interface CartEmptyProp extends ComponentPropsWithRef<'div'> {}

const CartEmpty: FC<CartEmptyProp> = forwardRef(({
  children,
  className,
  ...props
}, ref): JSX.Element => {
  const { setIsEmpty } = useCart();

  useEffect(() => {
    setIsEmpty(true);

    return () => {
      setIsEmpty(false);
    };
  }, [setIsEmpty]);

  return (
    <div
      className={ classNames(style['cart-empty'], className) }
      data-ods="cart-empty"
      ref={ ref }
      { ...props }>
      <Icon
        className={ style['cart-empty__icon'] }
        name={ ICON_NAME.shoppingCart } />

      <div className={ style['cart-empty__content'] }>
        { children }
      </div>
    </div>
  );
});

CartEmpty.displayName = 'CartEmpty';

export {
  CartEmpty,
  type CartEmptyProp,
};
