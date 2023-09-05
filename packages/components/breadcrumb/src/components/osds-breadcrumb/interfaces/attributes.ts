import type { ODS_ICON_NAME } from '@ovhcloud/ods-component-icon';

interface OdsBreadcrumbAttributeItem {
  /** Item link to redirect to */
  href: string
  /** Icon to display */
  icon?: ODS_ICON_NAME
  /** Text to display */
  label?: string
}

interface OdsBreadcrumbAttribute {
  /** contrasted or not: see component principles */
  contrasted?: boolean
  /**
   * List of breadcrumb items to display
   */
  items: OdsBreadcrumbAttributeItem[] | string
}

export {
  OdsBreadcrumbAttribute,
  OdsBreadcrumbAttributeItem,
};
