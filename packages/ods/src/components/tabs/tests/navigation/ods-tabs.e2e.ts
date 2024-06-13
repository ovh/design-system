import { type E2EPage, newE2EPage } from '@stencil/core/testing';

describe('ods-tabs navigation', () => {
  let page: E2EPage;

  async function getFocusedTabId(): Promise<string> {
    return await page.evaluate(() => {
      return document.activeElement?.id || '';
    });
  }

  async function setup(content: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));
  }

  beforeEach(jest.clearAllMocks);

  it('should focus each tab sequentially', async() => {
    await setup('<ods-tabs><ods-tab id="tab-1">Tab 1</ods-tab><ods-tab id="tab-2">Tab 2</ods-tab><ods-tab id="tab-3">Tab 3</ods-tab></ods-tabs>');

    await page.keyboard.press('Tab');
    await page.waitForChanges();
    expect(await getFocusedTabId()).toBe('tab-1');

    await page.keyboard.press('Tab');
    await page.waitForChanges();

    expect(await getFocusedTabId()).toBe('tab-2');

    await page.keyboard.press('Tab');
    await page.waitForChanges();

    expect(await getFocusedTabId()).toBe('tab-3');
  });

  it('should focus each non disabled tab sequentially', async() => {
    await setup('<ods-tabs><ods-tab id="tab-1">Tab 1</ods-tab><ods-tab id="tab-2" is-disabled>Tab 2</ods-tab><ods-tab id="tab-3">Tab 3</ods-tab></ods-tabs>');

    await page.keyboard.press('Tab');
    await page.waitForChanges();
    expect(await getFocusedTabId()).toBe('tab-1');

    await page.keyboard.press('Tab');
    await page.waitForChanges();

    expect(await getFocusedTabId()).toBe('tab-3');
  });

  it('should emit an odsTabsSelected event on Enter press when a tab focused', async() => {
    await setup('<ods-tabs><ods-tab id="tab-1">Tab 1</ods-tab><ods-tab id="tab-2">Tab 2</ods-tab><ods-tab id="tab-3">Tab 3</ods-tab></ods-tabs>');
    const odsTabsSelectedSpy = await page.spyOnEvent('odsTabsSelected');

    await page.keyboard.press('Tab');
    await page.waitForChanges();
    await page.keyboard.press('Enter');
    await page.waitForChanges();

    expect(odsTabsSelectedSpy).toHaveReceivedEventTimes(1);
  });

  it('should emit an odsTabsSelected event on Space press when a tab focused', async() => {
    await setup('<ods-tabs><ods-tab id="tab-1">Tab 1</ods-tab><ods-tab id="tab-2">Tab 2</ods-tab><ods-tab id="tab-3">Tab 3</ods-tab></ods-tabs>');
    const odsTabsSelectedSpy = await page.spyOnEvent('odsTabsSelected');

    await page.keyboard.press('Tab');
    await page.waitForChanges();
    await page.keyboard.press('Space');
    await page.waitForChanges();

    expect(odsTabsSelectedSpy).toHaveReceivedEventTimes(1);
  });

  it('should emit an odsTabsSelected event on tab click', async() => {
    await setup('<ods-tabs><ods-tab id="tab-1">Tab 1</ods-tab><ods-tab id="tab-2">Tab 2</ods-tab><ods-tab id="tab-3">Tab 3</ods-tab></ods-tabs>');
    const odsTabsSelectedSpy = await page.spyOnEvent('odsTabsSelected');

    await (await page.find('#tab-1')).click();
    await page.waitForChanges();

    expect(odsTabsSelectedSpy).toHaveReceivedEventTimes(1);
  });

  it('should not emit an odsTabsSelected event on disabled tab click', async() => {
    await setup('<ods-tabs><ods-tab id="tab-1" is-disabled>Tab 1</ods-tab><ods-tab id="tab-2">Tab 2</ods-tab><ods-tab id="tab-3">Tab 3</ods-tab></ods-tabs>');
    const odsTabsSelectedSpy = await page.spyOnEvent('odsTabsSelected');

    await (await page.find('#tab-1')).click();
    await page.waitForChanges();

    expect(odsTabsSelectedSpy).toHaveReceivedEventTimes(0);
  });
});
