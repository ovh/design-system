import type { OdsTextAttribute } from './interfaces/attributes';
import type { SpecPage } from '@stencil/core/testing';
import { ODS_TEXT_COLOR_INTENT, ODS_TEXT_COLOR_INTENTS } from './constants/text-color';
import { ODS_TEXT_LEVEL, ODS_TEXT_LEVELS } from './constants/text-level';
import { ODS_TEXT_SIZE, ODS_TEXT_SIZES } from './constants/text-size';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { OsdsText } from './osds-text';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str, odsUnitTestAttribute } from '@ovhcloud/ods-common-testing';
import { newSpecPage } from '@stencil/core/testing';

describe('spec:osds-text', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let textSlot: HTMLSlotElement | null | undefined;
  let instance: OsdsText;

  async function setup({ attributes= {} , html = '' }: { attributes?: Partial<OdsTextAttribute>, html?: string }): Promise<void> {
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

  it('should render', async() => {
    await setup({});
    expect(root?.shadowRoot).toBeTruthy();
    expect(page.rootInstance).toBeTruthy();
  });

  it('should have an unnamed slot', async() => {
    await setup({ attributes: {} });
    expect(textSlot).toBeTruthy();
  });

  it('should have set a style variable', async() => {
    const styleVar = '--osds-text-color-specific-hue: var(--ods-color-default-500);';
    await setup({ attributes: {} });
    expect(root?.getAttribute('style')).toBe(styleVar);
  });

  it('should not set a style variable', async() => {
    // @ts-ignore: for test purpose
    await setup({ attributes: { color: '', hue: '' } });
    expect(root?.getAttribute('style')).toBeNull();
  });

  describe('attributes', () => {
    const config = {
      instance: (): OsdsText => instance,
      page: (): SpecPage => page,
      root: (): AnyHTMLElement => page.root,
      wait: (): Promise<void> => page.waitForChanges(),
    };

    describe('color', () => {
      odsUnitTestAttribute<OdsTextAttribute, 'color'>({
        defaultValue: DEFAULT_ATTRIBUTE.color,
        name: 'color',
        newValue: ODS_TEXT_COLOR_INTENT.primary,
        setup: (value) => setup({ attributes: { ['color']: value } }),
        value: ODS_TEXT_COLOR_INTENT.default,
        ...config,
      });

      it('should set a color if attribute is added', async() => {
        const randomColor = ODS_TEXT_COLOR_INTENTS[Math.floor(Math.random() * ODS_TEXT_COLOR_INTENTS.length)];
        await setup({ attributes: { color: randomColor } });
        expect(instance.color).toBe(randomColor);
      });
    });

    describe('contrasted', () => {
      odsUnitTestAttribute<OdsTextAttribute, 'contrasted'>({
        defaultValue: DEFAULT_ATTRIBUTE.contrasted,
        name: 'contrasted',
        newValue: false,
        setup: (value) => setup({ attributes: { ['contrasted']: value } }),
        value: true,
        ...config,
      });

      it('should be contrasted if attribute is added', async() => {
        await setup({ attributes: { contrasted: true } });
        expect(instance.contrasted).toBe('true');
      });
    });

    describe('size', () => {
      odsUnitTestAttribute<OdsTextAttribute, 'size'>({
        defaultValue: DEFAULT_ATTRIBUTE.size,
        name: 'size',
        newValue: ODS_TEXT_SIZE._400,
        setup: (value) => setup({ attributes: { ['size']: value } }),
        value: ODS_TEXT_SIZE._500,
        ...config,
      });

      it('should set a size if attribute is added', async() => {
        const randomSize = ODS_TEXT_SIZES[Math.floor(Math.random() * ODS_TEXT_SIZES.length)];
        await setup({ attributes: { size: randomSize } });
        expect(page.root?.size).toBe(randomSize);
      });
    });

    describe('level', () => {
      odsUnitTestAttribute<OdsTextAttribute, 'level'>({
        defaultValue: DEFAULT_ATTRIBUTE.level,
        name: 'level',
        newValue: ODS_TEXT_LEVEL.body,
        setup: (value) => setup({ attributes: { ['level']: value } }),
        value: ODS_TEXT_LEVEL.button,
        ...config,
      });

      it('should have a body level', async() => {
        await setup({});
        expect(instance.level).toBe(ODS_TEXT_LEVEL.body);
      });
      it('should set a level if attribute is added', async() => {
        const randomLevel = ODS_TEXT_LEVELS[Math.floor(Math.random() * ODS_TEXT_LEVELS.length)];
        await setup({ attributes: { level: randomLevel } });
        expect(page.root?.level).toBe(randomLevel);
      });
    });
  });
});
