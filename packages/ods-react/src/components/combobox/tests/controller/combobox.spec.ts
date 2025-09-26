import { isGroup } from '../../src/controller/combobox';

// TODO add missing tests

describe('Combobox controller', () => {
  describe('isGroup', () => {
    it('should return false if item is not a group', () => {
      expect(isGroup({ label: 'Option 1', value: 'option-1' })).toBe(false);
    });

    it('should return true if item is a group', () => {
      expect(isGroup({ label: 'Group 1', options: [] })).toBe(true);
    });
  });
});
