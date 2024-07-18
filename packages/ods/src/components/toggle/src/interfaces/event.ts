interface OdsToggleValueChangeEventDetail {
  name: string;
  previousValue?: boolean;
  value: boolean;
}

type OdsToggleValueChangeEvent = CustomEvent<OdsToggleValueChangeEventDetail>;

export {
  type OdsToggleValueChangeEvent,
  type OdsToggleValueChangeEventDetail,
};
