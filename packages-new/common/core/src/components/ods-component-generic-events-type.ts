/**
 * generic type of one event: a certain type or an object with this type.
 * each event of a component can be the type of the event passed as generic
 * or a wrapped type with an object used by stencil (emit property and customEvent)
 */
export type OdsComponentGenericEventsType<EventType> =
// the original type of the event
  EventType
  // OR the wrapped type inside a stencil emitter event
  | { emit: (data?: EventType) => CustomEvent<EventType> }

