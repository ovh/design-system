import { E2EElement, E2EPage, EventSpy, newE2EPage } from '@stencil/core/testing';
import {
  OdsComponentAttributes2StringAttributes,
  OdsTabsAttributes,
  OdsTabsChangeEventDetail,
  odsTabsDefaultAttributes,
  OdsTabsEvents,
} from '@ovhcloud/ods-core';
import { OdsCreateAttributes, OdsStringAttributes2Str, odsTabsBaseAttributes } from '@ovhcloud/ods-testing';


describe('e2e:osds-tabs', () => {
  let page: E2EPage;
  let el: E2EElement;
  let panelRiseElement: E2EElement;
  let panelAdvanceElement: E2EElement;
  let itemRiseElement: E2EElement;
  let itemAdvanceElement: E2EElement;
  let activeElementId: string | undefined;

  const getTabsDom1 = (disabled = false) => `
<osds-tab-bar slot='top'>
  <osds-tab-bar-item panel='advance' id='item-advance' ${disabled ? 'disabled' : ''}>Advance</osds-tab-bar-item>
  <osds-tab-bar-item panel='rise' id='item-rise'>Rise</osds-tab-bar-item>
</osds-tab-bar>`;

  const spyEvent = async (eventName: keyof OdsTabsEvents) => await el.spyOnEvent(eventName);


  async function setup({
                         attributes = {},
                         nativeAttributes = {},
                         html = ``,
                       }: { attributes?: Partial<OdsTabsAttributes>, nativeAttributes?: Partial<HTMLElement>, html?: string } = {}) {
    const minimalAttributes: OdsTabsAttributes = OdsCreateAttributes(attributes, odsTabsBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsTabsAttributes>(minimalAttributes, odsTabsDefaultAttributes);
    const nativeStringAttributes = OdsComponentAttributes2StringAttributes<Partial<HTMLElement>>(nativeAttributes, {});

    page = await newE2EPage();
    await page.setContent(`
      <osds-tabs ${OdsStringAttributes2Str(stringAttributes)} ${OdsStringAttributes2Str(nativeStringAttributes)}>
        ${html}
      </osds-tabs>
    `);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));
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

  it('should render', async () => {
    await setup();
    expect(el).not.toBeNull();
    expect(el).toHaveClass('hydrated');
  });

  describe('focusing', () => {

    it('item should be focusable', async () => {
      await setup({ attributes: { panel: '' }, html: getTabsDom1() });
      await page.waitForChanges();
      await updateReferences();
      expect(activeElementId).toEqual('');

      await itemRiseElement.focus();
      await page.waitForChanges();
      await updateReferences();
      expect(activeElementId).toEqual('item-rise');
    });

    it('should be focusable with tab', async () => {
      await setup({ attributes: { panel: '' }, html: getTabsDom1() });
      await page.waitForChanges();
      await updateReferences();
      expect(activeElementId).toEqual('');

      await el.press('Tab');
      await page.waitForChanges();
      await updateReferences();
      expect(activeElementId).toEqual('item-advance');

      await el.press('Tab');
      await page.waitForChanges();
      await updateReferences();
      expect(activeElementId).toEqual('item-rise');
    });

    it('item should NOT be focusable if disabled', async () => {
      await setup({ attributes: { panel: '' }, html: getTabsDom1(true) });
      await page.waitForChanges();
      await updateReferences();
      expect(activeElementId).toEqual('');

      await el.press('Tab');
      await page.waitForChanges();
      await updateReferences();
      expect(activeElementId).toEqual('item-rise');
    });
  });

  describe('keypress', () => {

    it('item should be enabled on Enter/space', async () => {
      await setup({ attributes: { panel: '' }, html: getTabsDom1() });

      await page.waitForChanges();
      await updateReferences();
      expect(await itemRiseElement.getProperty('active')).toEqual(false);
      expect(await itemAdvanceElement.getProperty('active')).toEqual(true);

      await itemRiseElement.press('Enter');
      await page.waitForChanges();
      await updateReferences();
      expect(await itemRiseElement.getProperty('active')).toEqual(true);
      expect(await itemAdvanceElement.getProperty('active')).toEqual(false);

      await itemAdvanceElement.press('Space');
      await page.waitForChanges();
      await updateReferences();
      expect(await itemRiseElement.getProperty('active')).toEqual(false);
      expect(await itemAdvanceElement.getProperty('active')).toEqual(true);
    });
  });

  describe('tab-bar standalone', () => {

    beforeEach(async () => {
      await setup({ attributes: { panel: 'rise' }, html: getTabsDom1() });
    });

    describe('click on item rise', () => {
      it('should select the rise panel', async () => {
        await page.waitForChanges();
        await itemAdvanceElement.click();
        await page.waitForChanges();
        await updateReferences();
        expect(await itemRiseElement.getProperty('active')).toEqual(false);
        expect(await itemAdvanceElement.getProperty('active')).toEqual(true);
      });
    });

    it('should select the rise panel', async () => {
      await page.waitForChanges();
      await updateReferences();
      expect(await itemRiseElement.getProperty('active')).toEqual(true);
      expect(await itemAdvanceElement.getProperty('active')).toEqual(false);
    });
  });


  describe('with panel content', () => {

    beforeEach(async () => {
      const tabsDom1 = getTabsDom1() + `
<osds-tab-panel name='advance'>Des serveurs polyvalents pour les petites et moyennes entreprises.</osds-tab-panel>
<osds-tab-panel name='rise'>Les serveurs les plus abordables, adaptés à la plupart des usages.</osds-tab-panel>`;

      await setup({ attributes: { panel: 'rise' }, html: tabsDom1 });
    });


    describe('click on item rise', () => {
      it('should select the rise panel', async () => {
        const expected: OdsTabsChangeEventDetail = { panel: 'advance' };
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

    it('should select active panel', async () => {
      const odsTabsChanged: EventSpy = await spyEvent('odsTabsChanged');
      await page.waitForChanges();
      await updateReferences();
      expect(await panelRiseElement.getProperty('active')).toEqual(true);
      expect(await panelAdvanceElement.getProperty('active')).toEqual(false);
      expect(odsTabsChanged).not.toHaveReceivedEvent();
    });
  });


});
