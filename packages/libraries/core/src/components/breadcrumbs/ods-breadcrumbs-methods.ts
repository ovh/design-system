import { OdsComponentMethods } from '../ods-component-methods';

export interface OdsBreadcrumbsMethods extends OdsComponentMethods {
  setBreadcrumbIndex(value: number): void;
  setFocus(): void;
}
