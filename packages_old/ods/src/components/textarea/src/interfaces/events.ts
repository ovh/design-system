interface OdsTextareaChangeEventDetail {
  name: string;
  previousValue?: string | null;
  validity?: ValidityState;
  value: string | null;
}

type OdsTextareaChangeEvent = CustomEvent<OdsTextareaChangeEventDetail>;

export {
  type OdsTextareaChangeEvent,
  type OdsTextareaChangeEventDetail,
};
