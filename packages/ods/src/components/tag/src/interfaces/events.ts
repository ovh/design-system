interface OdsTagRemoveEventDetail {
  id?: string;
}

type OdsTagRemoveEvent = CustomEvent<OdsTagRemoveEventDetail>;

export {
  type OdsTagRemoveEvent,
  type OdsTagRemoveEventDetail,
};
