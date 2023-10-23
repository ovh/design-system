import type {OdsCartManagerFooter} from '../interfaces/attributes';
import type {OdsLoggerSpyReferences} from '@ovhcloud/ods-common-testing';
import {Ods, OdsLogger} from '@ovhcloud/ods-common-core';
import {OdsClearLoggerSpy, OdsInitializeLoggerSpy} from '@ovhcloud/ods-common-testing';
import {OdsCartManagerController} from './controller';
import {OsdsCartManager} from '../osds-cart-manager';

class OdsCartManagerMock extends OsdsCartManager {
  constructor(attribute: Partial<OsdsCartManager>) {
    super();
    Object.assign(this, attribute);
  }
}

describe('spec:ods-cart-manager-controller', () => {
  let controller: OdsCartManagerController;
  let component: OsdsCartManager;
  let loggerSpyReferences: OdsLoggerSpyReferences;

  Ods.instance().logging(false);

  function setup(attributes: Partial<OsdsCartManager> = {}) {
    component = new OdsCartManagerMock(attributes);
    controller = new OdsCartManagerController(component);
  }

  beforeEach(() => {
    const loggerMocked = new OdsLogger('myLoggerMocked');
    loggerSpyReferences = OdsInitializeLoggerSpy({
      loggerMocked: loggerMocked as never,
      spiedClass: OdsCartManagerController,
    });
  });

  afterEach(() => {
    OdsClearLoggerSpy(loggerSpyReferences);
    jest.clearAllMocks();
  });

  describe('methods', () => {
    describe('methods:validateFooter', () => {
      it('should throw an error if footer is not an OdsCartManagerFooter', () => {
        setup();
        expect(() => controller.validateFooter({} as OdsCartManagerFooter)).toThrow('You must specify a footer of type OdsCartFooter');
      });

      it('should not throw an error if footer doesn\'t exists', () => {
        setup();
        expect(() => controller.validateFooter()).not.toThrow();
      });

      it('should not throw an error if footer is a valid OdsCartManagerFooter', () => {
        const footer: OdsCartManagerFooter = {
          items: [],
        };
        setup();
        expect(() => controller.validateFooter(footer)).not.toThrow();
      });
    });

    describe('methods:getTotalAmount', () => {
      // FIXME actually test code that was previously hidden on service file
      xit('should return service.getTotalAmount', () => {
        const expected = Math.round(Math.random() * 5);
        setup();
        // jest.spyOn(controller.service, 'getTotalAmount').mockImplementation(() => expected);
        const res = controller.getTotalAmount();

        expect(res).toBe(expected);
      });
    });

    describe('methods:getProductQuantity', () => {
      // FIXME actually test code that was previously hidden on service file
      xit('should return service.getProductQuantity', () => {
        const expected = Math.round(Math.random() * 5);
        setup();
        // jest.spyOn(controller.service, 'getProductQuantity').mockImplementation(() => expected);
        const res = controller.getProductQuantity();

        expect(res).toBe(expected);
      });
    });
  });
});
