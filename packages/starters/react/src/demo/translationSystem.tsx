import { priceFormatter } from './priceFormatter';
import { Ods, OdsExternalLogger } from '@ovhcloud/ods-core';
import { translations } from './translations';

// translation system to replace with the application one
export const translationSystem = (key: string, values: { [ key: string ]: string | number | undefined } = {}) => {
  const logger: OdsExternalLogger = new (Ods.instance().logger)('[translationSystem]');
  logger.log('translating...', { key, values });
  let translation = translations[ key ];
  Object.keys(values)
    .forEach((valueName) => {
      const val = values[ valueName ];
      if (typeof val === 'number' && valueName === 'price') {
        values[ valueName ] = priceFormatter(val)
      }
      translation = translation.replace(`{{${valueName}}}`, `${values[ valueName ]}`)
    })
  return translation;
}
