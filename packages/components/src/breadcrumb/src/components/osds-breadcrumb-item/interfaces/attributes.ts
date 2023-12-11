import type { ODS_ICON_NAME } from '../../../../../icon/src';
import type { OdsHTMLAnchorElementRel, OdsHTMLAnchorElementTarget } from '@ovhcloud/ods-common-core';
import type { ODS_LINK_REFERRER_POLICY } from '../../../../../link/src';

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
  referrerpolicy?: ODS_LINK_REFERRER_POLICY;
  /**  Link relationship */
  rel?: OdsHTMLAnchorElementRel;
  /**
   * Link target type
   * Specifies where to open the link
   */
  target?: OdsHTMLAnchorElementTarget;
}

export {
  OdsBreadcrumbItemAttribute,
};
