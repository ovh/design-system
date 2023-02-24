import { OdsAccordionAttributes } from './ods-accordion-attributes';
import { OdsAccordionController } from './ods-accordion-controller';
import { OdsAccordionEvents } from './ods-accordion-events';
import { OdsAccordionMethods } from './ods-accordion-methods';
import { OdsComponent } from '../ods-component';
import { OdsComponentGenericEvents } from '../ods-component-generic-events';
import { OdsComponentGenericMethods } from '../ods-component-generic-methods';
import { OdsAccordionBehavior } from './ods-accordion-behavior';

/**
 * interface description of all implementation of `ods-accordion`.
 * each implementation must have defined events, methods, attributes
 * and one controller for the common behavior logic
 */
export type OdsAccordion<ComponentMethods extends OdsComponentGenericMethods<OdsAccordionMethods> = OdsComponentGenericMethods<OdsAccordionMethods>,
  ComponentEvents extends OdsComponentGenericEvents<OdsAccordionEvents> = OdsComponentGenericEvents<OdsAccordionEvents>> =
  OdsComponent<ComponentMethods, ComponentEvents, OdsAccordionAttributes, OdsAccordionController, OdsAccordionBehavior>;
