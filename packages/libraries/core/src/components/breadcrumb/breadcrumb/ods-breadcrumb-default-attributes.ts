import { OdsBreadcrumbAttributes } from './ods-breadcrumb-attributes';

export const odsBreadcrumbDefaultAttributesDoc = {
  //ariaCurrent: null,
  maxItems: 4,
  itemBeforeCollapse: 1,
  itemAfterCollapse: 1,
} as const;

export const odsBreadcrumbDefaultAttributes = odsBreadcrumbDefaultAttributesDoc as OdsBreadcrumbAttributes;
