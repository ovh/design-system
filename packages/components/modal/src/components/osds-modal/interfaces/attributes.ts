import type { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';

interface OdsModalAttribute {
  /** Color of the modal's header background */
  color: ODS_THEME_COLOR_INTENT;
  /** Defines if the modal is dismissible (displays a close button) */
  dismissible?: boolean;
  /** Text displayed as the modal's headline */
  headline?: string;
  /** Defines if the modal is masked */
  masked?: boolean;
}

export {
  OdsModalAttribute,
};
