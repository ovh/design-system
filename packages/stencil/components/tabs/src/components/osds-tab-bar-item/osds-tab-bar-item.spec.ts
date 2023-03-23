import { OdsClearLoggerSpy, OdsInitializeLoggerSpy, OdsLoggerSpyReferences } from '@ovhcloud/ods-testing/src';

import { OsdsTabBarItem } from './osdsTabBarItem';
import {
    OdsTabBarItemAttributes,
    OdsTabBarDefaultAttributes,
    OdsTabBarItemController,
    OdsComponentAttributes2StringAttributes,
    OdsTabBarItem,
} from '@ovhcloud/ods-core';

import {
    odsUnitTestAttribute,
    odsTabBarItemBaseAttributes,
    OdsCreateAttributes,
    OdsStringAttributes2Str,
  } from '@ovhcloud/ods-testing';

  import { SpecPage, newSpecPage } from '@stencil/core/testing';
  import { getAttributeContextOptions } from '@ovhcloud/ods-stencil/libraries/stencil-testing';

describe('spec:ods-tabs-controller', () => {
  let page: SpecPage;
  let controller: OdsTabBarItemController;
  let component: OsdsTabBarItem;
  let startSlot: HTMLElement;
  let panelSlot: HTMLElement | undefined | null;
  let divTabsTab: HTMLElement | undefined | null;
  let divRoleTabSlot: HTMLElement | undefined | null;
  let divTabsTabContrasted: HTMLElement | undefined | null;
  let divTabsTabDisabled: HTMLElement | undefined | null;
  let instance: OsdsTabBarItem;
  let loggerSpyReferences: OdsLoggerSpyReferences;

  async function setup({ attributes= {} , html = `` }: { attributes?: Partial<OdsTabBarItemAttributes>, html?: string } = {}) {
    const minimalAttributes: OdsTabBarItemAttributes = OdsCreateAttributes(attributes, odsTabBarItemBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsTabBarItemAttributes>(minimalAttributes, OdsTabBarDefaultAttributes);

    page = await newSpecPage({
        components: [OsdsTabBarItem],
        html: `<osds-tab-bar-item ${OdsStringAttributes2Str(stringAttributes)}>${html}</osds-tab-bar-item>`,
    });

    instance = page.rootInstance;

    panelSlot = page.root?.shadowRoot?.querySelector('slot');
    divTabsTab = page.root?.shadowRoot?.querySelector('div.tabs-tab');
    divRoleTabSlot = page.root?.shadowRoot?.querySelector('div.tabs-tab slot');
    divTabsTabContrasted = page.root?.shadowRoot?.querySelector('div.tabs-tab-contrasted');
    divTabsTabDisabled= page.root?.shadowRoot?.querySelector('div.tabs-tab-disabled');
    
  }

  it('should render', async () => {
    await setup({});
    expect(page.root?.shadowRoot).toBeTruthy();
    expect(page.rootInstance).toBeTruthy();
  });

    describe('contents', () => {
        it('should have a panel slot', async () => {
            await setup({ attributes: {}, html: `<slot></slot>` });
            expect(panelSlot).toBeTruthy();
        });
        it('should have a div tabs', async () => {
            await setup();
            expect(divTabsTab).toBeTruthy();
        });
        it('should have a role tab', async () => {
            await setup();
            expect(page.root?.getAttribute('role')).toBe('tab')
        });
        it('should have a role tabs slot', async () => {
            await setup();
            expect(divRoleTabSlot).toBeTruthy();
        });
    });


    describe('attributes', () => {
        const config = {
            page: () => page,
            instance: () => instance,
            setup
        };

        describe('checked', () => {
            it('should checked attributes is false', async () => {
                await setup({ attributes: {}});
                expect(page.root?.checked).toBeFalsy();
            });
            it('should checked attributes is true', async () => {
                await setup({ attributes: { checked: true } });
                expect(page.root?.checked).toBeTruthy();
            });
            it('should checked attributes is falsy', async () => {
                await setup({ attributes: { checked: false } });
                expect(page.root?.checked).toBeFalsy();
            });
        });

        describe('disabled', () => {
            it('should disabled attributes is false', async () => {
                await setup({ attributes: {}});
                expect(page.root?.disabled).toBeFalsy();
            });
            it('should disabled attributes is true', async () => {
                await setup({ attributes: { disabled: true } });
                expect(page.root?.disabled).toBeTruthy();
            });
            it('should disabled attributes is falsy', async () => {
                await setup({ attributes: { disabled: false } });
                expect(page.root?.disabled).toBeFalsy();
            });
        });

        describe('panel', () => {
            it('should panel be test if panel atributes is added', async () => {
                await setup({ attributes: { panel: 'test' } });
                expect(page.root?.panel).toBe('test')
            });
        });
    });

});
