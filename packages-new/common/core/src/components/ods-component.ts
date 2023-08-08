import { OdsComponentAttributes } from './ods-component-attributes';
import { OdsComponentController } from './ods-component-controller';
import { OdsComponentEvents } from './ods-component-events';
import { OdsComponentGenericAttributes } from './ods-component-generic-attributes';
import { OdsComponentGenericEvents } from './ods-component-generic-events';
import { OdsComponentGenericMethods } from './ods-component-generic-methods';
import { OdsComponentMethods } from './ods-component-methods';

/**
 * Ods generic component definition.
 * each component must extends from this type.
 * It is composed of methods, events, attributes and a controller
 */
export type OdsComponent<ComponentMethods extends OdsComponentGenericMethods<OdsComponentMethods> = OdsComponentGenericMethods<OdsComponentMethods>,
  ComponentEvents extends OdsComponentGenericEvents<OdsComponentEvents> = OdsComponentGenericEvents<OdsComponentEvents>,
  Attributes extends OdsComponentGenericAttributes<OdsComponentAttributes> = OdsComponentGenericAttributes<OdsComponentAttributes>,
  Controller extends OdsComponentController<OdsComponent>
    = OdsComponentController<OdsComponent<ComponentMethods, ComponentEvents, Attributes,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    any>>,
  Behavior = unknown> = {
    controller: Controller;
    beforeInit?(): void;
    afterInit?(): void;
    afterRender?(): void;
    onDestroy?(): void;
  }
  & Attributes
  & ComponentEvents
  & ComponentMethods
  & Behavior;
