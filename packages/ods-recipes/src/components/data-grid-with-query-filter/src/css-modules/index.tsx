import {
  DataTable,
  DataTableBody,
  type DataTableColumnDef,
  DataTableEmpty,
  DataTableHead,
  Pagination,
  QueryFilter,
  QueryFilterClear,
  QueryFilterContent,
  QueryFilterControl,
  type QueryFilterItem,
  type QueryFilterOption,
  type QueryFilterProperty,
  QueryFilterTags,
  formatRelativeTime,
} from '@ovhcloud/ods-react';
import { type JSX, type ReactNode, useEffect, useState } from 'react';
import { type Instance, fetchFilterValues, search } from './fakeApi';
import style from './index.module.scss';

const PAGE_SIZE = 5;

const columns: DataTableColumnDef<Instance>[] = [
  { accessorKey: 'uuid', header: 'Instance ID', id: 'uuid' },
  { accessorKey: 'location', header: 'Location', id: 'location' },
  { accessorKey: 'model', header: 'Model', id: 'model' },
  { accessorKey: 'image', header: 'Image', id: 'image' },
  { accessorKey: 'backup', header: 'Backup Logic', id: 'backup' },
  {
    accessorKey: 'startDate',
    cell: ({ cell }): ReactNode => {
      const value = cell.getValue<Date>();
      if (value) {
        return formatRelativeTime(value, 'en');
      }
    },
    header: 'Running since',
    id: 'startDate',
  },
];

const queryFilterProperty = {
  label: 'Properties',
  options: [
    { label: 'Location', value: 'location' },
    { label: 'Model', value: 'model' },
    { label: 'Image', value: 'image' },
    { label: 'Backup Logic', value: 'backup' },
    { label: 'Running since', value: 'startDate' },
  ],
};

function getFilterOption(values: string[], operators?: QueryFilterItem[]): { operator: QueryFilterProperty, value: QueryFilterProperty } {
  return {
    operator: {
      label: 'Operators',
      options: operators || [
        { label: 'equals', value: '=' },
        { label: 'not equals', value: '!=' },
        { label: 'contains', value: 'has' },
      ],
    },
    value: {
      label: 'Values',
      options: values.map((value) => ({
        label: value,
        value: value,
      })),
    },
  };
}

const DataGridWithQueryFilter = (): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState<Instance[]>(Array(PAGE_SIZE).fill({}));
  const [filters, setFilters] = useState<string[][]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [queryFilterOption, setQueryFilterOption] = useState<QueryFilterOption>({});
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetchFilterValues()
      .then(({ backups, images, locations, models, timestamps }) => {
        setQueryFilterOption({
          backup: getFilterOption(backups),
          image: getFilterOption(images),
          location: getFilterOption(locations),
          model: getFilterOption(models),
          // status: getFilterOption(statuses),
          startDate: getFilterOption(timestamps, [
            { label: 'less than', value: '<' },
            { label: 'more than', value: '>' },
          ]),
        });
      });
  }, [setQueryFilterOption]);

  useEffect(() => {
    updateData(currentPage, filters);
  }, [currentPage, filters]);

  async function updateData(page: number, filters: string[][]): Promise<void> {
    setIsLoading(true);

    return search(page, PAGE_SIZE, filters).then(({ instances, total }) => {
      setData(instances);
      setTotal(total);
      setIsLoading(false);
    });
  }

  return (
    <div className={ style['data-grid-with-query-filter'] }>
      <QueryFilter
        className={ style['data-grid-with-query-filter__toolbar'] }
        filterOption={ queryFilterOption }
        filterProperty={ queryFilterProperty }
        onValueChange={ ({ value }) => setFilters(value) }>
        <QueryFilterControl className={ style['data-grid-with-query-filter__toolbar__control'] } />

        <QueryFilterContent />

        {
          filters.length > 0 &&
          <div className={ style['data-grid-with-query-filter__toolbar__filters'] }>
            <QueryFilterTags className={ style['data-grid-with-query-filter__toolbar__filters__tags'] } />

            <QueryFilterClear>
              Clear filters
            </QueryFilterClear>
          </div>
        }
      </QueryFilter>

      <div className={ style['data-grid-with-query-filter__table'] }>
        <DataTable
          columns={ columns }
          data={ data }
          getRowId={ (row) => row.uuid }
          loading={ isLoading }
          stickyHeader>
          <DataTableHead />

          <DataTableBody />

          <DataTableEmpty>
            No result found.
          </DataTableEmpty>
        </DataTable>
      </div>

      <Pagination
        className={ style['data-grid-with-query-filter__pagination'] }
        onPageChange={ ({ page }) => setCurrentPage(page) }
        page={ currentPage }
        pageSize={ PAGE_SIZE }
        totalItems={ total } />
    </div>
  );
};

export {
  DataGridWithQueryFilter,
};
