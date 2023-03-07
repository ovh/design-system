import { OdsComponentMethods } from '../ods-component-methods';

export interface OdsBreadcrumbItemMethods extends OdsComponentMethods {
  setBreadcrumbIndex(value: number): void;
  setFocus(): void;
}
