import type {OsdsAccordion} from '../../osds-accordion/osds-accordion';

interface OdsAccordionGroupMethod {
    registerAccordion(accordion: OsdsAccordion): void;
    unRegisterAccordion(accordion: OsdsAccordion): void;
}

export {
  OdsAccordionGroupMethod,
};
