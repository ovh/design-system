import { OdsCheckboxButton } from './ods-checkbox-button';
import { OdsCheckboxButtonController } from './ods-checkbox-button-controller';
import { OdsCheckboxButtonMock } from './ods-checkbox-button-mock';
import { OdsIconName } from '../icon/ods-icon-size';

describe('spec:ods-checkbox-button-controller', () => {
  let controller: OdsCheckboxButtonController;
  let component: OdsCheckboxButton;

  function setup(attributes: Partial<OdsCheckboxButton> = {}) {
    component = { ...component, ...attributes };
    controller = new OdsCheckboxButtonController(component);
  }

  beforeEach(() => {
    component = new OdsCheckboxButtonMock() as OdsCheckboxButton;
  });

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
        expect(icon).toEqual(OdsIconName.MINUS);
      });

      it('should return ok icon (checked case)', () => {
        setup();
        const icon = controller.computeIconName(true, false);
        expect(icon).toEqual(OdsIconName.OK);
      });
    });
  });
});
