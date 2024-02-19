import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { OdsButtonController } from './controller';
import { ODS_BUTTON_SIZE } from '../constants/button-size';
import { ODS_BUTTON_VARIANT } from '../constants/button-variant';
import { OsdsButton } from '../osds-button';

class OdsButtonMock extends OsdsButton {
  constructor(attribute: Partial<OsdsButton>) {
    super();
    Object.assign(this, attribute);
  }
}

describe('spec:ods-button-controller', () => {
  let controller: OdsButtonController;
  let component: OsdsButton;

  function setup(attributes: Partial<OsdsButton> = {}) {
    component = new OdsButtonMock(attributes);
    controller = new OdsButtonController(component);
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
          size: ODS_BUTTON_SIZE.md,
          variant: ODS_BUTTON_VARIANT.flat,
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
        const expected = 'The size attribute must have a value from [sm, md]';
        component.size = 'size' as ODS_BUTTON_SIZE;

        controller.validateAttributes();

        expect(console.warn).toHaveBeenCalledWith(expected);
        expect(console.warn).toHaveBeenCalledTimes(1);
      });

      it('should call console.warn with wrong variant', () => {
        const expected = 'The variant attribute must have a value from [flat, stroked, ghost]';
        component.variant = 'variant' as ODS_BUTTON_VARIANT;

        controller.validateAttributes();

        expect(console.warn).toHaveBeenCalledWith(expected);
        expect(console.warn).toHaveBeenCalledTimes(1);
      });
    });

    describe('methods:mutateAttributes', () => {
      beforeEach(() => {
        setup({
          variant: ODS_BUTTON_VARIANT.flat,
        });
      });

      it('should not mutate attributes if circle attribute is false', () => {
        controller.mutateAttributes();

        expect(component.inline).toBe(false);
      });

      it('should mutate attributes if circle attribute is true', () => {
        component.circle = true;

        controller.mutateAttributes();

        expect(component.inline).toBe(true);
      });
    });
  });
});
