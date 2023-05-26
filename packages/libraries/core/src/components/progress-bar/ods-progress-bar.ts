import { OdsProgressBarAttributes } from './ods-progress-bar-attributes';
import { OdsProgressBarController } from './ods-progress-bar-controller';
import { OdsProgressBarEvents } from './ods-progress-bar-events';
import { OdsProgressBarMethods } from './ods-progress-bar-methods';
import { OdsComponent } from '../ods-component';
import { OdsComponentGenericEvents } from '../ods-component-generic-events';
import { OdsComponentGenericMethods } from '../ods-component-generic-methods';
import { OdsProgressBarBehavior } from './ods-progress-bar-behaviour';

/**
 * interface description of all implementation of `ods-progress-bar`.
 * each implementation must have defined events, methods, attributes
 * and one controller for the common behavior logic
 */
export type OdsProgressBar<ComponentMethods extends OdsComponentGenericMethods<OdsProgressBarMethods> = OdsComponentGenericMethods<OdsProgressBarMethods>,
  ComponentEvents extends OdsComponentGenericEvents<OdsProgressBarEvents> = OdsComponentGenericEvents<OdsProgressBarEvents>> =
  OdsComponent<ComponentMethods, ComponentEvents, OdsProgressBarAttributes, OdsProgressBarController, OdsProgressBarBehavior>;
