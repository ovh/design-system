import type { TreeViewItem } from '../components/tree-view-node/TreeViewNode';
import type { KeyboardEvent, RefObject } from 'react';
import { createTreeCollection } from '@ark-ui/react/tree-view';

function createCollectionFromItems<TCustom = Record<string, never>>(items: Array<TreeViewItem<TCustom>>): ReturnType<typeof createTreeCollection<TreeViewItem<TCustom>>> {
  return createTreeCollection<TreeViewItem<TCustom>>({
    isNodeDisabled: (node) => Boolean((node as TreeViewItem<TCustom>).disabled),
    nodeToString: (node) => node?.name ?? '',
    nodeToValue: (node) => String(node?.id ?? ''),
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

function computeDefaultExpanded<TCustom = Record<string, never>>(
  items: Array<TreeViewItem<TCustom>>,
  options: { defaultExpandAll: boolean, value?: string | string[], defaultValue?: string | string[] },
): string[] {
  const expandedIds = new Set<string>();

  function collectExpanded(nodes?: Array<TreeViewItem<TCustom>>): void {
    if (!nodes?.length) {
      return;
    }
    for (const node of nodes) {
      if (options.defaultExpandAll || (node as unknown as { expanded?: boolean }).expanded) {
        expandedIds.add(String(node.id));
      }
      collectExpanded(node.children as Array<TreeViewItem<TCustom>> | undefined);
    }
  }

  function expandAncestorsOfSelected(
    nodes: Array<TreeViewItem<TCustom>> | undefined,
    parentChain: string[] = [],
    selected: Set<string>,
  ): void {
    if (!nodes?.length) {
      return;
    }
    for (const node of nodes) {
      const nodeId = String(node.id);
      if (selected.has(nodeId)) {
        for (const ancestorId of parentChain) {
          expandedIds.add(ancestorId);
        }
      }
      expandAncestorsOfSelected(
        node.children as Array<TreeViewItem<TCustom>> | undefined,
        [...parentChain, nodeId],
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
  const initialSelected = new Set<string>((controlled ?? uncontrolled ?? []).map(String));

  collectExpanded(items);
  if (initialSelected.size > 0) {
    expandAncestorsOfSelected(items, [], initialSelected);
  }

  return Array.from(expandedIds);
}

function getCheckboxKeydownHandler(params: { multiple: boolean, checkboxRef: RefObject<HTMLLabelElement> }) {
  return function handleKeyDown(event: KeyboardEvent<HTMLDivElement>): void {
    if (!params.multiple) {
      return;
    }
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
      params.checkboxRef.current?.click();
    }
  };
}

export {
  computeDefaultExpanded,
  createCollectionFromItems,
  getCheckboxKeydownHandler,
  normalizeSelectedOnChange,
  normalizeToArray,
};

