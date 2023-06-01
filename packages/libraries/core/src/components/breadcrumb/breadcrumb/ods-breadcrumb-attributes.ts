import { OdsComponentAttributes } from '../../ods-component-attributes';
import { OdsIconName } from '../../icon/ods-icon-size';

export interface OdsBreadcrumbAttributes extends OdsComponentAttributes {
  /**
   * List of breadcrumb items to display
   */
  items: {
    /** Item link to redirect to */
    href: string,
    /** Icon to display */
    icon?: OdsIconName,
    /** Text to display */
    label?: string,
  }[],
}
