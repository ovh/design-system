jest.mock('@ovhcloud/ods-core/src/components/code/ods-code-controller'); // keep jest.mock before any import

import {
  OdsCodeAttributes,
  OdsCodeController,
  odsCodeDefaultAttributes,
  OdsCodeSizeList,
  OdsComponentAttributes2StringAttributes
} from '@ovhcloud/ods-core';
import {
  odsCodeBaseAttributes,
  OdsCreateAttributes,
  OdsStringAttributes2Str,
  odsUnitTestAttribute
} from '@ovhcloud/ods-testing';
import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { OdsThemeColorIntentList } from '@ovhcloud/ods-theming';
import { OsdsCode } from './osds-code';
import { getAttributeContextOptions } from '@ovhcloud/ods-stencil/libraries/stencil-testing';

describe('spec:osds-code', () => {
  let page: SpecPage;
  let mainSlot: HTMLElement | undefined | null;
  let copySlot: HTMLElement | undefined | null;
  let instance: OsdsCode;
  let controller: OdsCodeController;

  async function setup({
                         attributes = {},
                         html = ``
                       }: { attributes?: Partial<OdsCodeAttributes>, html?: string } = {}) {
    const minimalAttributes: OdsCodeAttributes = OdsCreateAttributes(attributes, odsCodeBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsCodeAttributes>(minimalAttributes, odsCodeDefaultAttributes);

    page = await newSpecPage({
      components: [OsdsCode],
      html: `<osds-code ${OdsStringAttributes2Str(stringAttributes)}>${html}</osds-code>`,
    });

    instance = page.rootInstance;

    // note: assigned slot not yet available in HtmlMockedElement of stencil : https://github.com/ionic-team/stencil/issues/2830
    mainSlot = page.root?.shadowRoot?.querySelector('slot:not([name])');
    copySlot = page.root?.shadowRoot?.querySelector('slot[name="copy"]');
    controller = (OdsCodeController as unknown as jest.SpyInstance<OdsCodeController, unknown[]>).mock.instances[ 0 ];
  }

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render', async () => {
    await setup({});
    expect(page.root?.shadowRoot).toBeTruthy();
    expect(page.rootInstance).toBeTruthy();
  });

  describe('contents', () => {
    it('should have a main slot', async () => {
      await setup({ attributes: {} });
      expect(mainSlot).toBeTruthy();
    });

    it('should have a copy slot', async () => {
      const copy = '<osds-button slot="copy"></osds-button>'
      await setup({ html: copy });
      expect(copySlot).toBeTruthy();
    });
  });

  describe('click', () => {
    it('should call copyCode', async () => {
      const copy = '<osds-button slot="copy"></osds-button>'
      await setup({ html: copy });
      await page.waitForChanges();
      copySlot?.click();
      await page.waitForChanges();
      expect(controller.copyCode).toHaveBeenCalledWith();
      expect(controller.copyCode).toHaveBeenCalledTimes(1);
    });
  });

  describe('attributes', () => {
    const config = {
      page: () => page,
      instance: () => instance,
      setup
    };

    describe('color', () => {
      odsUnitTestAttribute<OdsCodeAttributes, 'color'>({
        ...getAttributeContextOptions<OdsCodeAttributes, OsdsCode, 'color'>({
          name: 'color',
          list: OdsThemeColorIntentList,
          defaultValue: odsCodeDefaultAttributes.color,
          ...config
        })
      });
    });

    describe('contrasted', () => {
      odsUnitTestAttribute<OdsCodeAttributes, 'contrasted'>({
        ...getAttributeContextOptions<OdsCodeAttributes, OsdsCode, 'contrasted'>({
          name: 'contrasted',
          list: [true, false],
          defaultValue: odsCodeDefaultAttributes.contrasted,
          ...config
        })
      });
    });

    describe('size', () => {
      odsUnitTestAttribute<OdsCodeAttributes, 'size'>({
        ...getAttributeContextOptions<OdsCodeAttributes, OsdsCode, 'size'>({
          name: 'size',
          list: OdsCodeSizeList,
          defaultValue: odsCodeDefaultAttributes.size,
          ...config
        })
      });
    });
  });

  describe('events', () => {
    it('odsCodeCopy', async () => {
      await setup();
      expect(instance.odsCodeCopy).toBeTruthy();
    });
  });
});
