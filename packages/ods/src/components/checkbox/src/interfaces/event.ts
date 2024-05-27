interface OdsCheckboxValueChangeEventDetail {
  checked: boolean;
  name: string;
  validity?: ValidityState;
  value: string | null;
}

type OdsCheckboxValueChangeEvent = CustomEvent<OdsCheckboxValueChangeEventDetail>;

export {
  type OdsCheckboxValueChangeEvent,
  type OdsCheckboxValueChangeEventDetail,
};
