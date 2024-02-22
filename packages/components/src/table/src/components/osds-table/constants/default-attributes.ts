import type { OdsTableAttribute } from '../interfaces/attributes';
import { ODS_TABLE_SIZE } from './table-size';

const DEFAULT_ATTRIBUTE: OdsTableAttribute = Object.freeze({
  size: ODS_TABLE_SIZE.md,
  variant: undefined,
});

export {
  DEFAULT_ATTRIBUTE,
};
