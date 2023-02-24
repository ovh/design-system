jest.mock('@ovhcloud/ods-core/src/components/tile/ods-tile-controller'); // keep jest.mock before any

import {
  OdsComponentAttributes2StringAttributes,
  OdsTileAttributes,
  OdsTileController,
  OdsTileSizeList,
  OdsTileVariantList,
  odsTileDefaultAttributes,
} from '@ovhcloud/ods-core';
import {
  OdsCreateAttributes,
  OdsStringAttributes2Str,
  odsTileBaseAttributes,
  odsUnitTestAttribute
} from '@ovhcloud/ods-testing';
import { SpecPage, newSpecPage } from '@stencil/core/testing';

import { OdsThemeColorIntentList } from '@ovhcloud/ods-theming';
import { OsdsTile } from './osds-tile';
import { getAttributeContextOptions } from '@ovhcloud/ods-stencil/libraries/stencil-testing';

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

  async function setup({ attributes = {}, html = `` }: { attributes?: Partial<OdsTileAttributes>, html?: string } = {}) {
    const minimalAttributes: OdsTileAttributes = OdsCreateAttributes(attributes, odsTileBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsTileAttributes>(minimalAttributes, odsTileDefaultAttributes);

    page = await newSpecPage({
      components: [OsdsTile],
      html: `<osds-tile ${OdsStringAttributes2Str(stringAttributes)}>${html}</osds-tile>`,
    });

    root = page.root;
    instance = page.rootInstance;
    startSlot = root?.shadowRoot?.querySelector('slot[name="start"]');
    mainSlot = root?.shadowRoot?.querySelector('slot:not([name])');
    endSlot = root?.shadowRoot?.querySelector('slot[name="end"]');
    controller = (OdsTileController as unknown as jest.SpyInstance<OdsTileController, unknown[]>).mock.instances[0];
  }

  it('should render', async () => {
    await setup();
    expect(root?.shadowRoot).toBeTruthy();
    expect(instance).toBeTruthy();
  });

  describe('contents', () => {
    it('should have a start slot', async () => {
      await setup();
      expect(startSlot).toBeTruthy();
    });
    it('should have an unnamed main slot', async () => {
      await setup();
      expect(mainSlot).toBeTruthy();
    });
    it('should have a end slot', async () => {
      await setup();
      expect(endSlot).toBeTruthy();
    });
  });


  describe('attributes', () => {
    const config = {
      page: () => page,
      instance: () => instance,
      setup
    };

    describe('color', () => {
      odsUnitTestAttribute<OdsTileAttributes, 'color'>({
        ...getAttributeContextOptions<OdsTileAttributes, OsdsTile, 'color'>({
          name: 'color',
          list: OdsThemeColorIntentList,
          defaultValue: odsTileDefaultAttributes.color,
          ...config
        })
      });
    });

    describe('size', () => {
      odsUnitTestAttribute<OdsTileAttributes, 'size'>({
        ...getAttributeContextOptions<OdsTileAttributes, OsdsTile, 'size'>({
          name: 'size',
          list: OdsTileSizeList,
          defaultValue: odsTileDefaultAttributes.size,
          ...config
        })
      });
    });

    describe('flex', () => {
      odsUnitTestAttribute<OdsTileAttributes, 'flex'>({
        ...getAttributeContextOptions<OdsTileAttributes, OsdsTile, 'flex'>({
          name: 'flex',
          list: [false, true],
          defaultValue: odsTileDefaultAttributes.flex,
          ...config
        })
      });
    });

    describe('variant', () => {
      odsUnitTestAttribute<OdsTileAttributes, 'variant'>({
        ...getAttributeContextOptions<OdsTileAttributes, OsdsTile, 'variant'>({
          name: 'variant',
          list: OdsTileVariantList,
          defaultValue: odsTileDefaultAttributes.variant,
          ...config
        })
      });
    });

    describe('disabled', () => {
      odsUnitTestAttribute<OdsTileAttributes, 'disabled'>({
        ...getAttributeContextOptions<OdsTileAttributes, OsdsTile, 'disabled'>({
          name: 'disabled',
          list: [false, true],
          defaultValue: odsTileDefaultAttributes.disabled,
          ...config
        })
      });
    });

    describe('rounded', () => {
      odsUnitTestAttribute<OdsTileAttributes, 'rounded'>({
        ...getAttributeContextOptions<OdsTileAttributes, OsdsTile, 'rounded'>({
          name: 'rounded',
          list: [false, true],
          defaultValue: odsTileDefaultAttributes.rounded,
          ...config
        })
      });
    });

    describe('checking', () => {
      odsUnitTestAttribute<OdsTileAttributes, 'checking'>({
        ...getAttributeContextOptions<OdsTileAttributes, OsdsTile, 'checking'>({
          name: 'checking',
          list: [false, true],
          defaultValue: odsTileDefaultAttributes.checking,
          ...config
        })
      });
    });

    describe('checked', () => {
      odsUnitTestAttribute<OdsTileAttributes, 'checked'>({
        ...getAttributeContextOptions<OdsTileAttributes, OsdsTile, 'checked'>({
          name: 'checked',
          list: [false, true],
          defaultValue: odsTileDefaultAttributes.checked,
          ...config
        })
      });
    });

    describe('interactive', () => {
      odsUnitTestAttribute<OdsTileAttributes, 'interactive'>({
        ...getAttributeContextOptions<OdsTileAttributes, OsdsTile, 'interactive'>({
          name: 'interactive',
          list: [false, true],
          defaultValue: odsTileDefaultAttributes.interactive,
          ...config
        })
      });
    });
  });

  describe('controller', () => {
    it('should call controller.validateAttributes', async () => {
      await setup();
      expect(controller.validateAttributes).toHaveBeenCalledWith();
      expect(controller.validateAttributes).toHaveBeenCalledTimes(1);
    });

    it('should call controller.getTabIndex', async () => {
      await setup();
      expect(controller.getTabIndex).toHaveBeenCalledWith();
      expect(controller.getTabIndex).toHaveBeenCalledTimes(1);
    });

    it('should call controller.handleClick on component click', async () => {
      await setup();
      root?.click();
      await page.waitForChanges();

      expect(controller.handleClick).toHaveBeenCalledWith();
      expect(controller.handleClick).toHaveBeenCalledTimes(1);
    });
  });
});
