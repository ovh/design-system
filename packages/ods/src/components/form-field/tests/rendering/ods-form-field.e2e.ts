import { type E2EElement, type E2EPage, newE2EPage } from '@stencil/core/testing';

describe('ods-form-field rendering', () => {
  let el: E2EElement;
  let page: E2EPage;

  async function setup(content: string, customStyle?: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    if (customStyle) {
      await page.addStyleTag({ content: customStyle });
    }

    el = await page.find('ods-form-field');
  }

  it('should render the web component', async() => {
    await setup('<ods-form-field><ods-input></ods-input></ods-form-field>');

    expect(el.shadowRoot).not.toBeNull();
  });

  it('should display an error message when error attribute is set', async() => {
    await setup('<ods-form-field error="Wrong format."><ods-input></ods-input></ods-form-field>');

    const errorMessage = await page.find('ods-form-field >>> .ods-form-field__bottom-bar__messages__error');

    expect(errorMessage).not.toBeNull();
    expect(errorMessage?.textContent).toBe('Wrong format.');
  });

  it('should not display error message when error is empty', async() => {
    await setup('<ods-form-field error=""><ods-input></ods-input></ods-form-field>');

    const errorMessage = await page.find('ods-form-field >>> .ods-form-field__bottom-bar__messages__error');

    expect(errorMessage).toBeNull();
  });

  it('should correctly render content in the label slot', async() => {
    await setup('<ods-form-field><ods-input></ods-input><span slot="label">Label</span></ods-form-field>');

    const labelSlot = await el.find('span[slot="label"]');

    expect(labelSlot).not.toBeNull();
    expect(labelSlot.textContent).toBe('Label');
  });

  it('should correctly render content in the visual-hint slot', async() => {
    await setup('<ods-form-field><ods-input></ods-input><span slot="visual-hint">Visual Hint</span></ods-form-field>');

    const visualHintSlot = await el.find('span[slot="visual-hint"]');

    expect(visualHintSlot).not.toBeNull();
    expect(visualHintSlot.textContent).toBe('Visual Hint');
  });

  it('should correctly render content in the default slot', async() => {
    await setup('<ods-form-field><ods-input></ods-input></ods-form-field>');

    const input = await el.find('ods-input');

    expect(input).not.toBeNull();
  });

  it('should correctly render alternative content in the default slot', async() => {
    await setup('<ods-form-field><ods-textarea></ods-textarea></ods-form-field>');

    const textarea = await el.find('ods-textarea');

    expect(textarea).not.toBeNull();
  });

  it('should correctly render helper text in the helper slot', async() => {
    await setup('<ods-form-field><ods-input></ods-input><span slot="helper">Helper</span></ods-form-field>');

    const helperSlot = await el.find('span[slot="helper"]');

    expect(helperSlot).not.toBeNull();
    expect(helperSlot.textContent).toBe('Helper');
  });

  it('should be displaying the error message and the helper slot', async() => {
    await setup('<ods-form-field error="Wrong format."><ods-input></ods-input><span slot="helper">Helper</span></ods-form-field>');

    const errorMessage = await page.find('ods-form-field >>> .ods-form-field__bottom-bar__messages__error');
    const helperSlot = await el.find('span[slot="helper"]');

    expect(errorMessage).not.toBeNull();
    expect(errorMessage?.textContent).toBe('Wrong format.');
    expect(helperSlot).not.toBeNull();
    expect(helperSlot.textContent).toBe('Helper');
  });
});
