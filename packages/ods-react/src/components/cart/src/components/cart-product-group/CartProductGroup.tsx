import classNames from 'classnames';
import { type FC, type JSX, forwardRef } from 'react';
import { useI18n } from '../../../../../hooks/useI18n';
import { Accordion, AccordionContent, AccordionItem, type AccordionProp, AccordionTrigger } from '../../../../accordion/src';
import { BUTTON_SIZE, BUTTON_VARIANT, Button } from '../../../../button/src';
import { ICON_NAME, Icon } from '../../../../icon/src';
import { TEXT_PRESET, Text } from '../../../../text/src';
import { CART_I18N, TRANSLATION } from '../../constants/cart-i18n';
import { type CartProductRootProp, useCart } from '../../contexts/useCart';
import style from './cartProductGroup.module.scss';

interface CartProductGroupProp extends Omit<AccordionProp, 'defaultValue'>, CartProductRootProp {
  /**
   * The controlled open state of the product group.
   */
  open?: boolean;
}

const ACCORDION_ITEM_VALUE = 'cart-1';

const CartProductGroup: FC<CartProductGroupProp> = forwardRef(({
  children,
  className,
  details,
  label,
  onRemove,
  open,
  price,
  ...props
}, ref): JSX.Element => {
  const { i18n, isOpen, locale } = useCart();
  const { translate } = useI18n(TRANSLATION, locale, i18n);

  return (
    <Accordion
      className={ classNames(style['cart-product-group'], className) }
      data-ods="cart-product-group"
      defaultValue={ open ? [ACCORDION_ITEM_VALUE] : undefined }
      ref={ ref }
      { ...props }
      style={{
        ...props.style,
        ...(!isOpen ? { display: 'none' } : {}),
      }}>
      <AccordionItem value={ ACCORDION_ITEM_VALUE }>
        <div className={ style['cart-product-group__header'] }>
          <AccordionTrigger
            className={ style['cart-product-group__header__trigger'] }
            expandIconPosition="left">
            <div className={ style['cart-product-group__header__trigger__product'] }>
              <div className={ style['cart-product-group__header__trigger__product__labels'] }>
                {
                  details &&
                  <span className={ style['cart-product-group__header__trigger__product__labels__details'] }>
                    { details }
                  </span>
                }

                <Text
                  as="span"
                  preset={ TEXT_PRESET.heading5 }>
                  { label }
                </Text>
              </div>

              <Text
                as="span"
                preset={ TEXT_PRESET.heading6 }>
                { price }
              </Text>
            </div>
          </AccordionTrigger>

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
        </div>

        <AccordionContent className={ style['cart-product-group__content'] }>
          { children }
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
});

CartProductGroup.displayName = 'CartProductGroup';

export {
  CartProductGroup,
  type CartProductGroupProp,
};
