import { OdsTileAttributes } from '@ovhcloud/ods-core';
import { odsTileBaseAttributes } from './ods-tile-base-attributes';

export function OdsTileCreateAttributes(attributes: Partial<OdsTileAttributes>): OdsTileAttributes {
  return {
    ...odsTileBaseAttributes,
    ...attributes
  };
}
