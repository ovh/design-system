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
  readonly logger = new OdsLogger('OsdsPhoneNumber');
  private grid?: HTMLDivElement;
  private table?: Tabulator;

  @Element() el!: HTMLElement;

  /** @see OdsDatagridAttribute.columns */
  @Prop({ reflect: true }) public columns: OdsDatagridColumn[] | string = DEFAULT_ATTRIBUTE.columns;

  /** @see OdsDatagridAttribute.rows */
  @Prop({ reflect: true }) public rows: OdsDatagridRow[] | string = DEFAULT_ATTRIBUTE.rows;

  componentDidLoad(): void {
    if (!this.grid) {
      return;
    }
    const columns = this.controler.getColumns();
    const rows = this.controler.getRows();

    const tabulatorColumns = columns.map((column) => this.controler.toTabulatorColumn(column));
    this.table = new Tabulator(this.grid, {
      height: "100%",
      data: rows,
      layout: "fitColumns",
      columns: tabulatorColumns,
    });
  }

  @Watch('rows')
  onChangeRows(): void { 
    const rows = this.controler.getRows();
    this.table?.setData(rows);
  }

  render(): JSX.Element {
    return (
      <Host>
       <div ref={ (el) => this.grid = el }></div>
      </Host>
    );
  }
}
