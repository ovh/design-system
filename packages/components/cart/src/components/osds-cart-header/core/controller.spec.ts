import type { OdsLoggerSpyReferences } from '@ovhcloud/ods-common-testing';
import { OsdsCartHeader } from '../osds-cart-header';
import { OdsCartHeaderController } from './controller';
import { Ods, OdsLogger } from '@ovhcloud/ods-common-core';
import { OdsClearLoggerSpy, OdsInitializeLoggerSpy } from '@ovhcloud/ods-common-testing';

class OdsCartHeaderMock extends OsdsCartHeader {
  constructor(attribute: Partial<OsdsCartHeader>) {
    super();
    Object.assign(this, attribute);
  }
}

describe('spec:ods-cart-header-controller', () => {
  let controller: OdsCartHeaderController;
  let component: OsdsCartHeader;
  let loggerSpyReferences: OdsLoggerSpyReferences;

  Ods.instance().logging(false);

  function setup(attributes: Partial<OsdsCartHeader> = {}) {
    component = new OdsCartHeaderMock(attributes);
    controller = new OdsCartHeaderController(component);
  }

  beforeEach(() => {
    const loggerMocked = new OdsLogger('myLoggerMocked');
    loggerSpyReferences = OdsInitializeLoggerSpy({
      loggerMocked: loggerMocked as never,
      spiedClass: OdsCartHeaderController,
    });
  });

  afterEach(() => {
    OdsClearLoggerSpy(loggerSpyReferences);
  });

  describe('methods', () => {
    describe('methods:initCart', () => {
      it('should warn if cart doesn\'t exists', () => {
        setup();

        controller.initCart();

        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledTimes(1);
        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledWith('A cart is mandatory.');
      });

      it('should init cart', () => {
        const cart = { dummy: 'cart ' };//new OsdsCartMock() as unknown as (HTMLElement & OsdsCart);
        setup();
        component.el.closest = jest.fn(() => cart);
        controller.initCart();

        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledTimes(0);
      });
    });

    describe('methods:validateHeaderTitle', () => {
      it('should throw an error if headerTitle doesn\'t exists', () => {
        setup();
        expect(() => controller.validateHeaderTitle()).toThrow('[OsdsCartHeader] header-title attribute is mandatory');
      });

      it('should not throw an error if headerTitle exists', () => {
        setup();
        component.headerTitle = 'Title';
        expect(() => controller.validateHeaderTitle()).not.toThrow();
      });
    });
  });
});
