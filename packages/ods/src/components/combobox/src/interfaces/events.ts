interface OdsComboboxChangeEventDetail {
  name: string;
  previousValue?: string | null;
  validity?: ValidityState;
  value: string | null;
}

type OdsComboboxChangeEvent = CustomEvent<OdsComboboxChangeEventDetail>;

interface OdsComboboxItemSelectedEventDetail {
  id: string,
  text: string,
  value: string,
}

type OdsComboboxItemSelectedEvent = CustomEvent<OdsComboboxItemSelectedEventDetail>;

export {
  type OdsComboboxChangeEvent,
  type OdsComboboxChangeEventDetail,
  type OdsComboboxItemSelectedEvent,
  type OdsComboboxItemSelectedEventDetail,
};
