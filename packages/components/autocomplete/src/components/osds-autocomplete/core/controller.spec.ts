import { OdsAutocompleteController } from './controller';
import { OsdsAutocomplete } from '../osds-autocomplete';

class OsdsAutocompleteMock extends OsdsAutocomplete {
  constructor(attribute: Partial<OsdsAutocomplete>) {
    super();
    Object.assign(this, attribute);
  }
  emitFocus = jest.fn();
  emitBlur = jest.fn();
  emitAutocompleteValueChange = jest.fn();
}

describe('spec:ods-autocomplete-controller', () => {
  let controller: OdsAutocompleteController;
  let component: OsdsAutocomplete;

  function setup(attributes: Partial<OsdsAutocomplete> = {}) {
    component = new OsdsAutocompleteMock(attributes);
    controller = new OdsAutocompleteController(component);
  }

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('methods', () => {
    describe('methods:onFocus', () => {
      it('should set hasFocus to true and call emitFocus if component is not disabled', () => {
        setup();
        controller.onFocus();
        expect(component.hasFocus).toBe(true);
        expect(component.emitFocus).toHaveBeenCalledTimes(1);
      });

      it('should not change hasFocus and not call emitFocus if component is disabled', () => {
        setup({ disabled: true });
        controller.onFocus();
        expect(component.hasFocus).toBeFalsy();
        expect(component.emitFocus).not.toHaveBeenCalled();
      });
    });

    describe('methods:onBlur', () => {
      it('should set hasFocus to false and call emitBlur', () => {
        setup();
        controller.onBlur();
        expect(component.hasFocus).toBe(false);
        expect(component.emitBlur).toHaveBeenCalledTimes(1);
      });
    });

    describe('methods:onChange', () => {
      it('should update value if called with a valid value', () => {
        setup();
        const newValue = 'test';
        controller.onChange(newValue);
        expect(component.value).toBe(newValue);
      });
    });
  });
});
