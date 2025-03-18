type OdsTabSelectedEventDetail = KeyboardEvent | MouseEvent;
type OdsTabSelectedEvent = CustomEvent<OdsTabSelectedEventDetail>;
type OdsTabsSelectedEvent = CustomEvent<OdsTabSelectedEventDetail>;

export {
  type OdsTabSelectedEventDetail,
  type OdsTabSelectedEvent,
  type OdsTabsSelectedEvent,
};
