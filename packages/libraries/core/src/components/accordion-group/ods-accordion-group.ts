import { OdsAccordionGroupAttributes } from './ods-accordion-group-attributes';
import { OdsAccordionGroupBehavior } from './ods-accordion-group-behavior';
import { OdsAccordionGroupController } from './ods-accordion-group-controller';
import { OdsAccordionGroupEvents } from './ods-accordion-group-events';
import { OdsAccordionGroupMethods } from './ods-accordion-group-methods';
import { OdsComponent } from '../ods-component';
import { OdsComponentGenericEvents } from '../ods-component-generic-events';
import { OdsComponentGenericMethods } from '../ods-component-generic-methods';

/**
 * interface description of all implementation of `ods-accordion-group`.
 * each implementation must have defined events, methods, attributes
 * and one controller for the common behavior logic
 */
export type OdsAccordionGroup<ComponentMethods extends OdsComponentGenericMethods<OdsAccordionGroupMethods> = OdsComponentGenericMethods<OdsAccordionGroupMethods>,
  ComponentEvents extends OdsComponentGenericEvents<OdsAccordionGroupEvents> = OdsComponentGenericEvents<OdsAccordionGroupEvents>> =
  OdsComponent<ComponentMethods, ComponentEvents, OdsAccordionGroupAttributes, OdsAccordionGroupController, OdsAccordionGroupBehavior>;
