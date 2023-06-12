import { OdsComponentMethods } from '../../ods-component-methods';

export interface OdsFileHeaderMethods extends OdsComponentMethods {
  emitFiles(files: File[]): void;
  handleFilesSelected(event: Event): void;
}
