import type { TreeViewItem } from '../components/tree-view-node/TreeViewNode';
import { createTreeCollection } from '@ark-ui/react/tree-view';

function createCollectionFromItems<CustomData = Record<string, never>>(items: Array<TreeViewItem<CustomData>>): ReturnType<typeof createTreeCollection<TreeViewItem<CustomData>>> {
  return createTreeCollection<TreeViewItem<CustomData>>({
    isNodeDisabled: (node) => node.disabled ?? false,
    nodeToString: (node) => node.name,
    nodeToValue: (node) => node.id,
    rootNode: { children: items, id: 'ROOT', name: 'ROOT' },
  });
}

function normalizeSelectedOnChange(selected: string | string[], multiple: boolean): string | string[] {
  if (Array.isArray(selected)) {
    return multiple ? selected : (selected[0] ?? '');
  }
  return multiple ? [selected] : selected;
}

function normalizeToArray(value?: string | string[]): string[] | undefined {
  if (Array.isArray(value)) {
    return value;
  }
  if (typeof value === 'string') {
    return [value];
  }
  return undefined;
}

function computeDefaultExpanded<CustomData = Record<string, never>>(
  items: Array<TreeViewItem<CustomData>>,
  options: { defaultExpandAll: boolean, value?: string | string[], defaultValue?: string | string[] },
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

  let controlled: string[] | undefined;
  if (Array.isArray(options.value)) {
    controlled = options.value;
  } else if (typeof options.value === 'string') {
    controlled = [options.value];
  }

  let uncontrolled: string[] | undefined;
  if (Array.isArray(options.defaultValue)) {
    uncontrolled = options.defaultValue;
  } else if (typeof options.defaultValue === 'string') {
    uncontrolled = [options.defaultValue];
  }
  const initialSelected = new Set<string>(controlled ?? uncontrolled ?? []);

  collectExpanded(items);
  if (initialSelected.size > 0) {
    expandAncestorsOfSelected(items, [], initialSelected);
  }

  return Array.from(expandedIds);
}

export {
  computeDefaultExpanded,
  createCollectionFromItems,
  normalizeSelectedOnChange,
  normalizeToArray,
};

