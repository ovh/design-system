import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, type ReactNode, forwardRef } from 'react';
import { TEXT_PRESET, Text } from '../../../../text/src';
import { useCart } from '../../contexts/useCart';
import style from './cartTotal.module.scss';

interface CartTotalProp extends ComponentPropsWithRef<'div'> {
  /**
   * Total label node to display.
   */
  label: ReactNode;
  /**
   * Formatted price node to display. Screen readers announce it with the label when it changes.
   */
  price: ReactNode;
  /**
   * Price details node to display.
   */
  priceDetails?: ReactNode;
  /**
   * Total details node to display.
   */
  totalDetails?: ReactNode;
}

const CartTotal: FC<CartTotalProp> = forwardRef(({
  className,
  label,
  price,
  priceDetails,
  totalDetails,
  ...props
}, ref): JSX.Element => {
  const { isOpen } = useCart();

  return (
    <div
      className={ classNames(style['cart-total'], className) }
      data-ods="cart-total"
      ref={ ref }
      { ...props }>
      <div
        aria-atomic="true"
        className={ style['cart-total__pricing'] }
        role="status">
        <Text
          as="span"
          preset={ TEXT_PRESET.heading4 }>
          { label }
        </Text>

        {/* The flex gap separates them on screen only: this space keeps "Total 12 €" from being read "Total12 €". */}
        { ' ' }

        <Text
          as="span"
          preset={ TEXT_PRESET.heading2 }>
          { price }
        </Text>
      </div>

      <div
        className={ style['cart-total__details'] }
        style={{
          ...props.style,
          ...(!isOpen ? { display: 'none' } : {}),
        }}>
        <Text
          as="span"
          preset={ TEXT_PRESET.caption }>
          { totalDetails || '' }
        </Text>

        <Text
          as="span"
          className={ style['cart-total__details__price'] }
          preset={ TEXT_PRESET.caption }>
          { priceDetails || '' }
        </Text>
      </div>
    </div>
  );
});

CartTotal.displayName = 'CartTotal';

export {
  CartTotal,
  type CartTotalProp,
};
