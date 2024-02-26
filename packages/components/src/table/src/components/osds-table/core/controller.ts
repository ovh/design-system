import type { ODS_TABLE_SIZE } from '../constants/table-size';
import type { ODS_TABLE_VARIANT } from '../constants/table-variant';
import type { OsdsTable } from '../osds-table';
import { ODS_TABLE_SIZES } from '../constants/table-size';
import { ODS_TABLE_VARIANTS } from '../constants/table-variant';

/**
 * common controller logic for table component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
class OdsTableController {
  protected component: OsdsTable;

  constructor(component: OsdsTable) {
    this.component = component;
  }

  /**
   * Warn user if the size attribute is not set
   * @param size - size of the table
   */
  validateSize(size?: string): void {
    if (!size || size.length === 0) {
      console.warn('The size attribute must be set');
    }
    if (size && !ODS_TABLE_SIZES.includes(size as ODS_TABLE_SIZE)) {
      console.warn(`The size attribute must be one the following: ${Object.values(ODS_TABLE_SIZES).join(', ')}.`);
    }
  }

  /**
   * Warn user if the variant attribute is not set
   * @param variant - variant of the table
   */
  validateVariant(variant?: string): void {
    if (variant && !ODS_TABLE_VARIANTS.includes(variant as ODS_TABLE_VARIANT)) {
      console.warn(`The variant attribute must be one the following: ${Object.values(ODS_TABLE_VARIANTS).join(', ')}.`);
    }
  }
}

export {
  OdsTableController,
};
