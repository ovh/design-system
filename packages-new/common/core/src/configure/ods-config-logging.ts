/**
 * ODS logging configuration.
 * MUST BE RETRO COMPATIBLE for all ODS versions
 */
export interface OdsConfigLogging {
  /** enable logs */
  active: boolean;
  /** enable coloring the prefix and the context for each console logging (with `%c`) */
  color: boolean;
}

export function isOdsConfigLogging(config: any): config is OdsConfigLogging {
  return config && typeof config.active === 'boolean' && typeof config.color === 'boolean';
}
