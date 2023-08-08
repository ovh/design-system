jest.mock('@ovhcloud/ods-core/src/components/location-tile/ods-location-tile-controller'); // keep jest.mock before any

import {
  OdsComponentAttributes2StringAttributes,
  OdsCountryIsoCodeList,
  OdsLocationTileAttributes,
  OdsLocationTileController,
  OdsLocationTileVariantList,
  odsLocationTileDefaultAttributes
} from '@ovhcloud/ods-core';
import {
  OdsCreateAttributes,
  OdsStringAttributes2Str,
  odsLocationTileBaseAttributes,
  odsUnitTestAttribute
} from '@ovhcloud/ods-testing';
import { SpecPage, newSpecPage } from '@stencil/core/testing';

import { OdsThemeColorIntentList } from '@ovhcloud/ods-theming';
import { OsdsLocationTile } from './osds-location-tile';
import { ODS_TILE_SIZES } from '@ovhcloud/ods-component-tile';
import { getAttributeContextOptions } from '@ovhcloud/ods-stencil/libraries/stencil-testing';

describe('spec:osds-location-tile', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let instance: OsdsLocationTile;
  let slotCountry: HTMLElement | null | undefined;
  let slotCity: HTMLElement | null | undefined;
  let slotInfo: HTMLElement | null | undefined;
  let controller: OdsLocationTileController;

  afterEach(() => {
    jest.clearAllMocks();
  });

  async function setup({ attributes = {} }: { attributes?: Partial<OdsLocationTileAttributes> } = {}) {
    const minimalAttributes: OdsLocationTileAttributes = OdsCreateAttributes(attributes, odsLocationTileBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsLocationTileAttributes>(minimalAttributes, odsLocationTileDefaultAttributes);

    page = await newSpecPage({
      components: [OsdsLocationTile],
      html: `<osds-location-tile ${OdsStringAttributes2Str(stringAttributes)}><span slot='content'>My LocationTile</span></osds-location-tile>`,
    });

    root = page.root;
    instance = page.rootInstance;
    slotCountry = root?.shadowRoot?.querySelector('slot[name="country"]');
    slotCity = root?.shadowRoot?.querySelector('slot[name="city"]');
    slotInfo = root?.shadowRoot?.querySelector('slot[name="info"]');
    controller = (OdsLocationTileController as unknown as jest.SpyInstance<OdsLocationTileController, unknown[]>).mock.instances[0];
  }

  it('should render', async () => {
    await setup({ });
    expect(root?.shadowRoot).toBeTruthy();
    expect(instance).toBeTruthy();
  });

  describe('contents', () => {
    it('should have a country slot', async () => {
      await setup({});
      expect(slotCountry).toBeTruthy();
    });
    it('should have a city slot', async () => {
      await setup({});
      expect(slotCity).toBeTruthy();
    });
    it('should have an info slot', async () => {
      await setup({});
      expect(slotInfo).toBeTruthy();
    });
  });

  describe('attributes', () => {
    const config = {
      page: () => page,
      instance: () => instance,
      setup
    };

    describe('color', () => {
      odsUnitTestAttribute<OdsLocationTileAttributes, 'color'>({
        ...getAttributeContextOptions<OdsLocationTileAttributes, OsdsLocationTile, 'color'>({
          name: 'color',
          list: OdsThemeColorIntentList,
          defaultValue: odsLocationTileDefaultAttributes.color,
          ...config
        })
      });
    });

    describe('size', () => {
      odsUnitTestAttribute<OdsLocationTileAttributes, 'size'>({
        ...getAttributeContextOptions<OdsLocationTileAttributes, OsdsLocationTile, 'size'>({
          name: 'size',
          list: ODS_TILE_SIZES,
          defaultValue: odsLocationTileDefaultAttributes.size,
          ...config
        })
      });
    });

    describe('flex', () => {
      odsUnitTestAttribute<OdsLocationTileAttributes, 'flex'>({
        ...getAttributeContextOptions<OdsLocationTileAttributes, OsdsLocationTile, 'flex'>({
          name: 'flex',
          list: [false, true],
          defaultValue: odsLocationTileDefaultAttributes.flex,
          ...config
        })
      });
    });

    describe('variant', () => {
      odsUnitTestAttribute<OdsLocationTileAttributes, 'variant'>({
        ...getAttributeContextOptions<OdsLocationTileAttributes, OsdsLocationTile, 'variant'>({
          name: 'variant',
          list: OdsLocationTileVariantList,
          defaultValue: odsLocationTileDefaultAttributes.variant,
          ...config
        })
      });
    });

    describe('disabled', () => {
      odsUnitTestAttribute<OdsLocationTileAttributes, 'disabled'>({
        ...getAttributeContextOptions<OdsLocationTileAttributes, OsdsLocationTile, 'disabled'>({
          name: 'disabled',
          list: [false, true],
          defaultValue: odsLocationTileDefaultAttributes.disabled,
          ...config
        })
      });
    });

    describe('checking', () => {
      odsUnitTestAttribute<OdsLocationTileAttributes, 'checking'>({
        ...getAttributeContextOptions<OdsLocationTileAttributes, OsdsLocationTile, 'checking'>({
          name: 'checking',
          list: [false, true],
          defaultValue: odsLocationTileDefaultAttributes.checking,
          ...config
        })
      });
    });

    describe('checked', () => {
      odsUnitTestAttribute<OdsLocationTileAttributes, 'checked'>({
        ...getAttributeContextOptions<OdsLocationTileAttributes, OsdsLocationTile, 'checked'>({
          name: 'checked',
          list: [false, true],
          defaultValue: odsLocationTileDefaultAttributes.checked,
          ...config
        })
      });
    });

    describe('interactive', () => {
      odsUnitTestAttribute<OdsLocationTileAttributes, 'interactive'>({
        ...getAttributeContextOptions<OdsLocationTileAttributes, OsdsLocationTile, 'interactive'>({
          name: 'interactive',
          list: [false, true],
          defaultValue: odsLocationTileDefaultAttributes.interactive,
          ...config
        })
      });
    });

    describe('iso', () => {
      odsUnitTestAttribute<OdsLocationTileAttributes, 'iso'>({
        ...getAttributeContextOptions<OdsLocationTileAttributes, OsdsLocationTile, 'iso'>({
          name: 'iso',
          list: OdsCountryIsoCodeList,
          defaultValue: odsLocationTileDefaultAttributes.iso,
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
  });
});
