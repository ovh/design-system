import { OdsBreadcrumbItemAttributes } from './ods-breadcrumb-item-attributes';

export const odsBreadcrumbItemDefaultAttributesDoc  = {
  contrasted: false,
  isCollapsed: false,
  isCollapsedItem: false,
  isLast: false,
} as const;

export const odsBreadcrumbItemDefaultAttributes = odsBreadcrumbItemDefaultAttributesDoc as OdsBreadcrumbItemAttributes;
