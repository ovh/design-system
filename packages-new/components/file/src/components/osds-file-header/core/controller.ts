import type { OsdsFileHeader } from "../osds-file-header";

class OdsFileHeaderController {

  constructor(private component: OsdsFileHeader) { }

  /**
   * Attributes validation documentation
   */
  validateAttributes(): void {
    if (typeof this.component.errorMessage !== 'string') {
      throw new Error('ods-file-header: errorMessage attribute must be a string');
    }

    if (typeof this.component.acceptedTypes !== 'string') {
      throw new Error('ods-file-header: acceptedTypes attribute must be a string');
    }
  }

  getFilesFromSelection(event: Event) {
    const input = event.target as HTMLInputElement;

    if(input.files) {
      const files = Array.from(input.files);
      this.component.emitFiles(files);
    }
  }

  acceptedExtensions() {
    if (!this.component.acceptedTypes) {
      return '';
    }

    return this.component.acceptedTypes
      .replace(/(image\/)|(application\/)|(\.)/g, '')
  }
}

export { 
  OdsFileHeaderController,
}