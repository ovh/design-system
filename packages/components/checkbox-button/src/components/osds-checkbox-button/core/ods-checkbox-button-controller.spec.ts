import { ODS_ICON_NAME } from '@ovhcloud/ods-component-icon';

import { OdsCheckboxButtonController } from './ods-checkbox-button-controller';
import { OsdsCheckboxButton } from '../osds-checkbox-button';

class OdsCheckboxButtonMock extends OsdsCheckboxButton {
  constructor(attribute: Partial<OsdsCheckboxButton>) {
    super();
    Object.assign(this, attribute);
  }
}

describe('spec:ods-checkbox-button-controller', () => {
  let controller: OdsCheckboxButtonController;
  let component: OsdsCheckboxButton;

  function setup(attributes: Partial<OsdsCheckboxButton> = {}) {
    component = new OdsCheckboxButtonMock(attributes);
    controller = new OdsCheckboxButtonController();
  }

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should initialize', () => {
    setup();
    expect(controller).toBeTruthy();
  });

  describe('methods', () => {
    describe('methods:computeIconName', () => {
      it('should return undefined when icon is not indeterminate and checked', () => {
        setup();
        const icon = controller.computeIconName();
        expect(icon).toEqual(undefined);
      });

      it('should return minus icon (indeterminate case)', () => {
        setup();
        const icon = controller.computeIconName(false, true);
        expect(icon).toEqual(ODS_ICON_NAME.MINUS);
      });

      it('should return ok icon (checked case)', () => {
        setup();
        const icon = controller.computeIconName(true, false);
        expect(icon).toEqual(ODS_ICON_NAME.OK);
      });
    });
  });
});
