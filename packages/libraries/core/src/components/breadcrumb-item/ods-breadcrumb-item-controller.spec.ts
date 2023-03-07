import { OdsClearLoggerSpy, OdsInitializeLoggerSpy, OdsLoggerSpyReferences } from '@ovhcloud/ods-testing/src';

import { Ods } from '../../configure/ods';
import { OdsBreadcrumbItem } from './ods-breadcrumb-item';
import { OdsBreadcrumbItemController } from './ods-breadcrumb-item-controller';
import { OdsBreadcrumbItemMock } from './ods-breadcrumb-item-mock';
import { OdsBreadcrumbItemReferrerpolicy } from './ods-breadcrumb-item-referrerpolicy';
import { OdsHTMLAnchorElementRel } from '../../types/ods-html-anchor-element-rel';
import { OdsHTMLAnchorElementTarget } from '../../types/ods-html-anchor-element-target';
import { OdsLogger } from '../../logger/ods-logger';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

describe('spec:ods-breadcrumb-item-controller', () => {
  let controller: OdsBreadcrumbItemController;
  let component: OdsBreadcrumbItem;
  let loggerSpyReferences: OdsLoggerSpyReferences;

  Ods.instance().logging(false);

  function setup(attributes: Partial<OdsBreadcrumbItem> = {}) {
    component = { ...component, ...attributes };
    controller = new OdsBreadcrumbItemController(component);
  }

  beforeEach(() => {
    component = new OdsBreadcrumbItemMock();

    const loggerMocked = new OdsLogger('myLoggerMocked');
    loggerSpyReferences = OdsInitializeLoggerSpy({
      loggerMocked: loggerMocked as never,
      spiedClass: OdsBreadcrumbItemController,
    });
  });

  afterEach(() => {
    OdsClearLoggerSpy(loggerSpyReferences);
    jest.clearAllMocks();
  });

  describe('methods', () => {
    beforeEach(() => {
      setup({
        color: OdsThemeColorIntent.default,
        referrerpolicy: OdsBreadcrumbItemReferrerpolicy.origin,
        rel: OdsHTMLAnchorElementRel.noreferrer,
        target: OdsHTMLAnchorElementTarget._blank,
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

      it('should call console.warn with wrong target', () => {
        const expected = 'The target attribute must have a value from [_blank, _self, _parent, _top]';
        component.target = '_target' as OdsHTMLAnchorElementTarget;

        controller.validateAttributes();

        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledWith(expected);
        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledTimes(1);
      });
    });
  });
});
