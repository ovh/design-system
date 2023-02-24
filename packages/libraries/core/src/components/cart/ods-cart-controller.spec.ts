import { OdsCart } from './ods-cart';
import { OdsCartController } from './ods-cart-controller';
import { OdsCartHeaderMock } from './../cart-header/ods-cart-header-mock';
import { OdsCartMock } from './ods-cart-mock';

describe('spec:ods-cart-controller', () => {
  let controller: OdsCartController;
  let component: OdsCart;

  function setup(attributes: Partial<OdsCart> = {}) {
    component = { ...component, ...attributes };
    controller = new OdsCartController(component);
  }

  beforeEach(() => {
    component = new OdsCartMock();
    component.el = document.createElement('osds-cart') as HTMLElement;
  });

  describe('methods', () => {
    describe('methods:computeItemQuantity', () => {
      it('should return 0 (no cart-item)', () => {
        setup();
        const quantity = controller.computeItemQuantity();

        expect(quantity).toBe(0);
      });

      it('should return number of cart-item', () => {
        const n = 1 + Math.round(Math.random() * 5);
        for (let i = 0; i < n; i++) {
          const item = document.createElement('osds-cart-item');
          component.el?.appendChild(item);  
        }
        setup();
        const quantity = controller.computeItemQuantity();

        expect(quantity).toBe(n);
      });
    });

    describe('methods:updateCartHeaderState', () => {
      beforeEach(() => {
        jest.spyOn(customElements, 'whenDefined').mockImplementation(() => Promise.resolve() as any);
      });

      afterEach(() => {
        jest.clearAllMocks();
      });

      it('should not set cardHeader', async () => {
        setup();
        await controller.updateCartHeaderState();
        expect(component.cartHeader).toBeNull();
      });

      it('should init component cartHeader', async () => {
        const cartHeader = new OdsCartHeaderMock();
        jest.spyOn(component.el, 'querySelector').mockImplementation(() =>  cartHeader as never as HTMLElement);
        setup();

        await controller.updateCartHeaderState();

        expect(component.cartHeader).toEqual(cartHeader);
      });
    });
  });
});
