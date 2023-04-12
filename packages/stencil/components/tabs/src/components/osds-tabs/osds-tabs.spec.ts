/* eslint-disable no-console */
jest.mock('@ovhcloud/ods-core/src/components/tabs/ods-tabs/ods-tabs-controller'); // keep jest.mock before any import

import {
  OdsComponentAttributes2StringAttributes,
  OdsLogger,
  OdsTabItemSelectEventDetail,
  OdsTabsAttributes,
  OdsTabsController,
  odsTabsDefaultAttributes,
  OdsTabsSize,
} from '@ovhcloud/ods-core';
import {
  OdsClearLoggerSpy,
  OdsCreateAttributes,
  OdsInitializeLoggerSpy,
  OdsLoggerSpyReferences,
  OdsStringAttributes2Str,
  odsTabsBaseAttributes,
  odsUnitTestAttribute,
} from '@ovhcloud/ods-testing';
import { OsdsTabs } from './osds-tabs';
import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { getAttributeContextOptions } from '@ovhcloud/ods-stencil/libraries/stencil-testing';
import { OsdsTabBarItem } from '../osds-tab-bar-item/osds-tab-bar-item';

describe('spec:OsdsTabs', () => {
  let page: SpecPage;
  let shadowRoot: ShadowRoot | null | undefined;
  let controller: OdsTabsController;
  let mainSlot: HTMLElement | null | undefined;
  let root: HTMLElement | undefined;
  let topSlot: HTMLElement | undefined | null;
  let instance: OsdsTabs;
  let loggerSpyReferences: OdsLoggerSpyReferences;

  const baseHtml = (slots: { unnamed?: string }) =>
    `
    ${slots.unnamed || slots.unnamed === '' ? slots.unnamed : `My tabs`}
    `;

  async function setup({
                         attributes = {},
                         html = ``,
                       }: { attributes?: Partial<OdsTabsAttributes>, html?: string } = {}) {
    const minimalAttributes: OdsTabsAttributes = OdsCreateAttributes(attributes, odsTabsBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsTabsAttributes>(minimalAttributes, odsTabsDefaultAttributes);

    page = await newSpecPage({
      components: [OsdsTabs],
      html: `<osds-tabs ${OdsStringAttributes2Str(stringAttributes)}>${html}</osds-tabs>`,
    });

    instance = page.rootInstance;
    root = page.root;
    shadowRoot = root?.shadowRoot;

    // note: assigned slot not yet available in HtmlMockedElement of stencil : https://github.com/ionic-team/stencil/issues/2830
    mainSlot = shadowRoot?.querySelector('slot:not([name])');
    topSlot = shadowRoot?.querySelector('slot[name="top"]');

    controller = (OdsTabsController as unknown as jest.SpyInstance<OdsTabsController, unknown[]>).mock.instances[ 0 ];
  }

  beforeEach(() => {
    const loggerMocked = new OdsLogger('myLoggerMocked');
    loggerSpyReferences = OdsInitializeLoggerSpy({ loggerMocked, spiedClass: OsdsTabs });
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
    it('should have a top slot', async () => {
      await setup({ attributes: {}, html: baseHtml({}) });
      expect(topSlot).toBeTruthy();
    });
  });

  it('afterInit called', async () => {
    const component = new OsdsTabs();
    jest.spyOn(component, 'afterInit');
    component.componentDidLoad();
    expect(component.afterInit).toHaveBeenCalledTimes(1);
  });

  /**
   * @see OdsTabsAttributes
   */
  describe('attributes', () => {
    const config = {
      page: () => page,
      instance: () => instance,
      setup: async (options) => {
        await setup({ attributes: options.attributes, html: baseHtml({}) });
      },
    };

    describe('contrasted', () => {
      odsUnitTestAttribute<OdsTabsAttributes, 'contrasted'>({
        ...getAttributeContextOptions<OdsTabsAttributes, OsdsTabs, 'contrasted'>({
          name: 'contrasted',
          list: [false, true],
          defaultValue: odsTabsBaseAttributes.contrasted,
          ...config,
        }),
      });
    });

    describe('panel', () => {
      odsUnitTestAttribute<OdsTabsAttributes, 'panel'>({
        ...getAttributeContextOptions<OdsTabsAttributes, OsdsTabs, 'panel'>({
          name: 'panel',
          list: ['a', 'b'],
          defaultValue: odsTabsBaseAttributes.panel,
          ...config,
        }),
      });
    });

    describe('size', () => {
      odsUnitTestAttribute<OdsTabsAttributes, 'size'>({
        ...getAttributeContextOptions<OdsTabsAttributes, OsdsTabs, 'size'>({
          name: 'size',
          list: [OdsTabsSize.md],
          defaultValue: odsTabsBaseAttributes.size,
          ...config,
        }),
      });
    });


  });

  /**
   * @see OdsTabsEvents
   */
  describe('events', () => {
    it('odsTabsChanged', async () => {
      await setup({ attributes: {}, html: baseHtml({}) });
      expect(instance.odsTabsChanged).toBeTruthy();
    });
  });

  it('should listen odsTabItemSelectEvent', async () => {
    const tabItem = new OsdsTabBarItem();
    await setup({ attributes: {}, html: baseHtml({}) });
    root?.dispatchEvent(new CustomEvent<OdsTabItemSelectEventDetail>('odsTabItemSelectEvent', {
      detail: { panel: 'a', tabItem },
    }));
    expect(controller.changeActivePanel).toHaveBeenCalledWith('a');
  });

  describe('emitChanged', () => {
    it('should emit odsTabsChanged', async () => {
      await setup({ attributes: { panel: 'a' }, html: baseHtml({}) });
      jest.spyOn(instance.odsTabsChanged, 'emit');
      instance.emitChanged();
      expect(instance.odsTabsChanged.emit).toHaveBeenCalledWith({ panel: 'a' });
    });
  });

  describe('getTabItems', () => {
    it('should call controller.getTabItems', async () => {
      await setup({ attributes: {}, html: baseHtml({}) });
      instance.getTabItems();
      expect(controller.getTabItems).toHaveBeenCalledWith('osds-tab-bar-item');
    });
  });

  describe('getTabPanels', () => {
    it('should call controller.getTabPanels', async () => {
      await setup({ attributes: {}, html: baseHtml({}) });
      instance.getTabPanels();
      expect(controller.getTabPanels).toHaveBeenCalledWith('osds-tab-panel');
    });
  });

  describe('onPanelPropChange', () => {
    it('should call controller.changeActivePanel when panel changed', async () => {
      await setup({ attributes: { panel: 'a' }, html: baseHtml({}) });
      await page.waitForChanges();
      instance.panel = 'b';
      await page.waitForChanges();
      expect(controller.changeActivePanel).toHaveBeenCalledWith('b');
    });
  });

  describe('onContrastedPropChange', () => {
    it('should call controller.propagateContrastedToItems when contrasted changed', async () => {
      await setup({ attributes: { panel: 'a', contrasted: false }, html: baseHtml({}) });
      await page.waitForChanges();
      instance.contrasted = true;
      await page.waitForChanges();
      expect(controller.propagateContrastedToItems).toHaveBeenCalledWith(true);
    });
  });

});
