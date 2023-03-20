import { Ods<%= componentName %>Attributes } from './<%= componentFileNamePrefix %>-attributes';
import { Ods<%= componentName %>Controller } from './<%= componentFileNamePrefix %>-controller';
import { Ods<%= componentName %>Events } from './<%= componentFileNamePrefix %>-events';
import { Ods<%= componentName %>Methods } from './<%= componentFileNamePrefix %>-methods';
import { OdsComponent } from '../ods-component';
import { OdsComponentGenericEvents } from '../ods-component-generic-events';
import { OdsComponentGenericMethods } from '../ods-component-generic-methods';

/**
 * interface description of all implementation of `<%= componentFileNamePrefix %>`.
 * each implementation must have defined events, methods, attributes
 * and one controller for the common behavior logic
 */
export type Ods<%= componentName %><ComponentMethods extends OdsComponentGenericMethods<Ods<%= componentName %>Methods> = OdsComponentGenericMethods<Ods<%= componentName %>Methods>,
  ComponentEvents extends OdsComponentGenericEvents<Ods<%= componentName %>Events> = OdsComponentGenericEvents<Ods<%= componentName %>Events>> =
  OdsComponent<ComponentMethods, ComponentEvents, Ods<%= componentName %>Attributes, Ods<%= componentName %>Controller>;
