import { OdsComponentAttributes } from '../../ods-component-attributes';

export interface OdsBreadcrumbItemAttributes extends OdsComponentAttributes {
  /** @internal */
  isCollapsed: boolean;
  /** @internal */
  isCollapsedItem: boolean;
  /** @internal */
  isLast: boolean;
}
