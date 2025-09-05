import type { TreeViewItem } from '../../src/components/tree-view-node/TreeViewNode';
import { computeDefaultExpanded, normalizeSelectedOnChange, normalizeToArray } from '../../src/controller/tree-view';

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

  describe('normalizeToArray', () => {
    it('should normalize undefined to undefined', () => {
      expect(normalizeToArray()).toBeUndefined();
      expect(normalizeToArray(undefined)).toBeUndefined();
    });

    it('should normalize string to single-item array', () => {
      expect(normalizeToArray('x')).toEqual(['x']);
    });

    it('should keep array as-is', () => {
      expect(normalizeToArray(['x', 'y'])).toEqual(['x', 'y']);
    });
  });

  describe('computeDefaultExpanded', () => {
    const items: Array<TreeViewItem> = [
      {
        children: [
          { id: 'a', name: 'a' },
          { children: [{ id: 'b1', name: 'b1' }, { id: 'b2', name: 'b2' }], id: 'b', name: 'b' },
        ],
        id: 'root',
        name: 'root',
      },
    ];

    it('should expand everything when defaultExpandAll is true', () => {
      const expanded = computeDefaultExpanded(items, { defaultExpandAll: true });
      expect(expanded.sort()).toEqual(['root', 'a', 'b', 'b1', 'b2'].sort());
    });

    it('should expand marked nodes from item.expanded', () => {
      const expanded = computeDefaultExpanded(
        [{ children: [{ id: 'a', name: 'a' }, { expanded: true, id: 'b', name: 'b' }], id: 'root', name: 'root' }],
        { defaultExpandAll: false },
      );
      expect(expanded).toEqual(['b']);
    });

    it('should expand ancestors of initially selected values (value)', () => {
      const expanded = computeDefaultExpanded(items, { defaultExpandAll: false, value: ['b2'] });
      // ancestors of b2 are root and b
      expect(expanded.sort()).toEqual(['root', 'b'].sort());
    });

    it('should expand ancestors of initially selected values (defaultValue)', () => {
      const expanded = computeDefaultExpanded(items, { defaultExpandAll: false, defaultValue: 'b1' });
      expect(expanded.sort()).toEqual(['root', 'b'].sort());
    });

    it('should be empty when nothing selected and no expanded flags', () => {
      const expanded = computeDefaultExpanded([{ id: 'x', name: 'x' }], { defaultExpandAll: false });
      expect(expanded).toEqual([]);
    });
  });

});

