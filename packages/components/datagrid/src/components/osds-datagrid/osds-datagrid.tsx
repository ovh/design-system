import type { OdsDatagridAttribute, OdsDatagridColumn, OdsDatagridRow } from './interfaces/attributes';
import type { OdsCheckboxCheckedChangeEventDetail } from '@ovhcloud/ods-component-checkbox';

import { OdsLogger } from '@ovhcloud/ods-common-core';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { ODS_ICON_NAME, ODS_ICON_SIZE } from '@ovhcloud/ods-component-icon';
import { Component, Element, Host, Listen, Prop, State, Watch, h } from '@stencil/core';
import { ColumnComponent, TabulatorFull as Tabulator } from 'tabulator-tables';

import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { OdsDatagridController } from './core/controller';

@Component({
  shadow: true,
  styleUrl: 'osds-datagrid.scss',
  tag: 'osds-datagrid',
})
export class OsdsDatagrid implements OdsDatagridAttribute {
  private readonly controler = new OdsDatagridController(this);
  readonly logger = new OdsLogger('OsdsDatagrid');
  private grid?: HTMLDivElement;
  table?: Tabulator;

  @Element() el!: HTMLElement;

  /** @see OdsDatagridAttribute.columns */
  @Prop({ reflect: true }) public columns: OdsDatagridColumn[] | string = DEFAULT_ATTRIBUTE.columns;

  @Prop({ reflect: true }) public height: number = DEFAULT_ATTRIBUTE.height;

  /** @see OdsDatagridAttribute.hideableColumns */
  @Prop({ mutable: true, reflect: true }) public hideableColumns?: string[] = DEFAULT_ATTRIBUTE.hideableColumns;

  /** @see OdsDatagridAttribute.isSelectable */
  @Prop({ reflect: true }) public isSelectable?: boolean = DEFAULT_ATTRIBUTE.isSelectable;

  /** @see OdsDatagridAttribute.noResultLabel */
  @Prop({ reflect: true }) public noResultLabel?: string = DEFAULT_ATTRIBUTE.noResultLabel;

  /** @see OdsDatagridAttribute.rowHeight */
  @Prop({ reflect: true }) public rowHeight?: number = DEFAULT_ATTRIBUTE.rowHeight;

  /** @see OdsDatagridAttribute.rows */
  @Prop({ reflect: true }) public rows: OdsDatagridRow[] | string = DEFAULT_ATTRIBUTE.rows;

  componentDidLoad(): void {
    this.controler.validateAttributes();
    this.initTable();
  }

  @Watch('rowHeight')
  onChangeRowHeight(): void {
    if (!this.table || !this.rowHeight) {
      return;
    }
    this.table.options.rowHeight = this.rowHeight;
    this.setColumnsHeight();
    this.table.rowManager.reRenderInPosition();
  }

  @Watch('height')
  onChangeHeight(): void {
    this.table?.setHeight(this.height);
  }

  @Watch('noResultLabel')
  onChangeNoResultLabel(): void {
    this.initTable();
  }

  @Watch('rows')
  onChangeRows(): void {
    const rows = this.controler.getRows();
    this.table?.setData(rows);
  }

  @Watch('isSelectable')
  @Watch('columns')
  onChangeColumns(): void {
    const columns = this.controler.getColumns();
    this.table?.setColumns(this.controler.getTabulatorColumns(columns));
    this.setColumnsHeight();
  }

  @Listen('odsCheckedChange')
  handlerCheckedChange({ detail }: CustomEvent<OdsCheckboxCheckedChangeEventDetail>): void {
    const column = this.table?.getColumn(detail.value);
    if (detail.checked) {
      column?.show();
      this.hideableColumns = this.hideableColumns?.filter((col) => col !== detail.value);
    } else {
      column?.hide();
      this.hideableColumns?.push(detail.value);
    }
    this.table?.redraw();
  }

  private setColumnsHeight(): void {
    this.table?.getColumns().forEach((col) => {
      col.getElement().style.height = `${this.rowHeight}px`;
    });
  }

  private initTable(): void {
    if (!this.grid) {
      return;
    }
    const columns = this.controler.getColumns();
    const rows = this.controler.getRows();

    this.table = new Tabulator(this.grid, {
      columns: this.controler.getTabulatorColumns(columns),
      data: rows,
      headerSortElement: (_column: ColumnComponent, dir: 'asc' | 'desc' | 'none'): string => {
        function getIcon(): ODS_ICON_NAME {
          if (dir === 'none') {
            return ODS_ICON_NAME.SORT_DOWN;
          }
          return dir === 'desc' ? ODS_ICON_NAME.SORT_UP : ODS_ICON_NAME.SORT_DOWN;
        }
        return `<osds-icon
        name="${getIcon()}"
        size="${ODS_ICON_SIZE.sm}"
        color="${ODS_THEME_COLOR_INTENT.primary}">
      </osds-icon>`;
      },
      height: this.height,
      layout: 'fitColumns',
      placeholder: this.noResultLabel,
      renderHorizontal: 'virtual',
      renderVertical: 'virtual',
      rowHeight: this.rowHeight,
    });
    this.table?.on('renderComplete', () => {
      this.setColumnsHeight();
    });
  }

  render(): JSX.Element {
    return (
      <Host>
        <div ref={ (el): HTMLDivElement | undefined => this.grid = el }></div>
      </Host>
    );
  }
}
