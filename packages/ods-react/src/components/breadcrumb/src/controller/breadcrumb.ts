function isItemCollapsed(index: number, total: number, nbBefore: number, nbAfter: number): boolean {
  return index >= Math.max(1, nbBefore) && index < (total - Math.max(1, nbAfter));
}

function getFirstCollapsedIdx(
  count: number,
  nbItemsBeforeEllipsis: number,
  nbItemsAfterEllipsis: number,
  needEllipsis: boolean,
): number | null {
  if (
    !needEllipsis || count <= nbItemsBeforeEllipsis + nbItemsAfterEllipsis + 1
  ) {
    return null;
  }
  for (let idx = 0; idx < count; idx++) {
    if (isItemCollapsed(idx, count, nbItemsBeforeEllipsis, nbItemsAfterEllipsis)) {
      return idx;
    }
  }
  return null;
}

export {
  isItemCollapsed,
  getFirstCollapsedIdx,
};
