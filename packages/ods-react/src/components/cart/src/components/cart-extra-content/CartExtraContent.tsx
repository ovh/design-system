import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { useCart } from '../../contexts/useCart';

interface CartExtraContentProp extends ComponentPropsWithRef<'div'> {}

const CartExtraContent: FC<CartExtraContentProp> = forwardRef(({
  children,
  className,
  ...props
}, ref): JSX.Element => {
  const { isOpen } = useCart();

  return (
    <div
      className={ className }
      data-ods="cart-extra-content"
      ref={ ref }
      { ...props }
      style={{
        ...props.style,
        ...(!isOpen ? { display: 'none' } : {}),
      }}>
      { children }
    </div>
  );
});

CartExtraContent.displayName = 'CartExtraContent';

export {
  CartExtraContent,
  type CartExtraContentProp,
};
