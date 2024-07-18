interface OdsQuantityEventValueChangeDetail {
  name: string;
  previousValue?: number;
  validity?: ValidityState;
  value: number;
}

type OdsQuantityEventValueChange = CustomEvent<OdsQuantityEventValueChangeDetail>;

export {
  type OdsQuantityEventValueChange,
  type OdsQuantityEventValueChangeDetail,
};
