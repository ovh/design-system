jest.mock('./core/controller')

import type { SpecPage } from '@stencil/core/testing';
import type { OdsFlagAttribute } from './interfaces/attributes';
import { ODS_COUNTRY_ISO_CODE, OdsComponentAttributes2StringAttributes } from '@ovhcloud/ods-common-core';
import { odsStringAttributes2Str, odsUnitTestAttribute } from '@ovhcloud/ods-common-testing';
import { Build } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { getAssetPath } from '@stencil/core/internal';
import { OdsFlagController } from './core/controller';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes'
import { OsdsFlag } from './osds-flag';

describe('spec:osds-flag', () => {
  const baseAttribute = { iso: ODS_COUNTRY_ISO_CODE.FR, lazy: false };
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let divEl: HTMLElement | null | undefined;
  let instance: OsdsFlag;
  let shadowRoot: ShadowRoot | null | undefined;
  let controller: OdsFlagController;

  async function setup({ attributes = {} }: { attributes?: Partial<OdsFlagAttribute> } = {}) {
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsFlagAttribute>({ ...baseAttribute, ...attributes }, DEFAULT_ATTRIBUTE);

    page = await newSpecPage({
      components: [OsdsFlag],
      html: `<osds-flag ${odsStringAttributes2Str(stringAttributes)}></osds-flag>`,
    });

    root = page.root;
    instance = page.rootInstance;
    shadowRoot = page.root?.shadowRoot;
    controller = (OdsFlagController as unknown as jest.SpyInstance<OdsFlagController, unknown[]>).mock.instances[ 0 ];

    divEl = shadowRoot?.querySelector('.svg-inner');
  }

  beforeEach(() => {
    jest.spyOn(OdsFlagController.prototype, 'load').mockImplementation(() => new Promise(resolve => resolve('')));
  })

  afterEach(() => {
    Build.isBrowser = false;
    jest.clearAllMocks();
  });

  it('should render', async () => {
    await setup({});
    expect(root).toBeTruthy();
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

    describe('iso', () => {
      odsUnitTestAttribute<OdsFlagAttribute, 'iso'>({
        name: 'iso',
        defaultValue: DEFAULT_ATTRIBUTE.iso,
        newValue: ODS_COUNTRY_ISO_CODE.ES,
        value: ODS_COUNTRY_ISO_CODE.FR,
        setup: (value) => setup({ attributes: { ['iso']: value } }),
        ...config
      });
    });

    describe('src', () => {
      odsUnitTestAttribute<OdsFlagAttribute, 'src'>({
        name: 'src',
        defaultValue: DEFAULT_ATTRIBUTE.src,
        newValue: '',
        value: 'my/path.svg',
        setup: (value) => setup({ attributes: { ['src']: value } }),
        ...config
      });
    });

    describe('assetPath', () => {
      odsUnitTestAttribute<OdsFlagAttribute, 'assetPath'>({
        name: 'assetPath',
        defaultValue: DEFAULT_ATTRIBUTE.assetPath,
        newValue: '',
        value: 'my/path',
        setup: (value) => setup({ attributes: { ['assetPath']: value } }),
        ...config
      });
    });

    describe('lazy', () => {
      odsUnitTestAttribute<OdsFlagAttribute, 'lazy'>({
        name: 'lazy',
        defaultValue: DEFAULT_ATTRIBUTE.lazy,
        newValue: false,
        value: true,
        setup: (value) => setup({ attributes: { ['lazy']: value } }),
        ...config
      });
    });

  });

  it('should call init of controller at start', async () => {
    await setup();
    expect(controller.onInit).toHaveBeenCalledTimes(1);
  });

  it('should set visible once it is visible', async () => {
    // mock before setup because of the setup call onInit
    jest.spyOn(OdsFlagController.prototype, 'onInit').mockImplementation((onBecomeVisible) => onBecomeVisible());
    await setup({ attributes: { iso: ODS_COUNTRY_ISO_CODE.FR } });
    // load method will be called after setup, when iso changed, so we can mock it after setup
    // goal: change the iso code in order to trigger the load method with the visible variable
    const spy = jest.spyOn(controller, 'load').mockImplementation(() => new Promise(resolve => resolve('')));
    page.waitForChanges();
    instance.iso = ODS_COUNTRY_ISO_CODE.BE;
    page.waitForChanges();
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(true, false);
  });

  // todo currently we are not using getAssetPath from stencil since it doesn't work in React integration
  xit('should call getAssetPath from node_modules', async () => {
    await setup();
    instance.getAssetPath('my-mocked-path');
    expect(getAssetPath).toHaveBeenNthCalledWith(1, 'my-mocked-path');
  });

  it('should call load of controller when src change', async () => {
    await setup({ attributes: { src: 'my/src/fr.svg' } });
    page.waitForChanges();
    root?.setAttribute('src', 'my/src/de.svg');
    page.waitForChanges();
    expect(controller.load).toHaveBeenCalledTimes(1);
  });

  it('should call load of controller when assetPath change', async () => {
    await setup({ attributes: { assetPath: undefined } });
    instance.assetPath = 'myAssetPath';
    page.waitForChanges();
    expect(controller.load).toHaveBeenCalledTimes(1);
  });

  it('should call load of controller when iso change', async () => {
    await setup({ attributes: { iso: ODS_COUNTRY_ISO_CODE.FR } });
    instance.iso = ODS_COUNTRY_ISO_CODE.BE;
    page.waitForChanges();
    expect(controller.load).toHaveBeenCalledTimes(1);
  });

  it('should not have aria-label if aria-hidden set', async () => {
    await setup();

    instance['ariaLabel'] = 'fr';
    await page.waitForChanges();
    expect(instance['ariaLabel']).toBe('fr');

    const noAriaHidden = root?.getAttribute('aria-label');
    expect(noAriaHidden).toBe('fr');

    root?.setAttribute('aria-hidden', 'true');
    await page.waitForChanges();
    // need to change iso so setAttribute is effective
    instance.iso = ODS_COUNTRY_ISO_CODE.BE;
    await page.waitForChanges();

    const withAriaHidden = root?.getAttribute('aria-label');
    expect(withAriaHidden).toBe(null);
  });

  it('should set svgContent when received', async () => {
    await setup();
    jest.spyOn(controller, 'load').mockImplementation(() => new Promise(resolve => resolve('<svg></svg>')));
    instance.load();
    await page.waitForChanges();

    expect(instance['svgContent']).toBeTruthy();

  });

  it('should have default flag if no svg content', async () => {
    await setup();
    Build.isBrowser = true;
    instance['svgContent'] = undefined;
    await page.waitForChanges();

    expect(divEl).toBeTruthy();
    expect(divEl).toHaveClass('flag-default');
  });

  it('should have flag if svg content', async () => {
    await setup();
    Build.isBrowser = true;
    instance['svgContent'] = '<svg></svg>';
    await page.waitForChanges();

    expect(divEl).toBeTruthy();
    expect(divEl?.innerHTML).toEqual('<svg></svg>');
  });
});
