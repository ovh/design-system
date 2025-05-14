import { FILE_REJECTION_CAUSE } from '../constants/file-error';

// Map internal ark-ui error code with ODS rejection cause
function mapErrorCodes(errors: string[]): FILE_REJECTION_CAUSE[] {
  return errors.map((error) => {
    switch (error) {
      case 'FILE_INVALID':
        return FILE_REJECTION_CAUSE.invalidFile;
      case 'FILE_INVALID_TYPE':
        return FILE_REJECTION_CAUSE.wrongFormat;
      case 'FILE_TOO_LARGE':
        return FILE_REJECTION_CAUSE.sizeTooLarge;
      case 'TOO_MANY_FILES':
        return FILE_REJECTION_CAUSE.maxFileReached;
      default:
        return FILE_REJECTION_CAUSE.unknownError;
    }
  });
}

export {
  mapErrorCodes,
};
