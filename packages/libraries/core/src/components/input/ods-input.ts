import { OdsInputController } from './ods-input-controller';
import { OdsInputEvents } from './ods-input-events';
import { OdsInputAttributes } from './ods-input-attributes';
import { OdsInputMethods } from './ods-input-methods';
import { OdsComponentGenericMethods } from '../ods-component-generic-methods';
import { OdsComponentGenericEvents } from '../ods-component-generic-events';
import { OdsComponent } from '../ods-component';
import { OdsInputBehavior } from './ods-input-behavior';

/**
 * interface description of all implementation of `ods-input`.
 * each implementation must have defined events, methods, attributes
 * and one controller for the common behavior logic
 */
export type OdsInput<
  ComponentMethods extends OdsComponentGenericMethods<OdsInputMethods> = OdsComponentGenericMethods<OdsInputMethods>,
  ComponentEvents extends OdsComponentGenericEvents<OdsInputEvents> = OdsComponentGenericEvents<OdsInputEvents>> =
  OdsComponent<ComponentMethods, ComponentEvents, OdsInputAttributes, OdsInputController, OdsInputBehavior>;
