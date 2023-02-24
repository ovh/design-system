import { OdsSelectGroupMethods } from './ods-select-group-methods';
import { OdsComponentGenericMethods } from '../../ods-component-generic-methods';
import { OdsComponentGenericEvents } from '../../ods-component-generic-events';
import { OdsSelectGroupEvents } from './ods-select-group-events';
import { OdsComponent } from '../../ods-component';
import { OdsSelectGroupAttributes } from './ods-select-group-attributes';
import { OdsSelectGroupController } from './ods-select-group-controller';

/**
 * interface description of all implementation of `ods-select-group`.
 * each implementation must have defined events, methods, attributes
 * and one controller for the common behavior logic
 */
export type OdsSelectGroup<ComponentMethods extends OdsComponentGenericMethods<OdsSelectGroupMethods> = OdsComponentGenericMethods<OdsSelectGroupMethods>,
  ComponentEvents extends OdsComponentGenericEvents<OdsSelectGroupEvents> = OdsComponentGenericEvents<OdsSelectGroupEvents>> =
  OdsComponent<ComponentMethods, ComponentEvents, OdsSelectGroupAttributes, OdsSelectGroupController>;
