import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { useI18n } from '../../../../../hooks/useI18n';
import { BUTTON_SIZE, BUTTON_VARIANT, Button } from '../../../../button/src';
import { DIVIDER_SPACING, Divider } from '../../../../divider/src';
import { ICON_NAME, Icon } from '../../../../icon/src';
import { TEXT_PRESET, Text } from '../../../../text/src';
import { CART_I18N, TRANSLATION } from '../../constants/cart-i18n';
import { type CartProductRootProp, useCart } from '../../contexts/useCart';
import style from './cartProductGroupItem.module.scss';

interface CartProductGroupItemProp extends ComponentPropsWithRef<'div'>, CartProductRootProp {
  /**
   * Number of selected product.
   */
  quantity?: number;
}

const CartProductGroupItem: FC<CartProductGroupItemProp> = forwardRef(({
  children,
  className,
  details,
  label,
  onRemove,
  price,
  quantity,
  ...props
}, ref): JSX.Element => {
  const { i18n, locale } = useCart();
  const { translate } = useI18n(TRANSLATION, locale, i18n);

  return (
    <div
      className={ classNames(style['cart-product-group-item'], className) }
      data-ods="cart-product-group-item"
      ref={ ref }
      { ...props }>
      <div>
        {
          details &&
          <span className={ style['cart-product-group-item__details'] }>
            { details }
          </span>
        }

        <div className={ style['cart-product-group-item__item'] }>
          {
            quantity !== undefined &&
            <Text
              as="span"
              preset={ TEXT_PRESET.small }>
              { quantity }x
            </Text>
          }

          <span className={ style['cart-product-group-item__item__label'] }>
            { label }
          </span>

          <span className={ style['cart-product-group-item__item__price'] }>
            { price }
          </span>
        </div>
      </div>

      {
        onRemove &&
        <Button
          aria-label={ translate(CART_I18N.removeProductButton) }
          onClick={ onRemove }
          size={ BUTTON_SIZE.sm }
          variant={ BUTTON_VARIANT.ghost }>
          <Icon name={ ICON_NAME.trash } />
        </Button>
      }

      <Divider
        className={ style['cart-product-group-item__divider'] }
        spacing={ DIVIDER_SPACING._0 } />
    </div>
  );
});

CartProductGroupItem.displayName = 'CartProductGroupItem';

export {
  CartProductGroupItem,
  type CartProductGroupItemProp,
};
