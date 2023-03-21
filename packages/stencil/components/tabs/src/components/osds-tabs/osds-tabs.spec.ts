import { OdsClearLoggerSpy, OdsInitializeLoggerSpy, OdsLoggerSpyReferences } from '@ovhcloud/ods-testing/src';

import { OsdsTabs } from './osds-tabs';
import {
    OdsTabsAttributes,
    OdsTabBarDefaultAttributes,
    OdsTabsController,
    OdsComponentAttributes2StringAttributes,
} from '@ovhcloud/ods-core';

import {
    odsUnitTestAttribute,
    odsTabsBaseAttributes,
    OdsCreateAttributes,
    OdsStringAttributes2Str,
  } from '@ovhcloud/ods-testing';

  import { SpecPage, newSpecPage } from '@stencil/core/testing';
  import { getAttributeContextOptions } from '@ovhcloud/ods-stencil/libraries/stencil-testing';

describe('spec:ods-tabs-controller', () => {
  let page: SpecPage;
  let controller: OdsTabsController;
  let component: OsdsTabs;
  let startSlot: HTMLElement;
  let topSlot: HTMLElement | undefined | null;
  let panelSlot: HTMLElement | undefined | null;
  let divTabs: HTMLElement | undefined | null;
  let tabsNavWrap: HTMLElement | undefined | null;
  let instance: OsdsTabs;
  let loggerSpyReferences: OdsLoggerSpyReferences;


  async function setup({ attributes= {} , html = `` }: { attributes?: Partial<OdsTabsAttributes>, html?: string } = {}) {
    const minimalAttributes: OdsTabsAttributes = OdsCreateAttributes(attributes, odsTabsBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsTabsAttributes>(minimalAttributes, OdsTabBarDefaultAttributes);

    page = await newSpecPage({
        components: [OsdsTabs],
        html: `<osds-tabs ${OdsStringAttributes2Str(stringAttributes)}>${html}</osds-tabs>`,
    });

    instance = page.rootInstance;

    topSlot = page.root?.shadowRoot?.querySelector('slot[name="top"]');
    panelSlot = page.root?.shadowRoot?.querySelector('slot');
    panelSlot = page.root?.shadowRoot?.querySelector('slot');
    divTabs = page.root?.shadowRoot?.querySelector('div.tabs');
    tabsNavWrap = page.root?.shadowRoot?.querySelector('div.tabs-nav-wrap');

    //controller = (OdsTabsController as unknown as jest.SpyInstance<OdsTabsController, unknown[]>).mock.instances[0];
  }

  it('should render', async () => {
    await setup({});
    expect(page.root?.shadowRoot).toBeTruthy();
    expect(page.rootInstance).toBeTruthy();
  });

    describe('contents', () => {
        it('should have a top slot', async () => {
            await setup({ attributes: {}, html: `<slot name="top"></slot>` });
            expect(topSlot).toBeTruthy();
        });
        it('should have a panel slot', async () => {
            await setup({ attributes: {}, html: `<slot></slot>` });
            expect(panelSlot).toBeTruthy();
        });
        it('should have a div tabs', async () => {
            await setup();
            expect(divTabs).toBeTruthy();
        });
        it('should have a tabs nav wrap', async () => {
            await setup();
            expect(tabsNavWrap).toBeTruthy();
        });
    });


    describe('attributes', () => {
        const config = {
            page: () => page,
            instance: () => instance,
            setup
        };

        describe('contrasted', () => {
            odsUnitTestAttribute<OdsTabAttributes, 'contrasted'>({
                ...getAttributeContextOptions<OdsTabAttributes, OsdsTabs, 'contrasted'>({
                  name: 'contrasted',
                  list: [true,false],
                  defaultValue: odsTabsBaseAttributes.contrasted,
                  ...config
                })
              });

            it('should be contrasted if attribute is added', async () => {
                await setup({ attributes: { contrasted: true } });
                expect(page.root?.contrasted).toBeTruthy();
            });
            it('should be falsy contrasted if attribute is not added', async () => {
                await setup();
                expect(page.root?.contrasted).toBeFalsy();
            });
            it('should contrasted falsy if attribute is added', async () => {
                await setup({ attributes: { contrasted: false } });
                expect(page.root?.contrasted).toBeFalsy
            });

            it('should id be 10 if tabsId atributes is added', async () => {
                await setup({ attributes: { tabsId: '10' } });
                expect(page.root?.tabsId).toBe('10')
            });
            it('should attribute panel active is stage', async () => {
                await setup({ attributes: { panelActive: 'stage' } });
                expect(page.root?.panelActive).toBe('stage')
            });
        });

        describe('tabsId', () => {
            it('should id be 10 if tabsId atributes is added', async () => {
                await setup({ attributes: { tabsId: '10' } });
                expect(page.root?.tabsId).toBe('10')
            });
        });

        describe('panelActive', () => {
            it('should attribute panel active is stage', async () => {
                await setup({ attributes: { panelActive: 'stage' } });
                expect(page.root?.panelActive).toBe('stage')
            });
        });     
    });

});
