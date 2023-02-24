import { OdsAccordion } from '../accordion/ods-accordion';
import { OdsComponentMethods } from '../ods-component-methods';

export interface OdsAccordionGroupMethods extends OdsComponentMethods {
    registerAccordion(accordion: HTMLElement & OdsAccordion): void;
    unRegisterAccordion(accordion: HTMLElement & OdsAccordion): void;
}
