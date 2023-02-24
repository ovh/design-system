/* eslint-disable @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars */
import { OdsSkeleton } from './ods-skeleton';
import { OdsSkeletonMethods } from './ods-skeleton-methods';
import { OdsSkeletonEvents } from './ods-skeleton-events';
import { OdsSkeletonController } from './ods-skeleton-controller';

/**
 * Mocked generic implementation that represents an `OdsSkeleton`.
 * it allows to test the controller with a stub implementation.
 */
export class OdsSkeletonMock implements OdsSkeleton<OdsSkeletonMethods, OdsSkeletonEvents> {
  flex = false;
  randomized = false;
  size = undefined;
  controller: OdsSkeletonController = jest.fn() as unknown as OdsSkeletonController;
  hostElement!: HTMLElement;

  afterInit = jest.fn();
}
