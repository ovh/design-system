import { OdsClearLoggerSpy, OdsInitializeLoggerSpy, OdsLoggerSpyReferences } from '@ovhcloud/ods-testing/src';
import { OdsLocationTile } from './ods-location-tile';
import { OdsLocationTileController } from './ods-location-tile-controller';
import { OdsLocationTileMock } from './ods-location-tile-mock';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { OdsLogger } from '../../logger/ods-logger';
import { Ods } from '../../configure/ods';

describe('spec:ods-location-tile-controller', () => {
  let controller: OdsLocationTileController;
  let component: OdsLocationTile;
  let loggerSpyReferences: OdsLoggerSpyReferences;

  Ods.instance().logging(false);

  function setup(attributes: Partial<OdsLocationTile> = {}) {
    component = { ...component, ...attributes };
    controller = new OdsLocationTileController(component);
  }

  beforeEach(() => {
    component = new OdsLocationTileMock();

    const loggerMocked = new OdsLogger('myLoggerMocked');
    loggerSpyReferences = OdsInitializeLoggerSpy({
      loggerMocked: loggerMocked as never,
      spiedClass: OdsLocationTileController
    });
  });

  afterEach(() => {
    OdsClearLoggerSpy(loggerSpyReferences);
  });

  describe('methods', () => {
    beforeEach(() => {
      setup({
        color: OdsThemeColorIntent.default
      });
    });

    describe('methods:validateAttributes', () => {
      it('should not call console.warn', () => {
        controller.validateAttributes();
        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledTimes(0);
      });

      it('should call console.warn with wrong color', () => {
        const expected = 'The color attribute must have a value from [default, primary, text, accent, error, warning, success, info, promotion]';
        component.color = 'color' as OdsThemeColorIntent;

        controller.validateAttributes();

        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledWith(expected);
        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledTimes(1);
      });
    });
  });
});
