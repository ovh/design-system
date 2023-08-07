import { Component, Host, h } from '@stencil/core';
import { TabulatorFull as Tabulator } from 'tabulator-tables';
import { data } from './data';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  shadow: true,
})
export class MyComponent {
  private grid: HTMLElement;
  private table: Tabulator;
  
  componentDidLoad() {
    this.table = new Tabulator(this.grid, {
      height: "100%",
      data,
      layout: "fitColumns",
      columns: [ //Define Table Columns
          { 
              title: "Select",
              formatter: "rowSelection",
              titleFormatter: "rowSelection",
              hozAlign: "center",
              headerSort: false, 
              cellClick: (_e, cell) => {
                  cell.getRow().toggleSelect();
              },
              width: '50',
          },
          { 
              title: "Author",
              field: "author",
              width: 150,
              editor: "input",
              headerFilter: "input",
          },
          { 
              title: "Title",
              field: "title",
              hozAlign: "left",
              editor: "input",
              headerFilter: "input",
          },
          {
              title: "Price",
              field: "price",
              sorter: (a, b) => {
                  const stringA = a.toString();
                  const stringB = b.toString();
                  const newA = stringA.substring(0, stringA.length - 1);
                  const newB = stringB.substring(0, stringB.length - 1);
                  return Number(newA) - Number(newB);
              },
              // editor: editPrice,
              headerFilter: "number"
          },
          // { 
          //     title: "Actions",
          //     cellClick: (_event, cell) => {
          //         cell.getRow().getCells().forEach((c) => {
          //             if (!c.getColumn().getDefinition().editor) {
          //                 return;
          //             }
          //             c?.edit();
          //         })
          //     },
          //     formatter: () => {
          //        return `
          //         <osds-button icon="pen" size="sm" circle color="primary">
          //             <osds-icon name="pen" size="xxs" color="primary"></osds-icon>
          //         </osds-button>
          //         `;
          //     },
          // }
      ],
      // groupBy:["author"],
      pagination: true,
      paginationSize: 6,
      paginationSizeSelector: [3, 6, 8, 10],
      movableColumns: true,
      paginationCounter: "rows",
      // footerElement: pagination,
      rowFormatter: (row) => {
         
          //create and style holder elements
         const holderEl = document.createElement("div");
         const tableEl = document.createElement("div");
  
         holderEl.style.boxSizing = "border-box";
         holderEl.style.padding = "10px 30px 10px 10px";
         holderEl.style.borderTop = "1px solid #333";
         holderEl.style.borderBottom = "1px solid #333";
         
  
         tableEl.style.border = "1px solid #333";
  
         holderEl.appendChild(tableEl);
         const serviceHistory = row.getData().serviceHistory;
         if (!serviceHistory) {
             return;
         }
         row.getElement().appendChild(holderEl);
  
         new Tabulator(tableEl, {
             layout: "fitColumns",
             data: serviceHistory,
             groupBy: ['engineer'],
             groupStartOpen: false,
             columns:[
              {title: "Date", field: "date", sorter: "date"},
              {title: "Engineer", field: "engineer"},
              {title: "Action", field: "actions"},
             ]
         })
      },
    });
    setTimeout(() => {
        // registerButtonSelectColumn(table);
        this.table.setPageSize(10);
        // pagination.totalItems = data.length;
        // pagination.totalPages = table.getPageMax();
        // pagination.addEventListener('odsPaginationChanged', (event) => {
        //     table.setPage(event.detail.current);
        // });
        // pagination.addEventListener('odsValueChange', (event) => {
        //     console.log('event', event)
        //     table.setPageSize(event.detail.value);
        // });
    }, 0);
  }
  
  render() {
    return (
      <Host>
        <div id="myGrid" ref={ (el) => this.grid = el }></div> 
      </Host>
    )
  }
}
