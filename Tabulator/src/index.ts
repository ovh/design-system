import { TabulatorFull as Tabulator } from 'tabulator-tables';
import  "tabulator-tables/dist/css/tabulator.min.css";
import "./style.scss";
import '@ovhcloud/ods-theme-blue-jeans/index.css'
import { defineCustomElements as defineCustomElementsOsdsButton } from '@ovhcloud/ods-stencil/components/button/custom-elements-bundle'
import { defineCustomElements as defineCustomElementsOsdsIcon } from '@ovhcloud/ods-stencil/components/icon/custom-elements-bundle'
import { defineCustomElements as defineCustomElementsOsdsPagination, OsdsPagination } from '@ovhcloud/ods-stencil/components/pagination/custom-elements-bundle'
import { defineCustomElements as defineCustomElementsOsdsSelect } from '@ovhcloud/ods-stencil/components/select/custom-elements-bundle'
import { data } from './data';

defineCustomElementsOsdsButton();
defineCustomElementsOsdsIcon();
defineCustomElementsOsdsPagination();
defineCustomElementsOsdsSelect();

function registerButtonSelectColumn(table: Tabulator) {
    const list = document.getElementById("listColumn")
    const selectColumnButton = document.getElementById("selectColumnButton");
    
    for (const column of table.getColumns()) {
        const definition = column.getDefinition();

        if (!definition.field) {
            continue;
        }
        const checkBox = document.createElement('input');
        checkBox.type = 'checkbox';
        checkBox.id = definition.field;
        checkBox.checked = definition.visible ?? true;
        checkBox.addEventListener("change", (c) => {
            const currentCheckbox = c.target as HTMLInputElement;
            console.log('currentCheckbox', currentCheckbox)
            table.setColumns(table.getColumns().map((col) => ({
                ...col.getDefinition(),
                visible: col.getDefinition().field === currentCheckbox.id ? currentCheckbox.checked : col.getDefinition().visible,
            })));
        })
        const label = document.createElement('label');
        label.innerHTML = definition.title.toString();
        label.appendChild(checkBox);
        list.appendChild(label);
    }
    selectColumnButton.addEventListener('click', () => {
        const listStyle = getComputedStyle(list)
        list.style.display = listStyle.display === 'flex' ? 'none' : 'flex';  
    });
}

function renderGrid() {
    const pagination = document.createElement('osds-pagination') as OsdsPagination;
    pagination.current = 1;
    const table = new Tabulator("#myGrid", {
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
                editor: editPrice,
                headerFilter: "number"
            },
            { 
                title: "Actions",
                cellClick: (_event, cell) => {
                    cell.getRow().getCells().forEach((c) => {
                        if (!c.getColumn().getDefinition().editor) {
                            return;
                        }
                        c?.edit();
                    })
                },
                formatter: () => {
                    return `
                    <osds-button icon="pen" size="sm" circle color="primary">
                        <osds-icon name="pen" size="xxs" color="primary"></osds-icon>
                    </osds-button>
                    `;
                },
            }
        ],
        // groupBy:["author"],
        pagination: true,
        // paginationSize: 6,
        // paginationSizeSelector: [3, 6, 8, 10],
        movableColumns: true,
        paginationCounter: "rows",
        footerElement: pagination,
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
    
           const subTable = new Tabulator(tableEl, {
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
        registerButtonSelectColumn(table);
        table.setPageSize(10);
        pagination.totalItems = data.length;
        pagination.totalPages = table.getPageMax();
        pagination.addEventListener('odsPaginationChanged', (event) => {
            table.setPage(event.detail.current);
        });
        pagination.addEventListener('odsValueChange', (event) => {
            console.log('event', event)
            table.setPageSize(event.detail.value);
        });
    }, 0);
}

function editPrice(cell, onRendered, success, cancel, editorParams){
    //cell - the cell component for the editable cell
    //onRendered - function to call when the editor has been rendered
    //success - function to call to pass thesuccessfully updated value to Tabulator
    //cancel - function to call to abort the edit and return to a normal cell
    //editorParams - params object passed into the editorParams column definition property

    //create and style editor
    var editor = document.createElement("input");

    editor.setAttribute("type", "text");

    //create and style input
    editor.style.padding = "3px";
    editor.style.width = "100%";
    editor.style.boxSizing = "border-box";

    //Set value of editor to the current value of the cell
    const value = cell.getValue()
    editor.value = value.substring(0, value.length - 1);

    //set focus on the select box when the editor is selected (timeout allows for editor to be added to DOM)
    onRendered(() => {
        editor.focus();
        editor.style.width = "100%";
    });

    //when the value has been set, trigger the cell to update
    function successFunc() {
        success(editor.value + '€');
    }

    editor.addEventListener("change", successFunc);
    editor.addEventListener("blur", successFunc);

    //return the editor element
    return editor;
};

renderGrid();