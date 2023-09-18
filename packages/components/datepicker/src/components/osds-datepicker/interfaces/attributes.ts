interface OdsDatepickerAttribute {
  /**
   * Defines if the Datepicker should be clearable or not (displays a clear button)
   */
  clearable?: boolean;
  /**
   * Defines if the Datepicker should be disabled or not (lower opacity and not interactable)
   */
  disabled?: boolean;
  /**
   * Defines if the Datepicker should display an error message
   */
  error?: boolean;
  /**
   * Defines which format the Datepicker should be applying (supported formats: https://mymth.github.io/vanillajs-datepicker/#/date-string+format?id=date-format)
   */
  format?: string;
  /**
   * Defines if the Datepicker should display a placeholder message
   */
  placeholder?: string;
  /**
   * Defines the Datepicker's value (Date object)
   */
  value?: Date | undefined | null;
}

export {
  OdsDatepickerAttribute,
};
