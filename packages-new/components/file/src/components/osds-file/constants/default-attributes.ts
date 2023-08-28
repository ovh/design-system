import type { OdsFileAttribute } from '../interfaces/attributes';

const DEFAULT_ATTRIBUTE: OdsFileAttribute = Object.freeze({
  acceptedTypes: '',
  dividerLabel: '',
  disabled: false,
  errorMessage: '',
  files: [],
  headerTitle: '',
  maxFiles: 10,
  selectFilesLabel: '',
  successMessage: '',
});
 
export {
  DEFAULT_ATTRIBUTE,
};
