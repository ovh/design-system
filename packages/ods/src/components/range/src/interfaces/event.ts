interface OdsRangeChangeEventDetail {
  name: string;
  validity?: ValidityState;
  value: number | [number, number] | null;
}

type OdsRangeChangeEvent = CustomEvent<OdsRangeChangeEventDetail>;

export {
  type OdsRangeChangeEvent,
  type OdsRangeChangeEventDetail,
};
