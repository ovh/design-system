import type {E2EElement, E2EPage, EventSpy} from '@stencil/core/testing';
import type {OdsTabsAttribute} from './interfaces/attributes';
import type {OdsTabsChangeEventDetail, OdsTabsEvent} from './interfaces/events';
import {newE2EPage} from '@stencil/core/testing';
import {odsComponentAttributes2StringAttributes, odsStringAttributes2Str} from '@ovhcloud/ods-common-testing';
import {DEFAULT_ATTRIBUTE} from './constants/default-attributes';

describe('e2e:osds-tabs', () => {
  const baseAttribute = {contrasted: DEFAULT_ATTRIBUTE.contrasted, panel: DEFAULT_ATTRIBUTE.panel, size: DEFAULT_ATTRIBUTE.size};
  let page: E2EPage;
  let el: E2EElement;
  let panelRiseElement: E2EElement;
  let panelAdvanceElement: E2EElement;
  let itemRiseElement: E2EElement;
  let itemAdvanceElement: E2EElement;
  let activeElementId: string | undefined;

  const getTabsDom1 = (disabled = false) => `
<osds-tab-bar slot='top'>
  <osds-tab-bar-item panel='rise' id='item-rise' ${disabled ? 'disabled' : ''}>Rise</osds-tab-bar-item>
  <osds-tab-bar-item panel='advance' id='item-advance'>Advance</osds-tab-bar-item>
</osds-tab-bar>`;

  const getTabsWithPanels = () => getTabsDom1() + `
<osds-tab-panel name='rise'>Les serveurs les plus abordables, adaptés à la plupart des usages.</osds-tab-panel>
<osds-tab-panel name='advance'>Des serveurs polyvalents pour les petites et moyennes entreprises.</osds-tab-panel>`;

  const spyEvent = async(eventName: keyof OdsTabsEvent) => await el.spyOnEvent(eventName);


  async function setup({attributes = {}, nativeAttributes = {}, html = ''}: { attributes?: Partial<OdsTabsAttribute>, nativeAttributes?: Partial<HTMLElement>, html?: string } = {}) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsTabsAttribute>({...baseAttribute, ...attributes}, DEFAULT_ATTRIBUTE);
    const nativeStringAttributes = odsComponentAttributes2StringAttributes<Partial<HTMLElement>>(nativeAttributes, {});

    page = await newE2EPage();
    // odsTabsChanged = await page.spyOnEvent('odsTabsChanged');

    await page.setContent(`
      <osds-tabs ${odsStringAttributes2Str(stringAttributes)} ${odsStringAttributes2Str(nativeStringAttributes)}>
        ${html}
      </osds-tabs>
    `);
    await page.evaluate(() => document.body.style.setProperty('margin', '4px'));
    el = await page.find('osds-tabs');

    await updateReferences();
  }

  /**
   * updates references to elements and properties
   */
  async function updateReferences() {
    activeElementId = await page.evaluate(() => document.activeElement?.id);

    itemRiseElement = await page.find('osds-tab-bar-item[panel=rise]');
    itemAdvanceElement = await page.find('osds-tab-bar-item[panel=advance]');
    panelRiseElement = await page.find('osds-tab-panel[name=rise]');
    panelAdvanceElement = await page.find('osds-tab-panel[name=advance]');
  }

  it('should render', async() => {
    await setup();
    expect(el).not.toBeNull();
    expect(el).toHaveClass('hydrated');
  });

  describe('focusing', () => {

    it('item should be focusable', async() => {
      await setup({attributes: {panel: ''}, html: getTabsDom1()});
      await page.waitForChanges();
      await updateReferences();
      expect(activeElementId).toEqual('');

      await itemRiseElement.focus();
      await page.waitForChanges();
      await updateReferences();
      expect(activeElementId).toEqual('item-rise');
    });

    it('should be focusable with tab', async() => {
      await setup({attributes: {panel: ''}, html: getTabsDom1()});
      await page.waitForChanges();
      await updateReferences();
      expect(activeElementId).toEqual('');

      await el.press('Tab');
      await page.waitForChanges();
      await updateReferences();
      expect(activeElementId).toEqual('item-rise');

      await el.press('Tab');
      await page.waitForChanges();
      await updateReferences();
      expect(activeElementId).toEqual('item-advance');
    });

    it('item should NOT be focusable if disabled', async() => {
      await setup({attributes: {panel: ''}, html: getTabsDom1(true)});
      await page.waitForChanges();
      await updateReferences();
      expect(activeElementId).toEqual('');

      await el.press('Tab');
      await page.waitForChanges();
      await updateReferences();
      expect(activeElementId).toEqual('item-advance');
    });
  });

  describe('keypress', () => {

    it('item should be enabled on Enter/space', async() => {
      await setup({attributes: {panel: ''}, html: getTabsDom1()});

      await page.waitForChanges();

      await itemAdvanceElement.press('Enter');
      await page.waitForChanges();
      await updateReferences();
      expect(await itemRiseElement.getProperty('active')).toEqual(false);
      expect(await itemAdvanceElement.getProperty('active')).toEqual(true);

      await itemRiseElement.press('Space');
      await page.waitForChanges();
      await updateReferences();
      expect(await itemRiseElement.getProperty('active')).toEqual(true);
      expect(await itemAdvanceElement.getProperty('active')).toEqual(false);
    });
  });

  describe('tab-bar standalone', () => {

    it('should select the first panel by default', async() => {
      await setup({attributes: {panel: ''}, html: getTabsDom1()});

      await page.waitForChanges();
      await updateReferences();
      expect(await itemRiseElement.getProperty('active')).toEqual(true);
      expect(await itemAdvanceElement.getProperty('active')).toEqual(false);

      // info: cannot test if event is fired during init:
      // const expected: OdsTabsChangeEventDetail = { panel: 'rise' };
      // expect(odsTabsChanged).toHaveReceivedEventDetail(expected);
    });

    describe('selected', () => {
      describe('click on item advance', () => {
        it('should select the advance panel', async() => {
          await setup({attributes: {panel: 'rise'}, html: getTabsDom1()});
          const expected: OdsTabsChangeEventDetail = {panel: 'advance'};
          const odsTabsChanged: EventSpy = await spyEvent('odsTabsChanged');

          await page.waitForChanges();
          await itemAdvanceElement.click();
          await page.waitForChanges();
          await updateReferences();
          expect(await itemRiseElement.getProperty('active')).toEqual(false);
          expect(await itemAdvanceElement.getProperty('active')).toEqual(true);
          expect(odsTabsChanged).toHaveReceivedEventDetail(expected);
        });
      });

      it('should select the advance panel', async() => {
        await setup({attributes: {panel: 'advance'}, html: getTabsDom1()});
        const odsTabsChanged: EventSpy = await spyEvent('odsTabsChanged');
        await page.waitForChanges();
        await updateReferences();
        expect(await itemRiseElement.getProperty('active')).toEqual(false);
        expect(await itemAdvanceElement.getProperty('active')).toEqual(true);
        expect(odsTabsChanged).not.toHaveReceivedEvent();
      });
    });
  });


  describe('with panel content', () => {

    it('should select the first panel by default', async() => {
      await setup({attributes: {panel: ''}, html: getTabsWithPanels()});

      await page.waitForChanges();
      await updateReferences();
      expect(await panelRiseElement.getProperty('active')).toEqual(true);
      expect(await panelAdvanceElement.getProperty('active')).toEqual(false);

      // info: cannot test if event is fired during init:
      // const expected: OdsTabsChangeEventDetail = { panel: 'rise' };
      // expect(odsTabsChanged).toHaveReceivedEventDetail(expected);
    });

    describe('selected', () => {

      describe('click on item advance', () => {
        it('should select the advance panel', async() => {
          await setup({attributes: {panel: 'rise'}, html: getTabsWithPanels()});
          const expected: OdsTabsChangeEventDetail = {panel: 'advance'};
          const odsTabsChanged: EventSpy = await spyEvent('odsTabsChanged');

          await page.waitForChanges();
          await itemAdvanceElement.click();
          await page.waitForChanges();
          await updateReferences();
          expect(await panelRiseElement.getProperty('active')).toEqual(false);
          expect(await panelAdvanceElement.getProperty('active')).toEqual(true);
          expect(odsTabsChanged).toHaveReceivedEventDetail(expected);
        });
      });

      it('should select active panel', async() => {
        await setup({attributes: {panel: 'rise'}, html: getTabsWithPanels()});
        const odsTabsChanged: EventSpy = await spyEvent('odsTabsChanged');
        await page.waitForChanges();
        await updateReferences();
        expect(await panelRiseElement.getProperty('active')).toEqual(true);
        expect(await panelAdvanceElement.getProperty('active')).toEqual(false);
        expect(odsTabsChanged).not.toHaveReceivedEvent();
      });

    });

  });


});
