import { OdsClearLoggerSpy, OdsInitializeLoggerSpy, OdsLoggerSpyReferences } from '@ovhcloud/ods-testing/src';

import { Ods } from '../../configure/ods';
import { OdsCart } from '../cart/ods-cart';
import { OdsCartHeader } from './ods-cart-header';
import { OdsCartHeaderController } from './ods-cart-header-controller';
import { OdsCartHeaderMock } from './ods-cart-header-mock';
import { OdsCartMock } from '../cart/ods-cart-mock';
import { OdsLogger } from '../../logger/ods-logger';

describe('spec:ods-cart-header-controller', () => {
  let controller: OdsCartHeaderController;
  let component: OdsCartHeader;
  let loggerSpyReferences: OdsLoggerSpyReferences;

  Ods.instance().logging(false);

  function setup(attributes: Partial<OdsCartHeader> = {}) {
    component = { ...component, ...attributes };
    controller = new OdsCartHeaderController(component);
  }

  beforeEach(() => {
    component = new OdsCartHeaderMock();
    component.el = document.createElement('osds-cart-header') as HTMLElement;

    const loggerMocked = new OdsLogger('myLoggerMocked');
    loggerSpyReferences = OdsInitializeLoggerSpy({
      loggerMocked: loggerMocked as never,
      spiedClass: OdsCartHeaderController
    });
  });

  afterEach(() => {
    OdsClearLoggerSpy(loggerSpyReferences);
  });

  describe('methods', () => {
    describe('methods:initCart', () => {
      it(`should warn if cart doesn't exists`, () => {
        setup();

        controller.initCart();

        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledTimes(1);
        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledWith('A cart is mandatory.');
      });

      it(`should init cart`, () => {
        const cart = new OdsCartMock() as unknown as (HTMLElement & OdsCart);
        component.el.closest = jest.fn(() => cart);
        setup();
        controller.initCart();

        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledTimes(0);
      });
    });

    describe('methods:validateHeaderTitle', () => {
      it(`should throw an error if headerTitle doesn't exists`, () => {
        setup();
        expect(() => controller.validateHeaderTitle()).toThrow('[OsdsCartHeader] header-title attribute is mandatory');
      });

      it(`should not throw an error if headerTitle exists`, () => {
        component.headerTitle = 'Title';
        setup();
        expect(() => controller.validateHeaderTitle()).not.toThrow();
      });
    });
  });
});
