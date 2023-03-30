import { OdsLogger } from '../logger/ods-logger';
import { VERSION } from '../version';
import { odsDefaultConfig } from './ods-default-config';
import { OdsExternalLogger } from '../logger/ods-external-logger';
import { getOdsWindow } from './ods-get-window';
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
 * } from '@ovhcloud/ods-core';
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
    const winA = window;
    // console.log('ici winA', (winA as any));
    // console.log('ici winA', (winA as any).gg);
    winA.gg = 'winA';
    // console.log('ici winA', (winA as any).gg);
    this.config = config;
    this.instanceId = Ods._instanceId++;
    // console.log(`[Ods #${this.instanceId}]`, 'ods constructor');
    this.genericLogger.info('Hi! You are using OVHcloud Design System components, feel free to check out https://go/odsdoc/', {
      id: this.instanceId,
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
    var _a, _b;
    // console.log('[Ods] static ods.instance');
    // console.log('[Ods] static ods.instance', 'already set instance number: this._instance.instanceId', this._instance?.instanceId);
    if (!this._instance) {
      const win = getOdsWindow();
      // check if an instance is already set through the window for the concerned version
      // example: if we inserted ods twice in an application or if we inserted an independent package plus le bundled package, we are in this case
      // console.log('[Ods] static ods.instance win.ods', win?.ods);
      // console.log('[Ods] static ods.instance win.ods.config', win?.ods?.config);
      if (((_a = win === null || win === void 0 ? void 0 : win.ods) === null || _a === void 0 ? void 0 : _a.versions) && ((_b = win === null || win === void 0 ? void 0 : win.ods) === null || _b === void 0 ? void 0 : _b.versions[VERSION])) {
        // console.log('[Ods] static ods.instance already set in win', win.ods.versions[ VERSION ].instanceId);
        this._instance = win.ods.versions[VERSION];
      }
      else {
        // console.log('[Ods] static ods.instance create new instance');
        // console.log('[Ods] static ods.instance', 'wanted config=', JSON.stringify(config));
        this._instance = new Ods(config);
        // console.log('[Ods] static ods.instance created with id=', this._instance.instanceId);
      }
    }
    else {
      // console.log('[Ods] static ods.instance', 'instance already set id=', this._instance.instanceId);
    }
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
   * set the default asset path where to find the different assets of `ODS`.
   * @param path - path like `my-ods-svg/`
   */
  assetPath(path) {
    // console.log(`[Ods #${this.instanceId}].assetPath`, 'ods wanted path', path);
    this.config.asset.path = path;
    // console.log(`[Ods #${this.instanceId}].assetPath`, 'path set. this.config=', this.config);
    return this;
  }
  /**
   * get all the configuration of `ODS`
   */
  getConfig() {
    // console.log(`[Ods #${this.instanceId}].getCOnfig`, 'this.config=', JSON.stringify(this.config));
    return this.config;
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
