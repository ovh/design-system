import {OcdkLogger} from '../logger/ocdk-logger';
import {VERSION} from '../version';
import {OcdkInitializedEventDetail} from './ocdk-initialized-event-detail';
import {OcdkConfig} from './ocdk-config';
import {ocdkDefaultConfig} from './ocdk-default-config';

/**
 * Main class that controls OCDK :
 * - manage / create this singleton
 * - fire an event once created
 * - managing logging: enable or not
 *
 * @example enable log on `OCDK` initialization via javascript. make sure to execute this before any `OCDK` script.
 * ```html
 * <script type="module">
 *   document.addEventListener('ocdkInitialized', ({detail}) => {
 *     const instance = detail.instance;
 *     instance.logging(true);
 *     const logger = new instance.logger('MY CONTEXT');
 *     logger.log('ocdkInitialized received');
 *   })
 * </script>
 * ```
 *
 * @example enable log on `OCDK` initialization via typescript. make sure to execute this before any `OCDK` script.
 * ```typescript
 * import {
 *   OcdkInitializedEvent,
 *   OcdkInitializedEventName
 * } from '@ovhcloud/ods-ocdk';
 *
 * document.addEventListener(OcdkInitializedEventName, (event) => {
 *   const evt = event as OcdkInitializedEvent;
 *   const instance = evt.detail.instance;
 *   instance.logging(true);
 *   const logger = new instance.logger('MY CONTEXT');
 *   logger.log('ocdkInitialized received');
 * })
 * ```
 *
 * @example enable log on demand via typescript
 * ```typescript
 * import { Ocdk } from '@ovhcloud/ods-ocdk';
 * Ocdk.instance().logging(true);
 * ```
 *
 * @example configure different element of `OCDK`
 * ```typescript
 * import { Ocdk } from '@ovhcloud/ods-ocdk';
 * Ocdk.instance()
 *   .logging(true)
 * ```
 *
 * @example use the embedded logger of `OCDK` via typescript
 * ```typescript
 * import { Ocdk } from '@ovhcloud/ods-ocdk';
 *
 * Ocdk.instance().logging(true);
 * const myLogger = new (Ocdk.instance().logger)('MY CONTEXT');
 *
 * myLogger.log('my log with the same logger as OCDK');
 * myLogger.error('my error log with the same logger as OCDK');
 *
 * Ocdk.instance().logging(false);
 * myLogger.log('my log is disabled as ocdk log is disabled');
 * ```
 *
 */
export class Ocdk {
  private static _instance: Ocdk;
  private static _instanceId = 0;

  version = VERSION;
  private genericLogger = new OcdkLogger('OCDK', 'OVHCloud Component Development Kit');

  constructor(private readonly config: OcdkConfig) {
    this.config = config;
    this.genericLogger.info('Hi! You are using OVHCloud Component Development Kit, feel free to check out https://go/ocdkdoc/', {
      id: Ocdk._instanceId++,
      version: this.version,
    });

    const ocdkEvent = new CustomEvent<OcdkInitializedEventDetail>('ocdkInitialized', {
      detail: {
        version: VERSION,
        instance: this,
        config,
      },
      bubbles: true,
      cancelable: true,
      composed: false,
    });

    document.dispatchEvent(ocdkEvent);
  }

  /**
   * get or create the OCDK instance.
   * The singleton is retrieved if exist
   */
  public static instance(config: OcdkConfig = ocdkDefaultConfig): Ocdk {
    this._instance = this._instance ? this._instance : new Ocdk(config);

    return this._instance;
  }

  /**
   * enable or not the logging for the `OCDK` instance
   * @param enable - your boolean
   */
  logging(enable: boolean): Ocdk {
    this.config.logging.active = enable;
    return this;
  }

  isLoggingActive(): boolean {
    return this.config.logging.active;
  }

}
