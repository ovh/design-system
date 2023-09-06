jest.mock('./core/controller'); // keep jest.mock before any

import type { SpecPage } from '@stencil/core/testing';
import type { OdsButtonAttribute } from './interfaces/attributes';
import { OdsHTMLAnchorElementRel, OdsHTMLAnchorElementTarget } from '@ovhcloud/ods-common-core';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str, odsUnitTestAttribute } from '@ovhcloud/ods-common-testing';
import { ODS_THEME_COLOR_INTENT, ODS_THEME_COLOR_INTENTS } from '@ovhcloud/ods-common-theming';
import { newSpecPage } from '@stencil/core/testing';
import { ODS_BUTTON_SIZE, ODS_BUTTON_SIZES } from './constants/button-size';
import { ODS_BUTTON_VARIANT, ODS_BUTTON_VARIANTS } from './constants/button-variant';
import { ODS_BUTTON_TEXTALIGN, ODS_BUTTON_TEXTALIGNS } from './constants/button-textalign';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { OdsButtonController } from './core/controller';
import { OsdsButton } from './osds-button';

describe('spec:osds-button', () => {
  let page: SpecPage;
  let htmlButton: HTMLButtonElement | null | undefined;
  let htmlLink: HTMLAnchorElement | null | undefined;
  let mainSlot: HTMLElement | null | undefined;
  let startSlot: HTMLElement | null | undefined;
  let endSlot: HTMLElement | null | undefined;
  let instance: OsdsButton;
  let controller: OdsButtonController;

  afterEach(() => {
    jest.clearAllMocks();
  });

  async function setup({ attributes= {} , html = `` }: { attributes?: Partial<OdsButtonAttribute>, html?: string } = {}) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsButtonAttribute>(attributes, DEFAULT_ATTRIBUTE);

    page = await newSpecPage({
      components: [OsdsButton],
      html: `<osds-button ${odsStringAttributes2Str(stringAttributes)}>${html}</osds-button>`,
    });

    instance = page.rootInstance;

    htmlButton = page.root?.shadowRoot?.querySelector('button');
    htmlLink = page.root?.shadowRoot?.querySelector('a');

    // note: assigned slot not yet available in HtmlMockedElement of stencil : https://github.com/ionic-team/stencil/issues/2830
    mainSlot = page.root?.shadowRoot?.querySelector('slot:not([name])');
    startSlot = page.root?.shadowRoot?.querySelector('slot[name="start"]');
    endSlot = page.root?.shadowRoot?.querySelector('slot[name="end"]');
    controller = (OdsButtonController as unknown as jest.SpyInstance<OdsButtonController, unknown[]>).mock.instances[0];
  }

  it('should render', async () => {
    await setup({});
    expect(page.root?.shadowRoot).toBeTruthy();
    expect(page.rootInstance).toBeTruthy();
  });

  describe('contents', () => {
    it('should have a start slot', async () => {
      await setup({ attributes: {}, html: `<slot name='start'></slot>` });
      expect(startSlot).toBeTruthy();
    });

    it('should have a main slot', async () => {
      await setup({ attributes: {}, html: `<slot></slot>` });
      expect(mainSlot).toBeTruthy();
    });

    it('should have a end slot', async () => {
      await setup({ attributes: {}, html: `<slot name='end'></slot>` });
      expect(endSlot).toBeTruthy();
    });

    it('should have a button', async () => {
      await setup({});
      expect(htmlButton).toBeTruthy();
      expect(htmlButton?.getAttribute('role')).toBe('button');
    });

    it('should have a link when href attribute is set', async () => {
      await setup({ attributes: { href: 'test' } });
      expect(htmlLink).toBeTruthy();
      expect(htmlLink?.getAttribute('role')).toBe('link');
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
      odsUnitTestAttribute<OdsButtonAttribute, 'color'>({
        name: 'color',
        defaultValue: DEFAULT_ATTRIBUTE.color,
        newValue: ODS_THEME_COLOR_INTENT.primary,
        value: ODS_THEME_COLOR_INTENT.default,
        setup: (value) => setup({ attributes: { ['color']: value } }),
        ...config,
      });

      it('should set a color if attribute is added', async () => {
        const randomColor = ODS_THEME_COLOR_INTENTS[Math.floor(Math.random() * ODS_THEME_COLOR_INTENTS.length)];
        await setup({ attributes: { color: randomColor } });
        expect(page.root?.color).toBe(randomColor);
      });
    });

    describe('contrasted', () => {
      odsUnitTestAttribute<OdsButtonAttribute, 'contrasted'>({
        name: 'contrasted',
        defaultValue: DEFAULT_ATTRIBUTE.contrasted,
        newValue: true,
        value: false,
        setup: (value) => setup({ attributes: { ['contrasted']: value } }),
        ...config,
      });

      it('should be contrasted if attribute is added', async () => {
        await setup({ attributes: { contrasted: true } });
        expect(page.root?.contrasted).toBeDefined();
      });
    });

    describe('disabled', () => {
      odsUnitTestAttribute<OdsButtonAttribute, 'disabled'>({
        name: 'disabled',
        defaultValue: DEFAULT_ATTRIBUTE.disabled,
        newValue: true,
        value: false,
        setup: (value) => setup({ attributes: { ['disabled']: value } }),
        ...config,
      });

      it('should be disabled if attribute is added', async () => {
        await setup({ attributes: { disabled: true } });
        expect(page.root?.disabled).toBeDefined();
      });
    });

    describe('inline', () => {
      odsUnitTestAttribute<OdsButtonAttribute, 'inline'>({
        name: 'inline',
        defaultValue: DEFAULT_ATTRIBUTE.inline,
        newValue: true,
        value: false,
        setup: (value) => setup({ attributes: { ['inline']: value } }),
        ...config,
      });
    });

    describe('rel', () => {
      odsUnitTestAttribute<OdsButtonAttribute, 'rel'>({
        name: 'rel',
        defaultValue: DEFAULT_ATTRIBUTE.rel,
        newValue: OdsHTMLAnchorElementRel.author,
        value: OdsHTMLAnchorElementRel.external,
        setup: (value) => setup({ attributes: { ['rel']: value } }),
        ...config,
      });
    });

    describe('size', () => {
      odsUnitTestAttribute<OdsButtonAttribute, 'size'>({
        name: 'size',
        defaultValue: DEFAULT_ATTRIBUTE.size,
        newValue: ODS_BUTTON_SIZE.sm,
        value: ODS_BUTTON_SIZE.md,
        setup: (value) => setup({ attributes: { ['size']: value } }),
        ...config,
      });

      it('should set a size if attribute is added', async () => {
        const randomSize = ODS_BUTTON_SIZES[Math.floor(Math.random() * ODS_BUTTON_SIZES.length)];
        await setup({ attributes: { size: randomSize } });
        expect(page.root?.size).toBe(randomSize);
      });
    });

    describe('circle', () => {
      odsUnitTestAttribute<OdsButtonAttribute, 'circle'>({
        name: 'circle',
        defaultValue: DEFAULT_ATTRIBUTE.circle,
        newValue: true,
        value: false,
        setup: (value) => setup({ attributes: { ['circle']: value } }),
        ...config,
      });

      it('should bind the circle attribute correctly', async () => {
        await setup({ attributes: { circle: true } });
        expect(page.root?.circle).toBeDefined();
      });
    });

    describe('target', () => {
      odsUnitTestAttribute<OdsButtonAttribute, 'target'>({
        name: 'target',
        defaultValue: DEFAULT_ATTRIBUTE.target,
        newValue: OdsHTMLAnchorElementTarget._parent,
        value: OdsHTMLAnchorElementTarget._top,
        setup: (value) => setup({ attributes: { ['target']: value } }),
        ...config,
      });
    });

    describe('variant', () => {
      odsUnitTestAttribute<OdsButtonAttribute, 'variant'>({
        name: 'variant',
        defaultValue: DEFAULT_ATTRIBUTE.variant,
        newValue: ODS_BUTTON_VARIANT.flat,
        value: ODS_BUTTON_VARIANT.ghost,
        setup: (value) => setup({ attributes: { ['variant']: value } }),
        ...config,
      });

      it('should set a variant if attribute is added', async () => {
        const randomVariant = ODS_BUTTON_VARIANTS[Math.floor(Math.random() * ODS_BUTTON_VARIANTS.length)];
        await setup({ attributes: { variant: randomVariant } });
        expect(page.root?.variant).toBe(randomVariant);
      });
    });

    describe('textAlign', () => {
      odsUnitTestAttribute<OdsButtonAttribute, 'textAlign'>({
        name: 'textAlign',
        defaultValue: DEFAULT_ATTRIBUTE.textAlign,
        newValue: ODS_BUTTON_TEXTALIGN.center,
        value: ODS_BUTTON_TEXTALIGN.start,
        setup: (value) => setup({ attributes: { ['textAlign']: value } }),
        ...config,
      });

      it('should set a textAlign if attribute is added', async () => {
        const randomTextAlign = ODS_BUTTON_TEXTALIGNS[Math.floor(Math.random() * ODS_BUTTON_TEXTALIGNS.length)];
        await setup({ attributes: { textAlign: randomTextAlign } });
        expect(page.root?.textAlign).toBe(randomTextAlign);
      });
    });
  });

  describe('controller', () => {
    it('should call controller.validateAttributes', async () => {
      await setup();
      expect(controller.validateAttributes).toHaveBeenCalledWith();
      expect(controller.validateAttributes).toHaveBeenCalledTimes(1);
    });

    it('should call handleClick of controller', async () => {
      const click = new MouseEvent('click');
      await setup({});
      instance.handleClick(click);

      page.root?.click()

      expect(controller.handleClick).toHaveBeenCalledTimes(2);
      expect(controller.handleClick).toHaveBeenCalledWith(click);
    });

    it('should call handleKey of controller', async () => {
      await setup({});
      const key = new KeyboardEvent("keyup", { key : "Enter" });
      instance.handleKey(key);

      page.root?.dispatchEvent(key);
      await page.waitForChanges();

      expect(controller.handleKey).toHaveBeenCalledTimes(2);
      expect(controller.handleKey).toHaveBeenCalledWith(key);
    });
  });
});
