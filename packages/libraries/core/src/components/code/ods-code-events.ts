import { OdsComponentEvents } from '../ods-component-events';

export interface OdsCodeEvents extends OdsComponentEvents {
  /**
   * Event triggered on code content copy
   */
  odsCodeCopy: void;
}
