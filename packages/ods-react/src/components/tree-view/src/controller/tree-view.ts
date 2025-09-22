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

// TODO remove
function computeDefaultExpanded<CustomData = Record<string, never>>(
  items: Array<TreeViewItem<CustomData>>,
  options: { defaultExpandAll: boolean, value?: string[], defaultValue?: string[] },
): string[] {
  const expandedIds = new Set<string>();

  function collectExpanded(nodes?: Array<TreeViewItem<CustomData>>): void {
    if (!nodes?.length) {
      return;
    }
    for (const node of nodes) {
      if (options.defaultExpandAll || node.expanded) {
        expandedIds.add(node.id);
      }
      collectExpanded(node.children);
    }
  }

  function expandAncestorsOfSelected(
    nodes: Array<TreeViewItem<CustomData>> | undefined,
    parentChain: string[] = [],
    selected: Set<string>,
  ): void {
    if (!nodes?.length) {
      return;
    }
    for (const node of nodes) {
      if (selected.has(node.id)) {
        for (const ancestorId of parentChain) {
          expandedIds.add(ancestorId);
        }
      }
      expandAncestorsOfSelected(
        node.children,
        [...parentChain, node.id],
        selected,
      );
    }
  }

  const initialSelected = new Set<string>(options.value ?? options.defaultValue ?? []);

  collectExpanded(items);
  if (initialSelected.size > 0) {
    expandAncestorsOfSelected(items, [], initialSelected);
  }

  return Array.from(expandedIds);
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
  computeDefaultExpanded,
  createCollectionFromItems,
  normalizeSelectedOnChange,
  toggleNodeCheckboxOnSpace,
};
