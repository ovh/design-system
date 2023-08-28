import { OsdsFileItem } from '../osds-file-item';

class OdsFileItemController {
  constructor(private component: OsdsFileItem) {}

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

export { 
  OdsFileItemController,
}