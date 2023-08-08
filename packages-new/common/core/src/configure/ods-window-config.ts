import { Ods } from './ods';
import { OdsDeepPartial } from '../types/ods-deep-partial';
import { OdsConfig } from './ods-config';

/**
 * parameters stored in the window globally.
 * MUST BE RETRO COMPATIBLE for all ODS versions
 */
export interface OdsWindowConfig {
  /** unique id for the Ods config setup (allow debugging) */
  setupId?: number;
  /** globally configuration use by any version of `ODS` */
  config?: OdsDeepPartial<OdsConfig>;
  /** the most recent version of `ODS` instanced in the application */
  latest?: Ods;
  /** each version of `ODS` detected and instanced independently */
  versions?: { [ version: string ]: Ods };
}
