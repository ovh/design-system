import { OdsClearLoggerSpy, OdsInitializeLoggerSpy, OdsLoggerSpyReferences } from '@ovhcloud/ods-testing/src';
import { OdsButton } from './ods-button';
import { OdsButtonController } from './ods-button-controller';
import { OdsButtonMock } from './ods-button-mock';
import { OdsButtonSize } from './ods-button-size';
import { OdsButtonVariant } from './ods-button-variant';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { OdsLogger } from '../../logger/ods-logger';
import { Ods } from '../../configure/ods';

describe('spec:ods-button-controller', () => {
  let controller: OdsButtonController;
  let component: OdsButton;
  let loggerSpyReferences: OdsLoggerSpyReferences;

  Ods.instance().logging(false);

  function setup(attributes: Partial<OdsButton> = {}) {
    component = { ...component, ...attributes };
    controller = new OdsButtonController(component);
  }

  beforeEach(() => {
    component = new OdsButtonMock();

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
          color: OdsThemeColorIntent.default,
          size: OdsButtonSize.md,
          variant: OdsButtonVariant.flat
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
        component.size = 'size' as OdsButtonSize;

        controller.validateAttributes();

        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledWith(expected);
        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledTimes(1);
      });

      it('should call console.warn with wrong variant', () => {
        const expected = 'The variant attribute must have a value from [flat, stroked, ghost]';
        component.variant = 'variant' as OdsButtonVariant;

        controller.validateAttributes();

        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledWith(expected);
        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledTimes(1);
      });
    });
    describe('methods:mutateAttributes', () => {
      beforeEach(() => {
        setup({
          variant: OdsButtonVariant.flat
        });
      });

      it('should not mutate attributes if circle attribute is false', () => {
        controller.mutateAttributes();

        expect(component.variant).toBe(OdsButtonVariant.flat);
        expect(component.inline).toBe(undefined);
      });

      it('should mutate attributes if circle attribute is true', () => {
        component.circle = true;

        controller.mutateAttributes();
        expect(component.variant).toBe(OdsButtonVariant.ghost);
      });
    })
  });
});
