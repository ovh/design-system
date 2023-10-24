import { Ocdk } from './ocdk';
import { OcdkConfig } from './ocdk-config';

/**
 * Content of the main `OcdkInitialized` event.
 * @see OcdkInitializedEvent
 */
export interface OcdkInitializedEventDetail {
  /**
   * package's version of the instance that fired the event.
   * indeed: multiple packages of `OCDK` with different version can be used in the same time
   */
  version: string;
  /** singleton service of `OCDK` for the package's version */
  instance: Ocdk;
  /** configuration used for this instance */
  config: OcdkConfig;
}
