jest.mock('./core/controller'); // keep jest.mock before any

import type { SpecPage } from '@stencil/core/testing';
import type { OdsTileAttribute } from './interfaces/attributes';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { ODS_TILE_SIZE, ODS_TILE_SIZES } from './constants/tile-size';
import { ODS_TILE_VARIANT, ODS_TILE_VARIANTS } from './constants/tile-variant';
import { OdsTileController } from './core/controller';
import { OsdsTile } from './osds-tile';
import { newSpecPage } from '@stencil/core/testing';
import { ODS_THEME_COLOR_INTENT, ODS_THEME_COLOR_INTENTS } from '@ovhcloud/ods-common-theming';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str, odsUnitTestAttribute } from '@ovhcloud/ods-common-testing';

describe('spec:osds-tile', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let instance: OsdsTile;
  let startSlot: HTMLElement | null | undefined;
  let mainSlot: HTMLElement | null | undefined;
  let endSlot: HTMLElement | null | undefined;
  let controller: OdsTileController;

  afterEach(() => {
    jest.clearAllMocks();
  });

  async function setup({ attributes = {}, html = '' }: { attributes?: Partial<OdsTileAttribute>, html?: string } = {}) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsTileAttribute>(attributes, DEFAULT_ATTRIBUTE);

    page = await newSpecPage({
      components: [OsdsTile],
      html: `<osds-tile ${odsStringAttributes2Str(stringAttributes)}>${html}</osds-tile>`,
    });

    root = page.root;
    instance = page.rootInstance;
    startSlot = root?.shadowRoot?.querySelector('slot[name="start"]');
    mainSlot = root?.shadowRoot?.querySelector('slot:not([name])');
    endSlot = root?.shadowRoot?.querySelector('slot[name="end"]');
    controller = (OdsTileController as unknown as jest.SpyInstance<OdsTileController, unknown[]>).mock.instances[0];
  }

  it('should render', async() => {
    await setup();
    expect(root?.shadowRoot).toBeTruthy();
    expect(instance).toBeTruthy();
  });

  describe('contents', () => {
    it('should have a start slot', async() => {
      await setup();
      expect(startSlot).toBeTruthy();
    });
    it('should have an unnamed main slot', async() => {
      await setup();
      expect(mainSlot).toBeTruthy();
    });
    it('should have a end slot', async() => {
      await setup();
      expect(endSlot).toBeTruthy();
    });
  });


  describe('attributes', () => {
    const config = {
      instance: () => instance,
      page: () => page,
      root: () => page.root,
      wait: () => page.waitForChanges(),
    };

    describe('color', () => {
      odsUnitTestAttribute<OdsTileAttribute, 'color'>({
        name: 'color',
        defaultValue: DEFAULT_ATTRIBUTE.color,
        newValue: ODS_THEME_COLOR_INTENT.error,
        value: ODS_THEME_COLOR_INTENT.success,
        setup: (value) => setup({ attributes: { ['color']: value } }),
        ...config,
      });

      it('should set a color if attribute is added', async() => {
        const randomColor = ODS_THEME_COLOR_INTENTS[Math.floor(Math.random() * ODS_THEME_COLOR_INTENTS.length)];
        await setup({ attributes: { color: randomColor } });
        expect(instance.color).toBe(randomColor);
      });
    });

    describe('size', () => {
      odsUnitTestAttribute<OdsTileAttribute, 'size'>({
        name: 'size',
        defaultValue: DEFAULT_ATTRIBUTE.size,
        newValue: ODS_TILE_SIZE.md,
        value: ODS_TILE_SIZE.sm,
        setup: (value) => setup({ attributes: { ['size']: value } }),
        ...config,
      });

      it('should set a size if attribute is added', async() => {
        const randomSize = ODS_TILE_SIZES[Math.floor(Math.random() * ODS_TILE_SIZES.length)];
        await setup({ attributes: { size: randomSize } });
        expect(instance.size).toBe(randomSize);
      });
    });

    describe('inline', () => {
      odsUnitTestAttribute<OdsTileAttribute, 'inline'>({
        name: 'inline',
        defaultValue: DEFAULT_ATTRIBUTE.inline,
        newValue: true,
        value: false,
        setup: (value) => setup({ attributes: { ['inline']: value } }),
        ...config,
      });
    });

    describe('variant', () => {
      odsUnitTestAttribute<OdsTileAttribute, 'variant'>({
        name: 'variant',
        defaultValue: DEFAULT_ATTRIBUTE.variant,
        newValue: ODS_TILE_VARIANT.ghost,
        value: ODS_TILE_VARIANT.stroked,
        setup: (value) => setup({ attributes: { ['variant']: value } }),
        ...config,
      });

      it('should set a variant if attribute is added', async() => {
        const randomVariant = ODS_TILE_VARIANTS[Math.floor(Math.random() * ODS_TILE_VARIANTS.length)];
        await setup({ attributes: { variant: randomVariant } });
        expect(instance.variant).toBe(randomVariant);
      });
    });

    describe('disabled', () => {
      odsUnitTestAttribute<OdsTileAttribute, 'disabled'>({
        name: 'disabled',
        defaultValue: DEFAULT_ATTRIBUTE.disabled,
        newValue: true,
        value: false,
        setup: (value) => setup({ attributes: { ['disabled']: value } }),
        ...config,
      });

      it('should be disabled if attribute is added', async() => {
        await setup({ attributes: { disabled: true } });
        expect(page.root?.disabled).toBeDefined();
      });
    });

    describe('rounded', () => {
      odsUnitTestAttribute<OdsTileAttribute, 'rounded'>({
        name: 'rounded',
        defaultValue: DEFAULT_ATTRIBUTE.rounded,
        newValue: true,
        value: false,
        setup: (value) => setup({ attributes: { ['rounded']: value } }),
        ...config,
      });
    });

    describe('checking', () => {
      odsUnitTestAttribute<OdsTileAttribute, 'checking'>({
        name: 'checking',
        defaultValue: DEFAULT_ATTRIBUTE.checking,
        newValue: true,
        value: false,
        setup: (value) => setup({ attributes: { ['checking']: value } }),
        ...config,
      });
    });

    describe('checked', () => {
      odsUnitTestAttribute<OdsTileAttribute, 'checked'>({
        name: 'checked',
        defaultValue: DEFAULT_ATTRIBUTE.checked,
        newValue: true,
        value: false,
        setup: (value) => setup({ attributes: { ['checked']: value } }),
        ...config,
      });
    });

    describe('hoverable', () => {
      odsUnitTestAttribute<OdsTileAttribute, 'hoverable'>({
        name: 'hoverable',
        defaultValue: DEFAULT_ATTRIBUTE.hoverable,
        newValue: true,
        value: false,
        setup: (value) => setup({ attributes: { ['hoverable']: value } }),
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

    it('should call controller.handleClick on component click', async() => {
      await setup();
      root?.click();
      await page.waitForChanges();

      expect(controller.handleClick).toHaveBeenCalledWith();
      expect(controller.handleClick).toHaveBeenCalledTimes(1);
    });
  });
});
