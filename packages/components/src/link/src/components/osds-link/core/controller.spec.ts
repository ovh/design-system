import { OdsHTMLAnchorElementRel, OdsHTMLAnchorElementTarget } from '@ovhcloud/ods-common-core';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { OdsLinkController } from './controller';
import { ODS_LINK_REFERRER_POLICY } from '../constants/referrer-policies';
import { OsdsLink } from '../osds-link';

class OdsLinkMock extends OsdsLink {
  constructor(attribute: Partial<OsdsLink>) {
    super();
    Object.assign(this, attribute);
  }
}

describe('spec:ods-link-controller', () => {
  let controller: OdsLinkController;
  let component: OsdsLink;

  function setup(attributes: Partial<OsdsLink> = {}) {
    component = new OdsLinkMock(attributes);
    controller = new OdsLinkController(component);
  }

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('methods', () => {
    beforeEach(() => {
      jest.spyOn(console, 'warn');

      setup({
        color: ODS_THEME_COLOR_INTENT.default,
        referrerpolicy: ODS_LINK_REFERRER_POLICY.origin,
        rel: OdsHTMLAnchorElementRel.noreferrer,
        target: OdsHTMLAnchorElementTarget._blank,
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

      it('should call console.warn with wrong target if href not empty', () => {
        const expected = 'The target attribute must have a value from [_blank, _self, _parent, _top]';
        component.href = 'not empty';
        component.target = '_target' as OdsHTMLAnchorElementTarget;

        controller.validateAttributes();

        expect(console.warn).toHaveBeenCalledWith(expected);
        expect(console.warn).toHaveBeenCalledTimes(1);
      });

      it('should not call console.warn with wrong target if href empty', () => {
        component.target = '_target' as OdsHTMLAnchorElementTarget;

        controller.validateAttributes();

        expect(console.warn).toHaveBeenCalledTimes(0);
      });
    });
  });
});
