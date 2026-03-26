import { type CartProp, Cart as CartRoot } from './components/cart/Cart';
import { CartAction, type CartActionProp } from './components/cart-action/CartAction';
import { CartEmpty, type CartEmptyProp } from './components/cart-empty/CartEmpty';
import { CartExtraContent, type CartExtraContentProp } from './components/cart-extra-content/CartExtraContent';
import { CartProductGroup, type CartProductGroupProp } from './components/cart-product-group/CartProductGroup';
import { CartProductGroupItem, type CartProductGroupItemProp } from './components/cart-product-group-item/CartProductGroupItem';
import { CartTotal, type CartTotalProp } from './components/cart-total/CartTotal';

const Cart = Object.assign(CartRoot, {
  Action: CartAction,
  Empty: CartEmpty,
  ExtraContent: CartExtraContent,
  ProductGroup: CartProductGroup,
  ProductGroupItem: CartProductGroupItem,
  Total: CartTotal,
});

export { Cart };
export { CartAction, CartEmpty, CartExtraContent, CartProductGroup, CartProductGroupItem, CartTotal };
export type { CartProp, CartActionProp, CartEmptyProp, CartExtraContentProp, CartProductGroupProp, CartProductGroupItemProp, CartTotalProp };
export { CART_I18N } from './constants/cart-i18n';
export { type CartOpenChangeDetail } from './contexts/useCart';
