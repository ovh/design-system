interface OdsInputValueChangeEventDetail {
  name: string;
  previousValue?: string | number | null;
  validity?: ValidityState;
  value: string | number | null;
}

type OdsInputValueChangeEvent = CustomEvent<OdsInputValueChangeEventDetail>;

export {
  type OdsInputValueChangeEvent,
  type OdsInputValueChangeEventDetail,
};
