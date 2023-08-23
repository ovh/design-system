import { OcdkConfig } from './ocdk-config';

/**
 * default `OCDK` configuration applied if there no custom configuration made on client side
 */
export const ocdkDefaultConfig: OcdkConfig = {
  logging: {
    active: false,
    color: true
  }
};
