import { OdsComponentEvents } from '../ods-component-events';

export interface OdsRadioGroupEvents extends OdsComponentEvents {
  /**
   * Emitted when the value has changed.
   */
  odsValueChange: { newValue?: string, previousValue?: string };

  odsDisabledChange: { value: boolean };
}
