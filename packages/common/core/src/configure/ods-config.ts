import {OdsConfigLogging, isOdsConfigLogging} from './ods-config-logging';

/**
 * ODS main configuration parameters.
 * you can configure:
 * - logging: enable or not, and other options
 * MUST BE RETRO COMPATIBLE for all ODS versions
 */
export interface OdsConfig {
  /** unique id of the config */
  id: number;
  logging: OdsConfigLogging;
  asset: {
    path: string;
  }
}

export function isOdsConfig(config: any): config is OdsConfig {
  return config && isOdsConfigLogging(config.logging);
}
