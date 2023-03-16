import { OdsComponentGenericMethods } from '../../ods-component-generic-methods';
import { OdsComponentGenericEvents } from '../../ods-component-generic-events';
import { OdsComponent } from '../../ods-component';
import { OdsPopoverContentMethods } from './ods-popover-content-methods';
import { OdsPopoverContentEvents } from './ods-popover-content-events';
import { OdsPopoverContentController } from './ods-popover-content-controller';
import { OdsPopoverContentAttributes } from './ods-popover-content-attributes';
import { OdsPopoverContentBehavior } from './ods-popover-content-behavior';

/**
 * interface description of all implementation of `ods-popover-content`.
 * each implementation must have defined events, methods, attributes
 * and one controller for the common behavior logic
 */
export type OdsPopoverContent<ComponentMethods extends OdsComponentGenericMethods<OdsPopoverContentMethods> = OdsComponentGenericMethods<OdsPopoverContentMethods>,
  ComponentEvents extends OdsComponentGenericEvents<OdsPopoverContentEvents> = OdsComponentGenericEvents<OdsPopoverContentEvents>> =
  OdsComponent<ComponentMethods, ComponentEvents, OdsPopoverContentAttributes, OdsPopoverContentController, OdsPopoverContentBehavior>;
