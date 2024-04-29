interface OdsToggleValueChangeEventDetail {
  name: string;
  oldValue?: boolean;
  value: boolean;
}

type OdsToggleValueChangeEvent = CustomEvent<OdsToggleValueChangeEventDetail>;

export {
  type OdsToggleValueChangeEvent,
  type OdsToggleValueChangeEventDetail,
};
