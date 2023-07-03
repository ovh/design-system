import { odsIsStr } from '../../types/guard/ods-is-string';
import { odsIsSrc } from './ods-is-src';

/**
 * get a formatted src string without spaces
 * @param src - string to check
 * @returns a trimmed string or undefined if not a src type
 */
export function odsGetSrc(src: string | undefined): string | undefined {
  if (odsIsStr(src)) {
    src = src.trim();
    if (odsIsSrc(src)) {
      return src;
    }
  }
  return;
}
