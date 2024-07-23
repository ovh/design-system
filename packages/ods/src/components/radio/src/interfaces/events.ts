interface OdsRadioChangeEventDetail {
  checked: boolean;
  name: string;
  validity?: ValidityState;
  value: string | null;
}

type OdsRadioChangeEvent = CustomEvent<OdsRadioChangeEventDetail>;

export {
  type OdsRadioChangeEvent,
  type OdsRadioChangeEventDetail,
};
