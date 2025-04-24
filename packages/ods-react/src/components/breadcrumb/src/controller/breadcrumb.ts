function isItemCollapsed(index: number, total: number, nbBefore: number, nbAfter: number): boolean {
  return index >= Math.max(1, nbBefore) && index < (total - Math.max(1, nbAfter));
}

export {
  isItemCollapsed,
};
