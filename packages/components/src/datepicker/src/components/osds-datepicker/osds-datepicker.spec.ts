jest.mock('./core/controller');

import type { OdsDatepickerAttribute } from './interfaces/attributes';
import type { SpecPage } from '@stencil/core/testing';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str, odsUnitTestAttribute } from '@ovhcloud/ods-common-testing';
import { newSpecPage } from '@stencil/core/testing';
import { ODS_DATEPICKER_LOCALE } from './constants/datepicker-locale';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { OdsDatepickerController } from './core/controller';
import { OsdsDatepicker } from './osds-datepicker';

describe('spec:osds-datepicker', () => {
  const baseAttribute = { ariaLabel: null, defaultValue: null, disabled: false, error: false, name: '', value: null };
  let controller: OdsDatepickerController<OsdsDatepicker>;
  let instance: OsdsDatepicker;
  let page: SpecPage;

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

    instance = page.rootInstance;
    controller = (OdsDatepickerController as unknown as jest.SpyInstance<OdsDatepickerController<OsdsDatepicker>, unknown[]>).mock.instances[0];
  }

  it('should render', async() => {
    await setup({});
    expect(page.root?.shadowRoot).toBeTruthy();
    expect(instance).toBeTruthy();
  });

  describe('attributes', () => {
    const config = {
      instance: (): OsdsDatepicker => instance,
      page: (): SpecPage => page,
      root: (): SpecPage['root'] => page.root,
      wait: (): Promise<void> => page.waitForChanges(),
    };

    describe('ariaLabel', () => {
      odsUnitTestAttribute<OdsDatepickerAttribute, 'ariaLabel'>({
        defaultValue: DEFAULT_ATTRIBUTE.ariaLabel,
        name: 'ariaLabel',
        newValue: 'oles',
        setup: (value) => setup({ attributes: { ['ariaLabel']: value } }),
        value: 'ipsum',
        ...config,
      });
    });

    describe('ariaLabelledby', () => {
      odsUnitTestAttribute<OdsDatepickerAttribute, 'ariaLabelledby'>({
        defaultValue: undefined,
        name: 'ariaLabelledby',
        newValue: 'oles',
        setup: (value) => setup({ attributes: { ['ariaLabelledby']: value } }),
        value: 'ipsum',
        ...config,
      });
    });

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

    // FIXME issue with common-testing and Date
    // describe('datesDisabled', () => {
    //   odsUnitTestAttribute<OdsDatepickerAttribute, 'datesDisabled'>({
    //     defaultValue: undefined,
    //     exclude: [OdsUnitTestAttributeType.REFLECTED, OdsUnitTestAttributeType.MUTABLE],
    //     name: 'datesDisabled',
    //     newValue: [new Date('1999-11-02')],
    //     setup: (value) => setup({ attributes: { ['datesDisabled']: value } }),
    //     value: [],
    //     ...config,
    //   });
    // });

    // FIXME issue with common-testing and Date
    // describe('daysOfWeekDisabled', () => {
    //   odsUnitTestAttribute<OdsDatepickerAttribute, 'daysOfWeekDisabled'>({
    //     defaultValue: undefined,
    //     exclude: [OdsUnitTestAttributeType.REFLECTED, OdsUnitTestAttributeType.MUTABLE],
    //     name: 'daysOfWeekDisabled',
    //     newValue: [ODS_DATEPICKER_DAY.saturday, ODS_DATEPICKER_DAY.sunday],
    //     setup: (value) => setup({ attributes: { ['daysOfWeekDisabled']: value } }),
    //     value: [],
    //     ...config,
    //   });
    // });

    // FIXME issue with common-testing and Date
    // describe('defaultValue', () => {
    //   odsUnitTestAttribute<OdsDatepickerAttribute, 'defaultValue'>({
    //     defaultValue: DEFAULT_ATTRIBUTE.defaultValue,
    //     name: 'defaultValue',
    //     newValue: new Date(0),
    //     setup: (value) => setup({ attributes: { ['defaultValue']: value } }),
    //     value: new Date(),
    //     ...config,
    //   });
    // });

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

    // FIXME issue with common-testing and Date
    // describe('maxDate', () => {
    //   odsUnitTestAttribute<OdsDatepickerAttribute, 'maxDate'>({
    //     defaultValue: undefined,
    //     name: 'maxDate',
    //     newValue: new Date('1999-11-02'),
    //     setup: (value) => setup({ attributes: { ['maxDate']: value } }),
    //     value: new Date(0),
    //     ...config,
    //   });
    // });

    // FIXME issue with common-testing and Date
    // describe('minDate', () => {
    //   odsUnitTestAttribute<OdsDatepickerAttribute, 'minDate'>({
    //     defaultValue: undefined,
    //     name: 'minDate',
    //     newValue: new Date('1999-11-02'),
    //     value: new Date(0),
    //     setup: (value) => setup({ attributes: { ['minDate']: value } }),
    //     ...config,
    //   });
    // });

    describe('placeholder', () => {
      odsUnitTestAttribute<OdsDatepickerAttribute, 'placeholder'>({
        defaultValue: undefined,
        name: 'placeholder',
        newValue: 'placeholder',
        setup: (value) => setup({ attributes: { ['placeholder']: value } }),
        value: '',
        ...config,
      });
    });

    describe('readOnly', () => {
      odsUnitTestAttribute<OdsDatepickerAttribute, 'readOnly'>({
        defaultValue: undefined,
        name: 'readOnly',
        newValue: false,
        setup: (value) => setup({ attributes: { ['readOnly']: value } }),
        value: true,
        ...config,
      });
    });

    describe('required', () => {
      odsUnitTestAttribute<OdsDatepickerAttribute, 'required'>({
        defaultValue: undefined,
        name: 'required',
        newValue: false,
        setup: (value) => setup({ attributes: { ['required']: value } }),
        value: true,
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

    // FIXME issue with common-testing and Date
    // describe('value', () => {
    //   odsUnitTestAttribute<OdsDatepickerAttribute, 'value'>({
    //     defaultValue: DEFAULT_ATTRIBUTE.value,
    //     name: 'value',
    //     newValue: new Date('1999-11-02'),
    //     setup: (value) => setup({ attributes: { ['value']: value } }),
    //     value: new Date(0),
    //     ...config,
    //   });
    // });
  });

  describe('events', () => {
    it('should have all expected event emitters', async() => {
      await setup();

      expect(instance.odsBlur).toBeDefined();
      expect(instance.odsClear).toBeDefined();
      expect(instance.odsFocus).toBeDefined();
      expect(instance.odsReset).toBeDefined();
      expect(instance.odsValueChange).toBeDefined();
    });
  });

  describe('methods', () => {
    describe('clear', () => {
      it('should call controller clear method', async() => {
        await setup();

        await instance.clear();

        expect(controller.clear).toHaveBeenCalled();
      });
    });

    describe('reset', () => {
      it('should call controller reset method', async() => {
        await setup();

        await instance.reset();

        expect(controller.reset).toHaveBeenCalled();
      });
    });
  });
});
