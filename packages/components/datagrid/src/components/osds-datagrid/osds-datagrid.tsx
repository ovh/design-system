import type { OdsDatagridAttribute, OdsDatagridColumn, OdsDatagridRow } from './interfaces/attributes';
import { Component, Element, Host, h, Prop, Watch } from '@stencil/core';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { ColumnComponent, TabulatorFull as Tabulator } from 'tabulator-tables';
import { OdsDatagridController } from './core/controller';
import { OdsLogger } from '@ovhcloud/ods-common-core';
import { ODS_ICON_SIZE, ODS_ICON_NAME } from '@ovhcloud/ods-component-icon'
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';

@Component({
  tag: 'osds-datagrid',
  styleUrl: 'osds-datagrid.scss',
  shadow: true,
})
export class OsdsDatagrid implements OdsDatagridAttribute {
  private readonly controler = new OdsDatagridController(this);
  readonly logger = new OdsLogger('OsdsDatagrid');
  private grid?: HTMLDivElement;
  private table?: Tabulator;

  @Element() el!: HTMLElement;

  /** @see OdsDatagridAttribute.columns */
  @Prop({ reflect: true }) public columns: OdsDatagridColumn[] | string = DEFAULT_ATTRIBUTE.columns;

  /** @see OdsDatagridAttribute.height */
  @Prop({ reflect: true }) public height: number = DEFAULT_ATTRIBUTE.height;

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

  private setColumnsHeight(): void {
    this.table?.getColumns().forEach(col => {
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
      height: this.height,
      data: rows,
      layout: 'fitColumns',
      renderVertical: 'virtual',
      renderHorizontal: 'virtual',
      placeholder: this.noResultLabel,
      rowHeight: this.rowHeight,
      columns: this.controler.getTabulatorColumns(columns),
      headerSortElement: (_column: ColumnComponent, dir: 'asc' | 'desc' | 'none') => {
        const getIcon = () => {
          if (dir === 'none') {
            return ODS_ICON_NAME.SORT_DOWN;
          }
          return dir === 'desc' ? ODS_ICON_NAME.SORT_UP : ODS_ICON_NAME.SORT_DOWN;
        }
        return `<osds-icon
          name="${getIcon()}"
          size="${ODS_ICON_SIZE.sm}"
          color="${ODS_THEME_COLOR_INTENT.primary}">
        </osds-icon>`
      },
    });
    this.table?.on('renderComplete', () => {
      this.setColumnsHeight();
    });
  }

  render(): JSX.Element {
    return (
      <Host>
       <div ref={ (el) => this.grid = el }></div>
      </Host>
    );
  }
}
