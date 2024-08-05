import type { E2EElement, E2EPage } from '@stencil/core/testing';
import { newE2EPage } from '@stencil/core/testing';

describe('ods-timepicker rendering', () => {
  let el: E2EElement;
  let input: E2EElement;
  let page: E2EPage;
  let select: E2EElement;

  async function setup(content: string, customStyle?: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    if (customStyle) {
      await page.addStyleTag({ content: customStyle });
    }

    el = await page.find('ods-timepicker');
    input = await page.find('ods-timepicker >>> .ods-timepicker__time');
    select = await page.find('ods-timepicker >>> .ods-timepicker__timezones');
  }

  it('should render the web component', async() => {
    await setup('<ods-timepicker></ods-timepicker>');

    expect(el.shadowRoot).not.toBeNull();
    expect(select).toBeNull();
  });

  it('should render the web component with select with all timezones', async() => {
    await setup('<ods-timepicker timezones="all"></ods-timepicker>');

    expect(el.shadowRoot).not.toBeNull();
    expect(select).not.toBeNull();
  });

  it('should render the web component with select with specific timezones ', async() => {
    await setup('<ods-timepicker timezones=\'["utc-2", "utc+2", "utc+30"]\'></ods-timepicker>');

    expect(el.shadowRoot).not.toBeNull();
    expect(select).not.toBeNull();
  });

  it('should not render the web component with select because of currentTimezone if not timezones are set', async() => {
    await setup('<ods-timepicker current-timezone="UTC+1"></ods-timepicker>');

    expect(el.shadowRoot).not.toBeNull();
    expect(select).toBeNull();
  });

  describe('part', () => {
    it('should render with custom style applied on input & select', async() => {
      const width = '300px';
      await setup('<ods-timepicker timezones="all"></ods-timepicker>', `ods-timepicker::part(input) { width: ${width}; } ods-timepicker::part(select) { width: ${width}; }`);

      const inputStyle = await input.getComputedStyle();
      expect(inputStyle.getPropertyValue('width')).toBe(width);
      const selectStyle = await select.getComputedStyle();
      expect(selectStyle.getPropertyValue('width')).toBe(width);
    });
  });
});
