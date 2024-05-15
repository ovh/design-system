interface OdsRadioValueChangeEventDetail {
  name: string;
  validity?: ValidityState;
  value: string | null;
}

type OdsRadioValueChangeEvent = CustomEvent<OdsRadioValueChangeEventDetail>;

export {
  type OdsRadioValueChangeEvent,
  type OdsRadioValueChangeEventDetail,
};
