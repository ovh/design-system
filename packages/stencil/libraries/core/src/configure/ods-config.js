import { isOdsConfigLogging } from './ods-config-logging';
export function isOdsConfig(config) {
  return config && isOdsConfigLogging(config.logging);
}
