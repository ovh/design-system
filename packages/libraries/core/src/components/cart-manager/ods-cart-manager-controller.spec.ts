import { OdsClearLoggerSpy, OdsInitializeLoggerSpy, OdsLoggerSpyReferences } from '@ovhcloud/ods-testing/src';

import { Ods } from '../../configure/ods';
import { OdsCartManager } from './ods-cart-manager';
import { OdsCartManagerController } from './ods-cart-manager-controller';
import { OdsCartManagerFooter } from './ods-cart-manager-footer';
import { OdsCartManagerMock } from './ods-cart-manager-mock';
import { OdsLogger } from '../../logger/ods-logger';

describe('spec:ods-cart-manager-controller', () => {
  let controller: OdsCartManagerController;
  let component: OdsCartManager;
  let loggerSpyReferences: OdsLoggerSpyReferences;

  Ods.instance().logging(false);

  function setup(attributes: Partial<OdsCartManager> = {}) {
    component = { ...component, ...attributes };
    controller = new OdsCartManagerController(component);
  }

  beforeEach(() => {
    component = new OdsCartManagerMock();

    const loggerMocked = new OdsLogger('myLoggerMocked');
    loggerSpyReferences = OdsInitializeLoggerSpy({
      loggerMocked: loggerMocked as never,
      spiedClass: OdsCartManagerController
    });
  });

  afterEach(() => {
    OdsClearLoggerSpy(loggerSpyReferences);
    jest.clearAllMocks();
  });

  describe('methods', () => {
    describe('methods:validateFooter', () => {
      it(`should throw an error if footer is not an OdsCartManagerFooter`, () => {
        setup();
        expect(() => controller.validateFooter({} as OdsCartManagerFooter)).toThrow('You must specify a footer of type OdsCartFooter');
      });

      it(`should not throw an error if footer doesn't exists`, () => {
        setup();
        expect(() => controller.validateFooter()).not.toThrow();
      });

      it(`should not throw an error if footer is a valid OdsCartManagerFooter`, () => {
        const footer: OdsCartManagerFooter = {
          items: []
        };
        setup();
        expect(() => controller.validateFooter(footer)).not.toThrow();
      });
    });

    describe('methods:getTotalAmount', () => {
      it('should return service.getTotalAmount', () => {
        const expected = Math.round(Math.random() * 5);
        setup();
        jest.spyOn(controller.service, 'getTotalAmount').mockImplementation(() => expected);
        const res = controller.getTotalAmount();

        expect(res).toBe(expected);
      });
    });


    describe('methods:getProductQuantity', () => {
      it('should return service.getProductQuantity', () => {
        const expected = Math.round(Math.random() * 5);
        setup();
        jest.spyOn(controller.service, 'getProductQuantity').mockImplementation(() => expected);
        const res = controller.getProductQuantity();

        expect(res).toBe(expected);
      });
    });
  });
});
