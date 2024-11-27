interface OdsToggleChangeEventDetail {
  name: string;
  previousValue?: boolean;
  validity?: ValidityState;
  value: boolean;
}

type OdsToggleChangeEvent = CustomEvent<OdsToggleChangeEventDetail>;

export {
  type OdsToggleChangeEvent,
  type OdsToggleChangeEventDetail,
};
