import type {HTMLStencilElement} from '@stencil/core/internal';
import {OdsCartItemController} from './controller';
import {OsdsCart} from '../../osds-cart/osds-cart';
import {OsdsCartItem} from '../osds-cart-item';

class OdsCartItemMock extends OsdsCartItem {
  constructor(attribute: Partial<OsdsCartItem>) {
    super();
    Object.assign(this, attribute);
  }
}

class OdsCartMock extends OsdsCart {
  refresh = jest.fn();
}

describe('spec:ods-cart-item-controller', () => {
  let controller: OdsCartItemController;
  let component: OsdsCartItem;
  let cart: OsdsCart;
  let spyOnRefreshCart: jest.SpyInstance<Promise<void>, jest.ArgsType<OdsCartItemController['refreshCart']>>;

  function setup(attributes: Partial<OsdsCartItem> = {}) {
    component = new OdsCartItemMock(attributes);
    controller = new OdsCartItemController(component);
    cart = new OdsCartMock();
    jest.spyOn(component.el, 'closest').mockImplementation(() => cart as never as HTMLElement);
  }

  beforeEach(() => {

    // component.el = document.createElement('osds-cart-item') as HTMLElement;


    // jest.spyOn(component.el, 'closest').mockImplementation(() => cart as never as HTMLElement);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('methods', () => {
    describe('method:initCart', () => {
      it('should set component cart', async() => {
        setup();
        await controller.initCart();

        expect(component.cart).toEqual(cart);
      });

      it('should call controller.refreshCart', async() => {
        setup();
        spyOnRefreshCart = jest.spyOn(controller, 'refreshCart');
        await controller.initCart();

        expect(spyOnRefreshCart).toHaveBeenCalled();
      });
    });

    describe('method:refreshCart', () => {
      it('should call cart.refresh', async() => {
        setup();
        component.cart = cart as unknown as (HTMLStencilElement & OsdsCart);
        await controller.refreshCart();
        expect(component.cart.refresh).toHaveBeenCalled();
      });
    });
  });
});
