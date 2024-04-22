interface OdsInputValueChangeEventDetail {
  name: string;
  oldValue?: string | number;
  validity?: ValidityState;
  value: string | number;
}

type OdsInputValueChangeEvent = CustomEvent<OdsInputValueChangeEventDetail>;

export {
  type OdsInputValueChangeEvent,
  type OdsInputValueChangeEventDetail,
};
