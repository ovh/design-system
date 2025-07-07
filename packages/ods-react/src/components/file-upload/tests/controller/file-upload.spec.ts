import { FILE_REJECTION_CAUSE } from '../../src';
import { isUploading, mapErrorCodes } from '../../src/controller/file-upload';

describe('FileUpload controller', () => {
  describe('isUploading', () => {
    it('should return false if the progress is not set', () => {
      expect(isUploading()).toBe(false);
    });

    it('should return false if the progress is >= 100', () => {
      expect(isUploading(100)).toBe(false);
      expect(isUploading(101)).toBe(false);
    });

    it('should return true if the progress is set and < 100', () => {
      expect(isUploading(0)).toBe(true);
      expect(isUploading(65)).toBe(true);
    });
  });

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
