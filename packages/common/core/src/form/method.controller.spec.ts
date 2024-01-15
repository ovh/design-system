import { ODS_COMMON_INPUT_TYPE } from './constants/ods-common-input-type';
import { OdsCommonFieldAttribute } from './interfaces/attributes';
import { OdsCommonFieldEvent } from './interfaces/events';
import { OdsCommonFieldMethodController } from './method.controller';

describe('spec:OdsCommonFieldMethodController', () => {
  const DEFAULT_VALUE = 'defaultValue'
  let osdsInput = {
    ariaLabel: '',
    defaultValue: DEFAULT_VALUE,
    disabled: false,
    error: false,
    forbiddenValues: [],
    hasFocus: false,
    masked: false,
    name: '',
    odsBlur: { emit: jest.fn() },
    odsClear: { emit: jest.fn() },
    odsFocus: { emit: jest.fn() },
    odsReset: { emit: jest.fn() },
    odsValueChange: { emit: jest.fn() },
    tabindex: 0,
    type: ODS_COMMON_INPUT_TYPE.text,
    value: '',
  }
  let controller: OdsCommonFieldMethodController<typeof osdsInput>;
  let inputEl: HTMLInputElement;

  afterEach(() => {
      jest.clearAllMocks();
  });

  beforeEach(() => {
    inputEl = {
      ...document.createElement('input'),
      focus: jest.fn(),
      validity: {
        badInput: false,
        customError: false,
        patternMismatch: false,
        rangeOverflow: false,
        rangeUnderflow: false,
        stepMismatch: false,
        tooLong: false,
        tooShort: false,
        typeMismatch: false,
        valid: true,
        valueMissing: false,
     }
    };
  });

  function setup(attributes: Partial<OdsCommonFieldAttribute & OdsCommonFieldEvent> = {}) {
    controller = new OdsCommonFieldMethodController<typeof osdsInput>({
        ...osdsInput,
        ...attributes,
    } as typeof osdsInput);
  }

  it('should call focus on inputEl', () => {
    setup();
    controller.setFocus(inputEl);
    expect(inputEl.focus).toHaveBeenCalledTimes(1);
  });

  it('should not call focus on inputEl because of disabled', () => {
    setup({ disabled: true });
    controller.setFocus(inputEl);
    expect(inputEl.focus).not.toHaveBeenCalled();
  });

  it('should clear input', () => {
    setup({ value: 'test' });
    controller.clear();
    expect((controller as any).component.value).toBe(null);
    expect(osdsInput.odsClear.emit).toHaveBeenCalledTimes(1);
  });

  it('should not clear input because of disable', () => {
    const value = 'test';
    setup({ value, disabled: true });
    controller.clear();
    expect((controller as any).component.value).toBe(value);
    expect(osdsInput.odsClear.emit).not.toHaveBeenCalled();
  });

  it('should reset input', () => {
    setup({ value: 'test' });
    controller.reset();
    expect((controller as any).component.value).toBe(DEFAULT_VALUE);
    expect(osdsInput.odsReset.emit).toHaveBeenCalledTimes(1);
  });

  it('should getValidity input', async() => {
    setup({ });
    const validity = await controller.getValidity(inputEl);
    expect(validity).toEqual({
      badInput: false,
      customError: false,
      forbiddenValue: false,
      patternMismatch: false,
      rangeOverflow: false,
      rangeUnderflow: false,
      stepMismatch: false,
      tooLong: false,
      tooShort: false,
      typeMismatch: false,
      valid: true,
      valueMissing: false,
    });
  });

  it('should getValidity input with forbiddenValues', async() => {
    setup({ value: '1', forbiddenValues: ['1'] });
    const validity = await controller.getValidity(inputEl);
    expect(validity).toEqual({
      badInput: false,
      customError: false,
      forbiddenValue: true,
      patternMismatch: false,
      rangeOverflow: false,
      rangeUnderflow: false,
      stepMismatch: false,
      tooLong: false,
      tooShort: false,
      typeMismatch: false,
      valid: false,
      valueMissing: false,
    });
  });
});
