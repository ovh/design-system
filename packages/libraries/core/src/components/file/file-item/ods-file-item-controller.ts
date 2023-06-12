import { OdsFileItem } from './ods-file-item';
import { OdsComponentController } from '../../ods-component-controller';

export class OdsFileItemController extends OdsComponentController<OdsFileItem> {
  // private readonly logger = new OdsLogger('OdsFileController');

  constructor(component: OdsFileItem) {
    super(component);
  }

  /**
   * Attributes validation documentation
   */
  validateAttributes(): void {
    if (!this.component.name) {
      throw new Error('ods-file-item: name attribute is required');
    }
    if (!this.component.size) {
      throw new Error('ods-file-item: size attribute is required');
    }
    if (this.component.progress && typeof this.component.progress !== 'number') {
      throw new Error('ods-file-item: progress attribute must be a number');
    }
    if (this.component.error && typeof this.component.error !== 'boolean') {
      throw new Error('ods-file-item: error attribute must be a boolean');
    }
  }
  getSizeInKiloBytes(size: number) {
    return Math.round(size / 1000);
  }
}
