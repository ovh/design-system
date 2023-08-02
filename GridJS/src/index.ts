import { Cell, Grid, h, html, Row, useSelector, useState, useStore } from "gridjs";
import { TColumn } from "gridjs/dist/src/types";
import "gridjs/dist/theme/mermaid.css";
import { RowSelection } from "gridjs/plugins/selection";

function registerButtonSelectColumn(grid: Grid) {
    const list = document.getElementById("listColumn")
    const selectColumnButton = document.getElementById("selectColumnButton");
    for (const column of grid.config.columns) {
        const typeColumn = (column as TColumn);
        if (!typeColumn.name) {
            continue;
        }
        const checkBox = document.createElement('input');
        checkBox.type = 'checkbox';
        checkBox.id = typeColumn.id;
        checkBox.addEventListener("change", (c) => {
            grid.config.plugin.remove("pagination");
            grid.config.plugin.remove("search");
            const currentCheckbox = c.target as HTMLInputElement;
            grid.updateConfig({
                columns: grid.config.columns.map((col) => ({
                    ...col as TColumn,
                    hidden: (col as TColumn).id === currentCheckbox.id ? currentCheckbox.checked : (col as TColumn).hidden,
                }))
            }).forceRender();
        })
        const label = document.createElement('label');
        label.innerHTML = typeColumn.name.toString();
        label.appendChild(checkBox);
        list.appendChild(label);
    }
    selectColumnButton.addEventListener('click', () => {
        const listStyle = getComputedStyle(list)
        list.style.display = listStyle.display === 'flex' ? 'none' : 'flex';  
    });
}

function EditPlugin (props: { row?: Row; cell?: Cell, column: any }) {
    console.log('event.column.data', props);
    const isEdit = false;
    if (isEdit) {
        return h('input', {
            type: 'text',
            value: props.column.data,
        });
    }
    return props.column.data;
}

function renderGrid() {
    const style = {
        th: {
            'background-color': 'hsla(192.9deg, 100%, 87.3%, 1)',
            color: '#000',
            'text-align': 'center'
        },
        td: {
            'text-overflow': 'ellipsis',
            overflow: 'hidden',
            'white-space': 'nowrap',
        },
        footer: {
            border: 'solid 1px #e5e7eb',
            'box-shadow': 'none',
        }
    };
    const grid = new Grid({
        columns: [
        {
            id: 'checkbox',
            name: '',
            plugin: {
                component: RowSelection
            }
        },{
            id: 'author',
            name: 'Author',
            sort: true,
            width: '30%',
            plugin: {
                component: EditPlugin,
            }
        }, {
            id: 'title',
            name: 'Title',
            sort: true,
            width: '30%'
        }, {
            id: 'price',
            name: 'Price',
            sort: {
                compare: (a, b) => {
                    const stringA = a.toString();
                    const stringB = b.toString();
                    const newA = stringA.substring(0, stringA.length - 1);
                    const newB = stringB.substring(0, stringB.length - 1);
                    return Number(newA) - Number(newB);
                }
            },
            width: '10%'
        }, {
            id: 'buy',
            name: 'Buy',
            formatter: (_, row) => html(`<button>Buy ${ row.cells[2].data}</a>`)
          }],
        data: [
            { author: 'Le roi n\'avait pas riLe roi n\'avait pas riLe roi n\'avait pas riLe roi n\'avait pas riLe roi n\'avait pas riLe roi n\'avait pas riLe roi n\'avait pas ri', title: 'Guillaume Meurice', price: '6€'},
            { author: 'Maupassant', title: 'Bel ami', price: '9€'},
            { author: 'Maupassant', title: 'Le horla', price: '15€'},
            { author: 'Gustave Flaubert', title: 'Madame de bovary', price: '12€'},
            { author: 'Émile Zola', title: 'Germinal', price: '5€'},
            { author: 'Stendhal', title: 'Germinal', price: '20€'},
        ],
        autoWidth: true,
        pagination: true,
        style,
        search: true,
    })
    grid.render(document.getElementById("myGrid"));
    registerButtonSelectColumn(grid);
      
}

renderGrid();
