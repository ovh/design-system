interface OdsRangeValueChangeEventDetail {
  name: string;
  validity?: ValidityState;
  value: number | [number, number] | null;
}

type OdsRangeValueChangeEvent = CustomEvent<OdsRangeValueChangeEventDetail>;

export {
  type OdsRangeValueChangeEvent,
  type OdsRangeValueChangeEventDetail,
};
