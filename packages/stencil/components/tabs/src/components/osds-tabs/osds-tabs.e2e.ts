import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';
import {
  OdsTabsAttributes,
  OdsTabsSize,
  odsTabsDefaultAttributes,
  OdsComponentAttributes2StringAttributes,
} from '@ovhcloud/ods-core';
import { OdsCreateAttributes, OdsStringAttributes2Str, odsTabsBaseAttributes, } from '@ovhcloud/ods-testing';
import { debug } from 'console';
;
// import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

describe('e2e:osds-tabs', () => {
  let page: E2EPage;
  let el: E2EElement;
//   let slotContent: E2EElement;
//   let linkElement: E2EElement;
  let tabsElement: E2EElement;
  let tabsNavWrapElement: E2EElement;
  let slotElement: E2EElement;
  let panelItemsElement: E2EElement;
  let tabBarElement: E2EElement;

  let tabBarItemsRiseElement: E2EElement;
  let tabBarItemsAdvanceElement: E2EElement;


  async function setup({ attributes = {}, html = `` }: { attributes?: Partial<OdsTabsAttributes>, html?: string } = {}) {
    const minimalAttributes: OdsTabsAttributes = OdsCreateAttributes(attributes, odsTabsBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsTabsAttributes>(minimalAttributes, odsTabsDefaultAttributes);

    page = await newE2EPage();
    await page.setContent(`
      <osds-tabs ${OdsStringAttributes2Str(stringAttributes)}>
        ${html}
      </osds-tabs>
    `);
    await page.evaluate(() => document.body.style.setProperty('margin', '4px'));
    el = await page.find('osds-tabs');

    tabsElement = await page.find('osds-tabs >>> div.tabs');
    tabsNavWrapElement = await page.find('osds-tabs >>> div.tabs > div');
    slotElement = await page.find('osds-tabs >>> div.tabs > div > slot[name=top]');
    panelItemsElement = await page.find('osds-tabs >>> div.tabs > div');
    tabBarElement = await page.find('osds-tab-bar');

    tabBarItemsRiseElement = await page.find('osds-tab-bar-item[panel=rise]');
    tabBarItemsAdvanceElement = await page.find('osds-tab-bar-item[panel=advance]');
  }

  describe('defaults', () => {
    beforeEach(async () => {
      await setup();
    });
    it('should render', async () => {
      expect(el).not.toBeNull();
      expect(tabsElement).toHaveClass('tabs');
    });
    it('should have a tabs nav wrap element', async () => {
        expect(tabsNavWrapElement).not.toBeNull();
        expect(tabsNavWrapElement).toHaveClass('tabs-nav-wrap');
      });
      it('should have a slot element', async () => {
        expect(slotElement).not.toBeNull();
        expect(await slotElement.getProperty('name')).toBe('top');
      });
  });   

  describe('with panel active rise and id tabs-1', () => {
    beforeEach(async () => {
      await setup({ attributes: { panelActive: 'rise', tabsId: 'tabs-1' } });
    });
    it('should have attributes panel active rise', async () => {
        expect(el).not.toBeNull();
        expect(await el.getProperty('panelActive')).toBe('rise')
      });
      it('should have attributes tabsId tabs-1', async () => {
        expect(el).not.toBeNull();
        expect(await el.getProperty('tabsId')).toBe('tabs-1')
      });
  });

  describe('with panel active rise and id tabs-1, tab bar item', () => {
    const tabsDom1 = `<osds-tab-bar slot="top">
            <osds-tab-bar-item panel="rise">Rise</osds-tab-bar-item>
            <osds-tab-bar-item panel="advance">Advance</osds-tab-bar-item>
        </osds-tab-bar>`
    beforeEach(async () => {
      await setup({
        attributes: { panelActive: 'rise', tabsId: 'tabs-1' },
        html: tabsDom1
      });
    });
    it('should osds tab bar have attributes slot top', async () => {
        expect(tabBarElement).not.toBeNull();
        expect(await tabBarElement.getProperty('slot')).toBe('top')
    });
    it('should tabBarItemsRiseElement tab bar have attributes panel rise', async () => {
        expect(tabBarItemsRiseElement).not.toBeNull();
        expect(await tabBarItemsRiseElement.getProperty('panel')).toBe('rise')
    });
    it('should tabBarItemsAdvanceElement tab bar have attributes slot top', async () => {
        expect(tabBarItemsAdvanceElement).not.toBeNull();
        expect(await tabBarItemsAdvanceElement.getProperty('panel')).toBe('advance')
    });
    it('should tabBarItemsRiseElement tab bar have panel rise have class tabs-tab-active', async () => {
        expect(tabBarItemsRiseElement).not.toBeNull();
        expect(await page.find('osds-tab-bar-item[panel=rise] >>> div')).toHaveClass('tabs-tab-active')
    });
    it('should tabBarItemsRiseElement tab bar have panel advance have class tabs-tab-active', async () => {
        expect(tabBarItemsAdvanceElement).not.toBeNull();
        expect(await page.find('osds-tab-bar-item[panel=advance] >>> div')).not.toHaveClass('tabs-tab-active')
    });
  });

  describe('with panel active rise and id tabs-1, tab bar item and tab panel', () => {
    const tabsDom1 = `<osds-tab-bar slot="top">
            <osds-tab-bar-item panel="rise">Rise</osds-tab-bar-item>
            <osds-tab-bar-item panel="advance">Advance</osds-tab-bar-item>
        </osds-tab-bar>
        <osds-tab-panel name="rise">Les serveurs les plus abordables, adaptés à la plupart des usages.</osds-tab-panel>
      <osds-tab-panel name="advance">Des serveurs polyvalents pour les petites et moyennes entreprises.</osds-tab-panel>`
    beforeEach(async () => {
      await setup({
        attributes: { panelActive: 'rise', tabsId: 'tabs-1' },
        html: tabsDom1
      });
    });
    it('should panel item tab bar have attributes panel rise', async () => {
        expect(await page.find('osds-tab-panel[name=rise]')).not.toBeNull();
        expect(await (await page.find('osds-tab-panel[name=rise]')).getProperty('name')).toBe('rise')
    });
    it('should panel item tab bar have attributes panel advance', async () => {
        expect(await page.find('osds-tab-panel[name=advance]')).not.toBeNull();
        expect(await (await page.find('osds-tab-panel[name=advance]')).getProperty('name')).toBe('advance')
    });
    it('should osds-tab-panel[name=rise] tab bar have panel rise displayed', async () => {
        expect(await page.find('osds-tab-panel[name=rise] >>> div div.tab-panel')).not.toBeNull();
    });
    it('should osds-tab-panel[name=advance] tab bar have panel advance not displayed', async () => {
        expect(await page.find('osds-tab-panel[name=advance] >>> div div.tab-panel')).toBeNull();
    });
  });

  describe('with panel active rise and id tabs-1, tab bar item and tab panel, click advance', () => {
    const tabsDom1 = `<osds-tab-bar slot="top">
            <osds-tab-bar-item panel="rise">Rise</osds-tab-bar-item>
            <osds-tab-bar-item panel="advance">Advance</osds-tab-bar-item>
        </osds-tab-bar>
        <osds-tab-panel name="rise">Les serveurs les plus abordables, adaptés à la plupart des usages.</osds-tab-panel>
      <osds-tab-panel name="advance">Des serveurs polyvalents pour les petites et moyennes entreprises.</osds-tab-panel>`
    beforeEach(async () => {
      await setup({
        attributes: { panelActive: 'rise', tabsId: 'tabs-1' },
        html: tabsDom1
      });
      await el.callMethod('setPanelNameIndex', 'advance')
    });
    it('should display advance panel and item', async () => {
        expect(await page.find('osds-tab-panel[name=advance] >>> div div.tab-panel')).not.toBeNull();
    });
    it('should osds-tab-panel[name=rise] tab bar have panel rise not displayed', async () => {
        expect(await page.find('osds-tab-panel[name=rise] >>> div div.tab-panel')).toBeNull();
    });
  });

  describe('sizes', () => {
    it('should have a medium size', async () => {
        await setup({ attributes: { size: OdsTabsSize.md } });
        expect(await el.getProperty('size')).toBe(OdsTabsSize.md);
    });
  });
});
