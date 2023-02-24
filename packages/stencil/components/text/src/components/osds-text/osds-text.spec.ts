import {
  OdsComponentAttributes2StringAttributes,
  OdsTextAttributes,
  OdsTextLevel,
  OdsTextLevelList,
  OdsTextSize,
  OdsTextSizeList,
  odsTextDefaultAttributes
} from '@ovhcloud/ods-core';
import {
  OdsCreateAttributes,
  OdsStringAttributes2Str,
  odsTextBaseAttributes,
  odsUnitTestAttribute
} from '@ovhcloud/ods-testing';
import { SpecPage, newSpecPage } from '@stencil/core/testing';

import { OdsThemeColorIntentList } from '@ovhcloud/ods-theming';
import { OsdsText } from './osds-text';
import { getAttributeContextOptions } from '@ovhcloud/ods-stencil/libraries/stencil-testing';

describe('spec:osds-text', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let textSlot: HTMLSlotElement;
  let instance: OsdsText;

  async function setup({ attributes= {} , html = `` }: { attributes?: Partial<OdsTextAttributes>, html?: string }) {
    const minimalAttributes: OdsTextAttributes = OdsCreateAttributes(attributes, odsTextBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsTextAttributes>(minimalAttributes, odsTextDefaultAttributes);

    page = await newSpecPage({
      components: [OsdsText],
      html: `<osds-text ${OdsStringAttributes2Str(stringAttributes)}>${html}</osds-text>`,
    });

    root = page.root;
    instance = page.rootInstance;

    // note: assigned slot not yet available in HtmlMockedElement of stencil : https://github.com/ionic-team/stencil/issues/2830
    textSlot = root?.shadowRoot.querySelector('slot:not([name])');
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
      page: () => page,
      instance: () => instance,
      setup
    };

    describe('color', () => {
      odsUnitTestAttribute<OdsTextAttributes, 'color'>({
        ...getAttributeContextOptions<OdsTextAttributes, OsdsText, 'color'>({
          name: 'color',
          list: OdsThemeColorIntentList,
          defaultValue: odsTextDefaultAttributes.color,
          ...config
        })
      });
      it('should set a color if attribute is added', async () => {
        const randomColor = OdsThemeColorIntentList[Math.floor(Math.random() * OdsThemeColorIntentList.length)];
        await setup({ attributes: { color: randomColor } });
        expect(instance.color).toBe(randomColor);
      });
    });

    describe('contrasted', () => {
      odsUnitTestAttribute<OdsTextAttributes, 'contrasted'>({
        ...getAttributeContextOptions<OdsTextAttributes, OsdsText, 'contrasted'>({
          name: 'contrasted',
          list: [true,false],
          defaultValue: odsTextDefaultAttributes.contrasted,
          ...config
        })
      });
      it('should be contrasted if attribute is added', async () => {
        await setup({ attributes: { contrasted: true } });
        expect(instance.contrasted).toBe('');
      });
    });

    describe('size', () => {
      odsUnitTestAttribute<OdsTextAttributes, 'size'>({
        ...getAttributeContextOptions<OdsTextAttributes, OsdsText, 'size'>({
          name: 'size',
          list: OdsTextSizeList,
          defaultValue: odsTextDefaultAttributes.size,
          ...config
        })
      });
      it('should set a size if attribute is added', async () => {
        const randomSize = OdsTextSizeList[Math.floor(Math.random() * OdsTextSizeList.length)];
        await setup({ attributes: { size: randomSize } });
        expect(page.root.size).toBe(randomSize);
      });
    });

    describe('level', () => {
      odsUnitTestAttribute<OdsTextAttributes, 'level'>({
        ...getAttributeContextOptions<OdsTextAttributes, OsdsText, 'level'>({
          name: 'level',
          list: OdsTextLevelList,
          defaultValue: odsTextDefaultAttributes.level,
          ...config
        })
      });
      it('should have a body level', async () => {
        await setup({});
        expect(instance.level).toBe(OdsTextLevel.body);
      });
      it('should set a level if attribute is added', async () => {
        const randomLevel = OdsTextLevelList[Math.floor(Math.random() * OdsTextLevelList.length)];
        await setup({ attributes: { level: randomLevel } });
        expect(page.root.level).toBe(randomLevel);
      });
    });
  });

});
