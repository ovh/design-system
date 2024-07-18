interface OdsInputValueChangeEventDetail {
  name: string;
  previousValue?: string | number;
  validity?: ValidityState;
  value: string | number;
}

type OdsInputValueChangeEvent = CustomEvent<OdsInputValueChangeEventDetail>;

export {
  type OdsInputValueChangeEvent,
  type OdsInputValueChangeEventDetail,
};
