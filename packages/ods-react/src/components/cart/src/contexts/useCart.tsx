import { type JSX, type ReactNode, createContext, useState } from 'react';
import { useDevice } from '../../../../hooks/useDevice';
import { useContext } from '../../../../utils/context';
import { type Locale } from '../../../../utils/locales';
import { type CardProp } from '../../../card/src';
import { type CART_I18N } from '../constants/cart-i18n';

interface CartOpenChangeDetail {
  open: boolean,
}

interface CartRootProp extends Omit<CardProp, 'color'> {
  /**
   * Internal translations override.
   */
  i18n?: Partial<Record<CART_I18N, string>>,
  /**
   * The locale used for the translation of the internal elements.
   */
  locale?: Locale,
  /**
   * Callback fired when the cart open state changes (on Mobile only).
   */
  onOpenChange?: (detail: CartOpenChangeDetail) => void
}

interface CartProductRootProp {
  /**
   * Product details node to display.
   */
  details?: ReactNode,
  /**
   * Product label node to display.
   */
  label: ReactNode,
  /**
   * Callback fired when the remove button is pressed.
   */
  onRemove?: () => void,
  /**
   * Formatted price node to display.
   */
  price: ReactNode,
}

interface CartProviderProp extends Pick<CartRootProp, 'i18n' | 'locale' | 'onOpenChange'> {
  children: ReactNode;
}

type CartContextType = Omit<CartProviderProp, 'children'> & {
  closeCart: () => void;
  isEmpty: boolean;
  isOpen: boolean;
  openCart: () => void;
  setIsEmpty: (value: boolean) => void;
  toggleCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CartProvider = ({
  children,
  i18n,
  locale,
  onOpenChange,
  ...props
}: CartProviderProp): JSX.Element => {
  const { isMobile } = useDevice();
  const [isEmpty, setIsEmpty] = useState(false);
  const [isOpen, setIsOpen] = useState(!isMobile);

  function closeCart(): void {
    updateCartOpenState(false);
  }

  function openCart(): void {
    updateCartOpenState(true);
  }

  function toggleCart(): void {
    updateCartOpenState(!isOpen);
  }

  function updateCartOpenState(newState: boolean): void {
    setIsOpen(newState);
    onOpenChange?.({ open: newState });
  }

  return (
    <CartContext.Provider value={{
      ...props,
      closeCart,
      i18n,
      isEmpty,
      isOpen,
      locale,
      openCart,
      setIsEmpty,
      toggleCart,
    }}>
      { children }
    </CartContext.Provider>
  );
};

function useCart(): CartContextType {
  return useContext(CartContext);
}

export {
  type CartOpenChangeDetail,
  type CartProductRootProp,
  type CartRootProp,
  CartProvider,
  useCart,
};
