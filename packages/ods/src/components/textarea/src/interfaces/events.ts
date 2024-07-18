interface OdsTextareaEventChangeDetail {
  name: string;
  previousValue?: string;
  validity?: ValidityState;
  value: string;
}

type OdsTextareaEventChange = CustomEvent<OdsTextareaEventChangeDetail>;

export {
  type OdsTextareaEventChange,
  type OdsTextareaEventChangeDetail,
};
