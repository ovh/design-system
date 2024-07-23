interface OdsQuantityChangeEventDetail {
  name: string;
  previousValue?: number | null;
  validity?: ValidityState;
  value: number | null;
}

type OdsQuantityChangeEvent = CustomEvent<OdsQuantityChangeEventDetail>;

export {
  type OdsQuantityChangeEvent,
  type OdsQuantityChangeEventDetail,
};
