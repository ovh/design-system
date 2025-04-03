interface OdsAccordionToggleEventDetail {
  isOpen: boolean;
}

type OdsAccordionToggleEvent = CustomEvent<OdsAccordionToggleEventDetail>;

export {
  type OdsAccordionToggleEvent,
  type OdsAccordionToggleEventDetail,
};
