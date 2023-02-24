import { getOdsWindow } from './ods-get-window';
import { odsDefaultConfig } from './ods-default-config';
import { VERSION } from '../version';
import { Ods } from './ods';
/**
 * initialize all properties of window that are specific to `ods`.
 * initialize empty object `versions` and the setup id.
 * it gives w window object with filled `ods` properties
 * @param win - window object
 * @param baseConfig - base config to set by default
 */
function initializeProperties(win, baseConfig) {
  // initialize ods if needed
  if (!win.ods) {
    win.ods = {
      setupId: Date.now(),
      // with our own object reference
      config: baseConfig
    };
  }
  // initialize ods versions if needed
  if (!win.ods.versions) {
    win.ods.versions = {};
  }
  // initialize a setup id if needed (user made an ods setup config himself)
  win.ods.setupId = win.ods.setupId || Date.now();
  return win;
}
/**
 * initialize logging config.
 * it takes default config if not filled correctly
 * @param odsConf - config of `ods`
 */
function applyLoggingConf(odsConf) {
  odsConf.logging = odsConf.logging || {};
  // make sure all props are defined and typed correctly (can be not correctly initialized on client side)
  // warn: the object reference does not have to be modified, so we have to modify only
  const formatLogging = (odsConf) => {
    var _a, _b;
    return ({
      active: typeof ((_a = odsConf === null || odsConf === void 0 ? void 0 : odsConf.logging) === null || _a === void 0 ? void 0 : _a.active) !== 'boolean' ? odsDefaultConfig.logging.active : odsConf.logging.active,
      color: typeof ((_b = odsConf === null || odsConf === void 0 ? void 0 : odsConf.logging) === null || _b === void 0 ? void 0 : _b.color) !== 'boolean' ? odsDefaultConfig.logging.color : odsConf.logging.color
    });
  };
  const formatted = formatLogging(odsConf);
  odsConf.logging.active = formatted.active;
  odsConf.logging.color = formatted.color;
}
/**
 * create all the globals properties set up into window (when available).
 */
export function setUpGlobals() {
  const win = getOdsWindow();
  if (win) {
    // make our object reference, based on default
    const configObjectRef = { logging: Object.assign({}, odsDefaultConfig.logging), id: Date.now() };
    const winFilled = initializeProperties(win, configObjectRef);
    let config;
    // take here the client object reference or our own made before
    const odsConf = winFilled.ods.config;
    if (odsConf) {
      applyLoggingConf(odsConf);
      config = odsConf;
    }
    else {
      // our own
      config = configObjectRef;
    }
    // set the current ODS version into the right property and create the instance if needed
    if (!winFilled.ods.versions[VERSION]) {
      winFilled.ods.versions[VERSION] = Ods.instance(config);
    }
    // always set as latest the superior detected versions
    if (!winFilled.ods.latest || (winFilled.ods.latest && VERSION > winFilled.ods.latest.version)) {
      winFilled.ods.latest = winFilled.ods.versions[VERSION];
    }
  }
}
