import { OdsConfig } from './ods-config';

/**
 * default `ODS` configuration applied if there no custom configuration made on client side
 */
export const odsDefaultConfig: OdsConfig = {
  id: Date.now(),
  logging: {
    active: false,
    color: true,
  },
  asset: {
    path: '',
  },
};
