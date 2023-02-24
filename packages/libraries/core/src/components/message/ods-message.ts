import { OdsComponent } from '../ods-component';
import { OdsComponentGenericEvents } from '../ods-component-generic-events';
import { OdsComponentGenericMethods } from '../ods-component-generic-methods';
import { OdsMessageAttributes } from './ods-message-attributes';
import { OdsMessageBehavior } from './ods-message-behavior';
import { OdsMessageController } from './ods-message-controller';
import { OdsMessageEvents } from './ods-message-events';
import { OdsMessageMethods } from './ods-message-methods';

/**
 * interface description of all implementation of `ods-chip`.
 * each implementation must have defined events, methods, attributes
 * and one controller for the common behavior logic
 */
export type OdsMessage<ComponentMethods extends OdsComponentGenericMethods<OdsMessageMethods> = OdsComponentGenericMethods<OdsMessageMethods>,
  ComponentEvents extends OdsComponentGenericEvents<OdsMessageEvents> = OdsComponentGenericEvents<OdsMessageEvents>> =
  OdsComponent<ComponentMethods, ComponentEvents, OdsMessageAttributes, OdsMessageController, OdsMessageBehavior>;
