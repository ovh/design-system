import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { OdsChipController } from './controller';
import { ODS_CHIP_SIZE } from '../constants/chip-size';
import { ODS_CHIP_VARIANT } from '../constants/chip-variant';
import { OsdsChip } from '../osds-chip';

class OdsChipMock extends OsdsChip {
  constructor(attribute: Partial<OsdsChip>) {
    super();
    Object.assign(this, attribute);
  }
}

describe('spec:ods-chip-controller', () => {
  let controller: OdsChipController;
  let component: OsdsChip;

  function setup(attributes: Partial<OsdsChip> = {}) {
    component = new OdsChipMock(attributes);
    controller = new OdsChipController(component);
  }

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('methods', () => {
    beforeEach(() => {
      jest.spyOn(console, 'warn');

      setup({
        color: ODS_THEME_COLOR_INTENT.default,
        size: ODS_CHIP_SIZE.md,
        variant: ODS_CHIP_VARIANT.flat,
      });
    });

    describe('methods:validateAttributes', () => {
      it('should not call console.warn', () => {
        controller.validateAttributes();
        expect(console.warn).toHaveBeenCalledTimes(0);
      });

      it('should call console.warn with wrong color', () => {
        const expected = 'The color attribute must have a value from [accent, default, error, info, primary, promotion, success, text, warning]';
        component.color = 'color' as ODS_THEME_COLOR_INTENT;

        controller.validateAttributes();

        expect(console.warn).toHaveBeenCalledWith(expected);
        expect(console.warn).toHaveBeenCalledTimes(1);
      });

      it('should call console.warn with wrong size', () => {
        const expected = 'The size attribute must have a value from [sm, md]';
        component.size = 'size' as ODS_CHIP_SIZE;

        controller.validateAttributes();

        expect(console.warn).toHaveBeenCalledWith(expected);
        expect(console.warn).toHaveBeenCalledTimes(1);
      });

      it('should call console.warn with wrong variant', () => {
        const expected = 'The variant attribute must have a value from [flat, stroked]';
        component.variant = 'variant' as ODS_CHIP_VARIANT;

        controller.validateAttributes();

        expect(console.warn).toHaveBeenCalledWith(expected);
        expect(console.warn).toHaveBeenCalledTimes(1);
      });
    });
  });
});
