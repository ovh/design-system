import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';
import {
  OdsFileAttributes,
  OdsComponentAttributes2StringAttributes,
  odsFileDefaultAttributes,
  OdsFileI,
} from '@ovhcloud/ods-core';
import { OdsCreateAttributes, OdsStringAttributes2Str, odsFileBaseAttributes } from '@ovhcloud/ods-testing';

describe('e2e:osds-file', () => {
  let page: E2EPage;
  let el: E2EElement;

  async function setup({ attributes = {} }: { attributes?: Partial<OdsFileAttributes> } = {}) {
    const minimalAttributes: OdsFileAttributes = OdsCreateAttributes(attributes, odsFileBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsFileAttributes>(minimalAttributes, odsFileDefaultAttributes);

    page = await newE2EPage();
    await page.setContent(`<osds-file ${OdsStringAttributes2Str(stringAttributes)}></osds-file>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));
    await page.waitForChanges();

    el = await page.find('osds-file');
    el.setProperty('files', attributes.files);

    await page.waitForChanges();
  }

  it('should render', async () => {
    await setup();
    expect(el).not.toBeNull();
    expect(el).toHaveClass('hydrated');
  });

  describe('attributes', () => {
    it('should add disabled class if disabled prop is true', async () => {
      await setup({ attributes: { disabled: true } });
      const dropzoneDiv = await page.find('osds-file >>> .ods-file__dropzone');
      expect(dropzoneDiv.classList.contains('ods-file__dropzone--disabled')).toBeTruthy();
    })

    it('should add error class if errorMessage prop is defined', async () => {
      await setup({ attributes: { errorMessage: 'error message' } });
      const dropzoneDiv = await page.find('osds-file >>> .ods-file__dropzone');
      expect(dropzoneDiv.classList.contains('ods-file__dropzone--errored')).toBeTruthy();
    })

    it('should display success class if files have been uploaded', async () => {
      await setup({
        attributes: {
          files: [{ name: 'file1.txt', progress: 100, size: 1000 }, { name: 'file2.txt', progress: 100, size: 1000 }] as OdsFileI[],
        }
      });

      const dropzoneDiv = await page.find('osds-file >>> .ods-file__dropzone');
      expect(dropzoneDiv.classList.contains('ods-file__dropzone--success')).toBeTruthy();
    })

    it('should render files item', async () => {
      await setup({
        attributes: {
          files: [{ name: 'file1.txt', progress: 100, size: 1000 }, { name: 'file2.txt', progress: 100, size: 1000 }] as OdsFileI[],
        }
      });
      const fileItems = await page.findAll('osds-file >>> osds-file-item');

      expect(fileItems.length).toBe(2);
    })
  });

  describe('events', () => {
    it('should emit odsFileChange event on file change', async () => {
      await setup();
      const header = await page.find('osds-file >>> osds-file-header');
      const fileChangeEvent = await page.spyOnEvent('odsFilesChange');

      await header.triggerEvent('filesSelected', { detail: { files: [{ name: 'file1.txt', progress: 0 }] } });
      await page.waitForChanges();

      expect(fileChangeEvent).toHaveReceivedEventDetail({ files: [{ name: 'file1.txt', progress: 0 }] });
    })

    it('should emit odsCancel when a file item emit cancel event', async () => {
      await setup({
        attributes: {
          files: [{ name: 'file1.txt', progress: 100, size: 1000 }] as OdsFileI[],
        }
      });

      const fileItem = await page.find('osds-file >>> osds-file-item');
      const cancelEvent = await page.spyOnEvent('odsCancel');

      await fileItem.triggerEvent('cancel');
      await page.waitForChanges();

      expect(cancelEvent).toHaveReceivedEventDetail({ name: 'file1.txt', progress: 100, size: 1000 });
    })
  })
});
