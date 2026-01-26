import { type Column } from '@tanstack/react-table';
import { type CSSProperties } from 'react';

// TODO apply expected style
function getPinnedColumnStyle<T>(column: Column<T>): CSSProperties {
  const isPinned = column.getIsPinned();
  // const isLastLeftPinnedColumn =
  //   isPinned === 'left' && column.getIsLastColumn('left')
  // const isFirstRightPinnedColumn =
  //   isPinned === 'right' && column.getIsFirstColumn('right')

  return {
    // boxShadow: isLastLeftPinnedColumn
    //   ? '-4px 0 4px -4px gray inset'
    //   : isFirstRightPinnedColumn
    //     ? '4px 0 4px -4px gray inset'
    //     : undefined,
    left: isPinned === 'left' ? `${column.getStart('left')}px` : undefined,
    // opacity: isPinned ? 0.95 : 1,
    position: 'sticky',//isPinned ? 'sticky' : 'relative',
    right: isPinned === 'right' ? `${column.getAfter('right')}px` : undefined,
    width: column.getSize(),
    zIndex: isPinned ? 1 : 0,
  };
}

export {
  getPinnedColumnStyle,
};
