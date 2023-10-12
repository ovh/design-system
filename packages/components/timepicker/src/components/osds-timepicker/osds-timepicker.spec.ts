jest.mock('./core/controller'); // keep jest.mock before any
import type { OdsTimepickerAttribute } from './interfaces/attributes';
import type { SpecPage } from '@stencil/core/testing';
import { newSpecPage } from '@stencil/core/testing';
import {
  odsComponentAttributes2StringAttributes,
  odsStringAttributes2Str,
  odsUnitTestAttribute,
} from '@ovhcloud/ods-common-testing';
import { OsdsTimepicker } from './osds-timepicker';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { OdsTimepickerController } from './core/controller';
import { ODS_TIMEZONE } from './constants/timezones';
import { ODS_TIMEZONES_PRESET } from './constants/timezones-preset';
import { OsdsSelect, OsdsSelectOption } from '@ovhcloud/ods-component-select';

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

  async function setup({ attributes = {} }: { attributes?: Partial<OdsTimepickerAttribute> } = {}) {
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

  it('should render', async () => {
    await setup({});
    expect(root?.shadowRoot).toBeTruthy();
    expect(instance).toBeTruthy();
  });

  it('should render select and select-options if timezones are set', async () => {
    await setup({ attributes : { timezones : [ODS_TIMEZONE.UTC, ODS_TIMEZONE.UTC1] } });
    expect(select).toBeTruthy();
    expect(selectOptions).toBeTruthy();
  })

  describe('init', () => {
    it('should call handleCurrentTimezone and handleTimezones on init if there is timezones', async () => {
      await setup({ attributes : { timezones : ODS_TIMEZONES_PRESET.All } });
      expect(controller.handleCurrentTimezone).toHaveBeenCalledTimes(1);
      expect(controller.handleTimezones).toHaveBeenCalledWith();
    });
  });

  describe('watchers', () => {
    it('should call onSecondsChange on change of withSeconds', async () => {
      await setup( { attributes : { withSeconds : true } });
      const boolean = false;
      instance.withSeconds = boolean;

      expect(controller.formatValue).toHaveBeenCalledTimes(1);
    });

    it('should call handleCurrentTimezone on change of currentTimezone', async () => {
      await setup({});
      instance.currentTimezone = ODS_TIMEZONE.UTC

      expect(controller.handleCurrentTimezone).toHaveBeenCalledTimes(1);
    });

    it('should call handleTimezones on change of timezones', async () => {
      await setup({});
      instance.timezones = [ODS_TIMEZONE.UTC, ODS_TIMEZONE.UTC1]

      expect(controller.handleTimezones).toHaveBeenCalledTimes(1);
    });
  })

  describe('attributes', () => {
    const config = {
      instance: () => instance,
      page: () => page,
      root: () => page.root,
      wait: () => page.waitForChanges(),
    };

    describe('clearable', () => {
      odsUnitTestAttribute<OdsTimepickerAttribute, 'clearable'>({
        name: 'clearable',
        defaultValue: DEFAULT_ATTRIBUTE.clearable,
        newValue: true,
        value: false,
        setup: (clearable) => setup({ attributes: { clearable } }),
        ...config
      });
    });

    describe('currentTimezone', () => {
      odsUnitTestAttribute<OdsTimepickerAttribute, 'currentTimezone'>({
        name: 'currentTimezone',
        defaultValue: DEFAULT_ATTRIBUTE.currentTimezone,
        newValue: ODS_TIMEZONE.UTC,
        value: '',
        setup: (currentTimezone) => setup({ attributes: { currentTimezone } }),
        ...config
      });
    });

    describe('disabled', () => {
      odsUnitTestAttribute<OdsTimepickerAttribute, 'disabled'>({
        name: 'disabled',
        defaultValue: DEFAULT_ATTRIBUTE.disabled,
        newValue: true,
        value: false,
        setup: (disabled) => setup({ attributes: { disabled } }),
        ...config
      });
    });

    describe('error', () => {
      odsUnitTestAttribute<OdsTimepickerAttribute, 'error'>({
        name: 'error',
        defaultValue: DEFAULT_ATTRIBUTE.error,
        newValue: true,
        value: false,
        setup: (error) => setup({ attributes: { error } }),
        ...config
      });
    });

    describe('inline', () => {
      odsUnitTestAttribute<OdsTimepickerAttribute, 'inline'>({
        name: 'inline',
        defaultValue: DEFAULT_ATTRIBUTE.inline,
        newValue: true,
        value: false,
        setup: (inline) => setup({ attributes: { inline } }),
        ...config
      });
    });

    describe('timezones', () => {
      odsUnitTestAttribute<OdsTimepickerAttribute, 'timezones'>({
        name: 'timezones',
        defaultValue: DEFAULT_ATTRIBUTE.timezones,
        newValue: [ODS_TIMEZONE.UTC, ODS_TIMEZONE.UTC2],
        value: '',
        setup: (timezones) => setup({ attributes: { timezones } }),
        ...config
      });
    });

    describe('value', () => {
      odsUnitTestAttribute<OdsTimepickerAttribute, 'value'>({
        name: 'value',
        defaultValue: DEFAULT_ATTRIBUTE.value,
        newValue: '11:11',
        value: '',
        setup: (value) => setup({ attributes: { value } }),
        ...config
      });
    });

    describe('withSeconds', () => {
      odsUnitTestAttribute<OdsTimepickerAttribute, 'withSeconds'>({
        name: 'withSeconds',
        defaultValue: DEFAULT_ATTRIBUTE.withSeconds,
        newValue: true,
        value: false,
        setup: (withSeconds) => setup({ attributes: { withSeconds } }),
        ...config
      });
    });
  });
});
