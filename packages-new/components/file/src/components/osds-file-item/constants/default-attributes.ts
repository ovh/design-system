import type { OdsFileItemAttribute } from '../interfaces/attributes';

const DEFAULT_ATTRIBUTE: OdsFileItemAttribute = Object.freeze({
  error: false,
  progress: undefined,
  name: '',
  size: 0,
});
 
export {
  DEFAULT_ATTRIBUTE,
};