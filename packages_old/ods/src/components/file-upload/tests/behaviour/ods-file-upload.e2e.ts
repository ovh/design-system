import { Blob } from 'buffer';
import fs from 'fs';
import path from 'path';
import { type E2EPage, newE2EPage } from '@stencil/core/testing';
import { JSDOM } from 'jsdom';
import { ODS_FILE_REJECTION_CAUSE } from '../../src';

describe('ods-file-upload behaviour', () => {
  const { File, FileList } = (new JSDOM()).window;
  let page: E2EPage;

  async function setup(content: string, customStyle?: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    if (customStyle) {
      await page.addStyleTag({ content: customStyle });
    }
  }

  // Inspired by https://github.com/jsdom/jsdom/issues/1272#issuecomment-361106435
  async function uploadFile(src: string): Promise<void> {
    const filePath = path.join(__dirname, src);
    const blob = new Blob([fs.readFileSync(filePath)]);
    // @ts-ignore go home TS you're drunk
    const file = new File([blob], path.basename(filePath));

    await page.evaluate(({ newFile }) => {
      const input = document.querySelector('ods-file-upload')!.shadowRoot!.querySelector('input[type="file"]') as HTMLInputElement;
      const fileList = [newFile];

      // @ts-ignore needed to tweak the input readonly FileList
      fileList.__proto__ = Object.create(FileList.prototype);

      Object.defineProperty(input, 'files', {
        value: fileList,
        writable: false,
      });

      input.dispatchEvent(new CustomEvent('change'));
    }, { newFile: file });
  }

  beforeEach(jest.clearAllMocks);

  describe('events', () => {
    it('should emit an odsChange event on file add', async() => {
      await setup('<ods-file-upload></ods-file-upload>');
      const odsChangeSpy = await page.spyOnEvent('odsChange');
      const odsRejectedSpy = await page.spyOnEvent('odsRejected');

      await uploadFile('./ods-file-upload.e2e.ts');
      await page.waitForChanges();

      expect(odsChangeSpy).toHaveReceivedEventTimes(1);
      expect(odsRejectedSpy).toHaveReceivedEventTimes(0);
    });

    it('should emit an odsRejected event on file add if type is not accepted', async() => {
      await setup('<ods-file-upload accept="image/*"></ods-file-upload>');
      const odsChangeSpy = await page.spyOnEvent('odsChange');
      const odsRejectedSpy = await page.spyOnEvent('odsRejected');

      await uploadFile('./ods-file-upload.e2e.ts');
      await page.waitForChanges();

      expect(odsChangeSpy).toHaveReceivedEventTimes(0);
      expect(odsRejectedSpy).toHaveReceivedEventTimes(1);
      expect(odsRejectedSpy).toHaveReceivedEventDetail({
        files: [{}],
        reason: ODS_FILE_REJECTION_CAUSE.wrongFormat,
      });
    });

    it('should emit an odsRejected event on file add if max file is reached', async() => {
      await setup('<ods-file-upload max-file="0"></ods-file-upload>');
      const odsChangeSpy = await page.spyOnEvent('odsChange');
      const odsRejectedSpy = await page.spyOnEvent('odsRejected');

      await uploadFile('./ods-file-upload.e2e.ts');
      await page.waitForChanges();

      expect(odsChangeSpy).toHaveReceivedEventTimes(0);
      expect(odsRejectedSpy).toHaveReceivedEventTimes(1);
      expect(odsRejectedSpy).toHaveReceivedEventDetail({
        files: [{}],
        reason: ODS_FILE_REJECTION_CAUSE.maxFileReached,
      });
    });
  });
});
