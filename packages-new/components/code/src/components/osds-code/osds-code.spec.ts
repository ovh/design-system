jest.mock('./core/controller'); // keep jest.mock before any import

import type { SpecPage } from '@stencil/core/testing';
import type { OdsCodeAttribute } from './interfaces/attributes';
import { newSpecPage } from '@stencil/core/testing';
import { OdsLogger } from '@ovhcloud/ods-common-core';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str, odsUnitTestAttribute } from '@ovhcloud/ods-common-testing';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { ODS_CODE_SIZE } from './constants/code-size';
import { OsdsCode } from './osds-code';
import { OdsCodeController } from './core/controller';

const logger = new OdsLogger('osds-code-spec');

describe('spec:osds-code', () => {
  logger.log('init');
  const baseAttribute = { color: OdsThemeColorIntent.default, contrasted: false, size: ODS_CODE_SIZE.md };
  let page: SpecPage;
  let mainSlot: HTMLElement | undefined | null;
  let copySlot: HTMLElement | undefined | null;
  let instance: OsdsCode;
  let controller: OdsCodeController;

  async function setup({
                         attributes = {},
                         html = ``
                       }: { attributes?: Partial<OdsCodeAttribute>, html?: string } = {}) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsCodeAttribute>({ ...baseAttribute, ...attributes }, DEFAULT_ATTRIBUTE);

    page = await newSpecPage({
      components: [OsdsCode],
      html: `<osds-code ${odsStringAttributes2Str(stringAttributes)}>${html}</osds-code>`,
    });

    instance = page.rootInstance;

    controller = (OdsCodeController as unknown as jest.SpyInstance<OdsCodeController, unknown[]>).mock.instances[ 0 ];

    // note: assigned slot not yet available in HtmlMockedElement of stencil : https://github.com/ionic-team/stencil/issues/2830
    mainSlot = page.root?.shadowRoot?.querySelector('slot:not([name])');
    copySlot = page.root?.shadowRoot?.querySelector('slot[name="copy"]');
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
      instance: () => instance,
      page: () => page,
      root: () => page.root,
      wait: () => page.waitForChanges(),
    };

    describe('color', () => {
      odsUnitTestAttribute<OdsCodeAttribute, 'color'>({
          name: 'color',
          defaultValue: DEFAULT_ATTRIBUTE.color,
          newValue: OdsThemeColorIntent.primary,
          value: OdsThemeColorIntent.default,
          setup: (value) => setup({ attributes: { ['color']: value } }),
          ...config
      });
    });

    describe('contrasted', () => {
      odsUnitTestAttribute<OdsCodeAttribute, 'contrasted'>({
          name: 'contrasted',
          defaultValue: DEFAULT_ATTRIBUTE.contrasted,
          newValue: false,
          value: true,
          setup: (value) => setup({ attributes: { ['contrasted']: value } }),
          ...config
      });
    });

    describe('size', () => {
      odsUnitTestAttribute<OdsCodeAttribute, 'size'>({
          name: 'size',
          defaultValue: DEFAULT_ATTRIBUTE.size,
          newValue: ODS_CODE_SIZE.md,
          value: ODS_CODE_SIZE.md,
          setup: (value) => setup({ attributes: { ['size']: value } }),
          ...config,
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
