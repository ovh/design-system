import { getNodeAriaChecked, getNodeCheckedDataState, normalizeSelectedOnChange, withoutVendorAttributes } from '../../src/controller/tree-view';

describe('TreeView controller', () => {
  describe('getNodeAriaChecked', () => {
    it('should return the aria-checked value of each checked state', () => {
      expect(getNodeAriaChecked(true)).toBe('true');
      expect(getNodeAriaChecked(false)).toBe('false');
      expect(getNodeAriaChecked('indeterminate')).toBe('mixed');
    });
  });

  describe('getNodeCheckedDataState', () => {
    it('should return the data-state value of each checked state', () => {
      expect(getNodeCheckedDataState(true)).toBe('checked');
      expect(getNodeCheckedDataState(false)).toBe('unchecked');
      expect(getNodeCheckedDataState('indeterminate')).toBe('indeterminate');
    });
  });

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

  describe('withoutVendorAttributes', () => {
    it('should map each attribute to null', () => {
      expect(withoutVendorAttributes('aria-level', 'aria-selected')).toEqual({
        'aria-level': null,
        'aria-selected': null,
      });
    });
  });
});

