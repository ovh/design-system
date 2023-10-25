jest.mock('./core/controller'); // keep jest.mock before any

import type { OdsTabBarItemAttribute } from './interfaces/attributes';
import type { OdsLoggerSpyReferences } from '@ovhcloud/ods-common-testing';
import type { SpecPage } from '@stencil/core/testing';

import { OdsLogger } from '@ovhcloud/ods-common-core';
import { OdsClearLoggerSpy, OdsInitializeLoggerSpy, OdsMockNativeMethod, odsComponentAttributes2StringAttributes, odsStringAttributes2Str, odsUnitTestAttribute } from '@ovhcloud/ods-common-testing';
import { newSpecPage } from '@stencil/core/testing';

import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { OdsTabBarItemController } from './core/controller';
import { OsdsTabBarItem } from './osds-tab-bar-item';


describe('spec:OsdsTabBarItem', () => {
  const baseAttribute = { active: DEFAULT_ATTRIBUTE.active, contrasted: DEFAULT_ATTRIBUTE.contrasted, disabled: DEFAULT_ATTRIBUTE.disabled, panel: DEFAULT_ATTRIBUTE.panel };
  let page: SpecPage;
  let shadowRoot: ShadowRoot | null | undefined;
  let controller: OdsTabBarItemController;
  let instance: OsdsTabBarItem;
  let root: HTMLElement | undefined;
  let mainSlot: HTMLElement | null | undefined;
  let loggerSpyReferences: OdsLoggerSpyReferences;

  const baseHtml = (slots: { unnamed?: string }) =>
    `
    ${slots.unnamed || slots.unnamed === '' ? slots.unnamed : 'My Item'}
    `;

  async function setup({ attributes = {}, extraAttributes = {}, html = '' }: { attributes?: Partial<OdsTabBarItemAttribute>, extraAttributes?: { tabindex?: string }, html?: string } = {}) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsTabBarItemAttribute>({ ...baseAttribute, ...attributes }, DEFAULT_ATTRIBUTE);
    const stringExtraAttributes = odsComponentAttributes2StringAttributes(extraAttributes, {});

    page = await newSpecPage({
      components: [OsdsTabBarItem],
      html: `<osds-tab-bar-item ${odsStringAttributes2Str(stringAttributes)} ${odsStringAttributes2Str(stringExtraAttributes)}>${html}</osds-tab-bar-item>`,
    });

    instance = page.rootInstance;
    shadowRoot = page.root?.shadowRoot;
    root = page.root;

    // note: assigned slot not yet available in HtmlMockedElement of stencil : https://github.com/ionic-team/stencil/issues/2830
    mainSlot = shadowRoot?.querySelector('slot:not([name])');

    controller = (OdsTabBarItemController as unknown as jest.SpyInstance<OdsTabBarItemController, unknown[]>).mock.instances[ 0 ];
  }

  beforeEach(() => {
    const loggerMocked = new OdsLogger('myLoggerMocked');
    loggerSpyReferences = OdsInitializeLoggerSpy({
      loggerMocked: loggerMocked as never,
      spiedClass: OsdsTabBarItem,
    });
  });

  afterEach(() => {
    OdsClearLoggerSpy(loggerSpyReferences);
    jest.clearAllMocks();
  });

  it('should render', async() => {
    await setup({});
    expect(shadowRoot).toBeTruthy();
    expect(instance).toBeTruthy();
  });

  it('beforeInit called', async() => {
    const component = new OsdsTabBarItem();
    jest.spyOn(component, 'beforeInit');
    component.componentWillLoad();
    expect(component.beforeInit).toHaveBeenCalledTimes(1);
  });

  describe('contents', () => {
    it('should have a main slot', async() => {
      await setup({ attributes: {}, html: baseHtml({}) });
      expect(mainSlot).toBeTruthy();
    });
  });

  /**
   * @see OdsTabBarItemAttributes
   */
  describe('attributes', () => {

    const config = {
      instance: () => instance,
      page: () => page,
      root: () => page.root,
      wait: () => page.waitForChanges(),
    };

    describe('active', () => {
      odsUnitTestAttribute<OdsTabBarItemAttribute, 'active'>({
        name: 'active',
        defaultValue: DEFAULT_ATTRIBUTE.active,
        newValue: false,
        value: true,
        setup: (value) => setup({ attributes: { ['active']: value } }),
        ...config,
      });
    });

    describe('contrasted', () => {
      odsUnitTestAttribute<OdsTabBarItemAttribute, 'contrasted'>({
        name: 'contrasted',
        defaultValue: DEFAULT_ATTRIBUTE.contrasted,
        newValue: false,
        value: true,
        setup: (value) => setup({ attributes: { ['contrasted']: value } }),
        ...config,
      });
    });

    describe('disabled', () => {
      odsUnitTestAttribute<OdsTabBarItemAttribute, 'disabled'>({
        name: 'disabled',
        defaultValue: DEFAULT_ATTRIBUTE.disabled,
        newValue: false,
        value: true,
        setup: (value) => setup({ attributes: { ['disabled']: value } }),
        ...config,
      });
    });

    describe('panel', () => {
      odsUnitTestAttribute<OdsTabBarItemAttribute, 'panel'>({
        name: 'panel',
        defaultValue: DEFAULT_ATTRIBUTE.panel,
        newValue: 'a',
        value: 'b',
        setup: (value) => setup({ attributes: { ['panel']: value } }),
        ...config,
      });
    });

  });

  /**
   * @see OdsTabBarItemEvents
   */
  describe('events', () => {
    it('odsTabItemSelectEvent', async() => {
      await setup({ attributes: {}, html: baseHtml({}) });
      expect(instance.odsTabItemSelectEvent).toBeTruthy();
    });
  });

  describe('getTabindex', () => {
    it('should call controller', async() => {
      await setup({ attributes: {}, html: baseHtml({}) });
      expect(controller.getTabIndex).toHaveBeenCalled();
    });
    it('should call controller with custom tabindex', async() => {
      await setup({ attributes: {}, extraAttributes: { tabindex: '2' }, html: baseHtml({}) });
      expect(controller.getTabIndex).toHaveBeenCalledWith('2');
    });
    it('should call controller with tabindex as 0 by default', async() => {
      await setup({ attributes: {}, html: baseHtml({}) });
      expect(controller.getTabIndex).toHaveBeenCalledWith(0);
    });
  });


  describe('contrasted', () => {
    function mockClosest(contrasted: boolean) {
      OdsMockNativeMethod(HTMLElement.prototype, 'closest', jest.fn().mockImplementation((selector: string) => {
        console.log('beforeInit mocked');
        if (selector === 'osds-tabs') {
          const parent = document.createElement('div');
          contrasted && parent.setAttribute('contrasted', '');
          return parent;
        }
        return null;
      }));
    }

    it('should be contrasted in case of parent contrasted', async() => {
      await setup({ attributes: {}, html: baseHtml({}) });

      // we can only mock after init because of stencil mock it already.
      mockClosest(true);
      // then re-call manually the method in order to test it contents
      instance.beforeInit();

      expect(instance.contrasted).toEqual(true);
    });

    it('should be not contrasted in case of parent not contrasted', async() => {
      await setup({ attributes: {}, html: baseHtml({}) });

      // we can only mock after init because of stencil mock it already.
      mockClosest(false);
      // then re-call manually the method in order to test it contents
      instance.beforeInit();

      expect(instance.contrasted).toEqual(false);
    });
  });

  describe('click', () => {
    it('should trigger a selection', async() => {
      await setup({ attributes: { disabled: false }, html: baseHtml({}) });
      jest.spyOn(instance, 'select');
      await page.waitForChanges();
      root?.click();
      expect(instance.select).toHaveBeenCalledTimes(1);
    });
    it('should not trigger a selection if disabled', async() => {
      await setup({ attributes: { disabled: true }, html: baseHtml({}) });
      jest.spyOn(instance, 'select');
      await page.waitForChanges();
      root?.click();
      expect(instance.select).not.toHaveBeenCalled();
    });
  });

  describe('click', () => {
    it('should call controller when tape Enter', async() => {
      await setup({ attributes: {}, html: baseHtml({}) });
      await page.waitForChanges();
      const enterKeyDownEvent = new KeyboardEvent('keydown', { key: 'Enter' });
      root?.dispatchEvent(enterKeyDownEvent);
      expect(controller.handlePanelKeyEvent).toHaveBeenCalledWith(enterKeyDownEvent);
    });
    it('should call controller when tape Space', async() => {
      await setup({ attributes: {}, html: baseHtml({}) });
      await page.waitForChanges();
      const enterKeyDownEvent = new KeyboardEvent('keydown', { key: 'Space' });
      root?.dispatchEvent(enterKeyDownEvent);
      expect(controller.handlePanelKeyEvent).toHaveBeenCalledWith(enterKeyDownEvent);
    });
  });

  describe('methods', () => {
    describe('select', () => {
      it('should emit an event', async() => {
        await setup({ attributes: { disabled: true }, html: baseHtml({}) });
        await page.waitForChanges();
        jest.spyOn(instance.odsTabItemSelectEvent, 'emit');
        instance.select();
        expect(instance.odsTabItemSelectEvent.emit).toHaveBeenCalledWith({ panel: instance.panel, tabItem: instance });
      });
    });

  });
});
