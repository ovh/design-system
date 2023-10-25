import { Ods } from './ods';
import { OdsConfig } from './ods-config';
import { OdsConfigLogging } from './ods-config-logging';
import { odsDefaultConfig } from './ods-default-config';
import { getOdsWindow } from './ods-get-window';
import { OdsWindow, OdsWindowFilled } from './ods-window';
import { OdsDeepPartial } from '../types/ods-deep-partial';
import { VERSION } from '../version';

/**
 * initialize all properties of window that are specific to `ods`.
 * initialize empty object `versions` and the setup id.
 * it gives w window object with filled `ods` properties
 * @param win - window object
 * @param baseConfig - base config to set by default
 */
function initializeProperties(win: OdsWindow, baseConfig: OdsConfig): OdsWindowFilled {
  // initialize ods if needed
  if (!win.ods) {
    win.ods = {
      setupId: Date.now(),
      // with our own object reference
      config: baseConfig,
    };
  }

  // initialize ods versions if needed
  if (!win.ods.versions) {
    win.ods.versions = {};
  }
  // initialize a setup id if needed (user made an ods setup config himself)
  win.ods.setupId = win.ods.setupId || Date.now();

  return win as OdsWindowFilled;
}

/**
 * initialize logging config.
 * it takes default config if not filled correctly
 * @param odsConf - config of `ods`
 */
function applyLoggingConf(odsConf: OdsDeepPartial<OdsConfig>): void {
  odsConf.logging = odsConf.logging || odsDefaultConfig.logging;
  // make sure all props are defined and typed correctly (can be not correctly initialized on client side)
  // warn: the object reference does not have to be modified, so we have to modify only
  const formatLogging = (odsConf: OdsDeepPartial<OdsConfig>): OdsConfigLogging => ({
    active: typeof odsConf?.logging?.active !== 'boolean' ? odsDefaultConfig.logging.active : odsConf.logging.active,
    color: typeof odsConf?.logging?.color !== 'boolean' ? odsDefaultConfig.logging.color : odsConf.logging.color,
  });
  const formatted = formatLogging(odsConf);
  odsConf.logging.active = formatted.active;
  odsConf.logging.color = formatted.color;
}

function applyAssetConf(odsConf: OdsDeepPartial<OdsConfig>): void {
  odsConf.asset = odsConf.asset || odsDefaultConfig.asset;
  odsConf.asset.path = odsConf.asset.path ? odsConf.asset.path : odsDefaultConfig.asset.path;
}

/**
 * create all the globals properties set up into window (when available).
 */
export function odsSetup(/*userConfig?: OdsConfig*/): void {
  //console.log('odsSetup');
  const win = getOdsWindow();
  if (win) {

    // make our object reference, based on default
    const configObjectRef: OdsConfig = { ...odsDefaultConfig, id: Date.now() };

    const winFilled = initializeProperties(win, configObjectRef);

    let config: OdsConfig;

    // take here the client object reference or our own made before
    const odsConf = winFilled.ods.config;
    if (odsConf) {
      applyLoggingConf(odsConf);
      applyAssetConf(odsConf);
      config = odsConf;
    } else {
      // our own
      config = configObjectRef;
    }

    // set the current ODS version into the right property and create the instance if needed
    //console.log('[odsSetup] VERSION', VERSION);
    if (!winFilled.ods.versions[ VERSION ]) {
      //console.log('[odsSetup] call instance');
      winFilled.ods.versions[ VERSION ] = Ods.instance(config);
    } else {
      //console.log('[odsSetup] instance already set');
    }

    // always set as latest the superior detected versions
    if (!winFilled.ods.latest || (winFilled.ods.latest && VERSION > winFilled.ods.latest.version)) {
      winFilled.ods.latest = winFilled.ods.versions[ VERSION ];
    }
  }
  //console.log('odsSetup end');
}

const win = getOdsWindow();
if (win) {
  win.odsSetup = odsSetup;
}
