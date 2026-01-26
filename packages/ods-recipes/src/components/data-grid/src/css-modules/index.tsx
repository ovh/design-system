import { BUTTON_SIZE, BUTTON_VARIANT, Button, Clipboard, ClipboardControl, ClipboardTrigger, DataTable, DataTableBody, type DataTableColumnDef, DataTableEmpty, DataTableHead, type DataTableRowSelectionState, ICON_NAME, INPUT_TYPE, Icon, Input, Menu, MenuContent, MenuGroup, MenuItem, MenuTrigger, PAGINATION_PER_PAGE, Pagination } from '@ovhcloud/ods-react';
import { type FormEvent, type JSX, useEffect, useState } from 'react';
import style from './index.module.scss';

type Person = {
  age: number;
  firstName: string;
  id: string;
  ip: string;
  lastName: string;
};

const paginationColumns: DataTableColumnDef<Person>[] = [
  { accessorKey: 'firstName', header: 'First Name', id: 'firstName' },
  { accessorKey: 'lastName', header: 'Last Name', id: 'lastName' },
  { accessorKey: 'age', header: 'Age', id: 'age' },
  {
    accessorKey: 'ip',
    cell: ({ cell }) => (
      <Clipboard value={ cell.getValue<string>() }>
        <ClipboardControl />
        <ClipboardTrigger />
      </Clipboard>
    ),
    header: 'IP Address',
    id: 'ip',
    sortingFn: (rowA, rowB, columnId): number => {
      const valueA = rowA.getValue<string>(columnId).split('.').map((num) => (`000${num}`).slice(-3) ).join('');
      const valueB = rowB.getValue<string>(columnId).split('.').map((num) => (`000${num}`).slice(-3) ).join('');

      return Number(valueA) - Number(valueB);
    },
  },
  {
    cell: () => (
      <div className={ style['data-grid__table__cell__action-menu'] }>
        <Menu>
          <MenuTrigger asChild>
            <Button
              size={ BUTTON_SIZE.sm }
              variant={ BUTTON_VARIANT.ghost }>
              <Icon name={ ICON_NAME.ellipsisVertical } />
            </Button>
          </MenuTrigger>

          <MenuContent withArrow>
            <MenuGroup>
              <MenuItem value="refresh-ip">
                Refresh IP address
              </MenuItem>

              <MenuItem value="send-email">
                Send an email
              </MenuItem>
            </MenuGroup>

            <MenuItem value="disable-account">
              Disable account
            </MenuItem>
          </MenuContent>
        </Menu>
      </div>
    ),
    header: 'Actions',
    id: 'menu',
    size: 50,
  },
];

async function fetchData(page: number, pageSize: number, query: string): Promise<{ total: number, users: Person[] }> {
  const url = `https://dummyjson.com/users${query ? `/search?q=${query}&` : '?'}limit=${pageSize}&skip=${pageSize * (page - 1)}&select=age,firstName,id,ip,lastName`;

  return fetch(url)
    .then((res) => res.json())
    .then(({ total, users }) => ({
      total,
      users,
    }));
}

const PAGE_LIMIT = PAGINATION_PER_PAGE.option_10;

const DataGrid = (): JSX.Element => {
  const [selection, setSelection] = useState<DataTableRowSelectionState>({});
  const [data, setData] = useState<Person[]>(Array(PAGE_LIMIT).fill({}));
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [pageSize, setPageSize] = useState(PAGE_LIMIT);
  const [total, setTotal] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const nbSelected = Object.keys(selection).length;

  useEffect(() => {
    updateData(currentPage, pageSize, searchQuery);
  }, [currentPage, pageSize, searchQuery]);

  function onSearch(event: FormEvent): void {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const query = formData.get('query') as string;

    setSearchQuery(query || '');
  }

  async function updateData(page: number, limit: number, query: string): Promise<void> {
    setIsLoading(true);

    return fetchData(page, limit, query).then(({ total, users }) => {
      setData(users);
      setTotal(total);

      // Simulate a bit of network latency
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    });
  }

  return (
    <div className={ style['data-grid'] }>
      <div className={ style['data-grid__toolbar'] }>
        <div className={ style['data-grid__toolbar__actions'] }>
          <Menu>
            <MenuTrigger asChild>
              <Button
                size={ BUTTON_SIZE.sm }
                variant={ BUTTON_VARIANT.outline }>
                Export in CSV <Icon name={ ICON_NAME.download } />
              </Button>
            </MenuTrigger>

            <MenuContent withArrow>
              <MenuItem
                onSelect={ () => alert('Export all in CSV file') }
                value="export-all">
                Export all
              </MenuItem>

              <MenuItem
                onSelect={ () => alert(`Export ${nbSelected} element(s) in CSV file`) }
                value="export-selection">
                Export selection ({ nbSelected })
              </MenuItem>
            </MenuContent>
          </Menu>
        </div>

        <div className={ style['data-grid__toolbar__search'] }>
          <Button
            onClick={ () => updateData(currentPage, pageSize, searchQuery) }
            size={ BUTTON_SIZE.sm }
            variant={ BUTTON_VARIANT.outline }>
            <Icon name={ ICON_NAME.refresh } />
          </Button>

          <form onSubmit={ onSearch }>
            <Input
              clearable
              name="query"
              type={ INPUT_TYPE.search } />
          </form>
        </div>
      </div>

      <div className={ style['data-grid__table'] }>
        <DataTable
          columns={ paginationColumns }
          data={ data }
          enableRowSelection
          getRowId={ (row) => row.id }
          loading={ isLoading }
          onRowSelectionChange={ setSelection }
          state={{
            rowSelection: selection,
          }}
          stickyHeader>
          <DataTableHead />

          <DataTableBody />

          <DataTableEmpty>
            No result found.
          </DataTableEmpty>
        </DataTable>
      </div>

      <Pagination
        className={ style['data-grid__pagination'] }
        onPageChange={ ({ page }) => setCurrentPage(page) }
        onPageSizeChange={ ({ pageSize }) => setPageSize(pageSize) }
        page={ currentPage }
        pageSize={ pageSize }
        totalItems={ total }
        withPageSizeSelector />
    </div>
  );
};

export {
  DataGrid,
};
