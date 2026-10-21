import { type Header, type SortDirection, flexRender } from '@tanstack/react-table';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type JSX, useId } from 'react';
import { useI18n } from '../../../../../hooks/useI18n';
import { ICON_NAME, Icon } from '../../../../icon/src';
import { DATA_TABLE_I18N, TRANSLATION } from '../../constants/data-table-i18n';
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
  const { i18n, locale, stickyHeader, table } = useDataTable();
  const { translate } = useI18n(TRANSLATION, locale, i18n);
  const descriptionId = useId();
  const canSort = (table.options.enableSorting && header.column.getCanSort()) ?? false;
  const isSorted = header.column.getIsSorted();
  const content = flexRender(header.column.columnDef.header, header.getContext());

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
      {
        canSort ? (
          <>
            {/* Its clicks, keyboard ones included, bubble to the cell handler, which also covers the padding */}
            <button
              aria-describedby={ descriptionId }
              className={ classNames(
                style['data-table-header-cell__content'],
                style['data-table-header-cell__sort-button'],
              )}
              type="button">
              { content }

              <Icon
                aria-hidden="true"
                className={ classNames(
                  style['data-table-header-cell__sort-icon'],
                  { [style['data-table-header-cell__sort-icon--sorted']]: isSorted },
                )}
                name={ getSortIconName(isSorted) } />
            </button>

            {/* A description, not part of the name: the column header name is read in every cell of the column */}
            <span
              hidden
              id={ descriptionId }>
              { translate(DATA_TABLE_I18N.sortableColumn) }
            </span>
          </>
        ) : (
          <div className={ style['data-table-header-cell__content'] }>
            { content }
          </div>
        )
      }
    </th>
  );
};

DataTableHeaderCell.displayName = 'DataTableHeaderCell';

export {
  DataTableHeaderCell,
  type DataTableHeaderCellProp,
};
