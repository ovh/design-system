import { OdsComponentEvents } from '../../ods-component-events';

export interface OdsBreadcrumbItemEvents extends OdsComponentEvents {
  /**
   * Event triggered on collapsed item click
   */
  odsBreadcrumbItemCollapsedClick: void;
}
