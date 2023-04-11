/* eslint-disable no-console */
jest.mock('@ovhcloud/ods-core/src/components/tabs/ods-tab-panel/ods-tab-panel-controller'); // keep jest.mock before any import

import {
  OdsClearLoggerSpy,
  OdsCreateAttributes,
  OdsInitializeLoggerSpy,
  OdsLoggerSpyReferences,
  OdsStringAttributes2Str,
  odsTabPanelBaseAttributes,
  odsUnitTestAttribute,
} from '@ovhcloud/ods-testing';
import { getAttributeContextOptions } from '@ovhcloud/ods-stencil/libraries/stencil-testing';
import { OsdsTabsPanel } from './osds-tab-panel';
import { OdsComponentAttributes2StringAttributes, OdsTabPanelAttributes } from '@ovhcloud/ods-core';
import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { OdsLogger, OdsTabPanel, OdsTabPanelController, odsTabPanelDefaultAttributes } from '@ovhcloud/ods-core/src';

describe('spec:OsdsTabsPanel', () => {
  let page: SpecPage;
  let shadowRoot: ShadowRoot | null | undefined;
  let controller: OdsTabPanelController;
  let instance: OsdsTabsPanel;
  let root: HTMLElement | undefined;
  let mainSlot: HTMLElement | null | undefined;
  let loggerSpyReferences: OdsLoggerSpyReferences;

  const baseHtml = (slots: { unnamed?: string }) =>
    `
    ${slots.unnamed || slots.unnamed === '' ? slots.unnamed : `My Panel`}
    `;

  async function setup({
                         attributes = {},
                         html = ``,
                       }: { attributes?: Partial<OdsTabPanelAttributes>, html?: string } = {}) {
    const minimalAttributes: OdsTabPanelAttributes = OdsCreateAttributes(attributes, odsTabPanelBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsTabPanelAttributes>(minimalAttributes, odsTabPanelDefaultAttributes);

    page = await newSpecPage({
      components: [OsdsTabsPanel],
      html: `<osds-tab-panel ${OdsStringAttributes2Str(stringAttributes)}>${html}</osds-tab-panel>`,
    });

    instance = page.rootInstance;
    root = page.root;
    shadowRoot = root?.shadowRoot;

    // note: assigned slot not yet available in HtmlMockedElement of stencil : https://github.com/ionic-team/stencil/issues/2830
    mainSlot = shadowRoot?.querySelector('slot:not([name])');

    controller = (OdsTabPanelController as unknown as jest.SpyInstance<OdsTabPanelController, unknown[]>).mock.instances[ 0 ];
  }

  beforeEach(() => {
    const loggerMocked = new OdsLogger('myLoggerMocked');
    loggerSpyReferences = OdsInitializeLoggerSpy({ loggerMocked, spiedClass: OsdsTabsPanel });
  });

  afterEach(() => {
    OdsClearLoggerSpy(loggerSpyReferences);
    jest.clearAllMocks();
  });

  it('should render', async () => {
    await setup({});
    expect(shadowRoot).toBeTruthy();
    expect(instance).toBeTruthy();
  });

  it('should have his controller', async () => {
    await setup({});
    expect(controller).toBeTruthy();
  });

  describe('contents', () => {
    it('should have a main slot', async () => {
      await setup({ attributes: {}, html: baseHtml({}) });
      expect(mainSlot).toBeTruthy();
    });
  });


  /**
   * @see OdsTabPanelAttributes
   */
  describe('attributes', () => {

    const config = {
      page: () => page,
      instance: () => instance,
      setup: async (options) => {
        await setup({ attributes: options.attributes, html: baseHtml({}) });
      },
    };

    describe('active', () => {
      odsUnitTestAttribute<OdsTabPanelAttributes, 'active'>({
        ...getAttributeContextOptions<OdsTabPanelAttributes, OdsTabPanel, 'active'>({
          name: 'active',
          list: [false, true],
          defaultValue: odsTabPanelDefaultAttributes.active,
          ...config,
        }),
      });
    });

    describe('name', () => {
      odsUnitTestAttribute<OdsTabPanelAttributes, 'name'>({
        ...getAttributeContextOptions<OdsTabPanelAttributes, OdsTabPanel, 'name'>({
          name: 'name',
          list: ['a', 'b'],
          defaultValue: odsTabPanelDefaultAttributes.name,
          ...config,
        }),
      });
    });

  });

});
