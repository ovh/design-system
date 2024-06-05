import { type E2EElement, type E2EPage, newE2EPage } from '@stencil/core/testing';

describe('ods-file-upload-item rendering', () => {
  let el: E2EElement;
  let page: E2EPage;

  async function setup(content: string, customStyle?: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    if (customStyle) {
      await page.addStyleTag({ content: customStyle });
    }

    el = await page.find('ods-file-upload-item');
  }

  it('should render the web component', async() => {
    await setup('<ods-file-upload-item name="name" size="1" success-label="ok"></ods-file-upload-item>');

    expect(el.shadowRoot).not.toBeNull();
  });

  it('should render the web component disabled', async() => {
    await setup('<ods-file-upload-item is-disabled name="name" size="1" success-label="ok"></ods-file-upload-item>');

    expect(el.classList.contains('ods-file-upload-item--disabled')).toBe(true);
  });

  it('should render the size correctly formatted', async() => {
    await setup('<ods-file-upload-item name="name" size="1024" success-label="ok"></ods-file-upload-item>');

    expect((await page.find('ods-file-upload-item >>> .ods-file-upload-item__file__info__size')).innerText).toBe('1 kb');
  });

  it('should render the error message if set', async() => {
    const dummyError = 'dummy error';
    await setup(`<ods-file-upload-item error="${dummyError}" name="name" size="1" success-label="ok"></ods-file-upload-item>`);

    const errorElement = await page.find('ods-file-upload-item >>> .ods-file-upload-item__file__error');
    expect(errorElement).not.toBeNull();
    expect(errorElement.innerText).toBe(dummyError);
  });

  it('should render the progress bar', async() => {
    const dummyProgress = 50;
    await setup(`<ods-file-upload-item progress="${dummyProgress}" name="name" size="1" success-label="ok"></ods-file-upload-item>`);

    const progressElement = await page.find('ods-file-upload-item >>> .ods-file-upload-item__file__progress');
    expect(progressElement).not.toBeNull();
    expect(progressElement.innerText.trim()).toBe(`${dummyProgress}%`);
    expect(await page.find('ods-file-upload-item >>> ods-progress-bar')).not.toBeNull();
  });

  it('should render the success message if uploaded', async() => {
    const dummySuccess = 'dummy success';
    await setup(`<ods-file-upload-item is-uploaded name="name" size="1" success-label="${dummySuccess}"></ods-file-upload-item>`);

    const successElement = await page.find('ods-file-upload-item >>> .ods-file-upload-item__file__success');
    expect(successElement).not.toBeNull();
    expect(successElement.innerText.trim()).toBe(dummySuccess);
  });
});
