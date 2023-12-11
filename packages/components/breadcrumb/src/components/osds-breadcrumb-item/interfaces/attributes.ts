import type { ODS_ICON_NAME } from '@ovhcloud/ods-component-icon';
import type { OdsHTMLAnchorElementTarget } from '@ovhcloud/ods-common-core';

interface OdsBreadcrumbItemAttribute {
  /** contrasted or not: see component principles */
  contrasted?: boolean
  /** Item should be disabled or not */
  disabled?: boolean;
  /** Item link to redirect to */
  href?: string
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
  /** Link referrer policy */
  referrerpolicy?: HTMLLinkElement['referrerPolicy'];
  /**  Link relationship */
  rel?: HTMLLinkElement['rel'];
  /**
   * Link target type
   * Specifies where to open the link
   */
  target?: OdsHTMLAnchorElementTarget;
}

export {
  OdsBreadcrumbItemAttribute,
};
