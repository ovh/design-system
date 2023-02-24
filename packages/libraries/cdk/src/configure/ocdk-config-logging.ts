/**
 * OCDK logging configuration.
 * MUST BE RETRO COMPATIBLE for all OCDK versions
 */
export interface OcdkConfigLogging {
  /** enable logs */
  active: boolean;
  /** enable coloring the prefix and the context for each console logging (with `%c`) */
  color: boolean;
}

export function isOcdkConfigLogging(config: any): config is OcdkConfigLogging {
  return config && typeof config.active === 'boolean' && typeof config.color === 'boolean';
}
