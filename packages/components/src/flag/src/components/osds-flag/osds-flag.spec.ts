jest.mock('./core/controller');

import type { OdsFlagAttribute } from './interfaces/attributes';
import type { SpecPage } from '@stencil/core/testing';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str, odsUnitTestAttribute } from '@ovhcloud/ods-common-testing';
import { Build } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { ODS_FLAG_ISO_CODE } from './constants/flag-iso-code';
import { OdsFlagController } from './core/controller';
import { OsdsFlag } from './osds-flag';

describe('spec:osds-flag', () => {
  const baseAttribute = { iso: ODS_FLAG_ISO_CODE.FR, lazy: false };
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let divEl: HTMLElement | null | undefined;
  let instance: OsdsFlag;
  let shadowRoot: ShadowRoot | null | undefined;
  let controller: OdsFlagController;

  async function setup({ attributes = {} }: { attributes?: Partial<OdsFlagAttribute> } = {}): Promise<void> {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsFlagAttribute>({ ...baseAttribute, ...attributes }, DEFAULT_ATTRIBUTE);

    page = await newSpecPage({
      components: [OsdsFlag],
      html: `<osds-flag ${odsStringAttributes2Str(stringAttributes)}></osds-flag>`,
    });

    root = page.root;
    instance = page.rootInstance;
    shadowRoot = page.root?.shadowRoot;
    controller = (OdsFlagController as unknown as jest.SpyInstance<OdsFlagController, unknown[]>).mock.instances[0];

    divEl = shadowRoot?.querySelector('.flag__svg');
  }

  beforeEach(() => {
    jest.spyOn(OdsFlagController.prototype, 'load').mockImplementation(() => new Promise((resolve) => resolve('')));
  });

  afterEach(() => {
    Build.isBrowser = false;
    jest.clearAllMocks();
  });

  it('should render', async() => {
    await setup({});
    expect(root).toBeTruthy();
    expect(root?.shadowRoot).toBeTruthy();
    expect(instance).toBeTruthy();
  });

  describe('attributes', () => {
    const config = {
      instance: (): OsdsFlag => instance,
      page: (): SpecPage => page,
      root: (): SpecPage['root'] => page.root,
      wait: (): Promise<void> => page.waitForChanges(),
    };

    describe('iso', () => {
      odsUnitTestAttribute<OdsFlagAttribute, 'iso'>({
        defaultValue: DEFAULT_ATTRIBUTE.iso,
        name: 'iso',
        newValue: ODS_FLAG_ISO_CODE.ES,
        setup: (value) => setup({ attributes: { ['iso']: value } }),
        value: ODS_FLAG_ISO_CODE.FR,
        ...config,
      });
    });

    describe('src', () => {
      odsUnitTestAttribute<OdsFlagAttribute, 'src'>({
        defaultValue: DEFAULT_ATTRIBUTE.src,
        name: 'src',
        newValue: '',
        setup: (value) => setup({ attributes: { ['src']: value } }),
        value: 'my/path.svg',
        ...config,
      });
    });

    describe('assetPath', () => {
      odsUnitTestAttribute<OdsFlagAttribute, 'assetPath'>({
        defaultValue: DEFAULT_ATTRIBUTE.assetPath,
        name: 'assetPath',
        newValue: '',
        setup: (value) => setup({ attributes: { ['assetPath']: value } }),
        value: 'my/path',
        ...config,
      });
    });

    describe('lazy', () => {
      odsUnitTestAttribute<OdsFlagAttribute, 'lazy'>({
        defaultValue: DEFAULT_ATTRIBUTE.lazy,
        name: 'lazy',
        newValue: false,
        setup: (value) => setup({ attributes: { ['lazy']: value } }),
        value: true,
        ...config,
      });
    });
  });

  it('should call init of controller at start', async() => {
    await setup();

    expect(controller.onInit).toHaveBeenCalledTimes(1);
  });

  it('should set visible once it is visible', async() => {
    // mock before setup because of the setup call onInit
    jest.spyOn(OdsFlagController.prototype, 'onInit').mockImplementation((onBecomeVisible) => onBecomeVisible());
    await setup({ attributes: { iso: ODS_FLAG_ISO_CODE.FR } });

    // load method will be called after setup, when iso changed, so we can mock it after setup
    // goal: change the iso code in order to trigger the load method with the visible variable
    const spy = jest.spyOn(controller, 'load').mockImplementation(() => new Promise((resolve) => resolve('')));
    instance.iso = ODS_FLAG_ISO_CODE.BE;

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(true, false);
  });

  it('should call load of controller when src change', async() => {
    await setup({ attributes: { src: 'my/src/fr.svg' } });

    root?.setAttribute('src', 'my/src/de.svg');

    expect(controller.load).toHaveBeenCalledTimes(1);
  });

  it('should call load of controller when assetPath change', async() => {
    await setup({ attributes: { assetPath: undefined } });

    instance.assetPath = 'myAssetPath';

    expect(controller.load).toHaveBeenCalledTimes(1);
  });

  it('should call load of controller when iso change', async() => {
    await setup({ attributes: { iso: ODS_FLAG_ISO_CODE.FR } });

    instance.iso = ODS_FLAG_ISO_CODE.BE;

    expect(controller.load).toHaveBeenCalledTimes(1);
  });

  it('should not have aria-label if aria-hidden set', async() => {
    await setup();

    instance['ariaLabel'] = ODS_FLAG_ISO_CODE.FR;
    await page.waitForChanges();
    expect(instance['ariaLabel']).toBe('fr');

    const noAriaHidden = root?.getAttribute('aria-label');
    expect(noAriaHidden).toBe('fr');

    root?.setAttribute('aria-hidden', 'true');
    await page.waitForChanges();
    // need to change iso so setAttribute is effective
    instance.iso = ODS_FLAG_ISO_CODE.BE;
    await page.waitForChanges();

    const withAriaHidden = root?.getAttribute('aria-label');
    expect(withAriaHidden).toBe(null);
  });

  it('should set svgContent when received', async() => {
    await setup();
    jest.spyOn(controller, 'load').mockImplementation(() => new Promise((resolve) => resolve('<svg></svg>')));
    await instance.load();
    await page.waitForChanges();

    expect(instance['svgContent']).toBeTruthy();
  });

  it('should have default flag if no svg content', async() => {
    await setup();
    Build.isBrowser = true;
    instance['svgContent'] = undefined;
    await page.waitForChanges();

    expect(divEl).toBeTruthy();
    expect(divEl).toHaveClass('flag__svg--default');
  });

  it('should have flag if svg content', async() => {
    await setup();
    Build.isBrowser = true;
    instance['svgContent'] = '<svg></svg>';
    await page.waitForChanges();

    expect(divEl).toBeTruthy();
    expect(divEl?.innerHTML).toEqual('<svg></svg>');
  });
});
