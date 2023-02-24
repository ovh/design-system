import { OdsComponent } from '../ods-component';
import { OdsComponentGenericEvents } from '../ods-component-generic-events';
import { OdsComponentGenericMethods } from '../ods-component-generic-methods';
import { OdsRadioGroupAttributes } from './ods-radio-group-attributes';
import { OdsRadioGroupBehavior } from './ods-radio-group-behavior';
import { OdsRadioGroupController } from './ods-radio-group-controller';
import { OdsRadioGroupEvents } from './ods-radio-group-events';
import { OdsRadioGroupMethods } from './ods-radio-group-methods';

/**
 * interface description of all implementation of `ods-radio-group`.
 * each implementation must have defined events, methods, attributes
 * and one controller for the common behavior logic
 */
export type OdsRadioGroup<ComponentMethods extends OdsComponentGenericMethods<OdsRadioGroupMethods> = OdsComponentGenericMethods<OdsRadioGroupMethods>,
  ComponentEvents extends OdsComponentGenericEvents<OdsRadioGroupEvents> = OdsComponentGenericEvents<OdsRadioGroupEvents>> =
  OdsComponent<ComponentMethods, ComponentEvents, OdsRadioGroupAttributes, OdsRadioGroupController, OdsRadioGroupBehavior>;
