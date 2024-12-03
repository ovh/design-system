interface OdsFormElement {
  checkValidity(): Promise<boolean | undefined>;
  getValidationMessage: () => Promise<string | undefined>;
  getValidity(): Promise<ValidityState | undefined>;
  reportValidity(): Promise<boolean | undefined>;
  willValidate(): Promise<boolean | undefined>;
}

export type {
  OdsFormElement,
};
