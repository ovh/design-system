import {Ods} from './ods';
import {OdsConfig} from './ods-config';

/**
 * Content of the main `OdsInitialized` event.
 * @see OdsInitializedEvent
 */
export interface OdsInitializedEventDetail {
  /**
   * package's version of the instance that fired the event.
   * indeed: multiple packages of `ODS` with different version can be used in the same time
   */
  version: string;
  /** singleton service of `ODS` for the package's version */
  instance: Ods;
  /** configuration used for this instance */
  config: OdsConfig;
}
