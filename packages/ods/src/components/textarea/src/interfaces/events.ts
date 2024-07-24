interface OdsTextareaEventChangeDetail {
  name: string;
  previousValue?: string | null;
  validity?: ValidityState;
  value: string | null;
}

type OdsTextareaEventChange = CustomEvent<OdsTextareaEventChangeDetail>;

export {
  type OdsTextareaEventChange,
  type OdsTextareaEventChangeDetail,
};
