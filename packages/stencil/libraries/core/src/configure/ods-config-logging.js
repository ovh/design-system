export function isOdsConfigLogging(config) {
  return config && typeof config.active === 'boolean' && typeof config.color === 'boolean';
}
