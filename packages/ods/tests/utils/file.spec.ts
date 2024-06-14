import { formatBytes, getFilesFromDataTransfer, isFileAccepted } from '../../src/utils/file';

describe('utils file', () => {
  beforeEach(jest.clearAllMocks);

  describe('formatBytes', () => {
    it('should return empty string if incorrect values', () => {
      // @ts-ignore for test purpose
      expect(formatBytes()).toBe('');
      // @ts-ignore for test purpose
      expect(formatBytes('bytes')).toBe('');
      expect(formatBytes(-1)).toBe('');
    });

    it('should return formatted string', () => {
      expect(formatBytes(0)).toBe('0 b');
      expect(formatBytes(1024)).toBe('1 kb');
      expect(formatBytes(1048576)).toBe('1 mb');
      expect(formatBytes(524288000)).toBe('500 mb');
      expect(formatBytes(123456789, 2)).toBe('117.74 mb');
      expect(formatBytes(123456789, -2)).toBe('118 mb');
    });
  });

  describe('getFilesFromDataTransfer', () => {
    it('should return files if transfer contains files', () => {
      const dummyDataTransfer = {
        files: ['dummy file 1', 'dummy file 2'],
      } as unknown as DataTransfer;

      expect(getFilesFromDataTransfer(dummyDataTransfer)).toEqual(dummyDataTransfer.files);
    });

    it('should return empty if transfer does not contain file items', () => {
      const dummyDataTransfer = {
        items: [
          { kind: 'dummy' },
          { kind: 'item' },
        ],
      } as unknown as DataTransfer;

      expect(getFilesFromDataTransfer(dummyDataTransfer)).toEqual([]);
    });

    it('should return item as files if transfer does contain file items', () => {
      const dummyDataTransfer = {
        items: [
          { getAsFile: jest.fn().mockReturnValue('file 1'), kind: 'file' },
          { getAsFile: jest.fn().mockReturnValue('file 2'), kind: 'file' },
        ],
      } as unknown as DataTransfer;

      expect(getFilesFromDataTransfer(dummyDataTransfer)).toEqual(['file 1', 'file 2']);
      expect(dummyDataTransfer.items[0].getAsFile).toHaveBeenCalledTimes(1);
      expect(dummyDataTransfer.items[1].getAsFile).toHaveBeenCalledTimes(1);
    });
  });

  describe('isFileAccepted', () => {
    it('should return false if format is not ok', () => {
      // @ts-ignore for test purpose
      expect(isFileAccepted()).toBe(false);
      expect(isFileAccepted({ name: 'f.jpg', type: 'image/jpg' } as File, 'image/png')).toBe(false);
      expect(isFileAccepted({ name: 'f.jpg', type: 'image/jpg' } as File, 'image/png, image/gif')).toBe(false);
    });

    it('should return true if format is ok', () => {
      expect(isFileAccepted({ name: 'f.png', type: 'image/png' } as File)).toBe(true);
      expect(isFileAccepted({ name: 'f.png', type: 'image/png' } as File, '')).toBe(true);
      expect(isFileAccepted({ name: 'f.png', type: 'image/png' } as File, 'image/*')).toBe(true);
      expect(isFileAccepted({ name: 'f.png', type: 'image/png' } as File, 'video/*, image/*')).toBe(true);
      expect(isFileAccepted({ name: 'f.png', type: 'image/png' } as File, 'image/png')).toBe(true);
      expect(isFileAccepted({ name: 'f.png', type: 'image/png' } as File, 'image/png, image/gif')).toBe(true);
      expect(isFileAccepted({ name: 'f.png', type: 'image/png' } as File, '.png')).toBe(true);
      expect(isFileAccepted({ name: 'f.png', type: 'image/png' } as File, '.png, .gif')).toBe(true);
    });
  });
});
