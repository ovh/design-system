import { Ocdk } from './ocdk';
import { VERSION } from '../version';
import { OcdkConfig } from './ocdk-config';
import { ocdkDefaultConfig } from './ocdk-default-config';
import { OcdkWindowConfig } from './ocdk-window-config';
import { OcdkConfigLogging } from './ocdk-config-logging';
import { OcdkDeepPartial } from '../types/ocdk-deep-partial';

/**
 * description of all properties globally managed into window by the `OCDK` system.
 *
 * @example enable log before OCDK initialization via HTML
 * ```html
 * <script type="module">
 *   !window.ocdk && (window.ocdk = {config: {logging: {active: true}}});
 * </script>
 * ```
 *
 * @example enable log before OCDK initialization via typescript
 * ```typescript
 * // eslint-disable-next-line no-var
 * declare var window: OcdkWindow;
 * !window.ocdk && (window.ocdk = { config: { logging: { active: true } } });
 * ```
 *
 * @example managing log directly in the browser via javascript
 * ```javascript
 * // via the property
 * window.ocdk.config.logging.active = true;
 * // via the public method
 * window.ocdk.latest.logging(true);
 * ```
 *
 *
 * @example use the `OCDK` embedded logger via javascript
 * ```html
 * <script type="module">
 *   document.addEventListener('ocdkInitialized', ({detail}) => {
 *     const instance = detail.instance;
 *     instance.logging(true);
 *
 *     const myLogger = new instance.logger('MY CONTEXT');
 *
 *     myLogger.log('my log with the same logger as OCDK');
 *     myLogger.error('my error log with the same logger as OCDK');
 *
 *     instance.logging(false);
 *     myLogger.log('my log is disabled as ocdk log is disabled');
 *   })
 * </script>
 * ```
 *

 *
 * WARNING: MUST BE RETRO COMPATIBLE for all OCDK versions
 */
export interface OcdkWindow extends Window {
  ocdk?: OcdkWindowConfig;
}

// eslint-disable-next-line no-var
declare var window: OcdkWindow;

/**
 * create all the globals properties set up into window (when available).
 */
function setUpGlobals() {
  // node protection or other env : window may not exist
  if (typeof window !== 'undefined') {
    const win = window;

    // make our object reference, based on default
    const configObjectRef: OcdkConfig = { logging: { ...ocdkDefaultConfig.logging } };

    // initialize if needed
    if (!win.ocdk) {
      win.ocdk = {
        // with our own object reference
        config: configObjectRef,
      };
    }
    if (!win.ocdk.versions) {
      win.ocdk.versions = {};
    }

    let config: OcdkConfig;

    // take here the client object reference or our own made before
    const winConf = win.ocdk.config;
    if (winConf) {
      winConf.logging = winConf.logging || {};
      // make sure all props are defined and typed correctly (can be not correctly initialized on client side)
      // warn: the object reference does not have to be modified, so we have to modify only
      const formatLogging = (winConf: OcdkDeepPartial<OcdkConfig>): OcdkConfigLogging => ({
        active: typeof winConf?.logging?.active !== 'boolean' ? ocdkDefaultConfig.logging.active : winConf.logging.active,
        color: typeof winConf?.logging?.color !== 'boolean' ? ocdkDefaultConfig.logging.color : winConf.logging.color,
      });
      winConf.logging = formatLogging(winConf);
      config = winConf as OcdkConfig;
    } else {
      // our own
      config = configObjectRef;
    }


    // set the current ocdk version into the right property and create the instance if needed
    if (!win.ocdk.versions[ VERSION ]) {
      win.ocdk.versions[ VERSION ] = Ocdk.instance(config);
    }

    // always set as latest the superior detected versions
    if (!win.ocdk.latest || (win.ocdk.latest && VERSION > win.ocdk.latest.version)) {
      win.ocdk.latest = win.ocdk.versions[ VERSION ];
    }
  }

}

setUpGlobals();
