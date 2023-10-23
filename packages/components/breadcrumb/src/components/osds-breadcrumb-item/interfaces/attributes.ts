import type {ODS_ICON_NAME} from '@ovhcloud/ods-component-icon';

interface OdsBreadcrumbItemAttribute {
  /** contrasted or not: see component principles */
  contrasted?: boolean
  /** Item link to redirect to */
  href: string
  /** Icon to display */
  icon?: ODS_ICON_NAME
  /** @internal */
  isCollapsed: boolean
  /** @internal */
  isExpandableItem: boolean
  /** @internal */
  isLast: boolean
  /** Text to display */
  label?: string
}

export {
  OdsBreadcrumbItemAttribute,
};
