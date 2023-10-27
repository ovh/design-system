import type { OdsDatagridAttribute, OdsDatagridColumn, OdsDatagridRow } from './interfaces/attributes';

import { OdsLogger } from '@ovhcloud/ods-common-core';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { ODS_ICON_NAME, ODS_ICON_SIZE } from '@ovhcloud/ods-component-icon';
import { Component, Element, Host, Prop, Watch, h } from '@stencil/core';
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
  private table?: Tabulator;

  @Element() el!: HTMLElement;

  /** @see OdsDatagridAttribute.columns */
  @Prop({ reflect: true }) public columns: OdsDatagridColumn[] | string = DEFAULT_ATTRIBUTE.columns;

  /** @see OdsDatagridAttribute.rows */
  @Prop({ reflect: true }) public rows: OdsDatagridRow[] | string = DEFAULT_ATTRIBUTE.rows;

  /** @see OdsDatagridAttribute.isSelectable */
  @Prop({ reflect: true }) public isSelectable?: boolean = DEFAULT_ATTRIBUTE.isSelectable;

  /** @see OdsDatagridAttribute.noResultLabel */
  @Prop({ reflect: true }) public noResultLabel?: string = DEFAULT_ATTRIBUTE.noResultLabel;

  componentDidLoad(): void {
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
      height: '100%',
      layout: 'fitColumns',
      placeholder: this.noResultLabel,
      rowHeight: 28,
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
        <div ref={ (el): HTMLDivElement | undefined => this.grid = el }></div>
      </Host>
    );
  }
}
