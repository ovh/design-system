import { OdsClipboardAttributes } from './ods-clipboard-attributes';
import { OdsClipboardController } from './ods-clipboard-controller';
import { OdsClipboardEvents } from './ods-clipboard-events';
import { OdsClipboardMethods } from './ods-clipboard-methods';
import { OdsComponent } from '../ods-component';
import { OdsComponentGenericEvents } from '../ods-component-generic-events';
import { OdsComponentGenericMethods } from '../ods-component-generic-methods';

/**
 * interface description of all implementation of `ods-clipboard`.
 * each implementation must have defined events, methods, attributes
 * and one controller for the common behavior logic
 */
export type OdsClipboard<ComponentMethods extends OdsComponentGenericMethods<OdsClipboardMethods> = OdsComponentGenericMethods<OdsClipboardMethods>,
  ComponentEvents extends OdsComponentGenericEvents<OdsClipboardEvents> = OdsComponentGenericEvents<OdsClipboardEvents>> =
  OdsComponent<ComponentMethods, ComponentEvents, OdsClipboardAttributes, OdsClipboardController>;
