import { OdsFileHeader } from './ods-file-header';
import { OdsComponentController } from '../../ods-component-controller';

export class OdsFileHeaderController extends OdsComponentController<OdsFileHeader> {
  // private readonly logger = new OdsLogger('OdsFileController');

  constructor(component: OdsFileHeader) {
    super(component);
  }

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
