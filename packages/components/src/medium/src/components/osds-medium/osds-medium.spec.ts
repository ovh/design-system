jest.mock('./core/controller'); // keep jest.mock before any import

import type { OdsMediumAttribute } from './interfaces/attributes';
import type { SpecPage } from '@stencil/core/testing';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str, odsUnitTestAttribute } from '@ovhcloud/ods-common-testing';
import { newSpecPage } from '@stencil/core/testing';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { OdsMediumController } from './core/controller';
import { OsdsMedium } from './osds-medium';

describe('spec:osds-medium', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let instance: OsdsMedium;
  let controller: OdsMediumController;

  afterEach(() => {
    jest.clearAllMocks();
  });

  async function setup({ attributes = {} }: { attributes?: Partial<OdsMediumAttribute> } = {}): Promise<void> {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsMediumAttribute>(attributes, DEFAULT_ATTRIBUTE);

    page = await newSpecPage({
      components: [OsdsMedium],
      html: `<osds-medium ${odsStringAttributes2Str(stringAttributes)}></osds-medium>`,
    });

    root = page.root;
    instance = page.rootInstance;

    controller = (OdsMediumController as unknown as jest.SpyInstance<OdsMediumController, unknown[]>).mock.instances[0];
  }

  it('should render', async() => {
    await setup();
    expect(root?.shadowRoot).toBeTruthy();
    expect(instance).toBeTruthy();
  });

  describe('attributes', () => {
    const config = {
      instance: (): OsdsMedium => instance,
      page: (): SpecPage => page,
      root: (): SpecPage['root'] => page.root,
      wait: (): Promise<void> => page.waitForChanges(),
    };

    describe('alt', () => {
      odsUnitTestAttribute<OdsMediumAttribute, 'alt'>({
        defaultValue: DEFAULT_ATTRIBUTE.alt,
        name: 'alt',
        newValue: 'OVHcloud logo',
        setup: (value: string|undefined) => setup({ attributes: { ['alt']: value } }),
        value: '',
        ...config,
      });
    });

    describe('height', () => {
      odsUnitTestAttribute<OdsMediumAttribute, 'height'>({
        defaultValue: DEFAULT_ATTRIBUTE.height,
        name: 'height',
        newValue: 300,
        setup: (value: number|undefined) => setup({ attributes: { ['height']: value } }),
        value: 100,
        ...config,
      });
    });

    describe('src', () => {
      odsUnitTestAttribute<OdsMediumAttribute, 'src'>({
        defaultValue: DEFAULT_ATTRIBUTE.src,
        name: 'src',
        newValue: 'https://corporate.ovhcloud.com/sites/default/files/2022-03/ovhcloud-logo2.png',
        setup: (value: string|undefined) => setup({ attributes: { ['src']: value } }),
        value: '',
        ...config,
      });
    });

    describe('width', () => {
      odsUnitTestAttribute<OdsMediumAttribute, 'width'>({
        defaultValue: DEFAULT_ATTRIBUTE.width,
        name: 'width',
        newValue: 600,
        setup: (value: number|undefined) => setup({ attributes: { ['width']: value } }),
        value: 100,
        ...config,
      });
    });
  });

  describe('@Watch : validate', () => {
    it('should call controller.validateHeight on init and on height changes', async() => {
      await setup();
      expect(controller.validateHeight).toHaveBeenCalledWith(DEFAULT_ATTRIBUTE.height);

      root?.setAttribute('height', 10);
      await page.waitForChanges();

      expect(controller.validateHeight).toHaveBeenCalledWith(10);
      expect(controller.validateHeight).toHaveBeenCalledTimes(2);
    });

    it('should call controller.validateWidth on init and on width changes', async() => {
      await setup();
      expect(controller.validateWidth).toHaveBeenCalledWith(DEFAULT_ATTRIBUTE.width);

      root?.setAttribute('width', 10);
      await page.waitForChanges();

      expect(controller.validateWidth).toHaveBeenCalledWith(10);
      expect(controller.validateWidth).toHaveBeenCalledTimes(2);
    });
  });
});
