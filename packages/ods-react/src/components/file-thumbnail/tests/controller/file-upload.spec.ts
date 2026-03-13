import { isImage, isUploading } from '../../src/controller/file-thumbnail';

describe('FileThumbnail controller', () => {
  describe('isUploading', () => {
    it('should return false if file is not an image', () => {
      expect(isImage()).toBe(false);
      expect(isImage('dummy')).toBe(false);
      expect(isImage('dummy.csv')).toBe(false);
    });

    it('should return true if file is an image', () => {
      expect(isImage('dummy.png')).toBe(true);
      expect(isImage('dummy.jpg')).toBe(true);
    });
  });

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
});
