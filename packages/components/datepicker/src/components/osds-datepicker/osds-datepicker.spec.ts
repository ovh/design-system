jest.mock('./core/controller');

import type { OdsDatepickerAttribute } from './interfaces/attributes';
import type { SpecPage } from '@stencil/core/testing';

import { OdsUnitTestAttributeType, odsComponentAttributes2StringAttributes, odsStringAttributes2Str, odsUnitTestAttribute } from '@ovhcloud/ods-common-testing';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { newSpecPage } from '@stencil/core/testing';

import { ODS_DATEPICKER_DAY } from './constants/datepicker-day';
import { ODS_DATEPICKER_LOCALE } from './constants/datepicker-locale';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { OdsDatepickerController } from './core/controller';
import { OsdsDatepicker } from './osds-datepicker';
// @ts-ignore
import { Datepicker } from '../../jestStub';


describe('spec:osds-datepicker', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let instance: OsdsDatepicker;
  let controller: OdsDatepickerController;

  jest.spyOn(OsdsDatepicker.prototype, 'componentDidLoad').mockImplementation(jest.fn());

  afterEach(() => {
    jest.clearAllMocks();
  });

  async function setup({ attributes = {} }: { attributes?: Partial<OdsDatepickerAttribute> } = {}) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsDatepickerAttribute>(attributes, DEFAULT_ATTRIBUTE);

    page = await newSpecPage({
      components: [OsdsDatepicker],
      html: `<osds-datepicker ${odsStringAttributes2Str(stringAttributes)}></osds-datepicker>`,
    });

    root = page.root;
    instance = page.rootInstance;
    controller = (OdsDatepickerController as unknown as jest.SpyInstance<OdsDatepickerController, unknown[]>).mock.instances[0];
  }

  it('should render', async() => {
    await setup({});
    expect(root?.shadowRoot).toBeTruthy();
    expect(instance).toBeTruthy();
  });

  describe('attributes', () => {
    const config = {
      instance: () => instance,
      page: () => page,
      root: () => page.root,
      wait: () => page.waitForChanges(),
    };

    describe('clearable', () => {
      odsUnitTestAttribute<OdsDatepickerAttribute, 'clearable'>({
        name: 'clearable',
        defaultValue: DEFAULT_ATTRIBUTE.clearable,
        newValue: true,
        value: false,
        setup: (value) => setup({ attributes: { ['clearable']: value } }),
        ...config,
      });
    });

    describe('color', () => {
      odsUnitTestAttribute<OdsDatepickerAttribute, 'color'>({
        name: 'color',
        defaultValue: DEFAULT_ATTRIBUTE.color,
        newValue: ODS_THEME_COLOR_INTENT.primary,
        value: ODS_THEME_COLOR_INTENT.success,
        setup: (value) => setup({ attributes: { ['color']: value } }),
        ...config,
      });
    });

    describe('datesDisabled', () => {
      odsUnitTestAttribute<OdsDatepickerAttribute, 'datesDisabled'>({
        name: 'datesDisabled',
        defaultValue: DEFAULT_ATTRIBUTE.datesDisabled,
        newValue: [new Date('1999-11-02')],
        value: [],
        setup: (value) => setup({ attributes: { ['datesDisabled']: value } }),
        ...config,
        exclude: [OdsUnitTestAttributeType.REFLECTED, OdsUnitTestAttributeType.MUTABLE],
      });
    });

    describe('daysOfWeekDisabled', () => {
      odsUnitTestAttribute<OdsDatepickerAttribute, 'daysOfWeekDisabled'>({
        name: 'daysOfWeekDisabled',
        defaultValue: DEFAULT_ATTRIBUTE.daysOfWeekDisabled,
        newValue: [ODS_DATEPICKER_DAY.saturday, ODS_DATEPICKER_DAY.sunday],
        value: [],
        setup: (value) => setup({ attributes: { ['daysOfWeekDisabled']: value } }),
        ...config,
        exclude: [OdsUnitTestAttributeType.REFLECTED, OdsUnitTestAttributeType.MUTABLE],
      });
    });

    describe('disabled', () => {
      odsUnitTestAttribute<OdsDatepickerAttribute, 'disabled'>({
        name: 'disabled',
        defaultValue: DEFAULT_ATTRIBUTE.disabled,
        newValue: true,
        value: false,
        setup: (value) => setup({ attributes: { ['disabled']: value } }),
        ...config,
      });
    });

    describe('error', () => {
      odsUnitTestAttribute<OdsDatepickerAttribute, 'error'>({
        name: 'error',
        defaultValue: DEFAULT_ATTRIBUTE.error,
        newValue: true,
        value: false,
        setup: (value) => setup({ attributes: { ['error']: value } }),
        ...config,
      });
    });

    describe('format', () => {
      odsUnitTestAttribute<OdsDatepickerAttribute, 'format'>({
        name: 'format',
        defaultValue: DEFAULT_ATTRIBUTE.format,
        newValue: 'dd/mm/yyyy',
        value: 'yyyy-mm-dd',
        setup: (value) => setup({ attributes: { ['format']: value } }),
        ...config,
      });
    });

    describe('inline', () => {
      odsUnitTestAttribute<OdsDatepickerAttribute, 'inline'>({
        name: 'inline',
        defaultValue: DEFAULT_ATTRIBUTE.inline,
        newValue: true,
        value: false,
        setup: (value) => setup({ attributes: { ['inline']: value } }),
        ...config,
      });
    });

    describe('locale', () => {
      odsUnitTestAttribute<OdsDatepickerAttribute, 'locale'>({
        name: 'locale',
        defaultValue: DEFAULT_ATTRIBUTE.locale,
        newValue: ODS_DATEPICKER_LOCALE.EN,
        value: ODS_DATEPICKER_LOCALE.FR,
        setup: (value) => setup({ attributes: { ['locale']: value } }),
        ...config,
      });
    });

    describe('maxDate', () => {
      odsUnitTestAttribute<OdsDatepickerAttribute, 'maxDate'>({
        name: 'maxDate',
        defaultValue: DEFAULT_ATTRIBUTE.maxDate,
        newValue: new Date('1999-11-02'),
        value: null,
        setup: (value) => setup({ attributes: { ['maxDate']: value } }),
        ...config,
      });
    });

    describe('minDate', () => {
      odsUnitTestAttribute<OdsDatepickerAttribute, 'minDate'>({
        name: 'minDate',
        defaultValue: DEFAULT_ATTRIBUTE.minDate,
        newValue: new Date('1999-11-02'),
        value: null,
        setup: (value) => setup({ attributes: { ['minDate']: value } }),
        ...config,
      });
    });

    describe('placeholder', () => {
      odsUnitTestAttribute<OdsDatepickerAttribute, 'placeholder'>({
        name: 'placeholder',
        defaultValue: DEFAULT_ATTRIBUTE.placeholder,
        newValue: 'placeholder',
        value: '',
        setup: (value) => setup({ attributes: { ['placeholder']: value } }),
        ...config,
      });
    });

    describe('value', () => {
      odsUnitTestAttribute<OdsDatepickerAttribute, 'value'>({
        name: 'value',
        defaultValue: DEFAULT_ATTRIBUTE.value,
        newValue: new Date('1999-11-02'),
        value: null,
        setup: (value) => setup({ attributes: { ['value']: value } }),
        ...config,
      });
    });
  });

  describe('handleInputValueChange', () => {
    it('should call onChange when format is set and value matches format length', async() => {
      await setup({ attributes: { format: 'dd/mm/yyyy' } });
      await page.waitForChanges();
      const event = new CustomEvent('odsValueChange', {
        detail: { value: '03/10/2023' },
      });
      instance.handleInputValueChange(event);
      await page.waitForChanges();
      expect(controller.onChange).toHaveBeenCalledTimes(1);
    });

    it('should call onChange with null when value is empty', async() => {
      await setup();
      const event = new CustomEvent('odsValueChange', {
        detail: { value: '' },
      });
      instance.handleInputValueChange(event);
      expect(controller.onChange).toHaveBeenCalledWith(null, null);
    });

    it('should not call onChange if value does not match format length', async() => {
      await setup({ attributes: { format: 'dd/mm/yyyy' } });
      const event = new CustomEvent('odsValueChange', {
        detail: { value: '03/1' },
      });
      instance.handleInputValueChange(event);
      expect(controller.onChange).not.toHaveBeenCalled();
    });
  });

  describe('events', () => {
    it('should call onBlur on blur', async() => {
      await setup({});
      instance?.onBlur();
      expect(controller.onBlur).toHaveBeenCalledTimes(1);
      expect(controller.onBlur).toHaveBeenCalledWith();
    });

    it('should call onChange on change', async() => {
      await setup({});
      instance.onChange(new Date(''));
      expect(controller.onChange).toHaveBeenCalledTimes(1);
    });

    it('should call onFocus on focus', async() => {
      await setup({});
      instance?.onFocus();
      expect(controller.onFocus).toHaveBeenCalledTimes(1);
      expect(controller.onFocus).toHaveBeenCalledWith();
    });

    describe('On-host events', () => {
      beforeEach(async() => {
        await setup({});
      });

      it('should call the onBlur method when Host is blurred', () => {
        const spy = jest.spyOn(instance, 'onBlur');

        const hostElem = root as HTMLElement;
        hostElem.blur();

        expect(spy).toHaveBeenCalled();
      });

      it('should call the onFocus method when Host is focused', () => {
        const spy = jest.spyOn(instance, 'onFocus');

        const hostElem = root as HTMLElement;
        hostElem.focus();

        expect(spy).toHaveBeenCalled();
      });
    });
  });

  describe('event emitters', () => {
    beforeEach(async() => {
      await setup({});
    });

    it('should emit odsDatepickerBlur event', () => {
      const spy = jest.spyOn(instance.odsDatepickerBlur, 'emit');
      instance.emitBlur();
      expect(spy).toHaveBeenCalled();
    });

    it('should emit odsDatepickerFocus event', () => {
      const spy = jest.spyOn(instance.odsDatepickerFocus, 'emit');
      instance.emitFocus();
      expect(spy).toHaveBeenCalled();
    });

    describe('emitDatepickerValueChange', () => {
      let mockFormatDate: jest.SpyInstance;

      beforeAll(() => {
        mockFormatDate = jest.spyOn(Datepicker, 'formatDate');
      });

      afterEach(() => {
        mockFormatDate.mockClear();
      });

      afterAll(() => {
        mockFormatDate.mockRestore();
      });

      beforeEach(async() => {
        await setup({});
      });

      it('should emit odsDatepickerValueChange event with newValue and oldValue', () => {
        const spy = jest.spyOn(instance.odsDatepickerValueChange, 'emit');
        const newValue = new Date('2023-10-03');
        const oldValue = new Date('2023-10-02');
        instance.emitDatepickerValueChange(newValue, oldValue);
        expect(spy).toHaveBeenCalledWith({ value: newValue, oldValue: oldValue, formattedValue: `${newValue} dd/mm/yyyy` });
      });

      it('should call Datepicker.formatDate when format is defined', () => {
        const testDate = new Date('2023-10-03');
        instance.format = 'dd/mm/yyyy';

        instance.emitDatepickerValueChange(testDate);

        expect(mockFormatDate).toHaveBeenCalledWith(testDate, 'dd/mm/yyyy');
      });

      it('should emit event with undefined formattedValue when format is not defined', () => {
        const testDate = new Date('2023-10-03');
        instance.format = undefined;

        const spy = jest.spyOn(instance.odsDatepickerValueChange, 'emit');
        instance.emitDatepickerValueChange(testDate);

        expect(spy).toHaveBeenCalledWith({ value: testDate, oldValue: undefined, formattedValue: undefined });
      });
    });
  });
});
