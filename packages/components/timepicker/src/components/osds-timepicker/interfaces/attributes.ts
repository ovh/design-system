interface OdsTimepickerAttribute {
  /**
   * Defines if the Timepicker should be clearable or not (displays a clear button)
   */
  clearable?: boolean,
  /**
   * Defines the Timepicker's disabled state
   */
  disabled?: boolean,
  /**
   * Defines the Timepicker's error state
   */
  error?: boolean,
  /**
   * Defines if the Timepicker should be displayed inline or not
   */
  inline?: boolean,
  /**
   * Defines the Timepicker's value
   */
  value?: string | null,
  /**
   * Defines if the Timepicker should be displayed seconds or not
   */
  withSeconds?: boolean
}

export {
  OdsTimepickerAttribute,
};
