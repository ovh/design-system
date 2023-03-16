import { OdsComponentGenericMethods } from '../../ods-component-generic-methods';
import { OdsComponentGenericEvents } from '../../ods-component-generic-events';
import { OdsComponent } from '../../ods-component';
import { OdsPopoverMethods } from './ods-popover-methods';
import { OdsPopoverEvents } from './ods-popover-events';
import { OdsPopoverController } from './ods-popover-controller';
import { OdsPopoverAttributes } from './ods-popover-attributes';
import { OdsPopoverBehavior } from './ods-popover-behavior';

/**
 * interface description of all implementation of `ods-popover`.
 * each implementation must have defined events, methods, attributes
 * and one controller for the common behavior logic
 */
export type OdsPopover<ComponentMethods extends OdsComponentGenericMethods<OdsPopoverMethods> = OdsComponentGenericMethods<OdsPopoverMethods>,
  ComponentEvents extends OdsComponentGenericEvents<OdsPopoverEvents> = OdsComponentGenericEvents<OdsPopoverEvents>> =
  OdsComponent<ComponentMethods, ComponentEvents, OdsPopoverAttributes, OdsPopoverController, OdsPopoverBehavior>;
