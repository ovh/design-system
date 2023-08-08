import { OdsSearchBarAttributes } from './ods-search-bar-attributes';
import { OdsSearchBarController } from './ods-search-bar-controller';
import { OdsSearchBarEvents } from './ods-search-bar-events';
import { OdsSearchBarMethods } from './ods-search-bar-methods';
import { OdsComponent } from '../ods-component';
import { OdsComponentGenericEvents } from '../ods-component-generic-events';
import { OdsComponentGenericMethods } from '../ods-component-generic-methods';

/**
 * interface description of all implementation of `ods-search-bar`.
 * each implementation must have defined events, methods, attributes
 * and one controller for the common behavior logic
 */
export type OdsSearchBar<ComponentMethods extends OdsComponentGenericMethods<OdsSearchBarMethods> = OdsComponentGenericMethods<OdsSearchBarMethods>,
  ComponentEvents extends OdsComponentGenericEvents<OdsSearchBarEvents> = OdsComponentGenericEvents<OdsSearchBarEvents>> =
  OdsComponent<ComponentMethods, ComponentEvents, OdsSearchBarAttributes, OdsSearchBarController>;
