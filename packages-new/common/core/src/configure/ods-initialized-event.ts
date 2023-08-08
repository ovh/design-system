import { OdsInitializedEventDetail } from './ods-initialized-event-detail';

/**
 * `ODS` main event fired when the `Ods` instance is created.
 * the `Ods` instance is automatically created via the execution of the script from the `ODS` bundle
 */
export type OdsInitializedEvent = CustomEvent<OdsInitializedEventDetail>;
