import { newE2EPage } from '@stencil/core/testing';
import {
  OdsComponentAttributes2StringAttributes,
  OdsFileHeaderAttributes,

} from '@ovhcloud/ods-core';
import { OdsCreateAttributes, OdsStringAttributes2Str } from '@ovhcloud/ods-testing';
import {
  odsFileHeaderDefaultAttributes,
} from '@ovhcloud/ods-core/src/components/file/file-header/ods-file-header-default-attributes';

describe('e2e:osds-file-header', () => {
  async function setup({ attributes = {} }: { attributes?: Partial<OdsFileHeaderAttributes> } = {}) {
    const minimalAttributes: OdsFileHeaderAttributes = OdsCreateAttributes(attributes, odsFileHeaderDefaultAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsFileHeaderAttributes>(minimalAttributes, odsFileHeaderDefaultAttributes);

    const page = await newE2EPage();
    await page.setContent(`<osds-file-header ${OdsStringAttributes2Str(stringAttributes)} />`, { timeout: 10000 });
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    await page.waitForChanges();

    return page
  }

  it('should render', async () => {
    const page = await setup({ attributes: {} });
    const el = await page.find('osds-file-header');
    expect(el).not.toBeNull();
    expect(el).toHaveClass('hydrated');
  });

  describe('attributes', () => {
    it('should have acceptedTypes attribute', async () => {
      const page = await setup({ attributes: { acceptedTypes: 'image/jpg' } });
      const input = await page.find('osds-file-header >>> input');
      expect(input.getAttribute('accept')).toBe('image/jpg');
    })

    it('should display extensions of accepted types', async () => {
      const page = await setup({ attributes: { acceptedTypes: 'image/jpg, image/png' } });
      const extensions = await page.find('osds-file-header >>> .ods-file__dropzone__header__title__types');
      expect(extensions.textContent).toBe('(jpg, png)');
    })

    it('should render success header when isSuccessful is true', async () => {
      const page = await setup({ attributes: { isSuccessful: true } });
      const successHeader = await page.find('osds-file-header >>> .ods-file__dropzone--success__header');
      const normalHeader = await page.find('osds-file-header >>> .ods-file__dropzone__header');
      expect(successHeader.textContent).toBe('Tous les fichiers ont été téléchargés');
      expect(normalHeader).toBeFalsy();
    })

    it('should not render success header when isSuccessful is true', async () => {
      const page = await setup({ attributes: { isSuccessful: false } });
      const successHeader = await page.find('osds-file-header >>> .ods-file__dropzone--success__header');
      const normalHeader = await page.find('osds-file-header >>> .ods-file__dropzone__header');
      expect(successHeader).toBeFalsy();
      expect(normalHeader).toBeTruthy();
    })

    it('should render errored only when errorMessage is defined', async () => {
      const page = await setup({ attributes: { errorMessage: 'Big Error' } });
      const erroredLabel = await page.find('osds-file-header >>> .ods-file__dropzone__header__title__label');
      const normalHeader = await page.find('osds-file-header >>> .ods-file__dropzone__header');
      expect(erroredLabel.textContent).toContain('Big Error');
      expect(normalHeader).toBeFalsy();
    })

    it('should not render errored only when errorMessage is defined', async () => {
      const page = await setup({ attributes: { errorMessage: '' } });
      const erroredHeader = await page.find('osds-file-header >>> .ods-file__dropzone--errored__header');
      const normalHeader = await page.find('osds-file-header >>> .ods-file__dropzone__header');
      expect(erroredHeader).toBeFalsy();
      expect(normalHeader).toBeTruthy();

    })

    it.each([
      { errorMessage: '', isSuccessful: false, normalHeaderExists: true },
      { errorMessage: '', isSuccessful: true, normalHeaderExists: false },
      { errorMessage: 'Big Error', isSuccessful: false, normalHeaderExists: false },
      { errorMessage: 'Big Error', isSuccessful: true, normalHeaderExists: false },
    ])('should render normal header only when no error or success', async ({ errorMessage, isSuccessful, normalHeaderExists }) => {
      const page = await setup({ attributes: { errorMessage, isSuccessful } });
      const normalHeader = await page.find('osds-file-header >>> .ods-file__dropzone__header');
      expect(!!normalHeader).toBe(normalHeaderExists);
    })
  })
});
