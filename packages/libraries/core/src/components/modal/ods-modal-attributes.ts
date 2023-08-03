import { OdsComponentAttributes } from '../ods-component-attributes';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

export interface OdsModalAttributes extends OdsComponentAttributes {
  /**
   * Modal attribute description
   */
  /** Color of the modal's header background */
  color: OdsThemeColorIntent;
  /** Defines if the modal is dismissible (displays a close button) */
  dismissible?: boolean;
  /** Text displayed as the modal's headline */
  headline?: string;
  /** Defines if the modal is masked */
  masked?: boolean;
}
