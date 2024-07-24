interface OdsQuantityEventValueChangeDetail {
  name: string;
  previousValue?: number | null;
  validity?: ValidityState;
  value: number | null;
}

type OdsQuantityEventValueChange = CustomEvent<OdsQuantityEventValueChangeDetail>;

export {
  type OdsQuantityEventValueChange,
  type OdsQuantityEventValueChangeDetail,
};
