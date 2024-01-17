jest.mock('./core/controller'); // keep jest.mock before any

import type { OdsSwitchAttribute } from './interfaces/attributes';
import type { SpecPage } from '@stencil/core/testing';
import { OdsUnitTestAttributeType, odsComponentAttributes2StringAttributes, odsStringAttributes2Str, odsUnitTestAttribute } from '@ovhcloud/ods-common-testing';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { newSpecPage } from '@stencil/core/testing';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { ODS_SWITCH_SIZE } from './constants/switch-size';
import { ODS_SWITCH_VARIANT } from './constants/switch-variant';
import { OdsSwitchController } from './core/controller';
import { OsdsSwitch } from './osds-switch';

describe('spec:osds-switch', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let instance: OsdsSwitch;
  let controller: OdsSwitchController;
  let mainSlot: HTMLElement | null | undefined;

  afterEach(() => {
    jest.clearAllMocks();
  });

  async function setup({ attributes = {} }: { attributes?: Partial<OdsSwitchAttribute> } = {}): Promise<void> {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsSwitchAttribute>(attributes, DEFAULT_ATTRIBUTE);

    page = await newSpecPage({
      components: [OsdsSwitch],
      html: `<osds-switch ${odsStringAttributes2Str(stringAttributes)}>
              <osds-switch-item value="1" id="1">Item 1</osds-switch-item>
              <osds-switch-item value="2" id="2">Item 2</osds-switch-item>
              <osds-switch-item value="3" id="3">Item 3</osds-switch-item>
             </osds-switch>`,
    });

    root = page.root;
    instance = page.rootInstance;
    controller = (OdsSwitchController as unknown as jest.SpyInstance<OdsSwitchController, unknown[]>).mock.instances[0];
    mainSlot = root?.shadowRoot?.querySelector('slot:not([name])');
  }

  it('should render', async() => {
    await setup({});
    expect(root?.shadowRoot).toBeTruthy();
    expect(instance).toBeTruthy();
  });

  describe('attributes', (): void => {
    const config = {
      instance: () => instance,
      page: () => page,
      root: () => page.root,
      wait: () => page.waitForChanges(),
    };

    describe('color', () => {
      odsUnitTestAttribute<OdsSwitchAttribute, 'color'>({
        defaultValue: DEFAULT_ATTRIBUTE.color,
        name: 'color',
        newValue: ODS_THEME_COLOR_INTENT.default,
        setup: (value) => setup({ attributes: { ['color']: value } }),
        value: ODS_THEME_COLOR_INTENT.primary,
        ...config,
      });
    });

    describe('contrasted', () => {
      odsUnitTestAttribute<OdsSwitchAttribute, 'contrasted'>({
        defaultValue: DEFAULT_ATTRIBUTE.contrasted,
        name: 'contrasted',
        newValue: false,
        setup: (value) => setup({ attributes: { ['contrasted']: value } }),
        value: true,
        ...config,
      });
    });

    describe('disabled', () => {
      odsUnitTestAttribute<OdsSwitchAttribute, 'disabled'>({
        defaultValue: DEFAULT_ATTRIBUTE.disabled,
        name: 'disabled',
        newValue: false,
        setup: (value) => setup({ attributes: { ['disabled']: value } }),
        value: true,
        ...config,
      });
    });

    describe('size', () => {
      odsUnitTestAttribute<OdsSwitchAttribute, 'size'>({
        defaultValue: DEFAULT_ATTRIBUTE.size,
        name: 'size',
        newValue: ODS_SWITCH_SIZE.sm,
        setup: (value) => setup({ attributes: { ['size']: value } }),
        value: ODS_SWITCH_SIZE.md,
        ...config,
      });
    });

    describe('variant', () => {
      odsUnitTestAttribute<OdsSwitchAttribute, 'variant'>({
        defaultValue: DEFAULT_ATTRIBUTE.variant,
        exclude: [OdsUnitTestAttributeType.REFLECTED, OdsUnitTestAttributeType.MUTABLE],
        name: 'variant',
        newValue: ODS_SWITCH_VARIANT.flat,
        setup: (value) => setup({ attributes: { ['variant']: value } }),
        value: undefined,
        ...config,
      });
    });
  });

  describe('contents', () => {
    it('should have a main slot', async() => {
      await setup();
      expect(mainSlot).toBeTruthy();
    });
  });

  describe('controller', () => {
    it('should call controller.changeCheckedSwitchItem on switch item click', async() => {
      await setup();
      const spyEmit = jest.spyOn(instance, 'emitChanged');
      const spyFocus = jest.spyOn(instance, 'handlerFocus');
      const detail = { newValue: '1', previousValue: '' };
      controller.changeCheckedSwitchItem = jest.fn().mockImplementation(() => ({ current: { value: detail.newValue } , old: undefined }));
      instance.handlerSwitchItemClick(new CustomEvent('odsValueChange', { detail }));
      expect(controller.changeCheckedSwitchItem).toHaveBeenCalledTimes(1);
      expect(spyEmit).toHaveBeenNthCalledWith(1, detail.newValue, undefined);
      expect(spyFocus).toHaveBeenCalledTimes(1);
    });

    it('should not call controller.changeCheckedSwitchItem because of disabled', async() => {
      await setup({ attributes: { disabled: true } });
      const spyEmit = jest.spyOn(instance, 'emitChanged');
      const spyFocus = jest.spyOn(instance, 'handlerFocus');
      instance.handlerSwitchItemClick(new CustomEvent('odsValueChange', { detail: { newValue: '1', previousValue: '' } }));
      expect(controller.changeCheckedSwitchItem).not.toHaveBeenCalled();
      expect(spyEmit).not.toHaveBeenCalled();
      expect(spyFocus).not.toHaveBeenCalled();
    });

    it('should call controller.findPreviousSwitchItem on navigate with arrow left', async() => {
      await setup();
      const keyArraowLeft = new KeyboardEvent('keydown', { code: 'ArrowLeft' });
      instance.handlerOnKeyDown(keyArraowLeft);
      root?.dispatchEvent(keyArraowLeft);
      expect(controller.findPreviousSwitchItem).toHaveBeenCalledTimes(2);
    });

    it('should call controller.findNextSwitchItem on navigate with arrow right', async() => {
      await setup();
      const keyArrawRight = new KeyboardEvent('keydown', { code: 'ArrowRight' });
      instance.handlerOnKeyDown(keyArrawRight);
      root?.dispatchEvent(keyArrawRight);
      expect(controller.findNextSwitchItem).toHaveBeenCalledTimes(2);
    });

    it('should do nothing because of unsupport key', async() => {
      await setup();
      const keySpace = new KeyboardEvent('keydown', { code: 'Space' });
      instance.handlerOnKeyDown(keySpace);
      root?.dispatchEvent(keySpace);
      const keyEnter = new KeyboardEvent('keydown', { code: 'Enter' });
      instance.handlerOnKeyDown(keyEnter);
      root?.dispatchEvent(keyEnter);
      const keyEscape = new KeyboardEvent('keydown', { code: 'Escape' });
      instance.handlerOnKeyDown(keyEscape);
      root?.dispatchEvent(keyEscape);
      const keyA = new KeyboardEvent('keydown', { code: 'A' });
      instance.handlerOnKeyDown(keyA);

      expect(controller.findNextSwitchItem).not.toHaveBeenCalled();
    });
  });
});
