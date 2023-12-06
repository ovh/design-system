import { ODS_INPUT_TYPE } from './constants/ods-input-type';
import { OdsGenericFormMethodController } from './method.controller';

describe('spec:OdsGenericFormMethodController', () => {
    let controller: OdsGenericFormMethodController;
    let osdsInput = {
        inputEl: {
            focus: jest.fn(),
            value: '',
            validity: {
                valid: true,
            },
        },
        disabled: false,
        masked: false,
        value: '',
        tabindex: 0,
        type: ODS_INPUT_TYPE.text,
        forbiddenValues: [] as string[],
        defaultValue: 'defaultValue',
    }

    afterEach(() => {
        jest.clearAllMocks();
    });

  function setup(attributes: Partial<typeof osdsInput> = {}) {
    controller = new OdsGenericFormMethodController({
        ...osdsInput,
        ...attributes,
    });
  }

  it('should call focus on inputEl', () => {
    setup();
    controller.setFocus();
    expect(osdsInput.inputEl.focus).toHaveBeenCalledTimes(1);
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
    expect((controller as any).osdsInput.inputEl.value).toBe(value);
    expect((controller as any).osdsInput.value).toBe(value);
  });

  it('should hide input', () => {
    setup({ });
    controller.hide();
    expect((controller as any).osdsInput.masked).toBe(true);
    controller.hide();
    expect((controller as any).osdsInput.masked).toBe(false);
  });

  it('should not hide input because of disable', () => {
    setup({ disabled: true });
    controller.hide();
    expect((controller as any).osdsInput.masked).toBe(false);
  });

  it('should reset input', () => {
    setup({ value: 'test' });
    controller.reset();
    expect((controller as any).osdsInput.value).toBe('defaultValue');
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
    setup({ value: 'test', forbiddenValues: ['test'] });
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
