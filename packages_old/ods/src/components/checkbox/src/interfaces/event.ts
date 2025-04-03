interface OdsCheckboxChangeEventDetail {
  checked: boolean;
  name: string;
  validity?: ValidityState;
  value: string | null;
}

type OdsCheckboxChangeEvent = CustomEvent<OdsCheckboxChangeEventDetail>;

export {
  type OdsCheckboxChangeEvent,
  type OdsCheckboxChangeEventDetail,
};
