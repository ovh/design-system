import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { OdsIconController } from './controller';
import { ODS_ICON_SIZE } from '../constants/icon-size';
import { OsdsIcon } from '../osds-icon';

class OsdsIconMock extends OsdsIcon {
  constructor(attribute: Partial<OsdsIcon>) {
    super();
    Object.assign(this, attribute);
  }
}

describe('spec:ods-icon-controller', () => {
  let controller: OdsIconController;
  let component: OsdsIcon;

  function setup(attributes: Partial<OsdsIcon> = {}): void {
    component = new OsdsIconMock(attributes);
    controller = new OdsIconController(component);
  }

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('methods', () => {
    describe('methods:validateAttributes', () => {
      beforeEach(() => {
        jest.spyOn(console, 'warn');

        setup({
          color: ODS_THEME_COLOR_INTENT.default,
          size: ODS_ICON_SIZE.md,
        });
      });

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
        const expected = 'The size attribute must have a value from [xxs, xs, sm, md, lg, xl]';
        component.size = 'size' as ODS_ICON_SIZE;

        controller.validateAttributes();

        expect(console.warn).toHaveBeenCalledWith(expected);
        expect(console.warn).toHaveBeenCalledTimes(1);
      });
    });

    describe('methods:validateAriaName', () => {
      beforeEach(() => {
        setup();
      });

      it('should not call console.warn', () => {
        controller.validateAriaName('ariaName');
        expect(console.warn).toHaveBeenCalledTimes(0);
      });

      it('should call console.warn with empty ariaName', () => {
        const expected = 'The aria-name attribute must have a value';

        controller.validateAriaName('');

        expect(console.warn).toHaveBeenCalledWith(expected);
        expect(console.warn).toHaveBeenCalledTimes(1);
      });
    });
  });
});
