import { formatPrice } from '../../../utils';
import { ICON_NAME, Icon } from '../../icon/src';
import { TEXT_PRESET, Text } from '../../text/src';
import { Cart, CartAction, CartEmpty, CartExtraContent, CartProductGroup, CartProductGroupItem, CartTotal } from '.';
import styles from './dev.module.css';

export default {
  component: Cart,
  title: 'Cart dev',
};

export const CustomAction = () => (
  <>
    <Cart style={{ width: '300px' }}>
      <CartEmpty>
        Your cart is empty
      </CartEmpty>

      <CartAction asChild>
        <button>
          Continue my order
        </button>
      </CartAction>
    </Cart>

    <Cart style={{ width: '300px' }}>
      <CartEmpty>
        Your cart is empty
      </CartEmpty>

      <CartAction asChild>
        <div>
          <button>
            Continue my order
          </button>
          <button>
            Cancel my order
          </button>
        </div>
      </CartAction>
    </Cart>
  </>
);

export const CustomProductGroup = () => (
  <Cart style={{ width: '300px' }}>
    <CartProductGroup
      details={ <Icon name={ ICON_NAME.analysis } /> }
      label={ <span className={ styles['custom-cart__product__label'] }>#Product#</span> }
      onRemove={ () => {} }
      price={
        <div className={ styles['custom-cart__product__price'] }>
          <span className={ styles['custom-cart__product__price__old'] }>{ formatPrice(13.25) }</span>
          <span>{ formatPrice(13.24) }</span>
        </div>
      } />

    <CartAction>
      Continue my order <Icon name={ ICON_NAME.arrowRight } />
    </CartAction>
  </Cart>
);

export const Default = () => (
  <Cart>
    <CartProductGroup
      label="Product"
      price={ formatPrice(16.24) }>
      <CartProductGroupItem
        label="Lorem ipsum dolor"
        price={ formatPrice(3.24) } />

      <CartProductGroupItem
        label="Lorem ipsum dolor"
        price={ formatPrice(13) } />
    </CartProductGroup>

    <CartTotal
      label="Total"
      price={ formatPrice(16.24) } />

    <CartAction>
      Continue my order <Icon name={ ICON_NAME.arrowRight } />
    </CartAction>
  </Cart>
);

export const Empty = () => (
  <Cart style={{ width: '300px' }}>
    <CartEmpty>
      Your cart is empty
    </CartEmpty>

    <CartAction>
      Continue my order <Icon name={ ICON_NAME.arrowRight } />
    </CartAction>
  </Cart>
);

export const Full = () => (
  <Cart>
    <CartProductGroup
      details="Product family name"
      label="Product"
      onRemove={ () => {} }
      open
      price={ formatPrice(16.24) }>
      <CartProductGroupItem
        details="Optional title"
        label="Lorem ipsum dolor"
        onRemove={ () => {} }
        price={ formatPrice(3.24) }
        quantity={ 1 } />

      <CartProductGroupItem
        details="Optional title"
        label="Lorem ipsum dolor"
        onRemove={ () => {} }
        price={ formatPrice(13) }
        quantity={ 1 } />
    </CartProductGroup>

    <CartExtraContent>
      <Text
        as="span"
        preset={ TEXT_PRESET.heading6}>
        Extra label
      </Text>
    </CartExtraContent>

    <CartTotal
      label="Total"
      priceDetails={'some price details'}
      totalDetails={'some total details'}
      price={ formatPrice(16.24) } />

    <CartAction>
      Continue my order <Icon name={ ICON_NAME.arrowRight } />
    </CartAction>
  </Cart>
);

export const Handler = () => (
  <Cart
    onOpenChange={ (e) => console.log(e) }
    style={{ width: '300px' }}>
    <CartProductGroup
      details="Product family name"
      label="Product"
      onRemove={ () => {} }
      open
      price={ formatPrice(16.24) }>
      <CartProductGroupItem
        details="Optional title"
        label="Lorem ipsum dolor"
        onRemove={ () => {} }
        price={ formatPrice(3.24) }
        quantity={ 1 } />

      <CartProductGroupItem
        details="Optional title"
        label="Lorem ipsum dolor"
        onRemove={ () => {} }
        price={ formatPrice(13) } />
    </CartProductGroup>

    <CartTotal
      label="Total"
      priceDetails={'some price details'}
      totalDetails={'some total details'}
      price={ formatPrice(16.24) } />

    <CartAction>
      Continue my order <Icon name={ ICON_NAME.arrowRight } />
    </CartAction>
  </Cart>
);
