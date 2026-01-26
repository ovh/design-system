import { type Column } from '@tanstack/react-table';
import { type CSSProperties } from 'react';

function getCellZIndex(isPinned: boolean, stickyHeader: boolean): number {
  if (isPinned) {
    return 2;
  }

  return stickyHeader ? 1 : 0;
}

function getColumnStyle<T>(column: Column<T>, stickyHeader = false): CSSProperties {
  const isPinned = column.getIsPinned();
  const isLastLeftPinnedColumn = isPinned === 'left' && column.getIsLastColumn('left');
  const isFirstRightPinnedColumn = isPinned === 'right' && column.getIsFirstColumn('right');
  const boxShadow = `${isLastLeftPinnedColumn ? '-' : ''}2px 0 0px 0px var(--ods-table-border-color) inset`;

  return {
    boxShadow: (isLastLeftPinnedColumn || isFirstRightPinnedColumn) ? boxShadow : undefined,
    left: isPinned === 'left' ? `${column.getStart('left')}px` : undefined,
    position: isPinned ? 'sticky' : 'relative',
    right: isPinned === 'right' ? `${column.getAfter('right')}px` : undefined,
    width: column.getSize(),
    zIndex: getCellZIndex(!!isPinned, stickyHeader),
    ...(stickyHeader ? { position: 'sticky', top: 0 } : {}),
  };
}

export {
  getColumnStyle,
};
