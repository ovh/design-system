import { OdsClearLoggerSpy, OdsInitializeLoggerSpy, OdsLoggerSpyReferences } from '@ovhcloud/ods-testing/src';
import { Ods } from '../../configure/ods';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { OdsTile } from './ods-tile';
import { OdsTileController } from './ods-tile-controller';
import { OdsTileMock } from './ods-tile-mock';
import { OdsTileSize } from './ods-tile-size';
import { OdsTileVariant } from './ods-tile-variant';
import { OdsLogger } from '../../logger/ods-logger';

describe('spec:ods-tile-controller', () => {
  let controller: OdsTileController;
  let component: OdsTile;
  let loggerSpyReferences: OdsLoggerSpyReferences;

  Ods.instance().logging(false);

  function setup(attributes: Partial<OdsTile> = {}) {
    component = { ...component, ...attributes };
    controller = new OdsTileController(component);
  }

  beforeEach(() => {
    component = new OdsTileMock();

    const loggerMocked = new OdsLogger('myLoggerMocked');
    loggerSpyReferences = OdsInitializeLoggerSpy({
      loggerMocked: loggerMocked as never,
      spiedClass: OdsTileController
    });
  });

  afterEach(() => {
    OdsClearLoggerSpy(loggerSpyReferences);
  });

  describe('methods', () => {
    describe('methods:validateAttributes', () => {
      beforeEach(() => {
        setup({
          color: OdsThemeColorIntent.default,
          size: OdsTileSize.md,
          variant: OdsTileVariant.flat
        });
      });

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

      it('should call console.warn with wrong size', () => {
        const expected = 'The size attribute must have a value from [sm, md]';
        component.size = 'size' as OdsTileSize;

        controller.validateAttributes();

        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledWith(expected);
        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledTimes(1);
      });

      it('should call console.warn with wrong color', () => {
        const expected = 'The variant attribute must have a value from [flat, stroked, ghost, hollow]';
        component.variant = 'variant' as OdsTileVariant;

        controller.validateAttributes();

        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledWith(expected);
        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledTimes(1);
      });
    });

    describe('methods:getTabIndex', () => {
      [false, true].forEach(disabled => {
        [false, true].forEach(interactive => {
          if (!disabled && interactive) {
            it('should return 0 [false, true]', () => {
              setup({disabled, interactive: interactive});
              const index = controller.getTabIndex();
              expect(index).toBe(0);
            });
          } else {
            it(`should return -1 [${disabled}, ${interactive}]`, () => {
              setup({disabled, interactive: interactive});
              const index = controller.getTabIndex();
              expect(index).toBe(-1);
            });
          }
        });
      });
    });

    describe('methods:handleClick', () => {
      it('should call console.log', () => {
        setup();

        controller.handleClick();

        expect(loggerSpyReferences.methodSpies.log).toHaveBeenCalledWith('[tile]', 'clicked');
        expect(loggerSpyReferences.methodSpies.log).toHaveBeenCalledTimes(1);
      })
    });
  });
});
