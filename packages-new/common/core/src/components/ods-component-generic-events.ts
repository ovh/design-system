import { OdsComponentGenericEventsType } from './ods-component-generic-events-type';

/**
 * generic type of events for a component.
 */
export type OdsComponentGenericEvents<Events> =
  {
    [EventName in keyof Events]: OdsComponentGenericEventsType<Events[EventName]>
  }
