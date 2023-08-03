import type { ODS_ICON_NAME } from '@ovhcloud/ods-component-icon';
import { OdsComponentAttributes } from '../../ods-component-attributes';

export interface OdsBreadcrumbAttributeItem {
  /** Item link to redirect to */
  href: string,
  /** Icon to display */
  icon?: ODS_ICON_NAME,
  /** Text to display */
  label?: string,
}

export interface OdsBreadcrumbAttributes extends OdsComponentAttributes {
  /** contrasted or not: see component principles */
  contrasted?: boolean,
  /**
   * List of breadcrumb items to display
   */
  items: OdsBreadcrumbAttributeItem[] | string,
}
