import type { SpecPage } from '@stencil/core/testing';
import type { OdsDividerAttribute } from './interfaces/attributes';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str, odsUnitTestAttribute } from '@ovhcloud/ods-common-testing';
import { ODS_THEME_COLOR_INTENT, ODS_THEME_COLOR_INTENTS } from '@ovhcloud/ods-common-theming';
import { newSpecPage } from '@stencil/core/testing';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { ODS_DIVIDER_SIZE, ODS_DIVIDER_SIZES } from './constants/divider-size';
import { OsdsDivider } from './osds-divider';

describe('spec:osds-divider', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let instance: OsdsDivider;

  async function setup({ attributes= {} , html = `` }: { attributes?: Partial<OdsDividerAttribute>, html?: string }) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsDividerAttribute>(attributes, DEFAULT_ATTRIBUTE);

    page = await newSpecPage({
      components: [OsdsDivider],
      html: `<osds-divider ${odsStringAttributes2Str(stringAttributes)}>${html}</osds-divider>`,
    });

    root = page.root;
    instance = page.rootInstance;
  }

  it('should render', async () => {
    await setup({});
    expect(root?.shadowRoot).toBeTruthy();
    expect(instance).toBeTruthy();
  });

  describe('attributes', () => {
    const config = {
      instance: () => instance,
      page: () => page,
      root: () => page.root,
      wait: () => page.waitForChanges(),
    };

    describe('color', () => {
      odsUnitTestAttribute<OdsDividerAttribute, 'color'>({
        name: 'color',
        defaultValue: DEFAULT_ATTRIBUTE.color,
        newValue: ODS_THEME_COLOR_INTENT.error,
        value: ODS_THEME_COLOR_INTENT.success,
        setup: (value) => setup({ attributes: { ['color']: value } }),
        ...config
      });

      it('should set a color if attribute is added', async () => {
        const randomColor = ODS_THEME_COLOR_INTENTS[Math.floor(Math.random() * ODS_THEME_COLOR_INTENTS.length)];
        await setup({ attributes: { color: randomColor } });
        expect(instance.color).toBe(randomColor);
      });
    });

    describe('contrasted', () => {
      odsUnitTestAttribute<OdsDividerAttribute, 'contrasted'>({
        name: 'contrasted',
        defaultValue: DEFAULT_ATTRIBUTE.contrasted,
        newValue: false,
        value: true,
        setup: (value) => setup({ attributes: { ['contrasted']: value } }),
        ...config,
      });

      it('should be contrasted if attribute is added', async () => {
        await setup({ attributes: { contrasted: true } });
        expect(instance.contrasted).toBeDefined();
      });
    });

    describe('size', () => {
      odsUnitTestAttribute<OdsDividerAttribute, 'size'>({
        name: 'size',
        defaultValue: DEFAULT_ATTRIBUTE.size,
        newValue: ODS_DIVIDER_SIZE.two,
        value: ODS_DIVIDER_SIZE.three,
        setup: (value) => setup({ attributes: { ['size']: value } }),
        ...config,
      });

      it('should set a size if attribute is added', async () => {
        const randomSize = ODS_DIVIDER_SIZES[Math.floor(Math.random() * ODS_DIVIDER_SIZES.length)];
        await setup({ attributes: { size: randomSize } });
        expect(page.root?.size).toBe(randomSize);
      });
    });

    describe('separator', () => {
      odsUnitTestAttribute<OdsDividerAttribute, 'separator'>({
        name: 'separator',
        defaultValue: DEFAULT_ATTRIBUTE.separator,
        newValue: false,
        value: true,
        setup: (value) => setup({ attributes: { ['separator']: value } }),
        ...config,
      });

      it('should have a separator if attribute is added', async () => {
        await setup({ attributes: { separator: true } });
        expect(instance.separator).toBe('true');
      });
    });
  });
});
