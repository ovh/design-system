import { priceFormatter } from './priceFormatter';
import { translations } from './translations';
import { Ods, OdsExternalLogger } from '@ovhcloud/ods-common-core';

// translation system to replace with the application one
export const translationSystem = (key: string, values: Record<string, string | number | undefined> = {}) => {
  const logger: OdsExternalLogger = new (Ods.instance().logger)('[translationSystem]');
  logger.log('translating...', { key, values });
  let translation = translations[ key ];
  Object.keys(values)
    .forEach((valueName) => {
      const val = values[ valueName ];
      if (typeof val === 'number' && valueName === 'price') {
        values[ valueName ] = priceFormatter(val);
      }
      translation = translation.replace(`{{${valueName}}}`, `${values[ valueName ]}`);
    });
  return translation;
};
