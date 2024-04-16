interface OdsQuantityEventValueChangeDetail {
  name: string;
  oldValue?: number;
  validity?: ValidityState;
  value: number;
}

type OdsQuantityEventValueChange = CustomEvent<OdsQuantityEventValueChangeDetail>;

export {
  type OdsQuantityEventValueChange,
  type OdsQuantityEventValueChangeDetail,
};
