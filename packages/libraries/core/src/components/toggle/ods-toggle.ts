import { OdsComponent } from '../ods-component';
import { OdsComponentGenericEvents } from '../ods-component-generic-events';
import { OdsComponentGenericMethods } from '../ods-component-generic-methods';
import { OdsToggleAttributes } from './ods-toggle-attributes';
import { OdsToggleBehavior } from './ods-toggle-behavior';
import { OdsToggleController } from './ods-toggle-controller';
import { OdsToggleEvents } from './ods-toggle-events';
import { OdsToggleMethods } from './ods-toggle-methods';

/**
 * interface description of all implementation of `ods-toggle`.
 * each implementation must have defined events, methods, attributes
 * and one controller for the common behavior logic
 */
export type OdsToggle<ComponentMethods extends OdsComponentGenericMethods<OdsToggleMethods> = OdsComponentGenericMethods<OdsToggleMethods>,
  ComponentEvents extends OdsComponentGenericEvents<OdsToggleEvents> = OdsComponentGenericEvents<OdsToggleEvents>> =
  OdsComponent<ComponentMethods, ComponentEvents, OdsToggleAttributes, OdsToggleController, OdsToggleBehavior>;
