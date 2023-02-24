import { OdsCart } from '../cart/ods-cart';
import { OdsCartItem } from './ods-cart-item';
import { OdsCartItemController } from './ods-cart-item-controller';
import { OdsCartItemMock } from './ods-cart-item-mock';
import { OdsCartMock } from '../cart/ods-cart-mock';
describe('spec:ods-cart-item-controller', () => {
  let controller: OdsCartItemController;
  let component: OdsCartItem;
  let cart: OdsCart;
  let spyOnRefreshCart: jest.SpyInstance<Promise<void>, jest.ArgsType<OdsCartItemController['refreshCart']>>;

  function setup(attributes: Partial<OdsCartItem> = {}) {
    component = { ...component, ...attributes };
    controller = new OdsCartItemController(component);
  }

  beforeEach(() => {
    component = new OdsCartItemMock();
    component.el = document.createElement('osds-cart-item') as HTMLElement;
    cart = new OdsCartMock();

    jest.spyOn(component.el, 'closest').mockImplementation(() => cart as never as HTMLElement);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('methods', () => {
    describe('method:initCart', () => {
      it('should set component cart', async () => {
        setup();
        await controller.initCart();

        expect(component.cart).toEqual(cart);
      });      

      it('should call controller.refreshCart', async () => {
        setup();
        spyOnRefreshCart = jest.spyOn(controller, 'refreshCart');
        await controller.initCart();

        expect(spyOnRefreshCart).toHaveBeenCalled();
      });      
    });

    describe('method:refreshCart', () => {
      it('should call cart.refresh', async () => {
        component.cart = cart as unknown as (HTMLElement & OdsCart);
        setup();
        await controller.refreshCart();
        expect(component.cart.refresh).toHaveBeenCalled();
      });
    });
  });
});