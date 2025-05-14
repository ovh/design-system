import { FILE_REJECTION_CAUSE } from '../../src';
import { mapErrorCodes } from '../../src/controller/file-upload';

describe('FileUpload controller', () => {
  describe('mapErrorCodes', () => {
    it('should return the correct error codes', () => {
      expect(mapErrorCodes([])).toEqual([]);
      expect(mapErrorCodes(['FILE_INVALID'])).toEqual([FILE_REJECTION_CAUSE.invalidFile]);
      expect(mapErrorCodes(['FILE_INVALID_TYPE'])).toEqual([FILE_REJECTION_CAUSE.wrongFormat]);
      expect(mapErrorCodes(['FILE_TOO_LARGE'])).toEqual([FILE_REJECTION_CAUSE.sizeTooLarge]);
      expect(mapErrorCodes(['TOO_MANY_FILES'])).toEqual([FILE_REJECTION_CAUSE.maxFileReached]);
      expect(mapErrorCodes(['DUMMY_ERROR'])).toEqual([FILE_REJECTION_CAUSE.unknownError]);
    });
  });
});
