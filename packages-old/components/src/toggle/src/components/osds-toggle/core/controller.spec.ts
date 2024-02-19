import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { OdsToggleController } from './controller';
import { OsdsToggle } from '../osds-toggle';

class OdsToggleMock extends OsdsToggle {
  constructor(attribute: Partial<OsdsToggle>) {
    super();
    Object.assign(this, attribute);
  }

  controller: OdsToggleController = jest.fn() as unknown as OdsToggleController;
  beforeRender = jest.fn();
}

describe('spec:ods-toggle-controller', () => {
  let controller: OdsToggleController;
  let component: OsdsToggle;

  function setup(attributes: Partial<OsdsToggle> = {}) {
    component = new OdsToggleMock(attributes);
    controller = new OdsToggleController(component);
  }

  beforeEach(() => {
    jest.spyOn(console, 'warn');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('methods', () => {
    beforeEach(() => {
      setup({
        color: ODS_THEME_COLOR_INTENT.default,
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
    });
  });
});
