import { OdsButtonAttributes } from './ods-button-attributes';
import { OdsButtonBehavior } from './ods-button-behavior';
import { OdsButtonController } from './ods-button-controller';
import { OdsButtonEvents } from './ods-button-events';
import { OdsButtonMethods } from './ods-button-methods';
import { OdsComponent } from '../ods-component';
import { OdsComponentGenericEvents } from '../ods-component-generic-events';
import { OdsComponentGenericMethods } from '../ods-component-generic-methods';

/**
 * interface description of all implementation of `ods-button`.
 * each implementation must have defined events, methods, attributes
 * and one controller for the common behavior logic
 */
export type OdsButton<ComponentMethods extends OdsComponentGenericMethods<OdsButtonMethods> = OdsComponentGenericMethods<OdsButtonMethods>,
  ComponentEvents extends OdsComponentGenericEvents<OdsButtonEvents> = OdsComponentGenericEvents<OdsButtonEvents>> =
  OdsComponent<ComponentMethods, ComponentEvents, OdsButtonAttributes, OdsButtonController, OdsButtonBehavior>;
