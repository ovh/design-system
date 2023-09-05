interface OdsPhoneNumberAttribute {
  /** Ability to clear the phone number value */
  clearable?: boolean;
  disabled?: boolean;
  /** Indicates if the phone number shows error or not */
  error?: boolean;
  /** Current value of the phone number */
  value: string | null;
}

export {
  OdsPhoneNumberAttribute,
};
