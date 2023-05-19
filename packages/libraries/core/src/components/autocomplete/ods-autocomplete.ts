import { OdsAutocompleteAttributes } from './ods-autocomplete-attributes';
import { OdsAutocompleteController } from './ods-autocomplete-controller';
import { OdsAutocompleteEvents } from './ods-autocomplete-events';
import { OdsAutocompleteMethods } from './ods-autocomplete-methods';
import { OdsComponent } from '../ods-component';
import { OdsComponentGenericEvents } from '../ods-component-generic-events';
import { OdsComponentGenericMethods } from '../ods-component-generic-methods';

/**
 * interface description of all implementation of `ods-autocomplete`.
 * each implementation must have defined events, methods, attributes
 * and one controller for the common behavior logic
 */
export type OdsAutocomplete<ComponentMethods extends OdsComponentGenericMethods<OdsAutocompleteMethods> = OdsComponentGenericMethods<OdsAutocompleteMethods>,
  ComponentEvents extends OdsComponentGenericEvents<OdsAutocompleteEvents> = OdsComponentGenericEvents<OdsAutocompleteEvents>> =
  OdsComponent<ComponentMethods, ComponentEvents, OdsAutocompleteAttributes, OdsAutocompleteController>;
