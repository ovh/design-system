import { OdsBreadcrumbItemAttributes } from './ods-breadcrumb-item-attributes';

export const odsBreadcrumbItemDefaultAttributesDoc = {
  active: true,
  collapsed: false,
  disabled: false,
  displayed: true,
  showCollapsedIndicator: false,
} as const;

export const odsBreadcrumbItemDefaultAttributes = odsBreadcrumbItemDefaultAttributesDoc as OdsBreadcrumbItemAttributes;
