import { OdsComponentAttributes } from '../../ods-component-attributes';

export interface OdsFileHeaderAttributes extends OdsComponentAttributes {
  isSuccessful?: boolean;
  isErrored?: boolean;
  errorMessage?: string;
  successMessage?: string;
  acceptedTypes?: string;
  disabled?: boolean;
  headerTitle?: string;
  dividerLabel?: string;
  selectFilesLabel?: string;
}
