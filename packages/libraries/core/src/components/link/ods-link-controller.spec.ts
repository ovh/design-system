import {
  OdsClearLoggerSpy,
  OdsInitializeLoggerSpy,
  OdsLoggerSpyReferences
} from '@ovhcloud/ods-testing/src';

import { Ods } from '../../configure/ods';
import { OdsLink } from './ods-link';
import { OdsLinkController } from './ods-link-controller';
import { OdsLinkMock } from './ods-link-mock';
import { OdsLinkReferrerpolicy } from './ods-link-referrerpolicy';
import { OdsHTMLAnchorElementRel } from '../../types/ods-html-anchor-element-rel';
import { OdsHTMLAnchorElementTarget } from '../../types/ods-html-anchor-element-target';
import { OdsLogger } from '../../logger/ods-logger';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

describe('spec:ods-link-controller', () => {
  let controller: OdsLinkController;
  let component: OdsLink;
  let loggerSpyReferences: OdsLoggerSpyReferences;

  Ods.instance().logging(false);

  function setup(attributes: Partial<OdsLink> = {}) {
    component = { ...component, ...attributes };
    controller = new OdsLinkController(component);
  }

  beforeEach(() => {
    component = new OdsLinkMock();

    const loggerMocked = new OdsLogger('myLoggerMocked');
    loggerSpyReferences = OdsInitializeLoggerSpy({
      loggerMocked: loggerMocked as never,
      spiedClass: OdsLinkController
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
        referrerpolicy: OdsLinkReferrerpolicy.origin,
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

      it('should call console.warn with wrong target if href not empty', () => {
        const expected = 'The target attribute must have a value from [_blank, _self, _parent, _top]';
        component.href = 'not empty';
        component.target = '_target' as OdsHTMLAnchorElementTarget;

        controller.validateAttributes();

        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledWith(expected);
        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledTimes(1);
      });

      it('should not call console.warn with wrong target if href empty', () => {
        component.target = '_target' as OdsHTMLAnchorElementTarget;

        controller.validateAttributes();

        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledTimes(0);
      });
    });
  });
});
