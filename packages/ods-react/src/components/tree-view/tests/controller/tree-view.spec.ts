import { normalizeSelectedOnChange } from '../../src/controller/tree-view';

describe('TreeView controller', () => {
  describe('normalizeSelectedOnChange', () => {
    it('should return array when multiple and selected is string', () => {
      expect(normalizeSelectedOnChange('a', true)).toEqual(['a']);
    });

    it('should return first element when single and selected is array', () => {
      expect(normalizeSelectedOnChange(['a', 'b'], false)).toBe('a');
    });

    it('should return array when multiple and selected is array', () => {
      expect(normalizeSelectedOnChange(['a', 'b'], true)).toEqual(['a', 'b']);
    });
  });
});

