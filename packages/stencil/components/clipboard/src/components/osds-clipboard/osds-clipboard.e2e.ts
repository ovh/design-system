import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';
import { OdsClipboardAttributes, OdsComponentAttributes2StringAttributes, odsClipboardDefaultAttributes } from '@ovhcloud/ods-core';
import { OdsCreateAttributes, OdsStringAttributes2Str } from '@ovhcloud/ods-testing';

describe('e2e:osds-clipboard', () => {
  let page: E2EPage;
  let el: E2EElement;
  let input: E2EElement;

  async function setup({ attributes }: { attributes: Partial<OdsClipboardAttributes> }) {
    const minimalAttributes: OdsClipboardAttributes = OdsCreateAttributes(attributes, odsClipboardDefaultAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsClipboardAttributes>(minimalAttributes, odsClipboardDefaultAttributes);

    page = await newE2EPage();
    const origin = await page.evaluate(() => window.origin);

    const browserContext = page.browserContext();
    await browserContext.overridePermissions(origin, ['clipboard-write', 'clipboard-read']);
    await page.setContent(`<osds-clipboard ${OdsStringAttributes2Str(stringAttributes)}></osds-clipboard>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));
  
    el = await page.find('osds-clipboard');
    input = await page.find('osds-clipboard >>> osds-input');
    await page.waitForChanges();
  }

  it('should render', async () => {
    await setup({ attributes: {} });
    expect(el).not.toBeNull();
    expect(el).toHaveClass('hydrated');

    expect(input).not.toBeNull();
    expect(input).toHaveClass('hydrated');
  });

  it('should copy the input value', async () => {
    const value = 'text to copy';
    
    await setup({ attributes: { value } });

    await input.click();

    expect(await page.evaluate(() => navigator.clipboard.readText())).toBe(value);
  });

  // it('should not copy the input value because of disabled', async () => {
  //   const value = 'text to copy';
  //   await setup({ attributes: { value, disabled: true } });
  //   await page.evaluate(() => navigator.clipboard.writeText(''));

  //   await input.click();

  //   expect(await page.evaluate(() => navigator.clipboard.readText())).toBe('');
  // });

});
