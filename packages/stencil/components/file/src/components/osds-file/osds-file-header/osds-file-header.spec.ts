import { newSpecPage } from '@stencil/core/testing';
import { OsdsFileHeader } from './osds-file-header';
import { OdsFileHeaderAttributes } from '@ovhcloud/ods-core/src';
import { RequiredAttributes } from '@ovhcloud/ods-core/src/utils/properties/ods-extract-attributes-type';

const requiredAttributes: RequiredAttributes<OdsFileHeaderAttributes> = {
  isSuccessful: false,
}

describe('spec:osds-file-header', () => {
  async function setup({ attributes = requiredAttributes as Partial<OdsFileHeaderAttributes> }  = {}) {
    const allAttributes = {
      ...requiredAttributes,
      ...attributes,
    }
    const page = await newSpecPage({
      components: [OsdsFileHeader],
      html: `<osds-file-header is-successful=${attributes.isSuccessful} />`,
    });

    if(!page.root) {
      throw new Error('root is null');
    }

    for(const [key, value] of Object.entries(allAttributes)) {
      page.root[key] = value;
    }

    await page.waitForChanges();

    return page
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

    it.each([false, true])('should render success header only when isSuccessful is true', async (isSuccessful) => {
      const { root } = await setup({ attributes: { isSuccessful } });
      expect(!!root?.shadowRoot?.querySelector('.ods-file__dropzone--success__header')).toBe(isSuccessful);
    })

    it.each(['', 'Big Error'])('should render errored only when errorMessage is defined', async (errorMessage) => {
      const { root } = await setup({ attributes: { errorMessage } });
      expect(!!root?.shadowRoot?.querySelector('.ods-file__dropzone--errored__header')).toBe(!!errorMessage);
    })

    it.each([
      { errorMessage: '', isSuccessful: false, normalHeaderExists: true },
      { errorMessage: '', isSuccessful: true, normalHeaderExists: false },
      { errorMessage: 'Big Error', isSuccessful: false, normalHeaderExists: false },
      { errorMessage: 'Big Error', isSuccessful: true, normalHeaderExists: false },
    ])('should render normal header only when no error or success', async ({ errorMessage, isSuccessful, normalHeaderExists }) => {
      const { root } = await setup({ attributes: { errorMessage, isSuccessful } });
      expect(!!root?.shadowRoot?.querySelector('.ods-file__dropzone__header')).toBe(normalHeaderExists);
    })

    it('should display extensions of accepted types', async () => {
      const { root } = await setup({ attributes: { acceptedTypes: 'image/jpg, image/png, application/pdf' } });
      expect(root?.shadowRoot?.querySelector('.ods-file__dropzone__header__title__types')?.textContent).toBe('(jpg, png, pdf)');
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
