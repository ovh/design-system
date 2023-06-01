import { OdsComponentAttributes } from '../../ods-component-attributes';
import { OdsIconName } from '../../icon/ods-icon-size';

export interface OdsBreadcrumbItemAttributes extends OdsComponentAttributes {
  /** Item link to redirect to */
  href: string;
  /** Icon to display */
  icon?: OdsIconName;
  /** @internal */
  isCollapsed: boolean;
  /** @internal */
  isCollapsedItem: boolean;
  /** @internal */
  isLast: boolean;
  /** Text to display */
  label?: string;
}
