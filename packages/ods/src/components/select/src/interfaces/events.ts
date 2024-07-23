interface OdsSelectChangeEventDetail {
  name: string;
  previousValue?: string | null;
  validity?: ValidityState;
  value: string | null;
}

type OdsSelectChangeEvent = CustomEvent<OdsSelectChangeEventDetail>;

export {
  type OdsSelectChangeEvent,
  type OdsSelectChangeEventDetail,
};
