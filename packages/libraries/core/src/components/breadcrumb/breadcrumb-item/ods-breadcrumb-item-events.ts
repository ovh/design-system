import { OdsComponentEvents } from '../../ods-component-events';

export interface OdsBreadcrumbItemEvents extends OdsComponentEvents {
  /**
   * Event triggered on select focus
   */
  odsFocus: void;
  /**
   * Event triggered on select blur
   */
  odsBlur: void;
}
