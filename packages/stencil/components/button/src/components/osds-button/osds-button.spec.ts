jest.mock('@ovhcloud/ods-core/src/components/button/ods-button-controller'); // keep jest.mock before any

import {
  OdsButtonAttributes,
  OdsButtonController,
  odsButtonDefaultAttributes,
  OdsButtonSizeList,
  OdsButtonVariant,
  OdsButtonVariantList,
  OdsComponentAttributes2StringAttributes,
  OdsHTMLAnchorElementRelList,
  OdsHTMLAnchorElementTargetList,
} from '@ovhcloud/ods-core';
import {
  odsButtonBaseAttributes,
  OdsCreateAttributes,
  OdsStringAttributes2Str,
  odsUnitTestAttribute,
} from '@ovhcloud/ods-testing';
import { newSpecPage, SpecPage } from '@stencil/core/testing';

import { OdsThemeColorIntentList } from '@ovhcloud/ods-theming';
import { OsdsButton } from './osds-button';
import { getAttributeContextOptions } from '@ovhcloud/ods-stencil/libraries/stencil-testing';

describe('spec:osds-button', () => {
  let page: SpecPage;
  let htmlButton: HTMLButtonElement;
  let htmlLink: HTMLAnchorElement;
  let mainSlot: HTMLElement;
  let startSlot: HTMLElement;
  let endSlot: HTMLElement;
  let instance: OsdsButton;
  let controller: OdsButtonController;

  afterEach(() => {
    jest.clearAllMocks();
  });

  async function setup({ attributes= {} , html = `` }: { attributes?: Partial<OdsButtonAttributes>, html?: string } = {}) {
    const minimalAttributes: OdsButtonAttributes = OdsCreateAttributes(attributes, odsButtonBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsButtonAttributes>(minimalAttributes, odsButtonDefaultAttributes);

    page = await newSpecPage({
      components: [OsdsButton],
      html: `<osds-button ${OdsStringAttributes2Str(stringAttributes)}>${html}</osds-button>`,
    });

    instance = page.rootInstance;

    htmlButton = page.root.shadowRoot.querySelector('button');
    htmlLink = page.root.shadowRoot.querySelector('a');

    // note: assigned slot not yet available in HtmlMockedElement of stencil : https://github.com/ionic-team/stencil/issues/2830
    mainSlot = page.root.shadowRoot.querySelector('slot:not([name])');
    startSlot = page.root.shadowRoot.querySelector('slot[name="start"]');
    endSlot = page.root.shadowRoot.querySelector('slot[name="end"]');
    controller = (OdsButtonController as unknown as jest.SpyInstance<OdsButtonController, unknown[]>).mock.instances[0];
  }

  it('should render', async () => {
    await setup({});
    expect(page.root.shadowRoot).toBeTruthy();
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
    });

    it('should have a link when href attribute is set', async () => {
      await setup({ attributes: { href: 'test' } });
      expect(htmlLink).toBeTruthy();
    });

    it('should have an ellipsis icon when circle attribute is set', async () => {
      await setup({ attributes: { circle: true } });
      expect(page.root.shadowRoot.querySelector('osds-icon')).toBeTruthy();
    });

    it('should not have an ellipsis icon when circle attribute is not set', async () => {
      await setup({ attributes: { circle: false } });
      expect(page.root.shadowRoot.querySelector('osds-icon')).toBeFalsy();
    });
  });

  describe('attributes', () => {
    const config = {
      page: () => page,
      instance: () => instance,
      setup
    };

    describe('color', () => {
      odsUnitTestAttribute<OdsButtonAttributes, 'color'>({
        ...getAttributeContextOptions<OdsButtonAttributes, OsdsButton, 'color'>({
          name: 'color',
          list: OdsThemeColorIntentList,
          defaultValue: odsButtonDefaultAttributes.color,
          ...config
        })
      });
      it('should set a color if attribute is added', async () => {
        const randomColor = OdsThemeColorIntentList[Math.floor(Math.random() * OdsThemeColorIntentList.length)];
        await setup({ attributes: { color: randomColor } });
        expect(page.root.color).toBe(randomColor);
      });
    });

    describe('contrasted', () => {
      odsUnitTestAttribute<OdsButtonAttributes, 'contrasted'>({
        ...getAttributeContextOptions<OdsButtonAttributes, OsdsButton, 'contrasted'>({
          name: 'contrasted',
          list: [true,false],
          defaultValue: odsButtonDefaultAttributes.contrasted,
          ...config
        })
      });
      it('should be contrasted if attribute is added', async () => {
        await setup({ attributes: { contrasted: true } });
        expect(page.root.contrasted).toBeDefined();
      });
    });

    describe('disabled', () => {
      odsUnitTestAttribute<OdsButtonAttributes, 'disabled'>({
        ...getAttributeContextOptions<OdsButtonAttributes, OsdsButton, 'disabled'>({
          name: 'disabled',
          list: [true,false],
          defaultValue: odsButtonDefaultAttributes.disabled,
          ...config
        })
      });
      it('should be disabled if attribute is added', async () => {
        await setup({ attributes: { disabled: true } });
        expect(page.root.disabled).toBeDefined();
      });
    });

    describe('flex', () => {
      odsUnitTestAttribute<OdsButtonAttributes, 'flex'>({
        ...getAttributeContextOptions<OdsButtonAttributes, OsdsButton, 'flex'>({
          name: 'flex',
          list: [true,false],
          defaultValue: odsButtonDefaultAttributes.flex,
          ...config
        })
      });
      it('should be flex if attribute is added', async () => {
        await setup({ attributes: { flex: true } });
        expect(page.root.flex).toBeDefined();
      });
    });

    describe('rel', () => {
      odsUnitTestAttribute<OdsButtonAttributes, 'rel'>({
        ...getAttributeContextOptions<OdsButtonAttributes, OsdsButton, 'rel'>({
          name: 'rel',
          list: OdsHTMLAnchorElementRelList,
          defaultValue: odsButtonDefaultAttributes.rel,
          ...config
        })
      });
    });

    describe('size', () => {
      odsUnitTestAttribute<OdsButtonAttributes, 'size'>({
      ...getAttributeContextOptions<OdsButtonAttributes, OsdsButton, 'size'>({
          name: 'size',
          list: OdsButtonSizeList,
          defaultValue: odsButtonDefaultAttributes.size,
          ...config
        })
      });
      it('should set a size if attribute is added', async () => {
        const randomSize = OdsButtonSizeList[Math.floor(Math.random() * OdsButtonSizeList.length)];
        await setup({ attributes: { size: randomSize } });
        expect(page.root.size).toBe(randomSize);
      });
    });

    describe('circle', () => {
      odsUnitTestAttribute<OdsButtonAttributes, 'circle'>({
        ...getAttributeContextOptions<OdsButtonAttributes, OsdsButton, 'circle'>({
          name: 'circle',
          list: [true,false],
          defaultValue: odsButtonDefaultAttributes.circle,
          ...config
        })
      });

      it('should bind the circle attribute correctly', async () => {
        await setup({ attributes: { circle: true } });
        expect(page.root.circle).toBeDefined();
      });
    });

    describe('target', () => {
      odsUnitTestAttribute<OdsButtonAttributes, 'target'>({
        ...getAttributeContextOptions<OdsButtonAttributes, OsdsButton, 'target'>({
          name: 'target',
          list: OdsHTMLAnchorElementTargetList,
          defaultValue: odsButtonDefaultAttributes.target,
          ...config
        })
      });
    });

    describe('variant', () => {
      odsUnitTestAttribute<OdsButtonAttributes, 'variant'>({
        ...getAttributeContextOptions<OdsButtonAttributes, OsdsButton, 'variant'>({
          name: 'variant',
          list: OdsButtonVariantList,
          defaultValue: odsButtonDefaultAttributes.variant,
          ...config
        })
      });
      it('should set a variant if attribute is added', async () => {
        const randomVariant = OdsButtonVariantList[Math.floor(Math.random() * OdsButtonVariantList.length)];
        await setup({ attributes: { variant: randomVariant } });
        expect(page.root.variant).toBe(randomVariant);
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

      page.root.click()

      expect(controller.handleClick).toHaveBeenCalledTimes(2);
      expect(controller.handleClick).toHaveBeenCalledWith(click);
    });

    it('should call handleKey of controller', async () => {
      await setup({});
      const key = new KeyboardEvent("keyup", { key : "Enter" });
      instance.handleKey(key);

      page.root.dispatchEvent(key);
      await page.waitForChanges();

      expect(controller.handleKey).toHaveBeenCalledTimes(2);
      expect(controller.handleKey).toHaveBeenCalledWith(key);
    });
  });
});
