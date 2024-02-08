jest.mock('./core/controller');

import type { OdsDatepickerAttribute } from './interfaces/attributes';
import type { SpecPage } from '@stencil/core/testing';
import { OdsUnitTestAttributeType, odsComponentAttributes2StringAttributes, odsStringAttributes2Str, odsUnitTestAttribute } from '@ovhcloud/ods-common-testing';
import { newSpecPage } from '@stencil/core/testing';
import { ODS_DATEPICKER_DAY } from './constants/datepicker-day';
import { ODS_DATEPICKER_LOCALE } from './constants/datepicker-locale';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { OdsDatepickerController } from './core/controller';
import { OsdsDatepicker } from './osds-datepicker';
import { Datepicker } from '../../jestStub';

describe('spec:osds-datepicker', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let instance: OsdsDatepicker;
  let controller: OdsDatepickerController;
  const baseAttribute = { ariaLabel: null, defaultValue: null, disabled: false, error: false, name: '', value: null };

  jest.spyOn(OsdsDatepicker.prototype, 'componentDidLoad').mockImplementation(jest.fn());

  afterEach(() => {
    jest.clearAllMocks();
  });

  async function setup({ attributes = {} }: { attributes?: Partial<OdsDatepickerAttribute> } = {}): Promise<void> {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsDatepickerAttribute>({ ...baseAttribute, ...attributes }, DEFAULT_ATTRIBUTE);

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
      instance: (): OsdsDatepicker => instance,
      page: (): SpecPage => page,
      root: (): SpecPage['root'] => page.root,
      wait: (): Promise<void> => page.waitForChanges(),
    };

    describe('clearable', () => {
      odsUnitTestAttribute<OdsDatepickerAttribute, 'clearable'>({
        defaultValue: DEFAULT_ATTRIBUTE.clearable,
        name: 'clearable',
        newValue: true,
        setup: (value) => setup({ attributes: { ['clearable']: value } }),
        value: false,
        ...config,
      });
    });

    describe('datesDisabled', () => {
      odsUnitTestAttribute<OdsDatepickerAttribute, 'datesDisabled'>({
        defaultValue: DEFAULT_ATTRIBUTE.datesDisabled,
        name: 'datesDisabled',
        newValue: [new Date('1999-11-02')],
        setup: (value) => setup({ attributes: { ['datesDisabled']: value } }),
        value: [],
        ...config,
        exclude: [OdsUnitTestAttributeType.REFLECTED, OdsUnitTestAttributeType.MUTABLE],
      });
    });

    describe('daysOfWeekDisabled', () => {
      odsUnitTestAttribute<OdsDatepickerAttribute, 'daysOfWeekDisabled'>({
        defaultValue: DEFAULT_ATTRIBUTE.daysOfWeekDisabled,
        name: 'daysOfWeekDisabled',
        newValue: [ODS_DATEPICKER_DAY.saturday, ODS_DATEPICKER_DAY.sunday],
        setup: (value) => setup({ attributes: { ['daysOfWeekDisabled']: value } }),
        value: [],
        ...config,
        exclude: [OdsUnitTestAttributeType.REFLECTED, OdsUnitTestAttributeType.MUTABLE],
      });
    });

    describe('disabled', () => {
      odsUnitTestAttribute<OdsDatepickerAttribute, 'disabled'>({
        defaultValue: DEFAULT_ATTRIBUTE.disabled,
        name: 'disabled',
        newValue: true,
        setup: (value) => setup({ attributes: { ['disabled']: value } }),
        value: false,
        ...config,
      });
    });

    describe('error', () => {
      odsUnitTestAttribute<OdsDatepickerAttribute, 'error'>({
        defaultValue: DEFAULT_ATTRIBUTE.error,
        name: 'error',
        newValue: true,
        setup: (value) => setup({ attributes: { ['error']: value } }),
        value: false,
        ...config,
      });
    });

    describe('format', () => {
      odsUnitTestAttribute<OdsDatepickerAttribute, 'format'>({
        defaultValue: DEFAULT_ATTRIBUTE.format,
        name: 'format',
        newValue: 'dd/mm/yyyy',
        setup: (value) => setup({ attributes: { ['format']: value } }),
        value: 'yyyy-mm-dd',
        ...config,
      });
    });

    describe('inline', () => {
      odsUnitTestAttribute<OdsDatepickerAttribute, 'inline'>({
        defaultValue: DEFAULT_ATTRIBUTE.inline,
        name: 'inline',
        newValue: true,
        setup: (value) => setup({ attributes: { ['inline']: value } }),
        value: false,
        ...config,
      });
    });

    describe('locale', () => {
      odsUnitTestAttribute<OdsDatepickerAttribute, 'locale'>({
        defaultValue: DEFAULT_ATTRIBUTE.locale,
        name: 'locale',
        newValue: ODS_DATEPICKER_LOCALE.EN,
        setup: (value) => setup({ attributes: { ['locale']: value } }),
        value: ODS_DATEPICKER_LOCALE.FR,
        ...config,
      });
    });

    describe('maxDate', () => {
      odsUnitTestAttribute<OdsDatepickerAttribute, 'maxDate'>({
        defaultValue: DEFAULT_ATTRIBUTE.maxDate,
        name: 'maxDate',
        newValue: new Date('1999-11-02'),
        setup: (value) => setup({ attributes: { ['maxDate']: value } }),
        // @ts-ignore enforce as HTML attribute will return '' instead of null
        value: '',
        ...config,
      });
    });

    describe('minDate', () => {
      odsUnitTestAttribute<OdsDatepickerAttribute, 'minDate'>({
        defaultValue: DEFAULT_ATTRIBUTE.minDate,
        name: 'minDate',
        newValue: new Date('1999-11-02'),
        setup: (value) => setup({ attributes: { ['minDate']: value } }),
        // @ts-ignore enforce as HTML attribute will return '' instead of null
        value: '',
        ...config,
      });
    });

    describe('placeholder', () => {
      odsUnitTestAttribute<OdsDatepickerAttribute, 'placeholder'>({
        defaultValue: DEFAULT_ATTRIBUTE.placeholder,
        name: 'placeholder',
        newValue: 'placeholder',
        setup: (value) => setup({ attributes: { ['placeholder']: value } }),
        value: '',
        ...config,
      });
    });

    describe('value', () => {
      odsUnitTestAttribute<OdsDatepickerAttribute, 'value'>({
        defaultValue: DEFAULT_ATTRIBUTE.value,
        name: 'value',
        newValue: new Date('1999-11-02'),
        setup: (value) => setup({ attributes: { ['value']: value } }),
        value: '',
        ...config,
      });
    });

    describe('showSiblingsMonthDays', () => {
      odsUnitTestAttribute<OdsDatepickerAttribute, 'showSiblingsMonthDays'>({
        defaultValue: DEFAULT_ATTRIBUTE.showSiblingsMonthDays,
        name: 'showSiblingsMonthDays',
        newValue: false,
        setup: (value) => setup({ attributes: { ['showSiblingsMonthDays']: value } }),
        value: true,
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
      expect(instance.hasFocus).toBe(false);
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
      const name = 'name';
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
        await setup({ attributes: { name } });
      });

      it('should emit odsDatepickerValueChange event with newValue and oldValue', () => {
        const spy = jest.spyOn(instance.odsDatepickerValueChange, 'emit');
        const newValue = new Date('2023-10-03');
        const oldValue = new Date('2023-10-02');
        instance.emitDatepickerValueChange(newValue, oldValue);
        expect(spy).toHaveBeenCalledWith({ formattedValue: `${newValue} dd/mm/yyyy`, name, oldValue: oldValue, value: newValue });
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

        expect(spy).toHaveBeenCalledWith({ formattedValue: undefined, name, oldValue: undefined, value: testDate });
      });
    });
  });
});
