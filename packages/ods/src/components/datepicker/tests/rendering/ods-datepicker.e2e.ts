import type { E2EElement, E2EPage } from '@stencil/core/testing';
import { newE2EPage } from '@stencil/core/testing';

describe('ods-datepicker rendering', () => {
  let el: E2EElement;
  let page: E2EPage;

  async function setup(content: string, customStyle?: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    if (customStyle) {
      await page.addStyleTag({ content: customStyle });
    }

    el = await page.find('ods-datepicker');
  }

  beforeEach(jest.clearAllMocks);

  it('should render the web component', async() => {
    await setup('<ods-datepicker></ods-datepicker>');

    expect(el.shadowRoot).not.toBeNull();
  });

  it('should format date according to format attribute', async() => {
    await setup('<ods-datepicker format="yyyy/mm/dd"></ods-datepicker>');
    await el.click();
    await page.waitForChanges();
    const dateButton = await page.find('ods-datepicker >>> .datepicker .datepicker-grid .datepicker-cell:first-child');
    await dateButton.click();
    await page.waitForChanges();
    const inputElement = await page.find('ods-datepicker >>> ods-input');
    const inputValue = await inputElement.getProperty('value');
    expect(inputValue).toMatch(/^\d{4}\/\d{2}\/\d{2}$/);
  });

  it('should disable dates before the minDate', async() => {
    await setup(`<ods-datepicker></ods-datepicker>`);
    await el.setProperty('min', new Date('10 May 2024'));
    await el.setProperty('max', new Date('20 May 2024'));
    await page.waitForChanges();

    await el.click();
    await page.waitForChanges();

    const beforeMinDateButton = await page.find('ods-datepicker >>> .datepicker .datepicker-grid .datepicker-cell:first-child');
    expect(beforeMinDateButton).toHaveClass('disabled');
  });

  it('should disable dates after the maxDate', async() => {
    await setup(`<ods-datepicker></ods-datepicker>`);
    await el.setProperty('min', new Date('10 May 2024'));
    await el.setProperty('max', new Date('20 May 2024'));
    await page.waitForChanges();

    await el.click();
    await page.waitForChanges();

    const afterMaxDateButton = await page.find('ods-datepicker >>> .datepicker .datepicker-grid .datepicker-cell:last-child');
    expect(afterMaxDateButton).toHaveClass('disabled');
  });

  it('should change the displayed locale', async() => {
    await setup('<ods-datepicker locale="fr"></ods-datepicker>');
    await el.setProperty('min', new Date('10 May 2024'));
    await el.setProperty('max', new Date('20 May 2024'));
    await page.waitForChanges();

    await el.click();
    await page.waitForChanges();

    const monthSelector = await page.find('ods-datepicker >>> .datepicker-controls .view-switch');
    expect(monthSelector.innerText).toBe('mai 2024');
  });
});
