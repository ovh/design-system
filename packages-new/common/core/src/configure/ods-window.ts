import { OdsWindowConfig } from './ods-window-config';
import { OdsConfig } from './ods-config';
import { DeepRequired } from '../types/ods-deep-required';
import { odsSetup } from './ods-setup';

/**
 * description of all properties globally managed into window by the `ODS` system.
 *
 * @example enable log before ODS initialization via HTML
 * ```html
 * <script type="module">
 *   !window.ods && (window.ods = {config: {logging: {active: true}}});
 * </script>
 * ```
 *
 * @example enable log before ODS initialization via typescript
 * ```typescript
 * // eslint-disable-next-line no-var
 * declare var window: OdsWindow;
 * !window.ods && (window.ods = { config: { logging: { active: true } } });
 * ```
 *
 * @example managing log directly in the browser via javascript
 * ```javascript
 * // via the property
 * window.ods.config.logging.active = true;
 * // via the public method
 * window.ods.latest.logging(true);
 * ```
 *
 *
 * @example use the `ODS` embedded logger via javascript
 * ```html
 * <script type="module">
 *   document.addEventListener('odsInitialized', ({detail}) => {
 *     const instance = detail.instance;
 *     instance.logging(true);
 *
 *     const myLogger = new instance.logger('MY CONTEXT');
 *
 *     myLogger.log('my log with the same logger as ODS');
 *     myLogger.error('my error log with the same logger as ODS');
 *
 *     instance.logging(false);
 *     myLogger.log('my log is disabled as ods log is disabled');
 *   })
 * </script>
 * ```
 *

 *
 * WARNING: MUST BE RETRO COMPATIBLE for all ODS versions
 */
export interface OdsWindow extends Window {
  ods?: OdsWindowConfig;
  odsSetup?: typeof odsSetup;
}

export interface OdsWindowFilled extends OdsWindow {
  ods: Required<OdsWindowConfig> & { config: DeepRequired<OdsConfig> };
}
