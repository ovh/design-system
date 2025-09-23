import { createTreeCollection } from '@ark-ui/react/tree-view';
import { type KeyboardEvent, type RefObject } from 'react';
import { type TreeViewItem } from '../contexts/useTreeView';

function createCollectionFromItems(items: Array<TreeViewItem>): ReturnType<typeof createTreeCollection<TreeViewItem>> {
  return createTreeCollection<TreeViewItem>({
    isNodeDisabled: (node) => node.disabled ?? false,
    nodeToString: (node) => node.name,
    nodeToValue: (node) => node.id,
    rootNode: { children: items, id: 'ROOT', name: 'ROOT' },
  });
}

function normalizeSelectedOnChange(selected: string | string[], multiple?: boolean): string | string[] {
  if (Array.isArray(selected)) {
    return multiple ? selected : (selected[0] ?? '');
  }
  return multiple ? [selected] : selected;
}

function toggleNodeCheckboxOnSpace<T extends Element>(
  e: KeyboardEvent<T>,
  multiple: boolean = false,
  isDisabled: boolean,
  checkboxRef: RefObject<HTMLSpanElement | null>,
): void {
  if (!multiple || isDisabled) {
    return;
  }
  if (e.key === ' ') {
    e.preventDefault();
    e.stopPropagation();
    checkboxRef.current?.click();
  }
}

export {
  createCollectionFromItems,
  normalizeSelectedOnChange,
  toggleNodeCheckboxOnSpace,
};
