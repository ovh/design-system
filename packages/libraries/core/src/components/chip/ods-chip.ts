import { OdsChipAttributes } from './ods-chip-attributes';
import { OdsChipBehavior } from './ods-chip-behavior';
import { OdsChipController } from './ods-chip-controller';
import { OdsChipEvents } from './ods-chip-events';
import { OdsChipMethods } from './ods-chip-methods';
import { OdsComponent } from '../ods-component';
import { OdsComponentGenericEvents } from '../ods-component-generic-events';
import { OdsComponentGenericMethods } from '../ods-component-generic-methods';

/**
 * interface description of all implementation of `ods-chip`.
 * each implementation must have defined events, methods, attributes
 * and one controller for the common behavior logic
 */
export type OdsChip<ComponentMethods extends OdsComponentGenericMethods<OdsChipMethods> = OdsComponentGenericMethods<OdsChipMethods>,
  ComponentEvents extends OdsComponentGenericEvents<OdsChipEvents> = OdsComponentGenericEvents<OdsChipEvents>> =
  OdsComponent<ComponentMethods, ComponentEvents, OdsChipAttributes, OdsChipController, OdsChipBehavior>;
