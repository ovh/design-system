jest.mock('./core/controller'); // keep jest.mock before any

import type { OdsTabsAttribute } from './interfaces/attributes';
import type { OdsLoggerSpyReferences } from '@ovhcloud/ods-common-testing';
import type { SpecPage } from '@stencil/core/testing';

import { OdsLogger } from '@ovhcloud/ods-common-core';
import { OdsClearLoggerSpy, OdsInitializeLoggerSpy, odsComponentAttributes2StringAttributes, odsStringAttributes2Str, odsUnitTestAttribute } from '@ovhcloud/ods-common-testing';
import { newSpecPage } from '@stencil/core/testing';

import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { ODS_TABS_SIZE } from './constants/tabs-size';
import { OdsTabsController } from './core/controller';
import { OsdsTabs } from './osds-tabs';
import { OdsTabItemSelectEventDetail } from '../osds-tab-bar-item/interfaces/events';
import { OsdsTabBarItem } from '../osds-tab-bar-item/osds-tab-bar-item';


describe('spec:osds-tabs', () => {
  const baseAttribute = { contrasted: DEFAULT_ATTRIBUTE.contrasted, panel: DEFAULT_ATTRIBUTE.panel, size: DEFAULT_ATTRIBUTE.size };
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
    ${slots.unnamed || slots.unnamed === '' ? slots.unnamed : 'My tabs'}
    `;

  async function setup({ attributes = {}, html = '' }: { attributes?: Partial<OdsTabsAttribute>, html?: string } = {}) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsTabsAttribute>({ ...baseAttribute, ...attributes }, DEFAULT_ATTRIBUTE);

    page = await newSpecPage({
      components: [OsdsTabs],
      html: `<osds-tabs ${odsStringAttributes2Str(stringAttributes)}>${html}</osds-tabs>`,
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
    loggerSpyReferences = OdsInitializeLoggerSpy({
      loggerMocked: loggerMocked as never,
      spiedClass: OsdsTabs,
    });
  });

  afterEach(() => {
    OdsClearLoggerSpy(loggerSpyReferences);
    jest.clearAllMocks();
  });

  it('should render', async() => {
    await setup();
    expect(page.root?.shadowRoot).toBeTruthy();
    expect(instance).toBeTruthy();
  });

  it('should have its controller', async() => {
    await setup({});
    expect(controller).toBeTruthy();
  });

  describe('contents', () => {
    it('should have a main slot', async() => {
      await setup({ attributes: {}, html: baseHtml({}) });
      expect(mainSlot).toBeTruthy();
    });
    it('should have a top slot', async() => {
      await setup({ attributes: {}, html: baseHtml({}) });
      expect(topSlot).toBeTruthy();
    });
  });

  /**
   * @see OdsTabsAttributes
   */
  describe('attributes', () => {
    const config = {
      instance: () => instance,
      page: () => page,
      root: () => page.root,
      wait: () => page.waitForChanges(),
    };

    describe('contrasted', () => {
      odsUnitTestAttribute<OdsTabsAttribute, 'contrasted'>({
        name: 'contrasted',
        defaultValue: DEFAULT_ATTRIBUTE.contrasted,
        newValue: false,
        value: true,
        setup: (value) => setup({ attributes: { ['contrasted']: value } }),
        ...config,
      });
    });

    describe('panel', () => {
      odsUnitTestAttribute<OdsTabsAttribute, 'panel'>({
        name: 'panel',
        defaultValue: DEFAULT_ATTRIBUTE.panel,
        newValue: 'a',
        value: 'b',
        setup: (value) => setup({ attributes: { ['panel']: value } }),
        ...config,
      });
    });

    describe('size', () => {
      odsUnitTestAttribute<OdsTabsAttribute, 'size'>({
        name: 'size',
        defaultValue: DEFAULT_ATTRIBUTE.size,
        newValue: ODS_TABS_SIZE.md,
        value: ODS_TABS_SIZE.md,
        setup: (value) => setup({ attributes: { ['size']: value } }),
        ...config,
      });
    });


  });

  /**
   * @see OdsTabsEvents
   */
  describe('events', () => {
    it('odsTabsChanged', async() => {
      await setup({ attributes: {}, html: baseHtml({}) });
      expect(instance.odsTabsChanged).toBeTruthy();
    });
  });

  it('should listen odsTabItemSelectEvent', async() => {
    const tabItem = new OsdsTabBarItem();
    await setup({ attributes: {}, html: baseHtml({}) });
    root?.dispatchEvent(new CustomEvent<OdsTabItemSelectEventDetail>('odsTabItemSelectEvent', {
      detail: { panel: 'a', tabItem },
    }));
    expect(controller.changeActivePanel).toHaveBeenCalledWith('a');
  });

  it('should handle slot change', async() => {
    await setup({ attributes: { } });
    const spySetTabItems = jest.spyOn(instance, 'setTabItems');
    const spySetTabPanels = jest.spyOn(instance, 'setTabPanels');

    await instance.handleSlotChange();
    expect(spySetTabItems).toHaveBeenCalled();
    expect(spySetTabPanels).toHaveBeenCalled();
  });

  describe('emitChanged', () => {
    it('should emit odsTabsChanged', async() => {
      await setup({ attributes: { panel: 'a' }, html: baseHtml({}) });
      jest.spyOn(instance.odsTabsChanged, 'emit');
      instance.emitChanged();
      expect(instance.odsTabsChanged.emit).toHaveBeenCalledWith({ panel: 'a' });
    });
  });

  describe('handleArrowKey', () => {
    it('should call controller.handleArrowKey', async() => {
      await setup({ attributes: {}, html: baseHtml({}) });

      const key = new KeyboardEvent('keypress', { code : 'ArrowLeft' });
      instance.handleArrowKey(key);

      expect(controller.handleArrowKey).toHaveBeenCalledTimes(1);
      expect(controller.handleArrowKey).toHaveBeenCalledWith(key);
    });
  });

  describe('onPanelPropChange', () => {
    it('should call controller.changeActivePanel when panel changed', async() => {
      await setup({ attributes: { panel: 'a' }, html: baseHtml({}) });
      await page.waitForChanges();
      instance.panel = 'b';
      await page.waitForChanges();
      expect(controller.changeActivePanel).toHaveBeenCalledWith('b');
    });
  });

  describe('onContrastedPropChange', () => {
    it('should call controller.propagateContrastedToItems when contrasted changed', async() => {
      await setup({ attributes: { panel: 'a', contrasted: false }, html: baseHtml({}) });
      await page.waitForChanges();
      instance.contrasted = true;
      await page.waitForChanges();
      expect(controller.propagateContrastedToItems).toHaveBeenCalledWith(true);
    });
  });

});
