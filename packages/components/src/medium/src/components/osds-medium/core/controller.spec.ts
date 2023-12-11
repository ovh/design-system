import type { OdsLoggerSpyReferences } from '@ovhcloud/ods-common-testing';
import { Ods, OdsLogger } from '@ovhcloud/ods-common-core';
import { OdsClearLoggerSpy, OdsInitializeLoggerSpy } from '@ovhcloud/ods-common-testing';
import { OdsMediumController } from './controller';
import { DEFAULT_ATTRIBUTE } from '../constants/default-attributes';
import { OsdsMedium } from '../osds-medium';

class OdsMediumMock extends OsdsMedium {
  constructor(attribute: Partial<OsdsMedium>) {
    super();
    Object.assign(this, attribute);
  }

  beforeInit = jest.fn();
}

describe('spec:ods-medium-controller', () => {
  let controller: OdsMediumController;
  let component: OsdsMedium;
  let loggerSpyReferences: OdsLoggerSpyReferences;

  Ods.instance().logging(false);

  function setup(attributes: Partial<OsdsMedium> = {}): void {
    component = new OdsMediumMock(attributes);
    controller = new OdsMediumController(component);
  }

  beforeEach(() => {
    const loggerMocked = new OdsLogger('myLoggerMocked');
    loggerSpyReferences = OdsInitializeLoggerSpy({
      loggerMocked: loggerMocked as never,
      spiedClass: OdsMediumController,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
    OdsClearLoggerSpy(loggerSpyReferences);
  });

  it('should initialize', () => {
    setup();
    expect(controller).toBeTruthy();
  });

  describe('methods', () => {
    describe('methods:validateAlt', () => {
      it('should be checked at component creation', () => {
        setup();
        controller.validateAlt(DEFAULT_ATTRIBUTE.alt);
        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalled();
      });

      it('should throw a console.warn when alt is not set', () => {
        setup();
        controller.validateAlt('');

        const expected = 'The alt attribute must be set';
        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledWith(expected);
      });
    });

    describe('methods:validateSrc', () => {
      it('should be checked at component creation', () => {
        setup();
        controller.validateSrc(DEFAULT_ATTRIBUTE.src);
        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalled();
      });

      it('should throw a console.warn when src is not set', () => {
        setup();
        controller.validateSrc('');
        const expected = 'The src attribute must be set';
        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledWith(expected);
      });
    });

    describe('methods:validateHeight', () => {
      it('should be not be checked with empty value', () => {
        setup();
        controller.validateHeight(DEFAULT_ATTRIBUTE.height);
        expect(loggerSpyReferences.methodSpies.warn).not.toHaveBeenCalled();
      });

      it('should throw a console.warn when height is not an integer value', () => {
        setup();
        controller.validateHeight(Math.abs(Math.random() * 999));
        const expected = 'The height attribute value must be an integer';
        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledWith(expected);
      });

      it('should throw a console.warn when height is not a positive value', () => {
        setup();
        controller.validateHeight(-Math.abs(Math.floor(Math.random() * 999)));
        const expected = 'The height attribute must have a positive value';
        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledWith(expected);
      });
    });

    describe('methods:validateWidth', () => {
      it('should be not be checked with empty value', () => {
        setup();
        controller.validateWidth(DEFAULT_ATTRIBUTE.width);
        expect(loggerSpyReferences.methodSpies.warn).not.toHaveBeenCalled();
      });

      it('should throw a console.warn when width is not an integer value', () => {
        setup();
        controller.validateWidth(Math.abs(Math.random() * 999));
        const expected = 'The width attribute value must be an integer';
        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledWith(expected);
      });

      it('should throw a console.warn when width is not a positive value', () => {
        setup();
        controller.validateWidth(-Math.abs(Math.floor(Math.random() * 999)));
        const expected = 'The width attribute must have a positive value';
        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledWith(expected);
      });
    });
  });
});
