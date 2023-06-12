import { OdsComponentMethods } from '../../ods-component-methods';

export interface OdsFileItemMethods extends OdsComponentMethods {
  getSizeInKiloBytes(size: number): number;
  getContent(): string;
  emitCancel(): void;
}
