jest.mock('./core/controller'); // keep jest.mock before any
import type { OdsTimepickerAttribute } from './interfaces/attributes';
import type { OsdsSelect, OsdsSelectOption } from '@ovhcloud/ods-component-select';
import type { SpecPage } from '@stencil/core/testing';
import {
  odsComponentAttributes2StringAttributes,
  odsStringAttributes2Str,
  odsUnitTestAttribute,
} from '@ovhcloud/ods-common-testing';
import { newSpecPage } from '@stencil/core/testing';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { ODS_TIMEZONE } from './constants/timezones';
import { ODS_TIMEZONES_PRESET } from './constants/timezones-preset';
import { OdsTimepickerController } from './core/controller';
import { OsdsTimepicker } from './osds-timepicker';

describe('spec:osds-timepicker', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let instance: OsdsTimepicker;
  let controller: OdsTimepickerController;
  let select: OsdsSelect | null | undefined;
  let selectOptions: OsdsSelectOption[] | null | undefined;

  afterEach(() => {
    jest.clearAllMocks();
  });

  async function setup({ attributes = {} }: { attributes?: Partial<OdsTimepickerAttribute> } = {}): Promise<void> {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsTimepickerAttribute>(attributes, DEFAULT_ATTRIBUTE);

    page = await newSpecPage({
      components: [OsdsTimepicker],
      html: `<osds-timepicker ${odsStringAttributes2Str(stringAttributes)}></osds-timepicker>`,
    });

    root = page.root;
    instance = page.rootInstance;
    select = root?.shadowRoot.querySelector('osds-select');
    selectOptions = root?.shadowRoot.querySelectorAll('osds-select-option');

    controller = (OdsTimepickerController as unknown as jest.SpyInstance<OdsTimepickerController, unknown[]>).mock.instances[0];
  }

  it('should render', async() => {
    await setup({});
    expect(root?.shadowRoot).toBeTruthy();
    expect(instance).toBeTruthy();
  });

  it('should render select and select-options if timezones are set', async() => {
    await setup({ attributes : { timezones : [ODS_TIMEZONE.UTC, ODS_TIMEZONE.UTC1] } });
    expect(select).toBeTruthy();
    expect(selectOptions).toBeTruthy();
  });

  describe('init', () => {
    it('should call handleCurrentTimezone and handleTimezones on init if there is timezones', async() => {
      await setup({ attributes : { timezones : ODS_TIMEZONES_PRESET.All } });
      expect(controller.handleCurrentTimezone).toHaveBeenCalledTimes(1);
      expect(controller.handleTimezones).toHaveBeenCalledWith();
    });
  });

  describe('watchers', () => {
    it('should call onSecondsChange on change of withSeconds', async() => {
      await setup( { attributes : { withSeconds : true } });
      const boolean = false;
      instance.withSeconds = boolean;

      expect(controller.formatValue).toHaveBeenCalledTimes(1);
    });

    it('should call handleCurrentTimezone on change of currentTimezone', async() => {
      await setup({});
      instance.currentTimezone = ODS_TIMEZONE.UTC;

      expect(controller.handleCurrentTimezone).toHaveBeenCalledTimes(1);
    });

    it('should call handleTimezones on change of timezones', async() => {
      await setup({});
      instance.timezones = [ODS_TIMEZONE.UTC, ODS_TIMEZONE.UTC1];

      expect(controller.handleTimezones).toHaveBeenCalledTimes(1);
    });
  });

  describe('attributes', () => {
    const config = {
      instance: ():OsdsTimepicker => instance,
      page: ():SpecPage => page,
      root: ():HTMLElement |undefined => page.root,
      wait: ():Promise<void> => page.waitForChanges(),
    };

    describe('clearable', () => {
      odsUnitTestAttribute<OdsTimepickerAttribute, 'clearable'>({
        defaultValue: DEFAULT_ATTRIBUTE.clearable,
        name: 'clearable',
        newValue: true,
        setup: (clearable) => setup({ attributes: { clearable } }),
        value: false,
        ...config,
      });
    });

    describe('currentTimezone', () => {
      odsUnitTestAttribute<OdsTimepickerAttribute, 'currentTimezone'>({
        defaultValue: DEFAULT_ATTRIBUTE.currentTimezone,
        name: 'currentTimezone',
        newValue: ODS_TIMEZONE.UTC,
        setup: (currentTimezone) => setup({ attributes: { currentTimezone } }),
        value: '',
        ...config,
      });
    });

    describe('disabled', () => {
      odsUnitTestAttribute<OdsTimepickerAttribute, 'disabled'>({
        defaultValue: DEFAULT_ATTRIBUTE.disabled,
        name: 'disabled',
        newValue: true,
        setup: (disabled) => setup({ attributes: { disabled } }),
        value: false,
        ...config,
      });
    });

    describe('error', () => {
      odsUnitTestAttribute<OdsTimepickerAttribute, 'error'>({
        defaultValue: DEFAULT_ATTRIBUTE.error,
        name: 'error',
        newValue: true,
        setup: (error) => setup({ attributes: { error } }),
        value: false,
        ...config,
      });
    });

    describe('inline', () => {
      odsUnitTestAttribute<OdsTimepickerAttribute, 'inline'>({
        defaultValue: DEFAULT_ATTRIBUTE.inline,
        name: 'inline',
        newValue: true,
        setup: (inline) => setup({ attributes: { inline } }),
        value: false,
        ...config,
      });
    });

    describe('timezones', () => {
      odsUnitTestAttribute<OdsTimepickerAttribute, 'timezones'>({
        defaultValue: DEFAULT_ATTRIBUTE.timezones,
        name: 'timezones',
        newValue: [ODS_TIMEZONE.UTC, ODS_TIMEZONE.UTC2],
        setup: (timezones) => setup({ attributes: { timezones } }),
        value: '',
        ...config,
      });
    });

    describe('value', () => {
      odsUnitTestAttribute<OdsTimepickerAttribute, 'value'>({
        defaultValue: DEFAULT_ATTRIBUTE.value,
        name: 'value',
        newValue: '11:11',
        setup: (value) => setup({ attributes: { value } }),
        value: '',
        ...config,
      });
    });

    describe('withSeconds', () => {
      odsUnitTestAttribute<OdsTimepickerAttribute, 'withSeconds'>({
        defaultValue: DEFAULT_ATTRIBUTE.withSeconds,
        name: 'withSeconds',
        newValue: true,
        setup: (withSeconds) => setup({ attributes: { withSeconds } }),
        value: false,
        ...config,
      });
    });
  });
});
