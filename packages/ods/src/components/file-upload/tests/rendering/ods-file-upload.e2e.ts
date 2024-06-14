import { type E2EElement, type E2EPage, newE2EPage } from '@stencil/core/testing';
import { type OdsFileUpload } from '../../src';

describe('ods-file-upload rendering', () => {
  let el: E2EElement;
  let page: E2EPage;

  async function setup(content: string, customStyle?: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    if (customStyle) {
      await page.addStyleTag({ content: customStyle });
    }

    el = await page.find('ods-file-upload');
  }

  it('should render the web component', async() => {
    await setup('<ods-file-upload></ods-file-upload>');

    expect(el.shadowRoot).not.toBeNull();
  });

  it('should render the web component disabled', async() => {
    await setup('<ods-file-upload is-disabled></ods-file-upload>');

    expect(el.classList.contains('ods-file-upload--disabled')).toBe(true);
  });

  it('should not render the file list if there are no files', async() => {
    await setup('<ods-file-upload></ods-file-upload>');

    expect(await page.find('ods-file-upload >>> .ods-file-upload__dropzone')).not.toBeNull();
    expect(await page.find('ods-file-upload >>> .ods-file-upload__list')).toBeNull();
  });

  it('should change the dropzone background color when dragging a file over it', async() => {
    const draggableSize = 80;
    await setup(`
      <div style="width: ${draggableSize}px; height: ${draggableSize}px; display: inline-block;"
           draggable="true">
      </div>
      <ods-file-upload></ods-file-upload>
    `);

    const dropzone = await page.find('ods-file-upload >>> .ods-file-upload__dropzone');
    const baseBackgroundColor = (await dropzone.getComputedStyle()).getPropertyValue('background-color');

    await page.mouse.move(draggableSize / 2, draggableSize / 2);
    await page.mouse.down();
    await page.mouse.move(draggableSize + 10, draggableSize / 2);
    await page.waitForChanges();

    expect((await dropzone.getComputedStyle()).getPropertyValue('background-color')).not.toBe(baseBackgroundColor);
  });

  it('should render the max file label if set', async() => {
    const dummyMaxFile = 3;
    const dummyMaxFileLabel = 'Max file:';
    await setup(`<ods-file-upload max-file="${dummyMaxFile}" max-file-label="${dummyMaxFileLabel}"></ods-file-upload>`);

    const acceptElement = await page.find('ods-file-upload >>> .ods-file-upload__dropzone__rules__max-file');

    expect(acceptElement).not.toBeNull();
    expect(acceptElement.innerText).toBe(`${dummyMaxFileLabel} ${dummyMaxFile}`); // eslint-disable-line no-irregular-whitespace
  });

  it('should render the max size label if set', async() => {
    const dummyMaxSize = 1024;
    const dummyMaxSizeLabel = 'Max size:';
    await setup(`<ods-file-upload max-size="${dummyMaxSize}" max-size-label="${dummyMaxSizeLabel}"></ods-file-upload>`);

    const acceptElement = await page.find('ods-file-upload >>> .ods-file-upload__dropzone__rules__max-size');

    expect(acceptElement).not.toBeNull();
    expect(acceptElement.innerText).toBe(`${dummyMaxSizeLabel} 1 kb`); // eslint-disable-line no-irregular-whitespace
  });

  it('should render the accept label if set', async() => {
    const dummyAcceptLabel = 'File formats: images';
    await setup(`<ods-file-upload accepted-file-label="${dummyAcceptLabel}"></ods-file-upload>`);

    const acceptElement = await page.find('ods-file-upload >>> .ods-file-upload__dropzone__rules__file-format');

    expect(acceptElement).not.toBeNull();
    expect(acceptElement.innerText).toBe(dummyAcceptLabel);
  });

  it('should render the global error if set', async() => {
    const dummyError = 'dummy error';
    await setup(`<ods-file-upload error="${dummyError}"></ods-file-upload>`);

    const errorElement = await page.find('ods-file-upload >>> .ods-file-upload__dropzone__error');

    expect(errorElement).not.toBeNull();
    expect(errorElement.innerText).toBe(dummyError);
  });

  it('should render the file list if files are set', async() => {
    const dummyFiles = [
      { name: 'dummy file 1' } as File,
      { name: 'dummy file 2' } as File,
    ];
    await setup('<ods-file-upload></ods-file-upload>');

    await page.evaluate((newFiles) => {
      document.querySelector<OdsFileUpload & HTMLElement>('ods-file-upload')!.files = newFiles;
    }, dummyFiles);
    await page.waitForChanges();

    const fileList = await page.find('ods-file-upload >>> .ods-file-upload__list');

    expect(fileList).not.toBeNull();
    expect((await fileList.findAll('ods-file-upload-item')).length).toBe(dummyFiles.length);
  });

  describe('part', () => {
    it('should render with custom style applied on dropzone', async() => {
      const customBackgroundColor = '#ff0000';
      await setup('<ods-file-upload></ods-file-upload>', `ods-file-upload::part(dropzone) { background-color: ${customBackgroundColor}; }`);

      const dropzoneStyle = await (await page.find('ods-file-upload >>> .ods-file-upload__dropzone')).getComputedStyle();
      expect(dropzoneStyle.getPropertyValue('background-color')).toBe('rgb(255, 0, 0)');
    });

    it('should render with custom style applied on file list', async() => {
      const customBackgroundColor = '#ff0000';
      await setup('<ods-file-upload></ods-file-upload>', `ods-file-upload::part(file-list) { background-color: ${customBackgroundColor}; }`);

      await page.evaluate(() => {
        document.querySelector<OdsFileUpload & HTMLElement>('ods-file-upload')!.files = [{ name: 'dummy file' } as File];
      });
      await page.waitForChanges();

      const dropzoneStyle = await (await page.find('ods-file-upload >>> .ods-file-upload__list')).getComputedStyle();
      expect(dropzoneStyle.getPropertyValue('background-color')).toBe('rgb(255, 0, 0)');
    });
  });
});
