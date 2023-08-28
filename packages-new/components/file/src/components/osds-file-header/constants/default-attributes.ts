import type { OdsFileHeaderAttribute } from '../interfaces/attributes';
import { DEFAULT_ATTRIBUTE as FILE_DEFAULT_ATTRIBUTE } from '../../osds-file/constants/default-attributes';

const DEFAULT_ATTRIBUTE: OdsFileHeaderAttribute = Object.freeze({
  acceptedTypes: FILE_DEFAULT_ATTRIBUTE.acceptedTypes,
  dividerLabel: FILE_DEFAULT_ATTRIBUTE.dividerLabel,
  disabled: FILE_DEFAULT_ATTRIBUTE.disabled,
  errorMessage: FILE_DEFAULT_ATTRIBUTE.errorMessage,
  headerTitle: FILE_DEFAULT_ATTRIBUTE.headerTitle,
  isErrored: false,
  isSuccessful: false,
  selectFilesLabel: FILE_DEFAULT_ATTRIBUTE.selectFilesLabel,
  successMessage: FILE_DEFAULT_ATTRIBUTE.successMessage,
});
 
export {
  DEFAULT_ATTRIBUTE,
};