import { OdsPopoverContentAttributes } from './ods-popover-content-attributes';
import { OdsPopoverContentController } from './ods-popover-content-controller';
import { OdsPopoverContentEvents } from './ods-popover-content-events';
import { OdsPopoverContentMethods } from './ods-popover-content-methods';
import { OdsComponent } from '../../ods-component';
import { OdsComponentGenericEvents } from '../../ods-component-generic-events';
import { OdsComponentGenericMethods } from '../../ods-component-generic-methods';

/**
 * interface description of all implementation of `ods-popover-content`.
 * each implementation must have defined events, methods, attributes
 * and one controller for the common behavior logic
 */
export type OdsPopoverContent<ComponentMethods extends OdsComponentGenericMethods<OdsPopoverContentMethods> = OdsComponentGenericMethods<OdsPopoverContentMethods>,
  ComponentEvents extends OdsComponentGenericEvents<OdsPopoverContentEvents> = OdsComponentGenericEvents<OdsPopoverContentEvents>> =
  OdsComponent<ComponentMethods, ComponentEvents, OdsPopoverContentAttributes, OdsPopoverContentController>;
