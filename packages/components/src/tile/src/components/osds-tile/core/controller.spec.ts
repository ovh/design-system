import { Ods } from '@ovhcloud/ods-common-core';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { OdsTileController } from './controller';
import { ODS_TILE_SIZE } from '../constants/tile-size';
import { ODS_TILE_VARIANT } from '../constants/tile-variant';
import { OsdsTile } from '../osds-tile';


class OsdsTileMock extends OsdsTile {
  constructor(attribute: Partial<OsdsTile>) {
    super();
    Object.assign(this, attribute);
  }
}

describe('spec:ods-tile-controller', () => {
  let controller: OdsTileController;
  let component: OsdsTile;
  let consoleWarnSpy: jest.SpyInstance;

  Ods.instance().logging(false);

  function setup(attributes: Partial<OsdsTile> = {}) {
    component = new OsdsTileMock(attributes);
    controller = new OdsTileController(component);
  }

  beforeEach(() => {
    consoleWarnSpy = jest.spyOn(console, 'warn');
  });

  afterEach(() => {
    jest.clearAllMocks();
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
        expect(consoleWarnSpy).toHaveBeenCalledTimes(0);
      });

      it('should call console.warn with wrong color', () => {
        const expected = 'The color attribute must have a value from [accent, default, error, info, primary, promotion, success, text, warning]';
        component.color = 'color' as ODS_THEME_COLOR_INTENT;

        controller.validateAttributes();

        expect(consoleWarnSpy).toHaveBeenCalledWith(expected);
        expect(consoleWarnSpy).toHaveBeenCalledTimes(1);
      });

      it('should call console.warn with wrong size', () => {
        const expected = 'The size attribute must have a value from [sm, md]';
        component.size = 'size' as ODS_TILE_SIZE;

        controller.validateAttributes();

        expect(consoleWarnSpy).toHaveBeenCalledWith(expected);
        expect(consoleWarnSpy).toHaveBeenCalledTimes(1);
      });

      it('should call console.warn with wrong color', () => {
        const expected = 'The variant attribute must have a value from [flat, stroked, ghost, hollow]';
        component.variant = 'variant' as ODS_TILE_VARIANT;

        controller.validateAttributes();

        expect(consoleWarnSpy).toHaveBeenCalledWith(expected);
        expect(consoleWarnSpy).toHaveBeenCalledTimes(1);
      });
    });
  });
});
