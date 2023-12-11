import { OdsCartController } from './controller';
import { OsdsCart } from '../osds-cart';

class OdsCartMock extends OsdsCart {
  constructor(attribute: Partial<OsdsCart>) {
    super();
    Object.assign(this, attribute);
  }
}

describe('spec:ods-cart-controller', () => {
  let controller: OdsCartController;
  let component: OsdsCart;

  function setup(attributes: Partial<OsdsCart> = {}) {
    component = new OdsCartMock(attributes);
    controller = new OdsCartController(component);
  }

  describe('methods', () => {
    describe('methods:computeItemQuantity', () => {
      it('should return 0 (no cart-item)', () => {
        setup();
        const quantity = controller.computeItemQuantity();

        expect(quantity).toBe(0);
      });

      it('should return number of cart-item', () => {
        setup();
        const n = 1 + Math.round(Math.random() * 5);
        for (let i = 0; i < n; i++) {
          const item = document.createElement('osds-cart-item');
          component.el?.appendChild(item);
        }
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

      it('should not set cardHeader', async() => {
        setup();
        await controller.updateCartHeaderState();
        expect(component.cartHeader).toBeNull();
      });

      // FIXME should test refresh call using jest mock instead
      xit('should init component cartHeader', async() => {
        // const cartHeader = new OdsCartHeaderMock();
        // jest.spyOn(component.el, 'querySelector').mockImplementation(() =>  cartHeader as never as HTMLElement);
        // setup();
        //
        // await controller.updateCartHeaderState();
        //
        // expect(component.cartHeader).toEqual(cartHeader);
      });
    });
  });
});
