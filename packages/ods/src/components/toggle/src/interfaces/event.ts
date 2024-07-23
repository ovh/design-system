interface OdsToggleChangeEventDetail {
  name: string;
  previousValue?: boolean;
  value: boolean;
}

type OdsToggleChangeEvent = CustomEvent<OdsToggleChangeEventDetail>;

export {
  type OdsToggleChangeEvent,
  type OdsToggleChangeEventDetail,
};
