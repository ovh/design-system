interface OdsComboboxChangeEventDetail {
  name: string;
  previousValue?: string | null;
  validity?: ValidityState;
  value: string | null;
}

type OdsComboboxChangeEvent = CustomEvent<OdsComboboxChangeEventDetail>;

export {
  type OdsComboboxChangeEvent,
  type OdsComboboxChangeEventDetail,
};
