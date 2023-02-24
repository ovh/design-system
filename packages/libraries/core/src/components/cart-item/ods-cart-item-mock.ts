import { OdsCart } from '../cart/ods-cart';
import { OdsCartItem } from './ods-cart-item';
import { OdsCartItemController } from './ods-cart-item-controller';
import { OdsCartItemEvents } from './ods-cart-item-events';
import { OdsCartItemMethods } from './ods-cart-item-methods';

export class OdsCartItemMock implements OdsCartItem<OdsCartItemMethods, OdsCartItemEvents> {
  el!: HTMLElement;
  cart: (HTMLElement & OdsCart) | null = null;

  controller: OdsCartItemController = jest.fn() as unknown as OdsCartItemController;

  beforeInit = jest.fn().mockImplementation(() => Promise.resolve());
  onDestroy = jest.fn().mockImplementation(() => Promise.resolve());
}
