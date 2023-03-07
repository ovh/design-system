import { OdsBreadcrumbItemReferrerpolicy } from './ods-breadcrumb-item-referrerpolicy';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { OdsComponentAttributes } from '../ods-component-attributes';
import { OdsHTMLAnchorElementRel } from '../../types/ods-html-anchor-element-rel';
import { OdsHTMLAnchorElementTarget } from '../../types/ods-html-anchor-element-target';

export interface OdsBreadcrumbItemAttributes extends OdsComponentAttributes {
  /** BreadcrumbItem color theme */
  color?: OdsThemeColorIntent;
  /** BreadcrumbItem design as contrasted version */
  contrasted?: boolean;
  /** BreadcrumbItem should be disabled or not */
  disabled?: boolean;
  /** BreadcrumbItem should be active or not */
  active?: boolean;
  /**  BreadcrumbItem as download source */
  download?: HTMLAnchorElement['download'];
  /** BreadcrumbItem URL */
  href: string;
  /** BreadcrumbItem referrer policy */
  referrerpolicy?: OdsBreadcrumbItemReferrerpolicy;
  /**  BreadcrumbItem relationship */
  rel?: OdsHTMLAnchorElementRel;
  /** BreadcrumbItem target type */
  target?: OdsHTMLAnchorElementTarget;
  /** BreadcrumbItem type (for download source) */
  type?: string;
}
