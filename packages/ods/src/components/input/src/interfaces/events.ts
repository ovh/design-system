interface OdsInputChangeEventDetail {
  name: string;
  previousValue?: string | number | null;
  validity?: ValidityState;
  value: string | number | null;
}

type OdsInputChangeEvent = CustomEvent<OdsInputChangeEventDetail>;

export {
  type OdsInputChangeEvent,
  type OdsInputChangeEventDetail,
};
