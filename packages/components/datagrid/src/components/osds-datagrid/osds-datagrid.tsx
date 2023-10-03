import type { OdsDatagridAttribute, OdsDatagridColumn, OdsDatagridRow } from './interfaces/attributes';
import { Component, Element, Host, h, Prop, Watch } from '@stencil/core';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { TabulatorFull as Tabulator } from 'tabulator-tables';
import { OdsDatagridController } from './core/controller';
import { OdsLogger } from '@ovhcloud/ods-common-core';

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

  /** @see OdsDatagridAttribute.rows */
  @Prop({ reflect: true }) public rows: OdsDatagridRow[] | string = DEFAULT_ATTRIBUTE.rows;

  /** @see OdsDatagridAttribute.isSelectable */
  @Prop({ reflect: true }) public isSelectable?: boolean = DEFAULT_ATTRIBUTE.isSelectable;

  componentDidLoad(): void {
    if (!this.grid) {
      return;
    }
    const columns = this.controler.getColumns();
    const rows = this.controler.getRows();

    this.table = new Tabulator(this.grid, {
      height: "100%",
      data: rows,
      layout: "fitColumns",
      columns: this.controler.getTabulatorColumns(columns),
    });
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
  }

  render(): JSX.Element {
    return (
      <Host>
       <div ref={ (el) => this.grid = el }></div>
      </Host>
    );
  }
}
