import { OdsPopoverAttributes } from './ods-popover-attributes';
import { OdsPopoverController } from './ods-popover-controller';
import { OdsPopoverEvents } from './ods-popover-events';
import { OdsPopoverMethods } from './ods-popover-methods';
import { OdsComponent } from '../../ods-component';
import { OdsComponentGenericEvents } from '../../ods-component-generic-events';
import { OdsComponentGenericMethods } from '../../ods-component-generic-methods';
import { OdsPopoverBehaviour } from './ods-popover-behaviour';

/**
 * interface description of all implementation of `ods-popover`.
 * each implementation must have defined events, methods, attributes
 * and one controller for the common behavior logic
 */
export type OdsPopover<ComponentMethods extends OdsComponentGenericMethods<OdsPopoverMethods> = OdsComponentGenericMethods<OdsPopoverMethods>,
  ComponentEvents extends OdsComponentGenericEvents<OdsPopoverEvents> = OdsComponentGenericEvents<OdsPopoverEvents>> =
  OdsComponent<ComponentMethods, ComponentEvents, OdsPopoverAttributes, OdsPopoverController, OdsPopoverBehaviour>;
