import { Ods, OdsLogger } from '@ovhcloud/ods-common-core';
import { OdsClearLoggerSpy, OdsInitializeLoggerSpy, OdsLoggerSpyReferences } from '@ovhcloud/ods-common-testing';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { ODS_BUTTON_SIZE } from '../constants/button-size';
import { ODS_BUTTON_VARIANT } from '../constants/button-variant';
import { OdsButtonController } from './controller';
import { OsdsButton } from '../osds-button';

class OdsButtonMock extends OsdsButton {
  constructor(attribute: Partial<OsdsButton>) {
    super();
    Object.assign(this, attribute)
  }
}

describe('spec:ods-button-controller', () => {
  let controller: OdsButtonController;
  let component: OsdsButton;
  let loggerSpyReferences: OdsLoggerSpyReferences;

  Ods.instance().logging(false);

  function setup(attributes: Partial<OsdsButton> = {}) {
    component = new OdsButtonMock(attributes);
    controller = new OdsButtonController(component);
  }

  beforeEach(() => {
    const loggerMocked = new OdsLogger('myLoggerMocked');
    loggerSpyReferences = OdsInitializeLoggerSpy({
      loggerMocked: loggerMocked as never,
      spiedClass: OdsButtonController
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
          size: ODS_BUTTON_SIZE.md,
          variant: ODS_BUTTON_VARIANT.flat
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
        component.size = 'size' as ODS_BUTTON_SIZE;

        controller.validateAttributes();

        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledWith(expected);
        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledTimes(1);
      });

      it('should call console.warn with wrong variant', () => {
        const expected = 'The variant attribute must have a value from [flat, stroked, ghost]';
        component.variant = 'variant' as ODS_BUTTON_VARIANT;

        controller.validateAttributes();

        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledWith(expected);
        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledTimes(1);
      });
    });
    describe('methods:mutateAttributes', () => {
      beforeEach(() => {
        setup({
          variant: ODS_BUTTON_VARIANT.flat
        });
      });

      it('should not mutate attributes if circle attribute is false', () => {
        controller.mutateAttributes();

        expect(component.variant).toBe(ODS_BUTTON_VARIANT.flat);
        expect(component.inline).toBe(false);
      });

      it('should mutate attributes if circle attribute is true', () => {
        component.circle = true;

        controller.mutateAttributes();

        expect(component.variant).toBe(ODS_BUTTON_VARIANT.ghost);
      });
    })
  });
});
