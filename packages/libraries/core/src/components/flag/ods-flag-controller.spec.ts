jest.mock('../../content/ods-load-content');  // keep jest.mock before any import
jest.mock('../../utils/string/ods-get-src');  // keep jest.mock before any import
jest.mock('../../utils/path/ods-get-asset-path'); // keep jest.mock before any import
import { odsGetSrc } from '../../utils/string/ods-get-src';
import { odsGetAssetPath } from '../../utils/path/ods-get-asset-path';
import { ODS_COUNTRY_ISO_CODE, OdsCountryIsoCodeList } from '../../i18n/ods-country-iso-codes.types';
import { OdsFlag } from './ods-flag';
import { OdsFlagController } from './ods-flag-controller';
import { OdsFlagMock } from './ods-flag.mock';
import {
  OdsClearLoggerSpy,
  OdsInitializeLoggerSpy,
  OdsLoggerSpyReferences
} from '@ovhcloud/ods-testing/src';
let spyOnValidateISO: jest.SpyInstance<void, jest.ArgsType<OdsFlagController['validateISO']>>;
let spyOnGetUrl: jest.SpyInstance<void, jest.ArgsType<OdsFlagController['getUrl']>>;
let spyOnGetAssetPath: jest.SpyInstance<string, jest.ArgsType<OdsFlagBehavior['getAssetPath']>>;
import { OdsLogger } from '../../logger/ods-logger';
import { Ods } from '../../configure/ods';
import { OdsLoadContent } from '../../content/ods-load-content';
import { OdsFlagBehavior } from './ods-flag-behavior';

type GetSrcType = jest.Mock<ReturnType<typeof odsGetSrc>, Parameters<typeof odsGetSrc>>;
type OdsGetAssetPathType = jest.Mock<ReturnType<typeof odsGetAssetPath>, Parameters<typeof odsGetAssetPath>>;

describe('spec:ods-flag-controller', () => {
  let controller: OdsFlagController;
  let loadContent: OdsLoadContent;
  let loadContentSpy: jest.SpyInstance<OdsLoadContent, unknown[]>;
  let component: OdsFlag;
  let loggerSpyReferences: OdsLoggerSpyReferences;
  let odsGetSrcFct: GetSrcType;
  let odsGetAssetPathFct: OdsGetAssetPathType;
  let el: HTMLElement;

  Ods.instance().logging(false);
  const logger = new OdsLogger('spec:ods-flag-controller');

  function setup(attributes: Partial<OdsFlag> = {}) {
    component = { ...component, ...attributes };
    controller = new OdsFlagController(component);

    loadContentSpy = (OdsLoadContent as unknown as jest.SpyInstance<OdsLoadContent, unknown[]>);

    loadContent = loadContentSpy.mock.instances[ 0 ];
  }

  beforeEach(() => {
    component = new OdsFlagMock();
    el = document.createElement('div') as HTMLElement;
    component.hostElement = el;
    const loggerMocked = new OdsLogger('myLoggerMocked');
    loggerSpyReferences = OdsInitializeLoggerSpy({
      loggerMocked: loggerMocked as never,
      spiedClass: OdsFlagController
    });
    odsGetSrcFct = odsGetSrc as unknown as GetSrcType;
    odsGetAssetPathFct = odsGetAssetPath as unknown as OdsGetAssetPathType;
  });

  afterEach(() => {
    OdsClearLoggerSpy(loggerSpyReferences);
    jest.clearAllMocks();
  });

  describe('methods', () => {
    describe('validateISO', () => {
      const expected = `The iso attribute must be one of those values ${OdsCountryIsoCodeList}`;

      beforeEach(() => {
        setup();
      });

      it('should clean up the wrong iso code', () => {
        controller.validateISO('test' as ODS_COUNTRY_ISO_CODE);
        expect(component.iso).toEqual(undefined);
      });

      it('should not call console.warn with correct iso', () => {
        controller.validateISO(ODS_COUNTRY_ISO_CODE.FR);
        expect(loggerSpyReferences.methodSpies.warn).not.toHaveBeenCalled();
      });

      it('should call console.warn with wrong iso', () => {
        controller.validateISO('ods' as ODS_COUNTRY_ISO_CODE);
        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledWith(expected);
        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledTimes(1);
      });

      it('should call console.warn with empty iso', () => {
        controller.validateISO();
        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledWith(expected);
        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledTimes(1);
      });
    });

    describe('load', () => {

      beforeEach(() => {
      });

      it('should call validation of iso', () => {
        setup();
        spyOnValidateISO =  jest.spyOn(controller, 'validateISO').mockImplementation((iso) => {
          logger.log(`resolving validateISO`, iso);
        });
        controller.load(true);
        expect(spyOnValidateISO).toHaveBeenCalled();
      });

      it('should call load management', () => {
        setup();
        controller.load(true);
        expect(loadContent.load).toHaveBeenCalledTimes(1);
      });
      it('should call getUrl', () => {
        // todo To remove since getUrl is a private method?
        setup();
        // @ts-ignore
        spyOnGetUrl =  jest.spyOn<any>(controller, 'getUrl');
        controller.load(true, false);
        expect(spyOnGetUrl).toHaveBeenCalled();
      });

      describe('standard svg', () => {
        it('should call the asset path of ods', () => {
          setup();
          controller.load(true);
          expect(odsGetAssetPathFct).toHaveBeenNthCalledWith(1, 'fr.svg', undefined);
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
          expect(loadContent.load).toHaveBeenNthCalledWith(1, 'my-mocked-path', true, true, true);
        });
      });

      describe('getSrc', () => {
        it('should call GetSrc function', () => {
          const src = 'my/src/fr.svg';
          setup({src});
          controller.load(true);
          expect(odsGetSrcFct).toHaveBeenNthCalledWith(1, 'my/src/fr.svg');
        });
      });

      describe('custom svg src', () => {
        it('should manage an url with src', () => {
          setup({src: 'my/src/fr.svg'});
          odsGetSrcFct.mockImplementation(() => 'my-mocked-result');
          controller.load(true);
          expect(loadContent.load).toHaveBeenNthCalledWith(1, 'my-mocked-result', true, true, true);
        });
      });

    });

    describe('onDestroy', () => {
      it('should call load management destroy', () => {
        setup();
        controller.onDestroy();
        expect(loadContent.onDestroy).toHaveBeenCalledTimes(1);
      });
    });

    describe('onInit', () => {
      it('should call waitUntilVisible of load management', () => {
        setup();
        controller.onInit(() => undefined, true);
        expect(loadContent.waitUntilVisible).toHaveBeenCalledTimes(1);
      });
      it('should call load of component once visible', () => {
        setup();
        jest.spyOn(loadContent, 'waitUntilVisible').mockImplementation((_host, _margin, cb) => cb());
        controller.onInit(() => true, true);
        expect(component.load).toHaveBeenCalledTimes(1);
      });
      it('should call onBecomeVisible cbk once visible', () => {
        let visible = false;
        setup();
        jest.spyOn(loadContent, 'waitUntilVisible').mockImplementation((_host, _margin, cb) => cb());
        controller.onInit(() => visible = true, true);
        expect(visible).toEqual(true);
      });
    });

  });
});
