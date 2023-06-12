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
  }
  getSizeInKiloBytes(size: number) {
    const result = Math.round(size / 1000);

    return isNaN(result) ? 0 : result;
  }
}
