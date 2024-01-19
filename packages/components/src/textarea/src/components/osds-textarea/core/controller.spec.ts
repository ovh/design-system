import type { OsdsTextarea } from '../osds-textarea';
import { OdsTextareaController } from './controller';

class OdsTextareaMock {
  constructor(attribute: Partial<OsdsTextarea>) {
    Object.assign(this, attribute);
  }

  controller = jest.fn() as unknown as OdsTextareaController<OsdsTextarea>;
  emitChange = jest.fn();
  internals = {
    setFormValue: jest.fn(),
  };
}

describe('ods-textarea-controller', () => {
  let controller: OdsTextareaController<OsdsTextarea>;
  let component: OsdsTextarea;

  function setup(attributes: Partial<OsdsTextarea> = {}): void {
    component = new OdsTextareaMock(attributes) as unknown as OsdsTextarea;
    controller = new OdsTextareaController(component);
  }

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('beforeInit', () => {
    it('should set value with defaultValue if value is undefined', () => {
      const defaultValue = 'default';
      setup({ defaultValue });

      controller.beforeInit();

      expect(component.value).toBe(defaultValue);
      expect(component.internals.setFormValue).toHaveBeenCalledWith(defaultValue);
    });

    it('should set value as null if value and defaultValue are undefined', () => {
      setup();

      controller.beforeInit();

      expect(component.value).toBe(null);
      expect(component.internals.setFormValue).toHaveBeenCalledWith('');
    });
  });

  describe('onInput', (): void => {
    const dummyEvent = { preventDefault: (): void => {} };
    const dummyValue = 'dummy value';

    beforeEach(() => {
      jest.spyOn(dummyEvent, 'preventDefault');
    });

    it('should do nothing if component is disabled', () => {
      setup({ disabled: true, value: dummyValue });

      controller.onInput(dummyEvent as Event);

      expect(dummyEvent.preventDefault).toHaveBeenCalled();
      expect(component.value).toBe(dummyValue);
    });

    it('should update component value with textarea element value', () => {
      const textareaElement = document.createElement('textarea');
      textareaElement.value = dummyValue;
      setup({ textareaElement });

      controller.onInput(dummyEvent as Event);

      expect(dummyEvent.preventDefault).toHaveBeenCalled();
      expect(component.value).toBe(dummyValue);
    });

    it('should update component value with null value if textarea element is not defined', () => {
      setup();

      controller.onInput(dummyEvent as Event);

      expect(dummyEvent.preventDefault).toHaveBeenCalled();
      expect(component.value).toBe(null);
    });
  });

  describe('onValueChange', () => {
    const dummyOldValue = 'dummy old value';
    const dummyValue = 'dummy value';
    const mockTextareaElement = {
      setCustomValidity: jest.fn(),
    };

    it('should set set form value, no custom validity and emit change if no textarea element is defined', () => {
      controller.onValueChange(dummyValue, dummyOldValue);

      expect(mockTextareaElement.setCustomValidity).not.toHaveBeenCalled();
      expect(component.internals.setFormValue).toHaveBeenCalledWith(dummyValue);
      expect(component.emitChange).toHaveBeenCalledWith(dummyValue, dummyOldValue);
    });

    it('should set set form value, empty custom validity and emit change if no forbidden values', () => {
      setup({ textareaElement: mockTextareaElement as unknown as HTMLTextAreaElement });

      controller.onValueChange(dummyValue, dummyOldValue);

      expect(mockTextareaElement.setCustomValidity).toHaveBeenCalledWith('');
      expect(component.internals.setFormValue).toHaveBeenCalledWith(dummyValue);
      expect(component.emitChange).toHaveBeenCalledWith(dummyValue, dummyOldValue);
    });

    it('should set set form value, custom validity and emit change if forbidden values are found', () => {
      setup({ textareaElement: mockTextareaElement as unknown as HTMLTextAreaElement });
      spyOn(controller, 'hasForbiddenValue').and.returnValue(true);

      controller.onValueChange(dummyValue, dummyOldValue);

      expect(mockTextareaElement.setCustomValidity).toHaveBeenCalledWith('forbiddenValue');
      expect(component.internals.setFormValue).toHaveBeenCalledWith(dummyValue);
      expect(component.emitChange).toHaveBeenCalledWith(dummyValue, dummyOldValue);
    });
  });
});
