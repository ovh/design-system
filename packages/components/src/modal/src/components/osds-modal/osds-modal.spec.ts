import type { OdsModalAttribute } from './interfaces/attributes';
import type { SpecPage } from '@stencil/core/testing';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str, odsUnitTestAttribute } from '@ovhcloud/ods-common-testing';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { newSpecPage } from '@stencil/core/testing';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { OsdsModal } from './osds-modal';

describe('spec:osds-modal', () => {
  const baseAttribute = { color: ODS_THEME_COLOR_INTENT.info, dismissible: true, headline: '', masked: false };
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let instance: OsdsModal;

  afterEach(() => {
    jest.clearAllMocks();
  });

  async function setup({ attributes = {} }: { attributes?: Partial<OdsModalAttribute> } = {}): Promise<void> {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsModalAttribute>({ ...baseAttribute, ...attributes }, DEFAULT_ATTRIBUTE);

    page = await newSpecPage({
      components: [OsdsModal],
      html: `<osds-modal ${odsStringAttributes2Str(stringAttributes)}>Modal</osds-modal>`,
    });

    root = page.root;
    instance = page.rootInstance;
  }

  it('should render', async() => {
    await setup({});
    expect(root?.shadowRoot).toBeTruthy();
    expect(instance).toBeTruthy();
  });

  describe('attributes', () => {
    const config = {
      instance: (): OsdsModal => instance,
      page: (): SpecPage => page,
      root: (): HTMLElement | undefined => page.root,
      wait: (): Promise<void> => page.waitForChanges(),
    };

    describe('color', () => {
      odsUnitTestAttribute<OdsModalAttribute, 'color'>({
        defaultValue: DEFAULT_ATTRIBUTE.color,
        name: 'color',
        newValue: ODS_THEME_COLOR_INTENT.primary,
        setup: (value) => setup({ attributes: { ['color']: value } }),
        value: ODS_THEME_COLOR_INTENT.default,
        ...config,
      });
    });

    describe('dismissible', () => {
      odsUnitTestAttribute<OdsModalAttribute, 'dismissible'>({
        defaultValue: DEFAULT_ATTRIBUTE.dismissible,
        name: 'dismissible',
        newValue: false,
        setup: (value) => setup({ attributes: { ['dismissible']: value } }),
        value: true,
        ...config,
      });
    });

    describe('headline', () => {
      odsUnitTestAttribute<OdsModalAttribute, 'headline'>({
        defaultValue: DEFAULT_ATTRIBUTE.headline,
        name: 'headline',
        newValue: 'OVH',
        setup: (value) => setup({ attributes: { ['headline']: value } }),
        value: 'On Vous Héberge ?',
        ...config,
      });
    });

    describe('masked', () => {
      odsUnitTestAttribute<OdsModalAttribute, 'masked'>({
        defaultValue: DEFAULT_ATTRIBUTE.masked,
        name: 'masked',
        newValue: false,
        setup: (value) => setup({ attributes: { ['masked']: value } }),
        value: true,
        ...config,
      });
    });
  });

  describe('methods', () => {
    describe('close', () => {
      it('should set masked to true', async() => {
        await setup({});
        await instance.close();

        expect(instance.masked).toBe(true);
      });
    });

    describe('open', () => {
      it('should set masked to false', async() => {
        await setup({});
        await instance.open();

        expect(instance.masked).toBe(false);
      });
    });
  });

  it('should mask on close icon click', async() => {
    await setup();

    expect(instance.masked).toBe(false);

    const closeIcon = root?.shadowRoot?.querySelector('osds-icon[name="close"]') as HTMLElement;
    await closeIcon.click();
    await page.waitForChanges();

    expect(instance.masked).toBe(true);
  });
});
