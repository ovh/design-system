import { type E2EElement, type E2EPage, newE2EPage } from '@stencil/core/testing';
import { type OdsFileUploadItem } from '../../src/components/ods-file-upload-item/ods-file-upload-item';

describe('ods-file-upload-item behaviour', () => {
  const cancelSpy = jest.fn();
  let page: E2EPage;

  async function setup(content: string, customStyle?: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    if (customStyle) {
      await page.addStyleTag({ content: customStyle });
    }
  }

  async function setupCancelHandler(): Promise<E2EElement> {
    await page.exposeFunction('cancelSpy', cancelSpy);
    await page.evaluate(() => {
      const fileItem = document.querySelector<OdsFileUploadItem & HTMLElement>('ods-file-upload-item');
      fileItem!.cancelHandler = cancelSpy;
    });
    await page.waitForChanges();

    return await page.find('ods-file-upload-item >>> ods-button');
  }

  beforeEach(jest.clearAllMocks);

  it('should call the click handler remove on button click', async() => {
    await setup('<ods-file-upload-item name="name" size="1" success-label="ok"></ods-file-upload-item>');
    const cancelButton = await setupCancelHandler();

    await cancelButton.click();
    await page.waitForChanges();

    expect(cancelSpy).toHaveBeenCalledTimes(1);
  });

  it('should not call the click handler remove on button click if disabled', async() => {
    await setup('<ods-file-upload-item is-disabled name="name" size="1" success-label="ok"></ods-file-upload-item>');
    const cancelButton = await setupCancelHandler();

    await cancelButton.click();
    await page.waitForChanges();

    expect(cancelSpy).toHaveBeenCalledTimes(0);
  });
});
