import {
  OdsFileAttributes,
  OdsComponentAttributes2StringAttributes,
  odsFileDefaultAttributes, OdsFileI,
} from '@ovhcloud/ods-core';
import {
  OdsCreateAttributes, odsFileBaseAttributes,
  OdsStringAttributes2Str,
} from '@ovhcloud/ods-testing';
import { newSpecPage } from '@stencil/core/testing';

import { OsdsFile } from './osds-file';
describe('spec:osds-file', () => {
  let root: HTMLElement | undefined;
  let instance: OsdsFile;
  let dropzoneDiv: HTMLDivElement;

  afterEach(() => {
    jest.clearAllMocks();
  });

  async function setup({ attributes = {}, html }: { attributes?: Partial<OdsFileAttributes>, html?: string } = {}) {
    const minimalAttributes: OdsFileAttributes = OdsCreateAttributes(attributes, odsFileBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsFileAttributes>(minimalAttributes, odsFileDefaultAttributes);

    const page = await newSpecPage({
      components: [OsdsFile],
      html: `<osds-file ${OdsStringAttributes2Str(stringAttributes)}>${html}</osds-file>`,
    });

    if(!page.root) {
      throw new Error('root is null');
    }

    for(const [key, value] of Object.entries(attributes)) {
      if(key === 'files') {
        page.root[key] = value as OdsFileI[];
        continue;
      }
    }

    await page.waitForChanges();

    root = page.root;
    instance = page.rootInstance;
    dropzoneDiv = root?.shadowRoot?.querySelector<HTMLDivElement>('.ods-file__dropzone') as HTMLDivElement;
    return page;
  }

  it('should render', async () => {
    await setup();
    expect(root?.shadowRoot).toBeTruthy();
    expect(instance).toBeTruthy();
  });

  describe('attributes', () => {
    it('should have disabled attribute', async () => {
      await setup({ attributes: { disabled: true } });
      expect(instance.disabled).toBeTruthy();
    })

    it('should have errorMessage attribute', async () => {
      await setup({ attributes: { errorMessage: 'error message' } });
      expect(instance.errorMessage).toBe('error message');
    })

    it('should have acceptedTypes attribute', async () => {
      await setup({ attributes: { acceptedTypes: 'image/jpg, image/png' } });
      expect(instance.acceptedTypes).toBe('image/jpg, image/png');
    })

    it.each([
      ['dividerLabel', 'ou'],
      ['selectFilesLabel', 'sélectionner un fichier'],
      ['headerTitle', 'Glisser-déposer une pièce jointe'],
    ])('should bind %p attribute with osds-file-header', async (attribute, value) => {
      await setup({ attributes: { [attribute]: value } });
      const header = root?.shadowRoot?.querySelector('osds-file-header');
      expect(header?.getAttribute(attribute)).toBe(value);
    })

    it('should add disabled class if disabled prop is true', async () => {
      await setup({ attributes: { disabled: true } });
      expect(dropzoneDiv.classList.contains('ods-file__dropzone--disabled')).toBeTruthy();
    })

    it('should add error class if errorMessage prop is defined', async () => {
      await setup({ attributes: { errorMessage: 'error message' } });
      expect(dropzoneDiv.classList.contains('ods-file__dropzone--errored')).toBeTruthy();
    })

    it('should add success class if files have been uploaded', async () => {
      const page = await setup();
      if(!page.root) throw new Error('root is undefined');

      page.root.files = [{ name: 'file1', progress: 100 }, { name: 'file1', progress: 100 }] as OdsFileI[];
      await page.waitForChanges();
      expect(dropzoneDiv.classList.contains('ods-file__dropzone--success')).toBeTruthy();
    })

    it('should render files', async () => {
      const page = await setup();
      if(!page.root) throw new Error('root is undefined');

      page.root.files = [{ name: 'file1', progress: 100 }, { name: 'file1', progress: 100 }] as OdsFileI[];
      await page.waitForChanges();
      const files = root?.shadowRoot?.querySelectorAll<HTMLDivElement>('osds-file-item');
      expect(files?.length).toBe(2);
    })
  });

  describe('events', () => {
    it('should not add drag-over class if disabled is true', async () => {
      const page = await setup({ attributes: { disabled: true } });
      instance.onDragEnter(new Event('dragenter') as DragEvent);
      await page.waitForChanges();
      dropzoneDiv = root?.shadowRoot?.querySelector<HTMLDivElement>('.ods-file__dropzone') as HTMLDivElement;
      expect(dropzoneDiv.classList.contains('ods-file__dropzone--drag-over')).toBeFalsy();
    })

    it('should not add drag-over class if maxFiles is reached', async () => {
      const page = await setup({ attributes: { maxFiles: 1, files: [{ name: 'file1', progress: 100 } as OdsFileI] } });
      instance.onDragEnter(new Event('dragenter') as DragEvent);
      await page.waitForChanges();
      dropzoneDiv = root?.shadowRoot?.querySelector<HTMLDivElement>('.ods-file__dropzone') as HTMLDivElement;
      expect(dropzoneDiv.classList.contains('ods-file__dropzone--drag-over')).toBeFalsy();
    })

    it('should add drag-over class on drag enter and remove on leave', async () => {
      const page = await setup()
      instance.onDragEnter(new Event('dragenter') as DragEvent);
      await page.waitForChanges();
      dropzoneDiv = root?.shadowRoot?.querySelector<HTMLDivElement>('.ods-file__dropzone') as HTMLDivElement;
      expect(dropzoneDiv.classList.contains('ods-file__dropzone--drag-over')).toBeTruthy();

      instance.onDragLeave(new Event('dragleave') as DragEvent);
      await page.waitForChanges();
      dropzoneDiv = root?.shadowRoot?.querySelector<HTMLDivElement>('.ods-file__dropzone') as HTMLDivElement;
      expect(dropzoneDiv.classList.contains('ods-file__dropzone--drag-over')).toBeFalsy();
    })

    it.each([
      { disabled: true, expectedEventCount: 0 },
      { disabled: false, expectedEventCount: 1 }
    ])('should emit odsFileChange event on drop files only if not disabled', async ({ disabled, expectedEventCount }) => {
      const page = await setup({ attributes: { disabled } });
      if(!page.root) throw new Error('root is undefined');
      const mockEventListener = jest.fn();
      page.root.addEventListener('odsFilesChange', mockEventListener);

      const file = { name: 'file1', type: 'image/png' } as OdsFileI;
      const mockDropEvent = {
        preventDefault: jest.fn(),
        stopPropagation: jest.fn(),
        dataTransfer: {
          files: [file],
          items: [file]
        }
      }

      instance.onDrop(mockDropEvent as any);
      await page.waitForChanges();
      expect(mockEventListener).toHaveBeenCalledTimes(expectedEventCount);
    })

    it('should emit odsCancel when a file item emit cancel event', async () => {
      const page = await setup();
      const files = [{ name: 'file1', progress: 100 }, { name: 'file1', progress: 100 }] as OdsFileI[];
      await setup({ attributes: { files } });
      if(!page.root) throw new Error('root is undefined');

      const mockEventListener = jest.fn();
      page.body.addEventListener('odsCancel', mockEventListener);

      const fileItem = root?.shadowRoot?.querySelector('osds-file-item');
      const event = new Event('cancel');
      await fileItem?.dispatchEvent(event);
      await page.waitForChanges();

      // test that the event is emitted with the file
      expect(mockEventListener).toHaveBeenCalledTimes(1);
      expect(mockEventListener).toHaveBeenCalledWith(expect.objectContaining({ detail: { ...files[0] } }));
    })

    it('should emit odsRejectedFile when a file is reject because of type', async () => {
      const page = await setup({ attributes: { acceptedTypes: 'image/png' } });
      if(!page.root) throw new Error('root is undefined');

      const mockEventListener = jest.fn();
      page.body.addEventListener('odsRejectedFile', mockEventListener);

      const file = { name: 'file1', type: 'video/mov' } as OdsFileI;
      const mockDropEvent = {
        preventDefault: jest.fn(),
        dataTransfer: {
          files: [file],
        }
      }

      instance.onDrop(mockDropEvent as any);
      await page.waitForChanges();

      expect(mockEventListener).toHaveBeenCalledTimes(1);
      expect(mockEventListener).toHaveBeenCalledWith(expect.objectContaining({ detail: file }));
    })

    it('should call preventDefault function on dragover event', async () => {
      const page = await setup();

      // drag over must be called from the dropzone
      const dropzoneDiv = root?.shadowRoot?.querySelector<HTMLDivElement>('.ods-file__dropzone') as HTMLDivElement;
      const event = new Event('dragover') as DragEvent;
      event.preventDefault = jest.fn();
      dropzoneDiv.dispatchEvent(event);

      await page.waitForChanges();

      expect(event.preventDefault).toHaveBeenCalledTimes(1);
    })
  })
})
