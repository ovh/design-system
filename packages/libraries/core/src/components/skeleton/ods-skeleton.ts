import { OdsComponentGenericMethods } from '../ods-component-generic-methods';
import { OdsComponentGenericEvents } from '../ods-component-generic-events';
import { OdsComponent } from '../ods-component';
import { OdsSkeletonMethods } from './ods-skeleton-methods';
import { OdsSkeletonEvents } from './ods-skeleton-events';
import { OdsSkeletonController } from './ods-skeleton-controller';
import { OdsSkeletonAttributes } from './ods-skeleton-attributes';

/**
 * internal methods to implement.
 * public method are in OdsSkeletonMethods
 * @see OdsSkeletonMethods
 */
export interface OdsSkeletonBehavior<Host extends HTMLElement = HTMLElement> {
  /**
   * reference to the host element of the component
   */
  hostElement: Host;

  /**
   * method executed after initialization of component
   * (`componentDidLoad` with stenciljs for instance).
   * this method has to call OdsSkeletonController.afterInit
   * @see OdsSkeletonController.afterInit
   */
  afterInit(): void;
}

/**
 * interface description of all implementations of `ods-skeleton`.
 * each implementation must have defined events, methods, attributes
 * and one controller for the common behavior logic
 */
export type OdsSkeleton<ComponentMethods extends OdsComponentGenericMethods<OdsSkeletonMethods> = OdsComponentGenericMethods<OdsSkeletonMethods>,
  ComponentEvents extends OdsComponentGenericEvents<OdsSkeletonEvents> = OdsComponentGenericEvents<OdsSkeletonEvents>> =
  OdsComponent<ComponentMethods, ComponentEvents, OdsSkeletonAttributes, OdsSkeletonController, OdsSkeletonBehavior>;
