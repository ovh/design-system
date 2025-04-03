import type { E2EPage } from '@stencil/core/testing';
import { newE2EPage } from '@stencil/core/testing';

describe('ods-code navigation', () => {
  let page: E2EPage;

  async function setup(content: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));
  }

  it('should not be focusable if canCopy is false', async() => {
    await setup('<ods-code>Dummy code</ods-code>');

    await page.keyboard.press('Tab');
    await page.waitForChanges();

    expect(await page.evaluate(() => {
      return document.activeElement?.tagName === 'ODS-CODE';
    })).toBe(false);
  });

  it('should focus copy button if canCopy is true', async() => {
    await setup('<ods-code can-copy>Dummy code</ods-code>');

    await page.keyboard.press('Tab');
    await page.waitForChanges();

    expect(await page.evaluate(() => {
      return document.activeElement?.shadowRoot?.activeElement?.tagName === 'ODS-BUTTON';
    })).toBe(true);
  });

  it('should trigger on "Enter" when button is focused', async() => {
    const dummyCode = 'Dummy code';
    await setup(`<ods-code can-copy>${dummyCode}</ods-code>`);
    const copySpy = await page.spyOnEvent( 'odsCopy' );

    await page.keyboard.press('Tab');
    await page.waitForChanges();

    await page.keyboard.press('Enter');
    await page.waitForChanges();

    expect(copySpy).toHaveReceivedEventTimes(1);
    expect(copySpy).toHaveReceivedEventDetail(dummyCode);
  });

  it('should trigger on "Space" when button is focused', async() => {
    const dummyCode = 'Dummy code';
    await setup(`<ods-code can-copy>${dummyCode}</ods-code>`);
    const copySpy = await page.spyOnEvent( 'odsCopy' );

    await page.keyboard.press('Tab');
    await page.waitForChanges();

    await page.keyboard.press('Space');
    await page.waitForChanges();

    expect(copySpy).toHaveReceivedEventTimes(1);
    expect(copySpy).toHaveReceivedEventDetail(dummyCode);
  });

  it('should trigger on copy button click', async() => {
    const dummyCode = 'Dummy code';
    await setup(`<ods-code can-copy>${dummyCode}</ods-code>`);
    const copySpy = await page.spyOnEvent( 'odsCopy' );
    const copyButton = await page.find('ods-code >>> ods-button');

    await copyButton.click();
    await page.waitForChanges();

    expect(copySpy).toHaveReceivedEventTimes(1);
    expect(copySpy).toHaveReceivedEventDetail(dummyCode);
  });
});
