import type { OdsLoggerSpyReferences } from '@ovhcloud/ods-common-testing';
import { OsdsTile } from '../osds-tile';
import { OdsTileController } from './controller';
import { ODS_TILE_SIZE } from '../constants/tile-size';
import { ODS_TILE_VARIANT } from '../constants/tile-variant';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { OdsClearLoggerSpy, OdsInitializeLoggerSpy } from '@ovhcloud/ods-common-testing';
import { Ods, OdsLogger } from '@ovhcloud/ods-common-core';

class OsdsTileMock extends OsdsTile {
  constructor(attribute: Partial<OsdsTile>) {
    super();
    Object.assign(this, attribute);
  }
}

describe('spec:ods-tile-controller', () => {
  let controller: OdsTileController;
  let component: OsdsTile;
  let loggerSpyReferences: OdsLoggerSpyReferences;

  Ods.instance().logging(false);

  function setup(attributes: Partial<OsdsTile> = {}) {
    component = new OsdsTileMock(attributes);
    controller = new OdsTileController(component);
  }

  beforeEach(() => {
    const loggerMocked = new OdsLogger('myLoggerMocked');
    loggerSpyReferences = OdsInitializeLoggerSpy({
      loggerMocked: loggerMocked as never,
      spiedClass: OdsTileController,
    });
  });

  afterEach(() => {
    OdsClearLoggerSpy(loggerSpyReferences);
  });

  describe('methods', () => {
    describe('methods:validateAttributes', () => {
      beforeEach(() => {
        setup({
          color: ODS_THEME_COLOR_INTENT.default,
          size: ODS_TILE_SIZE.md,
          variant: ODS_TILE_VARIANT.flat,
        });
      });

      it('should not call console.warn', () => {
        controller.validateAttributes();
        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledTimes(0);
      });

      it('should call console.warn with wrong color', () => {
        const expected = 'The color attribute must have a value from [accent, default, error, info, primary, promotion, success, text, warning]';
        component.color = 'color' as ODS_THEME_COLOR_INTENT;

        controller.validateAttributes();

        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledWith(expected);
        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledTimes(1);
      });

      it('should call console.warn with wrong size', () => {
        const expected = 'The size attribute must have a value from [sm, md]';
        component.size = 'size' as ODS_TILE_SIZE;

        controller.validateAttributes();

        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledWith(expected);
        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledTimes(1);
      });

      it('should call console.warn with wrong color', () => {
        const expected = 'The variant attribute must have a value from [flat, stroked, ghost, hollow]';
        component.variant = 'variant' as ODS_TILE_VARIANT;

        controller.validateAttributes();

        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledWith(expected);
        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledTimes(1);
      });
    });

    describe('methods:handleClick', () => {
      it('should call console.log', () => {
        setup();

        controller.handleClick();

        expect(loggerSpyReferences.methodSpies.log).toHaveBeenCalledWith('[tile]', 'clicked');
        expect(loggerSpyReferences.methodSpies.log).toHaveBeenCalledTimes(1);
      });
    });
  });
});
