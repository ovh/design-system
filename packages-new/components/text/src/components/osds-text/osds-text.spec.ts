import type { SpecPage } from '@stencil/core/testing';
import type { OdsTextAttribute } from './interfaces/attributes';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str, odsUnitTestAttribute } from '@ovhcloud/ods-common-testing';
import { OdsThemeColorIntent, OdsThemeColorIntentList } from '@ovhcloud/ods-theming';
import { newSpecPage } from '@stencil/core/testing';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { ODS_TEXT_LEVEL, ODS_TEXT_LEVELS } from './constants/text-level';
import { ODS_TEXT_SIZE, ODS_TEXT_SIZES } from './constants/text-size';
import { OsdsText } from './osds-text';

describe('spec:osds-text', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let textSlot: HTMLSlotElement | null | undefined;
  let instance: OsdsText;

  async function setup({ attributes= {} , html = `` }: { attributes?: Partial<OdsTextAttribute>, html?: string }) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsTextAttribute>(attributes, DEFAULT_ATTRIBUTE);

    page = await newSpecPage({
      components: [OsdsText],
      html: `<osds-text ${odsStringAttributes2Str(stringAttributes)}>${html}</osds-text>`,
    });

    root = page.root;
    instance = page.rootInstance;

    // note: assigned slot not yet available in HtmlMockedElement of stencil : https://github.com/ionic-team/stencil/issues/2830
    textSlot = root?.shadowRoot?.querySelector('slot:not([name])');
  }

  it('should render', async () => {
    await setup({});
    expect(root?.shadowRoot).toBeTruthy();
    expect(page.rootInstance).toBeTruthy();
  });

  it('should have an unnamed slot', async () => {
    await setup({ attributes: {} });
    expect(textSlot).toBeTruthy();
  });

  describe('attributes', () => {
    const config = {
      instance: () => instance,
      page: () => page,
      root: () => page.root,
      wait: () => page.waitForChanges(),
    };

    describe('color', () => {
      odsUnitTestAttribute<OdsTextAttribute, 'color'>({
        name: 'color',
        defaultValue: DEFAULT_ATTRIBUTE.color,
        newValue: OdsThemeColorIntent.primary,
        value: OdsThemeColorIntent.default,
        setup: (value) => setup({ attributes: { ['color']: value } }),
        ...config,
      });

      it('should set a color if attribute is added', async () => {
        const randomColor = OdsThemeColorIntentList[Math.floor(Math.random() * OdsThemeColorIntentList.length)];
        await setup({ attributes: { color: randomColor } });
        expect(instance.color).toBe(randomColor);
      });
    });

    describe('contrasted', () => {
      odsUnitTestAttribute<OdsTextAttribute, 'contrasted'>({
        name: 'contrasted',
        defaultValue: DEFAULT_ATTRIBUTE.contrasted,
        newValue: false,
        value: true,
        setup: (value) => setup({ attributes: { ['contrasted']: value } }),
        ...config,
      });

      it('should be contrasted if attribute is added', async () => {
        await setup({ attributes: { contrasted: true } });
        expect(instance.contrasted).toBe('true');
      });
    });

    describe('size', () => {
      odsUnitTestAttribute<OdsTextAttribute, 'size'>({
        name: 'size',
        defaultValue: DEFAULT_ATTRIBUTE.size,
        newValue: ODS_TEXT_SIZE._400,
        value: ODS_TEXT_SIZE._500,
        setup: (value) => setup({ attributes: { ['size']: value } }),
        ...config,
      });

      it('should set a size if attribute is added', async () => {
        const randomSize = ODS_TEXT_SIZES[Math.floor(Math.random() * ODS_TEXT_SIZES.length)];
        await setup({ attributes: { size: randomSize } });
        expect(page.root?.size).toBe(randomSize);
      });
    });

    describe('level', () => {
      odsUnitTestAttribute<OdsTextAttribute, 'level'>({
        name: 'level',
        defaultValue: DEFAULT_ATTRIBUTE.level,
        newValue: ODS_TEXT_LEVEL.body,
        value: ODS_TEXT_LEVEL.button,
        setup: (value) => setup({ attributes: { ['level']: value } }),
        ...config,
      });

      it('should have a body level', async () => {
        await setup({});
        expect(instance.level).toBe(ODS_TEXT_LEVEL.body);
      });
      it('should set a level if attribute is added', async () => {
        const randomLevel = ODS_TEXT_LEVELS[Math.floor(Math.random() * ODS_TEXT_LEVELS.length)];
        await setup({ attributes: { level: randomLevel } });
        expect(page.root?.level).toBe(randomLevel);
      });
    });
  });
});
