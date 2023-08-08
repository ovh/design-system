import { OsdsAccordion } from '../../osds-accordion/osds-accordion';

interface OdsAccordionGroupMethods {
    registerAccordion(accordion: OsdsAccordion): void;
    unRegisterAccordion(accordion: OsdsAccordion): void;
}

export {
    OdsAccordionGroupMethods,
}
