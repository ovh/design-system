/* eslint-disable no-console */
jest.mock('@ovhcloud/ods-core/src/components/tabs/ods-tab-bar-item/ods-tab-bar-item-controller'); // keep jest.mock before any import

import {
  OdsClearLoggerSpy,
  OdsCreateAttributes,
  OdsInitializeLoggerSpy,
  OdsLoggerSpyReferences,
  OdsMockNativeMethod,
  OdsStringAttributes2Str,
  odsTabBarItemBaseAttributes,
  odsUnitTestAttribute,
  OdsUnitTestAttributeType,
} from '@ovhcloud/ods-testing';

import { OsdsTabBarItem } from './osds-tab-bar-item';
import {
  OdsComponentAttributes2StringAttributes,
  OdsTabBarItemAttributes,
  OdsTabBarItemController,
} from '@ovhcloud/ods-core';

import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { getAttributeContextOptions } from '@ovhcloud/ods-stencil/libraries/stencil-testing';
import { OdsLogger, odsTabBarItemDefaultAttributes, OdsTabBarItemDefaultAttributesDoc } from '@ovhcloud/ods-core/src';

describe('spec:OsdsTabBarItem', () => {
  let page: SpecPage;
  let shadowRoot: ShadowRoot | null | undefined;
  let controller: OdsTabBarItemController;
  let instance: OsdsTabBarItem;
  let root: HTMLElement | undefined;
  let mainSlot: HTMLElement | null | undefined;
  let loggerSpyReferences: OdsLoggerSpyReferences;

  const baseHtml = (slots: { unnamed?: string }) =>
    `
    ${slots.unnamed || slots.unnamed === '' ? slots.unnamed : `My Item`}
    `;

  async function setup({
                         attributes = {},
                         extraAttributes = {},
                         html = ``,
                       }: {
    attributes?: Partial<OdsTabBarItemAttributes>, extraAttributes?: {
      tabindex?: string
    }, html?: string
  } = {}) {
    const minimalAttributes: OdsTabBarItemAttributes = OdsCreateAttributes(attributes, odsTabBarItemBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsTabBarItemAttributes>(minimalAttributes, OdsTabBarItemDefaultAttributesDoc);
    const stringExtraAttributes = OdsComponentAttributes2StringAttributes(extraAttributes, {});

    page = await newSpecPage({
      components: [OsdsTabBarItem],
      html: `<osds-tab-bar-item ${OdsStringAttributes2Str(stringAttributes)} ${OdsStringAttributes2Str(stringExtraAttributes)}>${html}</osds-tab-bar-item>`,
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
    loggerSpyReferences = OdsInitializeLoggerSpy({ loggerMocked, spiedClass: OsdsTabBarItem });
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

  it('beforeInit called', async () => {
    const component = new OsdsTabBarItem();
    jest.spyOn(component, 'beforeInit');
    component.componentWillLoad();
    expect(component.beforeInit).toHaveBeenCalledTimes(1);
  });

  describe('contents', () => {
    it('should have a main slot', async () => {
      await setup({ attributes: {}, html: baseHtml({}) });
      expect(mainSlot).toBeTruthy();
    });
  });

  /**
   * @see OdsTabBarItemAttributes
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
      odsUnitTestAttribute<OdsTabBarItemAttributes, 'active'>({
        ...getAttributeContextOptions<OdsTabBarItemAttributes, OsdsTabBarItem, 'active'>({
          name: 'active',
          list: [false, true],
          defaultValue: odsTabBarItemDefaultAttributes.active,
          ...config,
        }),
      });
    });

    describe('panel', () => {
      odsUnitTestAttribute<OdsTabBarItemAttributes, 'panel'>({
        ...getAttributeContextOptions<OdsTabBarItemAttributes, OsdsTabBarItem, 'panel'>({
          name: 'panel',
          list: ['a', 'b'],
          defaultValue: odsTabBarItemDefaultAttributes.panel,
          ...config,
        }),
      });
    });

    describe('disabled', () => {
      odsUnitTestAttribute<OdsTabBarItemAttributes, 'disabled'>({
        ...getAttributeContextOptions<OdsTabBarItemAttributes, OsdsTabBarItem, 'disabled'>({
          name: 'disabled',
          list: [false, true],
          defaultValue: odsTabBarItemDefaultAttributes.disabled,
          ...config,
        }),
      });
    });

    describe('contrasted', () => {
      odsUnitTestAttribute<OdsTabBarItemAttributes, 'contrasted'>({
        ...getAttributeContextOptions<OdsTabBarItemAttributes, OsdsTabBarItem, 'contrasted'>({
          name: 'contrasted',
          list: [false, true],
          defaultValue: odsTabBarItemDefaultAttributes.contrasted,
          ...config,
        }),
        include: [OdsUnitTestAttributeType.MUTABLE],
      });
    });

  });

  /**
   * @see OdsTabBarItemEvents
   */
  describe('events', () => {
    it('odsTabItemSelectEvent', async () => {
      await setup({ attributes: {}, html: baseHtml({}) });
      expect(instance.odsTabItemSelectEvent).toBeTruthy();
    });
  });

  describe('getTabindex', () => {
    it('should call controller', async () => {
      await setup({ attributes: {}, html: baseHtml({}) });
      expect(controller.getTabIndex).toHaveBeenCalled();
    });
    it('should call controller with custom tabindex', async () => {
      await setup({ attributes: {}, extraAttributes: { tabindex: '2' }, html: baseHtml({}) });
      expect(controller.getTabIndex).toHaveBeenCalledWith('2');
    });
    it('should call controller with tabindex as 0 by default', async () => {
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

    it('should be contrasted in case of parent contrasted', async () => {
      await setup({ attributes: {}, html: baseHtml({}) });

      // we can only mock after init because of stencil mock it already.
      mockClosest(true);
      // then re-call manually the method in order to test it contents
      instance.beforeInit();

      expect(instance.contrasted).toEqual(true);
    });

    it('should be not contrasted in case of parent not contrasted', async () => {
      await setup({ attributes: {}, html: baseHtml({}) });

      // we can only mock after init because of stencil mock it already.
      mockClosest(false);
      // then re-call manually the method in order to test it contents
      instance.beforeInit();

      expect(instance.contrasted).toEqual(false);
    });
  });

  describe('click', () => {
    it('should trigger a selection', async () => {
      await setup({ attributes: { disabled: false }, html: baseHtml({}) });
      jest.spyOn(instance, 'select');
      await page.waitForChanges();
      root?.click();
      expect(instance.select).toHaveBeenCalledTimes(1);
    });
    it('should not trigger a selection if disabled', async () => {
      await setup({ attributes: { disabled: true }, html: baseHtml({}) });
      jest.spyOn(instance, 'select');
      await page.waitForChanges();
      root?.click();
      expect(instance.select).not.toHaveBeenCalled();
    });
  });

  describe('click', () => {
    it('should call controller when tape Enter', async () => {
      await setup({ attributes: {}, html: baseHtml({}) });
      await page.waitForChanges();
      const enterKeyDownEvent = new KeyboardEvent('keydown', { key: 'Enter' });
      root?.dispatchEvent(enterKeyDownEvent);
      expect(controller.handlePanelKeyEvent).toHaveBeenCalledWith(enterKeyDownEvent);
    });
    it('should call controller when tape Space', async () => {
      await setup({ attributes: {}, html: baseHtml({}) });
      await page.waitForChanges();
      const enterKeyDownEvent = new KeyboardEvent('keydown', { key: 'Space' });
      root?.dispatchEvent(enterKeyDownEvent);
      expect(controller.handlePanelKeyEvent).toHaveBeenCalledWith(enterKeyDownEvent);
    });
  });

  describe('methods', () => {
    describe('select', () => {
      it('should emit an event', async () => {
        await setup({ attributes: { disabled: true }, html: baseHtml({}) });
        await page.waitForChanges();
        jest.spyOn(instance.odsTabItemSelectEvent, 'emit');
        instance.select();
        expect(instance.odsTabItemSelectEvent.emit).toHaveBeenCalledWith({ panel: instance.panel, tabItem: instance });
      });
    });

  });
});
