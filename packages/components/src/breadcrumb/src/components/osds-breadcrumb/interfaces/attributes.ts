import type { ODS_ICON_NAME } from '../../../../../icon/src';
import type { ODS_LINK_REFERRER_POLICY } from '../../../../../link/src';
import type { OdsHTMLAnchorElementRel, OdsHTMLAnchorElementTarget } from '@ovhcloud/ods-common-core';

interface OdsBreadcrumbAttributeItem {
  /** Item should be disabled or not */
  disabled?: boolean;
  /** Item link to redirect to */
  href?: string;
  /** Icon to display */
  icon?: ODS_ICON_NAME;
  /** Text to display */
  label?: string;
  /** Link referrer policy */
  referrerpolicy?: ODS_LINK_REFERRER_POLICY;
  /**  Link relationship */
  rel?: OdsHTMLAnchorElementRel;
  /** Specifies where to open the link */
  target?: OdsHTMLAnchorElementTarget;
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
