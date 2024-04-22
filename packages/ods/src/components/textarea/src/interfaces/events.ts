interface OdsTextareaEventChangeDetail {
  name: string;
  oldValue?: string;
  validity?: ValidityState;
  value: string;
}

type OdsTextareaEventChange = CustomEvent<OdsTextareaEventChangeDetail>;

export {
  type OdsTextareaEventChange,
  type OdsTextareaEventChangeDetail,
};
