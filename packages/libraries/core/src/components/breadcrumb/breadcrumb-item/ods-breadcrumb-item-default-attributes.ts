import { OdsBreadcrumbItemAttributes } from './ods-breadcrumb-item-attributes';

export const odsBreadcrumbItemDefaultAttributesDoc  = {
  isCollapsed: false,
  isCollapsedItem: false,
  isLast: false,
} as const;

export const odsBreadcrumbItemDefaultAttributes = odsBreadcrumbItemDefaultAttributesDoc as OdsBreadcrumbItemAttributes;
