import { OdsBreadcrumbsReferrerpolicy } from './ods-breadcrumbs-referrerpolicy';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { OdsComponentAttributes } from '../ods-component-attributes';
import { OdsHTMLAnchorElementRel } from '../../types/ods-html-anchor-element-rel';
import { OdsHTMLAnchorElementTarget } from '../../types/ods-html-anchor-element-target';

export interface OdsBreadcrumbsAttributes extends OdsComponentAttributes {
  /** Breadcrumbs color theme */
  color?: OdsThemeColorIntent;
  /** Breadcrumbs design as contrasted version */
  contrasted?: boolean;
  /** Breadcrumbs should be disabled or not */
  disabled?: boolean;
  /** Breadcrumbs should be active or not */
  active?: boolean;
  /**  Breadcrumbs as download source */
  download?: HTMLAnchorElement['download'];
  /** Breadcrumbs URL */
  href: string;
  /** Breadcrumbs referrer policy */
  referrerpolicy?: OdsBreadcrumbsReferrerpolicy;
  /**  Breadcrumbs relationship */
  rel?: OdsHTMLAnchorElementRel;
  /** Breadcrumbs target type */
  target?: OdsHTMLAnchorElementTarget;
  /** Breadcrumbs type (for download source) */
  type?: string;
}
