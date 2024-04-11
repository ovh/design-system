import { type E2EElement, type E2EPage, newE2EPage } from '@stencil/core/testing';

describe('ods-button navigation', () => {
  const clickSpy = jest.fn();
  let el: E2EElement;
  let page: E2EPage;

  async function bindClick(): Promise<void> {
    await page.exposeFunction('onClick', () => {
      clickSpy.call(null);
    });

    await page.evaluate(() => {
      const element = document.querySelector('ods-button');
      // @ts-ignore function is exposed internally in the page
      element?.addEventListener('click', onClick);
    });
  }

  async function isFocused(): Promise<boolean> {
    return await page.evaluate(() => {
      const element = document.querySelector('ods-button');
      return document.activeElement === element;
    });
  }

  async function setup(content: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('ods-button');
  }

  beforeEach(jest.clearAllMocks);

  it('should be focused on tabulation', async() => {
    await setup('<ods-button label="Dummy button"></ods-button>');

    expect(await isFocused()).toBe(false);

    await page.keyboard.press('Tab');
    await page.waitForChanges();

    expect(await isFocused()).toBe(true);
  });

  it('should not be focusable if disabled', async() => {
    await setup('<ods-button is-disabled label="Dummy button"></ods-button>');

    expect(await isFocused()).toBe(false);

    await page.keyboard.press('Tab');
    await page.waitForChanges();

    expect(await isFocused()).toBe(false);
  });

  it('should trigger on "Enter" when focused', async() => {
    await setup('<ods-button label="Dummy button"></ods-button>');
    await bindClick();

    await page.keyboard.press('Tab');
    await page.waitForChanges();

    expect(clickSpy).not.toHaveBeenCalled();

    await page.keyboard.press('Enter');
    await page.waitForChanges();

    expect(clickSpy).toHaveBeenCalledTimes(1);
  });

  it('should trigger on "Space" when focused', async() => {
    await setup('<ods-button label="Dummy button"></ods-button>');
    await bindClick();

    await page.keyboard.press('Tab');
    await page.waitForChanges();

    expect(clickSpy).not.toHaveBeenCalled();

    await page.keyboard.press('Space');
    await page.waitForChanges();

    expect(clickSpy).toHaveBeenCalledTimes(1);
  });

  it('should trigger on click', async() => {
    await setup('<ods-button label="Dummy button"></ods-button>');
    await bindClick();

    expect(clickSpy).not.toHaveBeenCalled();

    await el.click();
    await page.waitForChanges();

    expect(clickSpy).toHaveBeenCalledTimes(1);
  });

  it('should not be clickable if disabled', async() => {
    await setup('<ods-button is-disabled label="Dummy button"></ods-button>');
    await bindClick();

    expect(clickSpy).not.toHaveBeenCalled();

    await el.click();
    await page.waitForChanges();

    expect(clickSpy).not.toHaveBeenCalled();
  });
});
