import { OdsComponentAttributes } from '../../ods-component-attributes';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
export interface OdsBreadcrumbItemAttributes extends OdsComponentAttributes {
  active: boolean;
  collapsed: boolean;
  color?: OdsThemeColorIntent;
  disabled: boolean;
  displayed: boolean;
  showCollapsedIndicator: boolean;
}
