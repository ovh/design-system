import { OdsComponent } from '../ods-component';
import { OdsComponentGenericEvents } from '../ods-component-generic-events';
import { OdsComponentGenericMethods } from '../ods-component-generic-methods';
import { OdsIconAttributes } from './ods-icon-attributes';
import { OdsIconBehavior } from './ods-icon-behavior';
import { OdsIconController } from './ods-icon-controller';
import { OdsIconEvents } from './ods-icon-events';
import { OdsIconMethods } from './ods-icon-methods';

/**
 * interface description of all implementation of `ods-icon`.
 * each implementation must have defined events, methods, attributes
 * and one controller for the common behavior logic
 */
export type OdsIcon<ComponentMethods extends OdsComponentGenericMethods<OdsIconMethods> = OdsComponentGenericMethods<OdsIconMethods>,
  ComponentEvents extends OdsComponentGenericEvents<OdsIconEvents> = OdsComponentGenericEvents<OdsIconEvents>> =
  OdsComponent<ComponentMethods, ComponentEvents, OdsIconAttributes, OdsIconController, OdsIconBehavior>;
