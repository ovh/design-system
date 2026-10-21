import { type TreeViewNodeState, createTreeCollection } from '@ark-ui/react/tree-view';
import { type KeyboardEvent, type RefObject } from 'react';
import { type TreeViewItem } from '../contexts/useTreeView';

type NodeCheckedState = TreeViewNodeState['checked'];

function createCollectionFromItems(items: Array<TreeViewItem>): ReturnType<typeof createTreeCollection<TreeViewItem>> {
  return createTreeCollection<TreeViewItem>({
    isNodeDisabled: (node) => node.disabled ?? false,
    nodeToString: (node) => node.name,
    nodeToValue: (node) => node.id,
    rootNode: { children: items, id: 'ROOT', name: 'ROOT' },
  });
}

function getNodeAriaChecked(checked: NodeCheckedState): 'true' | 'false' | 'mixed' {
  if (checked === 'indeterminate') {
    return 'mixed';
  }
  return checked ? 'true' : 'false';
}

function getNodeCheckedDataState(checked: NodeCheckedState): 'checked' | 'unchecked' | 'indeterminate' {
  if (checked === 'indeterminate') {
    return 'indeterminate';
  }
  return checked ? 'checked' : 'unchecked';
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

/**
 * Props to spread on a vendor part to drop some of its attributes: the vendor keeps its own value
 * when a prop is `undefined`, `null` removes the attribute.
 */
function withoutVendorAttributes(...names: string[]): Record<string, undefined> {
  return Object.fromEntries(names.map((name) => [name, null])) as unknown as Record<string, undefined>;
}

export {
  createCollectionFromItems,
  getNodeAriaChecked,
  getNodeCheckedDataState,
  normalizeSelectedOnChange,
  toggleNodeCheckboxOnSpace,
  withoutVendorAttributes,
};
