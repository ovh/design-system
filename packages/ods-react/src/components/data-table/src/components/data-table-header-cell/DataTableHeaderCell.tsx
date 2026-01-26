import { type Header, type SortDirection, flexRender } from '@tanstack/react-table';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type JSX } from 'react';
import { ICON_NAME, Icon } from '../../../../icon/src';
import { useDataTable } from '../../contexts/useDataTable';
import { getColumnStyle } from '../../controller/dataTable';
import style from './dataTableHeaderCell.module.scss';

interface DataTableHeaderCellProp<T> extends ComponentPropsWithRef<'th'> {
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
  className,
  header,
  ...props
}: DataTableHeaderCellProp<T>): JSX.Element => {
  const { stickyHeader, table } = useDataTable();
  const canSort = (table.options.enableSorting && header.column.getCanSort()) ?? false;
  const isSorted = header.column.getIsSorted();

  function handleClick(): void {
    if (canSort) {
      header.column.toggleSorting();
    }
  }

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
        ...getColumnStyle<T>(header.column, stickyHeader),
      }}>
      <div className={ style['data-table-header-cell__content'] }>
        { flexRender(header.column.columnDef.header, header.getContext()) }

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
