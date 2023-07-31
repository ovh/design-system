import type { OdsLoggerSpyReferences } from '@ovhcloud/ods-common-testing';
import { Ods, OdsHTMLAnchorElementRel, OdsHTMLAnchorElementTarget, OdsLogger } from '@ovhcloud/ods-common-core';
import { OdsClearLoggerSpy, OdsInitializeLoggerSpy } from '@ovhcloud/ods-common-testing';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { ODS_LINK_REFERRER_POLICY } from '../constants/referrer-policies';
import { OdsLinkController } from './controller';
import { OsdsLink } from '../osds-link';

class OdsLinkMock extends OsdsLink {
  constructor(attribute: Partial<OsdsLink>) {
    super();
    Object.assign(this, attribute)
  }
}

describe('spec:ods-link-controller', () => {
  let controller: OdsLinkController;
  let component: OsdsLink;
  let loggerSpyReferences: OdsLoggerSpyReferences;

  Ods.instance().logging(false);

  function setup(attributes: Partial<OsdsLink> = {}) {
    component = new OdsLinkMock(attributes);
    controller = new OdsLinkController(component);
  }

  beforeEach(() => {
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
        referrerpolicy: ODS_LINK_REFERRER_POLICY.origin,
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
