import { OdsClearLoggerSpy, OdsInitializeLoggerSpy, OdsLoggerSpyReferences } from '@ovhcloud/ods-testing/src';

import { OsdsTabsPanel } from './osds-tab-panel';
import {
    OdsTabPanelAttributes,
    OdsTabBarDefaultAttributes,
    OdsTabBarItemController,
    OdsComponentAttributes2StringAttributes,
} from '@ovhcloud/ods-core';

import {
    odsUnitTestAttribute,
    odsTabPanelBaseAttributes,
    OdsCreateAttributes,
    OdsStringAttributes2Str,
  } from '@ovhcloud/ods-testing';

  import { SpecPage, newSpecPage } from '@stencil/core/testing';
  import { getAttributeContextOptions } from '@ovhcloud/ods-stencil/libraries/stencil-testing';

describe('spec:ods-tabs-controller', () => {
  let page: SpecPage;
  let controller: OdsTabBarItemController;
  let component: OsdsTabsPanel;
  let divSlot: HTMLElement | undefined | null;
  let divPanel: HTMLElement | undefined | null;
  let divTabPanel: HTMLElement | undefined | null;
  let instance: OsdsTabsPanel;
  let loggerSpyReferences: OdsLoggerSpyReferences;


  async function setup({ attributes= {} , html = `` }: { attributes?: Partial<OdsTabPanelAttributes>, html?: string } = {}) {
    const minimalAttributes: OdsTabPanelAttributes = OdsCreateAttributes(attributes, odsTabPanelBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsTabPanelAttributes>(minimalAttributes, OdsTabBarDefaultAttributes);

    page = await newSpecPage({
        components: [OsdsTabsPanel],
        html: `<osds-tab-panel ${OdsStringAttributes2Str(stringAttributes)}>${html}</osds-tab-panel>`,
    });

    instance = page.rootInstance;

    divPanel = page.root?.shadowRoot?.querySelector('div');
    divTabPanel= page.root?.shadowRoot?.querySelector('div.tab-panel');
    divSlot = page.root?.shadowRoot?.querySelector('div slot');
    
  }

  it('should render', async () => {
    await setup({});
    expect(page.root?.shadowRoot).toBeTruthy();
    expect(page.rootInstance).toBeTruthy();
  });

    describe('contents', () => {
        it('should have a div tab panel', async () => {
            await setup({ attributes: { name: 'test' } });
            expect(divPanel).toBeTruthy();
        });
    });


    describe('attributes', () => {
        const config = {
            page: () => page,
            instance: () => instance,
            setup
        };

        describe('name', () => {
            it('should name is test', async () => {
                await setup({ attributes: { name: 'test'}});
                expect(page.root?.name).toBe('test');
            });
        });
    });

});
