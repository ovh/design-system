import { ODS_COMMON_INPUT_TYPE } from './constants/ods-common-input-type';
import { OdsCommonFieldComponent, OdsCommonFieldMethodController } from './method.controller';

describe('spec:OdsCommonFieldMethodController', () => {
    let controller: OdsCommonFieldMethodController;
    let osdsInput = {
      defaultValue: 'defaultValue',
      disabled: false,
      forbiddenValues: [],
      hasFocus: false,
      inputEl: {
        focus: jest.fn(),
        value: '',
        validity: { valid: true },
      } as unknown as HTMLInputElement,
      masked: false,
      tabindex: 0,
      type: ODS_COMMON_INPUT_TYPE.text,
      value: '',
    }

    afterEach(() => {
        jest.clearAllMocks();
    });

  function setup(attributes: Partial<OdsCommonFieldComponent> = {}) {
    controller = new OdsCommonFieldMethodController({
        ...osdsInput,
        ...attributes,
    });
  }

  it('should call focus on inputEl', () => {
    setup();
    controller.setFocus();
    expect(osdsInput.inputEl.focus).toHaveBeenCalledTimes(1);
  });

  it('should not call focus on inputEl because of disabled', () => {
    setup({ disabled: true });
    controller.setFocus();
    expect(osdsInput.inputEl.focus).not.toHaveBeenCalled();
  });

  it('should clear input', () => {
    setup({ value: 'test', inputEl: { ...osdsInput.inputEl, value: 'test' } });
    controller.clear();
    expect(osdsInput.inputEl.value).toBe('');
    expect(osdsInput.value).toBe('');
  });

  it('should not clear input because of disable', () => {
    const value = 'test';
    setup({ value, inputEl: { ...osdsInput.inputEl, value }, disabled: true });
    controller.clear();
    expect((controller as any).component.inputEl.value).toBe(value);
    expect((controller as any).component.value).toBe(value);
  });

  it('should hide input', () => {
    setup({ });
    controller.hide();
    expect((controller as any).component.masked).toBe(true);
    controller.hide();
    expect((controller as any).component.masked).toBe(false);
  });

  it('should not hide input because of disable', () => {
    setup({ disabled: true });
    controller.hide();
    expect((controller as any).component.masked).toBe(false);
  });

  it('should reset input', () => {
    setup({ value: 'test' });
    controller.reset();
    expect((controller as any).component.value).toBe('defaultValue');
  });

  it('should getValidity input', async() => {
    setup({ });
    const validity = await controller.getValidity();
    expect(validity).toEqual({
       customError: undefined,
       forbiddenValue: false,
       invalid: false,
       stepMismatch: undefined,
       valid: true,
       valueMissing: undefined,
    });
  });

  it('should getValidity input with forbiddenValues', async() => {
    setup({ value: '1', forbiddenValues: ['1'] as unknown as number[] });
    const validity = await controller.getValidity();
    expect(validity).toEqual({
       customError: undefined,
       forbiddenValue: true,
       invalid: true,
       stepMismatch: undefined,
       valid: false,
       valueMissing: undefined,
    });
  });
});
