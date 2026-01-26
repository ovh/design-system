import { type Header, type SortDirection, flexRender } from '@tanstack/react-table';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type JSX, type ReactNode } from 'react';
import { ICON_NAME, Icon } from '../../../../icon/src';
import { useDataTable } from '../../contexts/useDataTable';
import { getPinnedColumnStyle } from '../../controller/dataTable';
import style from './dataTableHeaderCell.module.scss';

interface DataTableHeaderCellProp<T> extends ComponentPropsWithRef<'th'> {
  children?: ReactNode;
  header: Header<T, unknown>;
}

function getSortIconName(sortDirection: false | SortDirection): ICON_NAME {
  switch (sortDirection) {
    case 'asc':
      return ICON_NAME.arrowUp;
    case 'desc':
      return ICON_NAME.arrowDown;
    default:
      return ICON_NAME.arrowUpDown;
  }
}

const DataTableHeaderCell = <T,>({
  children,
  className,
  header,
  ...props
}: DataTableHeaderCellProp<T>): JSX.Element => {
  const { table } = useDataTable();
  const canSort = (table.options.enableSorting && header.column.getCanSort()) ?? false;
  const isSorted = header.column.getIsSorted();

  function handleClick(): void {
    if (canSort) {
      header.column.toggleSorting();
    }
  }

  const content = children ?? (
    !header.isPlaceholder
      ? flexRender(header.column.columnDef.header, header.getContext())
      : null
  );

  return (
    <th
      aria-sort={ isSorted ? (isSorted === 'asc' ? 'ascending' : 'descending') : undefined } // eslint-disable-line no-nested-ternary
      className={ classNames(
        style['data-table-header-cell'],
        { [style['data-table-header-cell--sortable']]: canSort },
        className,
      )}
      onClick={ handleClick }
      { ...props }
      style={{
        ...props.style,
        ...getPinnedColumnStyle<T>(header.column),
      }}>
      <div className={ style['data-table-header-cell__content'] }>
        { content }

        {
          canSort &&
          <Icon
            className={ classNames(
              style['data-table-header-cell__sort-icon'],
              { [style['data-table-header-cell__sort-icon--sorted']]: isSorted },
            )}
            name={ getSortIconName(isSorted) } />
        }
      </div>
    </th>
  );
};

DataTableHeaderCell.displayName = 'DataTableHeaderCell';

export {
  DataTableHeaderCell,
  type DataTableHeaderCellProp,
};
