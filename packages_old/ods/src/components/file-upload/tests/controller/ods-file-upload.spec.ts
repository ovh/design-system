jest.mock('../../../../utils/file');

import { isFileAccepted } from '../../../../utils/file';
import { filterMaxFiles, filterMaxSize, filterValidFiles } from '../../src/controller/ods-file-upload';

describe('ods-file-upload controller', () => {
  beforeEach(jest.clearAllMocks);

  describe('filterMaxFiles', () => {
    const dummyFiles = [
      { name: 'dummy file 1' } as File,
      { name: 'dummy file 2' } as File,
    ];

    it('should return all files as valid if no max is set', () => {
      expect(filterMaxFiles(dummyFiles, 0)).toEqual({
        rejectedFiles: [],
        validFiles: dummyFiles,
      });
    });

    it('should return all files as valid if max is not reached', () => {
      expect(filterMaxFiles(dummyFiles, 1, 4)).toEqual({
        rejectedFiles: [],
        validFiles: dummyFiles,
      });
    });

    it('should return split files if max is reached', () => {
      expect(filterMaxFiles(dummyFiles, 3, 4)).toEqual({
        rejectedFiles: [dummyFiles[1]],
        validFiles: [dummyFiles[0]],
      });
    });
  });

  describe('filterMaxSize', () => {
    const dummyFiles = [
      { name: 'dummy file 1', size: 2222 } as File,
      { name: 'dummy file 2', size: 54323 } as File,
    ];

    it('should return all files as valid if no max size is set', () => {
      expect(filterMaxSize(dummyFiles)).toEqual({
        rejectedFiles: [],
        validFiles: dummyFiles,
      });
    });

    it('should return all files as valid if max size is not reached', () => {
      expect(filterMaxSize(dummyFiles, 987654321)).toEqual({
        rejectedFiles: [],
        validFiles: dummyFiles,
      });
    });

    it('should return split files if max size is reached', () => {
      expect(filterMaxSize(dummyFiles, 30000)).toEqual({
        rejectedFiles: [dummyFiles[1]],
        validFiles: [dummyFiles[0]],
      });
    });
  });

  describe('filterValidFiles', () => {
    const dummyAccept = 'dummy/*';
    const dummyFiles = [
      { name: 'dummy file 1' } as File,
      { name: 'dummy file 2' } as File,
    ];

    it('should return empty arrays if no files', () => {
      expect(filterValidFiles([], dummyAccept)).toEqual({
        rejectedFiles: [],
        validFiles: [],
      });
      expect(isFileAccepted).not.toHaveBeenCalled();
    });

    it('should return valid files if accepted', () => {
      (isFileAccepted as jest.Mock).mockReturnValue(true);

      expect(filterValidFiles(dummyFiles, dummyAccept)).toEqual({
        rejectedFiles: [],
        validFiles: dummyFiles,
      });
      expect(isFileAccepted).toHaveBeenCalledTimes(dummyFiles.length);
      expect(isFileAccepted).toHaveBeenNthCalledWith(1, dummyFiles[0], dummyAccept);
      expect(isFileAccepted).toHaveBeenNthCalledWith(2, dummyFiles[1], dummyAccept);
    });

    it('should return rejected files if not accepted', () => {
      (isFileAccepted as jest.Mock).mockReturnValue(false);

      expect(filterValidFiles(dummyFiles, dummyAccept)).toEqual({
        rejectedFiles: dummyFiles,
        validFiles: [],
      });
      expect(isFileAccepted).toHaveBeenCalledTimes(dummyFiles.length);
      expect(isFileAccepted).toHaveBeenNthCalledWith(1, dummyFiles[0], dummyAccept);
      expect(isFileAccepted).toHaveBeenNthCalledWith(2, dummyFiles[1], dummyAccept);
    });
  });
});
