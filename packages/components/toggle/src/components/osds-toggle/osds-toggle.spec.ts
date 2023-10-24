jest.mock('./core/controller'); // keep jest.mock before any

import type { SpecPage } from '@stencil/core/testing';
import type { OdsToggleAttribute } from './interfaces/attributes';
import { OdsToggleController } from './core/controller';
import { OsdsToggle } from './osds-toggle';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str, odsUnitTestAttribute } from '@ovhcloud/ods-common-testing';
import { newSpecPage } from '@stencil/core/testing';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';

describe('spec:osds-toggle', () => {
  const baseAttributes = {
    contrasted: false,
    checked: false,
    checking: false,
    color: ODS_THEME_COLOR_INTENT.primary,
    disabled: false,
    interactive: true,
  };
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let instance: OsdsToggle;
  let controller: OdsToggleController;

  afterEach(() => {
    jest.clearAllMocks();
  });

  async function setup({ attributes = {} }: { attributes?: Partial<OdsToggleAttribute> } = {}) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsToggleAttribute>({ ...baseAttributes, ...attributes }, DEFAULT_ATTRIBUTE);

    page = await newSpecPage({
      components: [OsdsToggle],
      html: `<osds-toggle ${odsStringAttributes2Str(stringAttributes)}></osds-toggle>`,
    });

    root = page.root;
    instance = page.rootInstance;
    controller = (OdsToggleController as unknown as jest.SpyInstance<OdsToggleController, unknown[]>).mock.instances[0];
  }

  it('should render', async() => {
    await setup();
    expect(root?.shadowRoot).toBeTruthy();
    expect(instance).toBeTruthy();
  });

  describe('attributes', () => {
    const config = {
      page: () => page,
      instance: () => instance,
      root: () => page.root,
      wait: () => page.waitForChanges(),
    };

    describe('color', () => {
      odsUnitTestAttribute<OdsToggleAttribute, 'color'>({
        name: 'color',
        defaultValue: DEFAULT_ATTRIBUTE.color,
        newValue: ODS_THEME_COLOR_INTENT.primary,
        value: ODS_THEME_COLOR_INTENT.default,
        setup: (value) => setup({ attributes: { ['color']: value } }),
        ...config,
      });
    });

    describe('contrasted', () => {
      odsUnitTestAttribute<OdsToggleAttribute, 'contrasted'>({
        name: 'contrasted',
        defaultValue: DEFAULT_ATTRIBUTE.contrasted,
        newValue: false,
        value: true,
        setup: (value) => setup({ attributes: { ['contrasted']: value } }),
        ...config,
      });
    });

    describe('checked', () => {
      odsUnitTestAttribute<OdsToggleAttribute, 'checked'>({
        name: 'checked',
        defaultValue: DEFAULT_ATTRIBUTE.checked,
        newValue: false,
        value: true,
        setup: (value) => setup({ attributes: { ['checked']: value } }),
        ...config,
      });
    });

    describe('checking', () => {
      odsUnitTestAttribute<OdsToggleAttribute, 'checking'>({
        name: 'checking',
        defaultValue: DEFAULT_ATTRIBUTE.checking,
        newValue: false,
        value: true,
        setup: (value) => setup({ attributes: { ['checking']: value } }),
        ...config,
      });
    });

    describe('disabled', () => {
      odsUnitTestAttribute<OdsToggleAttribute, 'disabled'>({
        name: 'disabled',
        defaultValue: DEFAULT_ATTRIBUTE.disabled,
        newValue: false,
        value: true,
        setup: (value) => setup({ attributes: { ['disabled']: value } }),
        ...config,
      });
    });

    describe('interactive', () => {
      odsUnitTestAttribute<OdsToggleAttribute, 'interactive'>({
        name: 'interactive',
        defaultValue: DEFAULT_ATTRIBUTE.interactive,
        newValue: true,
        value: false,
        setup: (value) => setup({ attributes: { ['interactive']: value } }),
        ...config,
      });
    });
  });

  describe('controller', () => {
    it('should call controller.validateAttributes', async() => {
      await setup();
      expect(controller.validateAttributes).toHaveBeenCalledWith();
      expect(controller.validateAttributes).toHaveBeenCalledTimes(1);
    });
  });
});
