import { OdsFile } from './ods-file';
import { OdsComponentController } from '../ods-component-controller';
import { OdsLogger } from '../../logger/ods-logger';

/**
 * common controller logic for cmpnt component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsFileController extends OdsComponentController<OdsFile> {
  private readonly logger = new OdsLogger('OdsFileController');

  constructor(component: OdsFile) {
    super(component);
  }

  isDropzoneDisabled = () => {
    return this.component.disabled || (this.component.maxFiles && this.component.files && this.component.files.length >= this.component.maxFiles);
  }

  /**
   * Attributes validation documentation
   */
  validateAttributes(): void {
    if(typeof this.component.disabled !== 'boolean') {
      throw new Error('ods-file: disabled attribute must be a boolean');
    }

    if(typeof this.component.errorMessage !== 'string') {
      throw new Error('ods-file: errorMessage attribute must be a string');
    }

    if(typeof this.component.acceptedTypes !== 'string') {
      throw new Error('ods-file: acceptedTypes attribute must be a string');
    }

    if(!Array.isArray(this.component.files)) {
      throw new Error('ods-file: files attribute must be an array of File');
    }

    if(this.component.files.length > 0) {
      for(const file of this.component.files) {
        if(!(file instanceof File)) {
          throw new Error('ods-file: files attribute must be an array of File');
        }
      }
    }
  }

  onDragEnter(event: DragEvent): void {
    if(this.isDropzoneDisabled()) return;

    event.preventDefault();
    event.stopPropagation();
    this.component.dragOver = true;
  }

  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();

    const isDropzone = this.component.dropzoneRef.contains(event.relatedTarget as Node);
    if(isDropzone) return;

    this.component.dragOver = false;
  }

  isFileAccepted(file: File): boolean {
    if(!this.component.acceptedTypes) return true;

    const acceptedTypes = this.component.acceptedTypes.split(',').map((type) => type.trim());
    const fileExtension = file.type;

    return acceptedTypes.includes(fileExtension)
  }

  onDrop(e: DragEvent): void {
    e.preventDefault();

    if(this.isDropzoneDisabled()) return;

    this.component.dragOver = false;

    if(!e.dataTransfer) {
      throw new Error('ods-file: dataTransfer is not defined');
    }

    let files = this.getFilesFromDataTransfer(e.dataTransfer);

    if(files.length === 0) {
      this.logger.warn('ods-file: no file dropped');
      return;
    }

    // We need to check if we can add all the new files. If not, we need to slice the array to be sure to not exceed the max files
    if(this.component.maxFiles && this.component.files && (this.component.files?.length + files.length) >= this.component.maxFiles) {
      const availableLength = this.component.maxFiles - this.component.files.length;
      files = files.slice(0, availableLength);
    }

    const newFiles = files.filter((file) => {
      if(this.isFileAccepted(file)) {
        return true;
      } else {
        this.logger.warn(`ods-file: file ${file.name} is rejected because of type`);
        this.component.emitRejectedFile(file);
        return false;
      }
    });

    if(newFiles.length === 0) {
      this.logger.warn('ods-file: no file accepted');
      return;
    }

    this.component.emitFiles(newFiles);
  }

  getFilesFromDataTransfer(dataTransfer: DataTransfer): File[] {
    const files: File[] = [];

    if(dataTransfer?.files?.length > 0) {
      for(const file of Array.from(dataTransfer.files)) {
        files.push(file);
      }
    } else if(dataTransfer?.items?.length > 0) {
      for(const item of Array.from(dataTransfer.items)) {
        if(item.kind === 'file') {
          const file = item.getAsFile();
          if(file) {
            files.push(file);
          }
        }
      }
    }

    return files
  }

  isSuccessful() {
    return !!this.component.files
      && this.component.files.length > 0
      && this.component.files.every((file) => file.progress === 100);
  }

  emitSelectedFiles(files: File[]): void {
    if (this.component.maxFiles && files.length > this.component.maxFiles) {
      this.component.emitMaxFilesReached();
      return;
    }

    this.component.emitFiles(files);
  }
}
