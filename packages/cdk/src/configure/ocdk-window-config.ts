import { Ocdk } from './ocdk';
import { OcdkDeepPartial } from '../types/ocdk-deep-partial';
import { OcdkConfig } from './ocdk-config';

/**
 * parameters stored in the window globally.
 * MUST BE RETRO COMPATIBLE for all OCDK versions
 */
export interface OcdkWindowConfig {
  /** globally configuration use by anu version of `OCDK` */
  config?: OcdkDeepPartial<OcdkConfig>;
  /** the most recent version of `OCDK` instanced in the application */
  latest?: Ocdk;
  /** each version of `OCDK` detected and instanced independently */
  versions?: { [ version: string ]: Ocdk };
}
