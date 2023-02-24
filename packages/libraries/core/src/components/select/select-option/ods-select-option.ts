import { OdsComponent } from '../../ods-component';
import { OdsComponentGenericMethods } from '../../ods-component-generic-methods';
import { OdsComponentGenericEvents } from '../../ods-component-generic-events';
import { OdsSelectOptionAttributes } from './ods-select-option-attributes';
import { OdsSelectOptionController } from './ods-select-option-controller';
import { OdsSelectOptionEvents } from './ods-select-option-events';
import { OdsSelectOptionMethods } from './ods-select-option-methods';


/**
 * interface description of all implementation of `ods-select-option`.
 * each implementation must have defined events, methods, attributes
 * and one controller for the common behavior logic
 */
export type OdsSelectOption<ComponentMethods extends OdsComponentGenericMethods<OdsSelectOptionMethods> = OdsComponentGenericMethods<OdsSelectOptionMethods>,
  ComponentEvents extends OdsComponentGenericEvents<OdsSelectOptionEvents> = OdsComponentGenericEvents<OdsSelectOptionEvents>> =
  OdsComponent<ComponentMethods, ComponentEvents, OdsSelectOptionAttributes, OdsSelectOptionController>;
