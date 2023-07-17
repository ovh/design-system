import { OdsFileController } from './ods-file-controller';
import { OdsFile } from './ods-file';
import { OdsFileAttributes, OdsFileI } from './ods-file-attributes';

export class OdsFileMock implements Partial<OdsFile> {
  isSuccessful: () => boolean = () => false
  errorMessage?: string
  acceptedTypes?: string
  files: OdsFileI[] = []
  dragOver = false
  disabled = false
  maxFiles = 10
  emitRejectedFile = jest.fn()
  emitFiles = jest.fn()
  emitMaxFilesReached = jest.fn()
  onDragEnter = jest.fn()
  onDragLeave = jest.fn()
  onDrop = jest.fn()
  dropzoneRef = document.createElement('div')
  constructor(attributes?: Partial<OdsFileAttributes>) {
    this.errorMessage = attributes?.errorMessage ?? 'error'
    this.acceptedTypes = attributes?.acceptedTypes ?? 'image/png';
    this.disabled = attributes?.disabled ?? false;
    this.files = attributes?.files ?? [];
    this.maxFiles = attributes?.maxFiles ?? 10
  }
 }

describe('OdsFileController', () => {
  let component: any;
  let controller: OdsFileController;

  beforeEach(() => {
    component = new OdsFileMock();
    controller = new OdsFileController(component);
  });

  describe('validateAttributes', () => {
    it('should throw an error if errorMessage is not a string', () => {
      component = new OdsFileMock({ errorMessage: 1 as any });
      controller = new OdsFileController(component);
      expect(() => controller.validateAttributes()).toThrowError('ods-file: errorMessage attribute must be a string');
    });

    it('should throw an error if acceptedTypes is not a string', () => {
      component = new OdsFileMock({ acceptedTypes: 1 as any });
      controller = new OdsFileController(component);
      expect(() => controller.validateAttributes()).toThrowError('ods-file: acceptedTypes attribute must be a string');
    });

    it('should throw an error if disabled is not a boolean', () => {
      component = new OdsFileMock({ disabled: 1 as any });
      controller = new OdsFileController(component);
      expect(() => controller.validateAttributes()).toThrowError('ods-file: disabled attribute must be a boolean');
    })

    it('should not throw an error if all attributes are valid', () => {
      component.acceptedTypes = 'image/png';
      component.errorMessage = 'error';
      component.isSuccessful = () => true;
      controller = new OdsFileController(component);
      expect(() => controller.validateAttributes()).not.toThrowError();
    });

    it('should throw an error if files is not an array', () => {
      component = new OdsFileMock({ files: 1 as any });
      controller = new OdsFileController(component);
      expect(() => controller.validateAttributes()).toThrowError('ods-file: files attribute must be an array of File');
    });

    it('should throw an error if files is not an array of File', () => {
      component = new OdsFileMock({ files: [1] as any });
      controller = new OdsFileController(component);
      expect(() => controller.validateAttributes()).toThrowError('ods-file: files attribute must be an array of File');
    });
  });

  describe('methods', () => {
    it('should return true if all files have progress property at 100', () => {
      component = new OdsFileMock({ files: [{ progress: 100 }, { progress: 100 }] as OdsFileI[] });
      controller = new OdsFileController(component);
      expect(controller.isSuccessful()).toBe(true);
    })
    it('should return false if one file has progress property not at 100', () => {
      component = new OdsFileMock({ files: [{ progress: 100 }, { progress: 0 }] as OdsFileI[] });
      controller = new OdsFileController(component);
      expect(controller.isSuccessful()).toBe(false);
    })
    it('should return false if one file has no progress property', () => {
      component = new OdsFileMock({ files: [{ progress: 100 }, { }] as OdsFileI[] });
      controller = new OdsFileController(component);
      expect(controller.isSuccessful()).toBe(false);
    })
    it('should not activate dragOver if disabled', () => {
      component = new OdsFileMock({ disabled: true });
      controller = new OdsFileController(component);
      const event = {
        preventDefault: jest.fn(),
        stopPropagation: jest.fn(),
      }
      controller.onDragEnter(event as unknown as DragEvent);
      expect(event.preventDefault).not.toHaveBeenCalled();
      expect(event.stopPropagation).not.toHaveBeenCalled();
      expect(component.dragOver).toBe(false);
    })
    it('should not activate dragOver if maxFiles is reached', () => {
      component = new OdsFileMock({ files: [{ progress: 100 }, { progress: 100 }] as OdsFileI[], maxFiles: 2 });
      controller = new OdsFileController(component);
      const event = {
        preventDefault: jest.fn(),
        stopPropagation: jest.fn(),
      }
      controller.onDragEnter(event as unknown as DragEvent);
      expect(event.preventDefault).not.toHaveBeenCalled();
      expect(event.stopPropagation).not.toHaveBeenCalled();
      expect(component.dragOver).toBe(false);
    })
    it('should activate dragOver', () => {
      const event = {
        preventDefault: jest.fn(),
        stopPropagation: jest.fn(),
      }
      controller.onDragEnter(event as unknown as DragEvent);
      expect(event.preventDefault).toHaveBeenCalled();
      expect(event.stopPropagation).toHaveBeenCalled();
      expect(component.dragOver).toBe(true);
    })
    it('should not deactivate dragOver if drag over the dropzone or a child', () => {
      const event = {
        preventDefault: jest.fn(),
        stopPropagation: jest.fn(),
      }
      controller.onDragEnter(event as unknown as DragEvent);
      component.dropzoneRef.contains = () => true;
      controller.onDragLeave(event as unknown as DragEvent);
      expect(event.preventDefault).toHaveBeenCalled();
      expect(event.stopPropagation).toHaveBeenCalled();
      expect(component.dragOver).toBe(true);
    })
    it('should deactivate dragOver if we drag leave outside of the dropzone', () => {
      const event = {
        preventDefault: jest.fn(),
        stopPropagation: jest.fn(),
      }
      controller.onDragEnter(event as unknown as DragEvent);
      controller.onDragLeave(event as unknown as DragEvent);
      expect(event.preventDefault).toHaveBeenCalled();
      expect(event.stopPropagation).toHaveBeenCalled();
      expect(component.dragOver).toBe(false);
    })
  })

  describe('event', () => {
    it('should emit files with accepted types from dataTransfer from dataTransfer.files', () => {
      const files = [new File([''], 'file1', { type: 'image/png' }), new File([''], 'file2', {  type: 'image/mov' })];
      const dataTransfer = {
        files
      };
      const event = {
        dataTransfer,
        preventDefault: jest.fn(),
      } as any;

      controller.onDrop(event);

      expect(event.preventDefault).toHaveBeenCalled();
      expect(component.dragOver).toBe(false);
      expect(component.emitFiles).toHaveBeenCalledWith([files[0]]);
      expect(component.emitRejectedFile).toHaveBeenCalledWith(files[1]);
    });
    it('should emit files with accepted types from dataTransfer from dataTransfer.items', () => {
      const files = [new File([''], 'file1', { type: 'image/png' }), new File([''], 'file2', {  type: 'image/mov' })];
      const dataTransfer = {
        items: files.map(file => ({ kind: 'file', type: file.type, getAsFile: () => file }))
      };
      const event = {
        dataTransfer,
        preventDefault: jest.fn(),
      } as any;

      controller.onDrop(event);

      expect(event.preventDefault).toHaveBeenCalled();
      expect(component.dragOver).toBe(false);
      expect(component.emitFiles).toHaveBeenCalledWith([files[0]]);
      expect(component.emitRejectedFile).toHaveBeenCalledWith(files[1]);
    })
    it('should not emit files if disabled', () => {
      component = new OdsFileMock({ disabled: true });
      controller = new OdsFileController(component);
      const event = {
        preventDefault: jest.fn(),
      } as any;

      controller.onDrop(event);

      expect(event.preventDefault).toHaveBeenCalled();
      expect(component.dragOver).toBe(false);
      expect(component.emitFiles).not.toHaveBeenCalled();
    })
    it('should not emit files if maxFiles is reached', () => {
      component = new OdsFileMock({ files: [{ progress: 100 }, { progress: 100 }] as OdsFileI[], maxFiles: 2 });
      controller = new OdsFileController(component);
      const event = {
        preventDefault: jest.fn(),
      } as any;

      controller.onDrop(event);

      expect(event.preventDefault).toHaveBeenCalled();
      expect(component.dragOver).toBe(false);
      expect(component.emitFiles).not.toHaveBeenCalled();
    })
    it('should emit odsMaxFilesReached if maxFiles is reached', () => {
      component = new OdsFileMock({ maxFiles: 1 });
      controller = new OdsFileController(component);

      controller.emitSelectedFiles([
        { size: 1000, name: 'test', type: 'image/png' },
        { size: 1000, name: 'test2', type: 'image/png' }
      ] as File[]);

      expect(component.emitMaxFilesReached).toHaveBeenCalled();
    })
    it('should throw an error if dataTransfer is not defined', () => {
      const event = {
        preventDefault: jest.fn(),
      } as any;

      expect(() => controller.onDrop(event)).toThrowError('ods-file: dataTransfer is not defined');
    })
  });
});
