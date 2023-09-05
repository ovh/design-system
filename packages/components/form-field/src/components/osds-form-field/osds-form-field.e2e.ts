import type { E2EElement, E2EPage } from '@stencil/core/testing';
import type { OdsFormFieldAttribute } from './interfaces/attributes';
import { newE2EPage } from '@stencil/core/testing';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';

describe('e2e:osds-form-field', () => {
  let page: E2EPage;
  let el: E2EElement;

  async function setup({ attributes, content }: { attributes: Partial<OdsFormFieldAttribute>, content: string }) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsFormFieldAttribute>(attributes, DEFAULT_ATTRIBUTE);

    page = await newE2EPage();
    await page.setContent(`<osds-form-field ${odsStringAttributes2Str(stringAttributes)}>${content}</osds-form-field>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-form-field');
  }

  it('should render', async () => {
    await setup({ attributes: {}, content: '' });
    expect(el).not.toBeNull();
    expect(el).toHaveClass('hydrated');
  });

  it('should render with an input', async () => {
    const content = `
      <osds-input type="text" value="Hello, ODS!"></osds-input>
    `;
    await setup({ attributes: {}, content });
    const input = await page.find('osds-form-field osds-input');

    expect(input).not.toBeNull();
    expect(await input.getProperty('value')).toBe('Hello, ODS!');
  });

  it('should render with textarea', async () => {
    const content = `
      <osds-textarea></osds-textarea>
    `;
    await setup({ attributes: {}, content });
    const textarea = await page.find('osds-form-field osds-textarea');

    expect(textarea).not.toBeNull();
  });

  it('should render with tooltip', async () => {
    const content = `
      <osds-input type="text" value="Hello, ODS!"></osds-input>
      <osds-tooltip slot="visual-hint">
        <osds-tooltip-content slot="tooltip-content">
          Lorem ipsum...
        </osds-tooltip-content>

        <osds-text level='body' color="primary">
          Need help?
        </osds-text>
      </osds-tooltip>
    `;
    await setup({ attributes: {}, content });
    const tooltip = await page.find('osds-form-field osds-tooltip[slot="visual-hint"]');

    expect(tooltip).not.toBeNull();
  });

  it('should render inner text content', async () => {
    const content = `
      <osds-text slot="label" level='heading' color="primary">Description</osds-text>
      <osds-text slot="visual-hint">150/200</osds-text>
      <osds-input type="text" value="Hello, ODS!"></osds-input>
      <osds-text slot="helper">A little helper text</osds-text>
    `;
    await setup({ attributes: {}, content });
    const label = await page.find('osds-form-field osds-text[slot="label"]');
    const visualHint = await page.find('osds-form-field osds-text[slot="visual-hint"]');
    const input = await page.find('osds-form-field osds-input');
    const helper = await page.find('osds-form-field osds-text[slot="helper"]');

    expect(label).not.toBeNull();
    expect(await label.textContent).toBe('Description');
    expect(visualHint).not.toBeNull();
    expect(await visualHint.textContent).toBe('150/200');
    expect(input).not.toBeNull();
    expect(await input.getProperty('value')).toBe('Hello, ODS!');
    expect(helper).not.toBeNull();
    expect(await helper.textContent).toBe('A little helper text');
    expect(el).not.toBeNull();
    expect(el).toHaveClass('hydrated');
  });

  it('should switch helper text according to error', async () => {
    const content = `
      <osds-text slot="label" level='heading' color="primary">Description</osds-text>
      <osds-text slot="visual-hint">150/200</osds-text>
      <osds-input type="text" value="Hello, ODS!"></osds-input>
      <osds-text slot="helper">A little helper text</osds-text>
    `;
    await setup({ attributes: { error: "An error occured" }, content });
    const error = await page.find('osds-form-field >>> osds-text[color="error"]');

    expect(error).not.toBeNull();
    expect(await error.textContent).toBe("An error occured");
  });
});
