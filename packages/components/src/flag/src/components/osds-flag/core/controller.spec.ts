const mockOnDestroy = jest.fn();
const mockLoad = jest.fn();
const mockOdsGetSrc = jest.fn();
const mockWaitUntilVisible = jest.fn();

jest.mock('@ovhcloud/ods-common-core', () => ({
  ...jest.requireActual('@ovhcloud/ods-common-core'),
  OdsLoadContent: jest.fn().mockImplementation(() => ({
    load: mockLoad,
    onDestroy: mockOnDestroy,
    waitUntilVisible: mockWaitUntilVisible,
  })),
  odsGetAssetPath: jest.fn(),
  odsGetSrc: mockOdsGetSrc,
}));

import type { OdsLoggerSpyReferences } from '@ovhcloud/ods-common-testing';
import {
  Ods,
  OdsLogger,
  odsGetAssetPath,
  odsGetSrc,
} from '@ovhcloud/ods-common-core';
import { OdsClearLoggerSpy, OdsInitializeLoggerSpy } from '@ovhcloud/ods-common-testing';
import { OdsFlagController } from './controller';
import { ODS_FLAG_ISO_CODE, ODS_FLAG_ISO_CODES } from '../constants/flag-iso-code';
import { OsdsFlag } from '../osds-flag';

class OdsFlagMock extends OsdsFlag {
  constructor(attribute: Partial<OsdsFlag>) {
    super();
    Object.assign(this, attribute);
  }

  beforeRender = jest.fn();
  controller: OdsFlagController = jest.fn() as unknown as OdsFlagController;
  getAssetPath = jest.fn();
  load = jest.fn();
  onDestroy = jest.fn();
  onInit = jest.fn();
}

describe('ods-flag-controller', () => {
  let controller: OdsFlagController;
  let component: OsdsFlag;
  let loggerSpyReferences: OdsLoggerSpyReferences;
  let spyOnValidateISO: jest.SpyInstance<void, jest.ArgsType<OdsFlagController['validateISO']>>;
  let spyOnGetUrl: jest.SpyInstance<void, jest.ArgsType<OdsFlagController['getUrl']>>;
  let spyOnGetAssetPath: jest.SpyInstance<string, jest.ArgsType<OdsFlagController['component']['getAssetPath']>>;

  Ods.instance().logging(false);

  function setup(attributes: Partial<OsdsFlag> = {}): void {
    component = new OdsFlagMock(attributes);
    controller = new OdsFlagController(component);
  }

  beforeEach(() => {
    const loggerMocked = new OdsLogger('myLoggerMocked');
    loggerSpyReferences = OdsInitializeLoggerSpy({
      loggerMocked: loggerMocked as never,
      spiedClass: OdsFlagController,
    });
  });

  afterEach(() => {
    OdsClearLoggerSpy(loggerSpyReferences);
    jest.clearAllMocks();
  });

  describe('methods', () => {
    describe('validateISO', () => {
      const expected = `The iso attribute must be one of those values ${ODS_FLAG_ISO_CODES}`;

      beforeEach(() => {
        setup();
      });

      it('should not call console.warn with correct iso', () => {
        controller.validateISO(ODS_FLAG_ISO_CODE.FR);
        expect(loggerSpyReferences.methodSpies.warn).not.toHaveBeenCalled();
      });

      it('should call console.warn with wrong iso', () => {
        // @ts-ignore for test purpose
        controller.validateISO('ods');

        expect(component.iso).toBe(undefined);
        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledWith(expected);
        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledTimes(1);
      });

      it('should call console.warn with empty iso', () => {
        controller.validateISO();

        expect(component.iso).toBe(undefined);
        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledWith(expected);
        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledTimes(1);
      });
    });

    describe('load', () => {
      it('should call validation of iso', () => {
        setup();
        spyOnValidateISO = jest.spyOn(controller, 'validateISO');

        controller.load(true);

        expect(spyOnValidateISO).toHaveBeenCalled();
      });

      it('should call load with no url', () => {
        setup();

        controller.load(true);

        expect(mockLoad).toHaveBeenCalledWith('', true, true, true);
      });

      it('should call load with url', () => {
        const dummyUrl = 'dummy url';
        setup();
        // @ts-ignore to spy private method
        spyOnGetUrl = jest.spyOn<any>(controller, 'getUrl').mockReturnValueOnce(dummyUrl); // eslint-disable-line

        controller.load(false, false);

        expect(spyOnGetUrl).toHaveBeenCalled();
        expect(mockLoad).toHaveBeenCalledWith(dummyUrl, false, true, false);
      });

      describe('standard svg', () => {
        it('should call the asset path of ods', () => {
          setup();

          controller.load(true);

          expect(odsGetAssetPath).toHaveBeenNthCalledWith(1, 'fr.svg', '');
        });

        it('should call getAssetPath from component', () => {
          setup();
          const path = 'my-mocked-path';
          spyOnGetAssetPath = jest.spyOn(component, 'getAssetPath').mockImplementation(() => path);

          controller.load(true);

          expect(spyOnGetAssetPath).toHaveBeenCalled();
        });

        it('should call load with correct path', () => {
          setup();
          const path = 'my-mocked-path';
          spyOnGetAssetPath = jest.spyOn(component, 'getAssetPath').mockImplementation(() => path);

          controller.load(true);

          expect(mockLoad).toHaveBeenNthCalledWith(1, path, true, true, true);
        });
      });

      describe('getSrc', () => {
        it('should call GetSrc function', () => {
          const src = 'my/src/fr.svg';
          setup({ src });

          controller.load(true);

          expect(odsGetSrc).toHaveBeenNthCalledWith(1, src);
        });
      });

      describe('custom svg src', () => {
        it('should manage an url with src', () => {
          setup({ src: 'my/src/fr.svg' });
          mockOdsGetSrc.mockReturnValueOnce('my-mocked-result');
          controller.load(true);
          expect(mockLoad).toHaveBeenNthCalledWith(1, 'my-mocked-result', true, true, true);
        });
      });
    });

    describe('onDestroy', () => {
      it('should call load management destroy', () => {
        setup();

        controller.onDestroy();

        expect(mockOnDestroy).toHaveBeenCalledTimes(1);
      });
    });

    describe('onInit', () => {
      it('should call waitUntilVisible of load management', () => {
        setup();

        controller.onInit(() => undefined, true);

        expect(mockWaitUntilVisible).toHaveBeenCalledTimes(1);
      });

      it('should call load of component once visible', () => {
        setup();
        mockWaitUntilVisible.mockImplementation((_host, _margin, cb) => cb());

        controller.onInit(() => true, true);

        expect(component.load).toHaveBeenCalledTimes(1);
      });

      it('should call onBecomeVisible cbk once visible', () => {
        let visible = false;
        setup();
        mockWaitUntilVisible.mockImplementation((_host, _margin, cb) => cb());

        controller.onInit(() => visible = true, true);

        expect(visible).toBe(true);
      });
    });
  });
});
