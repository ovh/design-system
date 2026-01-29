import { LOCALE } from '../../../../utils/locales';

enum CART_I18N {
  expandButton = 'cart.expand',
  reduceButton = 'cart.reduce',
  removeProductButton = 'cart.product.remove.button',
}

const TRANSLATION = {
  [CART_I18N.expandButton]: {
    [LOCALE.de]: 'Warenkorb aufklappen',
    [LOCALE.en]: 'Expand cart',
    [LOCALE.es]: 'Mostrar carrito',
    [LOCALE.fr]: 'Afficher le panier',
    [LOCALE.it]: 'Espandi carrello',
    [LOCALE.nl]: 'Winkelwagentje uitbreiden',
    [LOCALE.pl]: 'Pokaż koszyk',
    [LOCALE.pt]: 'Expandir carrinho',
  },
  [CART_I18N.reduceButton]: {
    [LOCALE.de]: 'Warenkorb einklappen',
    [LOCALE.en]: 'Reduce cart',
    [LOCALE.es]: 'Ocultar carrito',
    [LOCALE.fr]: 'Masquer le panier',
    [LOCALE.it]: 'Riduci carrello',
    [LOCALE.nl]: 'Winkelwagentje verminderen',
    [LOCALE.pl]: 'Ukryj koszyk',
    [LOCALE.pt]: 'Reduzir carrinho',
  },
  [CART_I18N.removeProductButton]: {
    [LOCALE.de]: 'Entfernen',
    [LOCALE.en]: 'Remove',
    [LOCALE.es]: 'Eliminar',
    [LOCALE.fr]: 'Supprimer',
    [LOCALE.it]: 'Rimuovi',
    [LOCALE.nl]: 'Verwijderen',
    [LOCALE.pl]: 'Usuń',
    [LOCALE.pt]: 'Remover',
  },
};

export {
  CART_I18N,
  TRANSLATION,
};
