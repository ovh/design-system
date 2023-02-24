import { OdsComponentGenericMethods } from '../ods-component-generic-methods';
import { OdsComponentGenericEvents } from '../ods-component-generic-events';
import { OdsComponent } from '../ods-component';
import { OdsDividerMethods } from './ods-divider-methods';
import { OdsDividerController } from './ods-divider-controller';
import { OdsDividerAttributes } from './ods-divider-attributes';
import { OdsDividerEvents } from './ods-divider-events';

/**
 * interface description of all implementation of `ods-divider`.
 * each implementation must have defined events, methods, attributes
 * and one controller for the common behavior logic
 */
export type OdsDivider<ComponentMethods extends OdsComponentGenericMethods<OdsDividerMethods> = OdsComponentGenericMethods<OdsDividerMethods>,
  ComponentEvents extends OdsComponentGenericEvents<OdsDividerEvents> = OdsComponentGenericEvents<OdsDividerEvents>> =
  OdsComponent<ComponentMethods, ComponentEvents, OdsDividerAttributes, OdsDividerController>;
