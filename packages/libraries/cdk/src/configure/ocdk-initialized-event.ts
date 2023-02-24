import { OcdkInitializedEventDetail } from './ocdk-initialized-event-detail';

/**
 * `OCDK` main event fired when the `Ocdk` instance is created.
 * the `Ocdk` instance is automatically created via the execution of the script from the `OCDK` bundle
 */
export type OcdkInitializedEvent = CustomEvent<OcdkInitializedEventDetail>;
