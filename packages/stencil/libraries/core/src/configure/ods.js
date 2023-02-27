import { OdsLogger } from '../logger/ods-logger';
import { VERSION } from '../version';
import { odsDefaultConfig } from './ods-default-config';
import { OdsExternalLogger } from '../logger/ods-external-logger';
/**
 * Main class that controls ODS :
 * - manage / create this singleton
 * - fire an event once created
 * - managing logging: enable or not
 * - managing i18n: in order to connect a translation system
 *
 * @example enable log on `ODS` initialization via javascript. make sure to execute this before any `ODS` script.
 * ```html
 * <script type="module">
 *   document.addEventListener('odsInitialized', ({detail}) => {
 *     const instance = detail.instance;
 *     instance.logging(true);
 *     const logger = new instance.logger('MY CONTEXT');
 *     logger.log('odsInitialized received');
 *   })
 * </script>
 * ```
 *
 * @example enable log on `ODS` initialization via typescript. make sure to execute this before any `ODS` script.
 * ```typescript
 * import {
 *   OdsInitializedEvent,
 *   OdsInitializedEventName
 * } from '@vhcloud/ods-core';
 *
 * document.addEventListener(OdsInitializedEventName, (event) => {
 *   const evt = event as OdsInitializedEvent;
 *   const instance = evt.detail.instance;
 *   instance.logging(true);
 *   const logger = new instance.logger('MY CONTEXT');
 *   logger.log('odsInitialized received');
 * })
 * ```
 *
 * @example enable log on demand via typescript
 * ```typescript
 * import { Ods } from '@ovhcloud/ods-core';
 * Ods.instance().logging(true);
 * ```
 *
 * @example configure different element of `ODS`
 * ```typescript
 * import { Ods } from '@ovhcloud/ods-core';
 * const my translationCbk: OdsI18nHook = (key, values) => `${key} to be translated`;
 * Ods.instance()
 *   .logging(true)
 *   .i18n(translationCbk);
 * ```
 *
 * @example use the embedded logger of `ODS` via typescript
 * ```typescript
 * import { Ods } from '@ovhcloud/ods-core';
 *
 * Ods.instance().logging(true);
 * const myLogger = new (Ods.instance().logger)('MY CONTEXT');
 *
 * myLogger.log('my log with the same logger as ODS');
 * myLogger.error('my error log with the same logger as ODS');
 *
 * Ods.instance().logging(false);
 * myLogger.log('my log is disabled as ods log is disabled');
 * ```
 *
 */
export class Ods {
  constructor(config) {
    this.config = config;
    this.version = VERSION;
    this.genericLogger = new OdsLogger('ODS', 'OVHcloud Design System');
    this.config = config;
    this.genericLogger.info('Hi! You are using OVHcloud Design System components, feel free to check out https://go/odsdoc/', {
      id: Ods._instanceId++,
      version: this.version
    });
    const odsEvent = new CustomEvent("odsInitialized", {
      detail: {
        version: VERSION,
        instance: this,
        config
      },
      bubbles: true,
      cancelable: true,
      composed: false,
    });
    document.dispatchEvent(odsEvent);
  }
  /**
   * @deprecated use `Ods.instance()`
   */
  static configure() {
    return this.instance();
  }
  /**
   * get or create the ODS instance.
   * The singleton is retrieved if exist
   */
  static instance(config = odsDefaultConfig) {
    this._instance = this._instance ? this._instance : new Ods(config);
    return this._instance;
  }
  /**
   * set your custom i18n callback function that is processing translations.
   * the callback has to return the translated string processed by your translation system.
   * @param hook - function that will receive the values to translate
   */
  i18n(hook) {
    this.i18nHook = hook;
    return this;
  }
  getI18n() {
    return this.i18nHook;
  }
  /**
   * enable or not the logging for the `ODS` instance
   * @param enable - your boolean
   */
  logging(enable) {
    this.config.logging.active = enable;
    return this;
  }
  isLoggingActive() {
    return this.config.logging.active;
  }
  get logger() {
    return OdsExternalLogger;
  }
}
Ods._instanceId = 0;
