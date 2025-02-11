interface OdsComboboxChangeEventDetail {
  name: string;
  previousValue?: string | null;
  validity?: ValidityState;
  value: string | null;
}

type OdsComboboxChangeEvent = CustomEvent<OdsComboboxChangeEventDetail>;

interface OdsComboboxFilterEventDetail {
  filterValue: string;
  hasNoResults: boolean;
}

type OdsComboboxFilterEvent = CustomEvent<OdsComboboxFilterEventDetail>;

interface OdsComboboxItemSelectedEventDetail {
  id: string,
  text: string,
  value: string,
}

type OdsComboboxItemSelectedEvent = CustomEvent<OdsComboboxItemSelectedEventDetail>;

export {
  type OdsComboboxChangeEvent,
  type OdsComboboxChangeEventDetail,
  type OdsComboboxFilterEvent,
  type OdsComboboxFilterEventDetail,
  type OdsComboboxItemSelectedEvent,
  type OdsComboboxItemSelectedEventDetail,
};
