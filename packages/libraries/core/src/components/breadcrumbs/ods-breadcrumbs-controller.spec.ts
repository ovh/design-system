import { OdsClearLoggerSpy, OdsInitializeLoggerSpy, OdsLoggerSpyReferences } from '@ovhcloud/ods-testing/src';

import { Ods } from '../../configure/ods';
import { OdsBreadcrumbs } from './ods-breadcrumbs';
import { OdsBreadcrumbsController } from './ods-breadcrumbs-controller';
import { OdsBreadcrumbsMock } from './ods-breadcrumbs-mock';
import { OdsBreadcrumbsReferrerpolicy } from './ods-breadcrumbs-referrerpolicy';
import { OdsHTMLAnchorElementRel } from '../../types/ods-html-anchor-element-rel';
import { OdsHTMLAnchorElementTarget } from '../../types/ods-html-anchor-element-target';
import { OdsLogger } from '../../logger/ods-logger';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

describe('spec:ods-breadcrumbs-controller', () => {
  let controller: OdsBreadcrumbsController;
  let component: OdsBreadcrumbs;
  let loggerSpyReferences: OdsLoggerSpyReferences;

  Ods.instance().logging(false);

  function setup(attributes: Partial<OdsBreadcrumbs> = {}) {
    component = { ...component, ...attributes };
    controller = new OdsBreadcrumbsController(component);
  }

  beforeEach(() => {
    component = new OdsBreadcrumbsMock();

    const loggerMocked = new OdsLogger('myLoggerMocked');
    loggerSpyReferences = OdsInitializeLoggerSpy({
      loggerMocked: loggerMocked as never,
      spiedClass: OdsBreadcrumbsController,
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
        referrerpolicy: OdsBreadcrumbsReferrerpolicy.origin,
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
