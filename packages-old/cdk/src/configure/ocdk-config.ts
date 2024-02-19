import { OcdkConfigLogging, isOcdkConfigLogging } from './ocdk-config-logging';

/**
 * OCDK main configuration parameters.
 * you can configure:
 * - logging: enable or not, and other options
 * MUST BE RETRO COMPATIBLE for all OCDK versions
 */
export interface OcdkConfig {
  logging: OcdkConfigLogging;
}

export function isOcdkConfig(config: any): config is OcdkConfig {
  return config && isOcdkConfigLogging(config.logging);
}
