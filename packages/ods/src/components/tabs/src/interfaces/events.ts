type OdsTabSelectedDetail = KeyboardEvent | MouseEvent;
type OdsTabSelectedEvent = CustomEvent<OdsTabSelectedDetail>;
type OdsTabsSelectedEvent = CustomEvent<OdsTabSelectedDetail>;

export {
  type OdsTabSelectedDetail,
  type OdsTabSelectedEvent,
  type OdsTabsSelectedEvent,
};
