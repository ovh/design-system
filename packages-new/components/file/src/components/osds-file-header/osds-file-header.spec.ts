import type { OdsFileHeaderAttribute } from './interfaces/attributes';
import { newSpecPage } from '@stencil/core/testing';
import { OsdsFileHeader } from './osds-file-header';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';

const requiredAttributes: Partial<OdsFileHeaderAttribute> = {
  isSuccessful: false,
}

describe('spec:osds-file-header', () => {
  async function setup({ attributes = requiredAttributes as Partial<OdsFileHeaderAttribute> }  = {}) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsFileHeaderAttribute>(attributes, DEFAULT_ATTRIBUTE);

    const page = await newSpecPage({
      components: [OsdsFileHeader],
      html: `<osds-file-header - ${odsStringAttributes2Str(stringAttributes)} />`,
    });

    if(!page.root) {
      throw new Error('root is null');
    }

    await page.waitForChanges();

    return page;
  }

  it('should render', async () => {
    const { root, rootInstance } = await setup();
    expect(root?.shadowRoot).toBeTruthy();
    expect(rootInstance).toBeTruthy();
  })

  describe('attributes', () => {
    it('should have acceptedTypes attribute', async () => {
      const { root } = await setup({ attributes: { acceptedTypes: 'image/jpg' } });
      expect(root?.shadowRoot?.querySelector('#file')?.attributes.getNamedItem('accept')?.value).toBe('image/jpg');
    })

    it.each([
      ['', undefined],
      ['image/jpg', '(jpg)'],
      ['image/jpg, image/png', '(jpg, png)'],
      ['image/jpg, image/png, image/gif', '(jpg, png, gif)'],
    ])('should display %p types as %p extensions', async (acceptedTypes, extensions) => {
      const { root } = await setup({ attributes: { acceptedTypes } });
      expect(root?.shadowRoot?.querySelector('.ods-file__dropzone__header__title__types')?.textContent).toBe(extensions);
    })

    it('should display title', async () => {
      const { root } = await setup({ attributes: { headerTitle: 'Glisser-déposer' } });
      expect(root?.shadowRoot?.querySelector('.ods-file__dropzone__header__title__label')?.textContent).toBe('Glisser-déposer');
    })

    it('should display divider label', async () => {
      const { root } = await setup({ attributes: { dividerLabel: 'or' } });
      expect(root?.shadowRoot?.querySelector('.ods-file__dropzone__header__or')?.textContent).toBe('or');
    })

    it('should display select files label', async () => {
      const { root } = await setup({ attributes: { selectFilesLabel: 'Select files' } });
      expect(root?.shadowRoot?.querySelector('.ods-file__dropzone__header__link label')?.textContent).toBe('Select files');
    })
  })

  describe('events', () => {
    it('should emit filesSelected event when file is selected', async () => {
      const { root, waitForChanges } = await setup();
      const file = { name: 'test.jpg', size: 1000, type: 'image/jpg' } as File;
      const filesSelected = jest.fn();
      const input = root?.shadowRoot?.querySelector('#file') as HTMLInputElement;
      input.files = [file] as any;
      root?.addEventListener('filesSelected', filesSelected);
      root?.shadowRoot?.querySelector('#file')?.dispatchEvent(new CustomEvent('change', { detail: { file } }));
      await waitForChanges();
      expect(filesSelected).toHaveBeenCalledTimes(1);
    })
  })
})
