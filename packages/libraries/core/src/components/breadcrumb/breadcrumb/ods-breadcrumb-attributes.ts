import { OdsComponentAttributes } from '../../ods-component-attributes';
export interface OdsBreadcrumbAttributes extends OdsComponentAttributes {
  maxItems: number;
  itemBeforeCollapse: number;
  itemAfterCollapse: number;
}
