import { OdsComponentGenericMethods } from '../../ods-component-generic-methods';
import { OdsComponentGenericEvents } from '../../ods-component-generic-events';
import { OdsComponent } from '../../ods-component';
import { OdsSelectMethods } from './ods-select-methods';
import { OdsSelectEvents } from './ods-select-events';
import { OdsSelectAttributes } from './ods-select-attributes';
import { OdsSelectController } from './ods-select-controller';
import { OdsSelectBehavior } from './ods-select-behavior';

/**
 * interface description of all implementation of `ods-select-option`.
 * each implementation must have defined events, methods, attributes
 * and one controller for the common behavior logic
 */
export type OdsSelect<ComponentMethods extends OdsComponentGenericMethods<OdsSelectMethods> = OdsComponentGenericMethods<OdsSelectMethods>,
  ComponentEvents extends OdsComponentGenericEvents<OdsSelectEvents> = OdsComponentGenericEvents<OdsSelectEvents>> =
  OdsComponent<ComponentMethods, ComponentEvents, OdsSelectAttributes, OdsSelectController, OdsSelectBehavior>;
