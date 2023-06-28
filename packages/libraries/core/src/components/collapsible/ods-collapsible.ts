import { OdsCollapsibleAttributes } from './ods-collapsible-attributes';
import { OdsCollapsibleController } from './ods-collapsible-controller';
import { OdsCollapsibleEvents } from './ods-collapsible-events';
import { OdsCollapsibleMethods } from './ods-collapsible-methods';
import { OdsComponent } from '../ods-component';
import { OdsComponentGenericEvents } from '../ods-component-generic-events';
import { OdsComponentGenericMethods } from '../ods-component-generic-methods';
import { OdsCollapsibleBehavior } from './ods-collapsible-behavior';

/**
 * interface description of all implementation of `ods-collapsible`.
 * each implementation must have defined events, methods, attributes
 * and one controller for the common behavior logic
 */
export type OdsCollapsible<ComponentMethods extends OdsComponentGenericMethods<OdsCollapsibleMethods> = OdsComponentGenericMethods<OdsCollapsibleMethods>,
  ComponentEvents extends OdsComponentGenericEvents<OdsCollapsibleEvents> = OdsComponentGenericEvents<OdsCollapsibleEvents>> =
  OdsComponent<ComponentMethods, ComponentEvents, OdsCollapsibleAttributes, OdsCollapsibleController, OdsCollapsibleBehavior>;
