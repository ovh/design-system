import { newE2EPage } from '@stencil/core/testing';
import {
  OdsFileItemAttributes,
} from '@ovhcloud/ods-core';

describe('e2e:osds-file-item', () => {
  async function setup({ attributes = {} }: { attributes?: Partial<OdsFileItemAttributes> } = {}) {
    const allAttributes: OdsFileItemAttributes = {
      name: 'MyFile.png',
      size: 1024,
      progress: undefined,
      error: false,
      ...attributes,
    }

    const page = await newE2EPage();
    await page.setContent(`
      <osds-file-item
          name=${allAttributes.name}
          size=${allAttributes.size}
          progress=${allAttributes.progress}
          error=${allAttributes.error}
      />
    `, { timeout: 10000 });
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    await page.waitForChanges();

    return page
  }

  it('should render', async () => {
    const page = await setup();
    const el = await page.find('osds-file-item');
    expect(el).not.toBeNull();
    expect(el).toHaveClass('hydrated');
  });

  describe('attributes', () => {
    it('should display the size file in Ko', async () => {
      const { find } = await setup({ attributes: { size: 1024, name: 'MyFile.png' } });
      const label = await find('osds-file-item >>> .ods-file__item__label');
      expect(label.textContent).toBe('MyFile.png (1 Ko)');
    })

    it('should have progress bar if progress is defined', async () => {
      const { find } = await setup({ attributes: { progress: 50 } });
      const progressBar = await find('osds-file-item >>> .ods-file__item__progress-bar');
      expect(progressBar).toBeTruthy();
    })

    it('should have error class if file.error is %p', async () => {
      const { find } = await setup({ attributes: { error: true } });
      const erroredItem = await find('osds-file-item >>> .ods-file__item__label--errored');
      expect(erroredItem).toBeTruthy();
    })

    it('should display progress bar if file.progress is at 0', async () => {
      const { find } = await setup({ attributes: { progress: 0 } });
      const progressBar = await find('osds-file-item >>> .ods-file__item__progress-bar');
      expect(progressBar).toBeTruthy();
    })

    it('should have normal content and no progress bar if file is errored', async () => {
      const { find } = await setup({ attributes: { error: true } });
      const progressBar = await find('osds-file-item >>> .ods-file__item__progress-bar');
      const label = await find('osds-file-item >>> .ods-file__item__label');
      expect(label).toBeTruthy();
      expect(progressBar).toBeFalsy();
    })

    it.each([100, undefined])('should have normal content and no progress bar if progress is %p', async (progress) => {
      const { find } = await setup({ attributes: { progress } });
      const progressBar = await find('osds-file-item >>> .ods-file__item__progress-bar');
      const label = await find('osds-file-item >>> .ods-file__item__label');
      expect(label).toBeTruthy();
      expect(progressBar).toBeFalsy();
    })
  })

  describe('events', () => {
    it('should emit cancel event on button click', async () => {
      const page = await setup({ attributes: { error: true } });
      const cancelButton = await page.find('osds-file-item >>> osds-button');
      const cancelEvent = await page.spyOnEvent('cancel');
      await cancelButton.click();
      await page.waitForChanges();
      expect(cancelEvent).toBeTruthy()
  })
  })
});
